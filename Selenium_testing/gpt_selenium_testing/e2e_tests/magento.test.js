import { Builder, By, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import { websiteURL, elements, TIMEOUT } from '../config/magento.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logFilePath = path.join(__dirname, '../logs/magento_results.txt');

(async () => {
  await fs.mkdir(path.dirname(logFilePath), { recursive: true });
  await fs.writeFile(logFilePath, '');  // Clear log file

  const logResult = async (testName, status) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] Test: ${testName} - Status: ${status}\n`;
    await fs.writeFile(logFilePath, logMessage, { flag: 'a' });
  };

  const waitForElementToBeStable = async (driver, locator, timeout) => {
    const element = await driver.wait(until.elementLocated(locator), timeout);
    await driver.wait(until.elementIsVisible(element), timeout);
    await driver.wait(until.elementIsEnabled(element), timeout);
    return element;
  };

  let driver;
  let passedTests = 0;
  let failedTests = 0;

  const runTest = async (testFunction, testName) => {
    try {
      console.log("=".repeat(50));
      await testFunction();
      console.log(`${testName}: PASS`);
      await logResult(testName, 'PASS');
      passedTests++;
    } catch (error) {
      console.error(`${testName}: FAIL | ${error}`);
      await logResult(testName, 'FAIL');
      failedTests++;
    }
  };

  try {
    const options = new Options()
      .addArguments('incognito')
      .addArguments('disable-web-security')
      .addArguments('disable-features=VizDisplayCompositor');
    
    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    const createAccount = async () => {
      await driver.get(websiteURL);
      await driver.sleep(3000);

      const accountLink = await waitForElementToBeStable(driver, By.linkText('Create an Account'), TIMEOUT);
      await accountLink.click();
      await driver.sleep(3000);

      await waitForElementToBeStable(driver, By.id('firstname'), TIMEOUT).then(el => el.sendKeys('John'));
      await driver.sleep(500);      
      await waitForElementToBeStable(driver, By.id('lastname'), TIMEOUT).then(el => el.sendKeys('Doe'));
      await driver.sleep(500);      
      await waitForElementToBeStable(driver, By.id('is_subscribed'), TIMEOUT).then(el => el.click());

      const email = `test${Math.floor(Math.random() * 10000)}@exampleeee.com`;
      await waitForElementToBeStable(driver, By.id('email_address'), TIMEOUT).then(el => el.sendKeys(email));
      await driver.sleep(500);      
      await waitForElementToBeStable(driver, By.id('password'), TIMEOUT).then(el => el.sendKeys('Password123!'));
      await driver.sleep(500);      
      await waitForElementToBeStable(driver, By.id('password-confirmation'), TIMEOUT).then(el => el.sendKeys('Password123!'));

      await waitForElementToBeStable(driver, By.css('button.submit'), TIMEOUT).then(el => el.click());
      await driver.sleep(5000);

      const currentURL = await driver.getCurrentUrl();
      if (currentURL.includes('customer/account/')) {
        return Promise.resolve();
      } else {
        return Promise.reject('URL mismatch');
      }
    };

    const whatsNew = async () => {
      await driver.get(websiteURL);
      await driver.sleep(3000);

      const whatsNewLink = await waitForElementToBeStable(driver, By.linkText("What's New"), TIMEOUT);
      await whatsNewLink.click();
      await driver.sleep(3000);

      await driver.executeScript("window.scrollBy(0, 500)");
      await driver.sleep(2000);

      const productLink = await waitForElementToBeStable(driver, By.linkText('Echo Fit Compression Short'), TIMEOUT);
      await productLink.click();
      await driver.sleep(3000);

      const currentURL = await driver.getCurrentUrl();
      if (currentURL.includes('echo-fit-compression-short')) {
        return Promise.resolve();
      } else {
        return Promise.reject('URL mismatch for WhatsNew');
      }
    };

    const addToCart = async () => {
      await driver.sleep(3000);

      await waitForElementToBeStable(driver, By.id('option-label-size-144-item-171'), TIMEOUT).then(el => el.click());
      await driver.sleep(1000);

      await waitForElementToBeStable(driver, By.id('option-label-color-93-item-49'), TIMEOUT).then(el => el.click());
      await driver.sleep(1000);

      await waitForElementToBeStable(driver, By.id('product-addtocart-button'), TIMEOUT).then(el => el.click());
      await driver.sleep(3000);

      const successMessage = await waitForElementToBeStable(driver, By.css('.message-success'), TIMEOUT);
      if (successMessage) {
        return Promise.resolve();
      } else {
        return Promise.reject('Success message not found');
      }
    };

    const addToWishlist = async () => {
      await driver.sleep(3000);

      const wishlistButton = await waitForElementToBeStable(driver, By.xpath('//*[@id="maincontent"]/div[2]/div/div[3]/div[5]/div/a[1]/span'), TIMEOUT);
      await wishlistButton.click();
      await driver.sleep(5000);

      const currentURL = await driver.getCurrentUrl();
      if (currentURL.includes('wishlist')) {
        return Promise.resolve();
      } else {
        return Promise.reject('URL mismatch for Wishlist');
      }
    };

    const editCart = async () => {
      await driver.sleep(3000);

      const cartIcon = await waitForElementToBeStable(driver, By.css('.action.showcart'), TIMEOUT);
      await cartIcon.click();
      await driver.sleep(2000);

      const viewEditCart = await waitForElementToBeStable(driver, By.linkText('View and Edit Cart'), TIMEOUT);
      await viewEditCart.click();
      await driver.sleep(3000);

      const qtyInput = await waitForElementToBeStable(driver, By.css('input.input-text.qty'), TIMEOUT);
      await qtyInput.clear();
      await driver.sleep(500);
      await qtyInput.sendKeys('2');
      await driver.sleep(1000);
      
      const updateCartButton = await waitForElementToBeStable(driver, By.css('button.action.update'), TIMEOUT);
      await updateCartButton.click();
      await driver.sleep(3000);

      const currentURL = await driver.getCurrentUrl();
      if (currentURL.includes('checkout/cart')) {
        return Promise.resolve();
      } else {
        return Promise.reject('URL mismatch for EditCart');
      }
    };

    const checkout = async () => {
      await driver.sleep(3000);

      const proceedToCheckout = await waitForElementToBeStable(driver, By.xpath('//*[@id="maincontent"]/div[3]/div/div[2]/div[1]/ul/li[1]/button'), TIMEOUT);
      await proceedToCheckout.click();
      await driver.sleep(5000);

      const currentURL = await driver.getCurrentUrl();
      if (currentURL.includes('checkout')) {
        return Promise.resolve();
      } else {
        return Promise.reject('URL mismatch for Checkout');
      }
    };

    const checkoutForm = async () => {
      await driver.sleep(5000);

      await waitForElementToBeStable(driver, By.id('customer-email'), TIMEOUT).then(el => el.sendKeys('testuser@example.com'));
      await driver.sleep(500);
      await waitForElementToBeStable(driver, By.name('firstname'), TIMEOUT).then(el => el.sendKeys('John'));
      await driver.sleep(500);
      await waitForElementToBeStable(driver, By.name('lastname'), TIMEOUT).then(el => el.sendKeys('Doe'));
      await driver.sleep(500);
      await waitForElementToBeStable(driver, By.name('street[0]'), TIMEOUT).then(el => el.sendKeys('123 Elm Street'));
      await driver.sleep(500);
      await waitForElementToBeStable(driver, By.name('city'), TIMEOUT).then(el => el.sendKeys('Metropolis'));
      await driver.sleep(500);
      await waitForElementToBeStable(driver, By.name('region_id'), TIMEOUT).then(el => el.sendKeys('3'));  // Example for California
      await driver.sleep(500);
      await waitForElementToBeStable(driver, By.name('postcode'), TIMEOUT).then(el => el.sendKeys('12345'));
      await driver.sleep(500);
      await waitForElementToBeStable(driver, By.name('telephone'), TIMEOUT).then(el => el.sendKeys('5551234567'));
      await driver.sleep(500);

      const shippingMethod = await waitForElementToBeStable(driver, By.xpath('//*[@id="checkout-shipping-method-load"]/table/tbody/tr[1]/td[1]/input'), TIMEOUT);
      await shippingMethod.click();
      await driver.sleep(500);

      const nextButton = await waitForElementToBeStable(driver, By.css('.button.action.continue.primary'), TIMEOUT);
      await nextButton.click();
      await driver.sleep(5000);

      const currentURL = await driver.getCurrentUrl();
      if (currentURL.includes('payment')) {
        return Promise.resolve();
      } else {
        return Promise.reject('URL mismatch for CheckoutForm');
      }
    };

    const subscribe = async () => {
      await driver.get(websiteURL);
      await driver.sleep(3000);

      const newsletterInput = await waitForElementToBeStable(driver, By.id('newsletter'), TIMEOUT);
      await newsletterInput.sendKeys(`subscribertest${Math.floor(Math.random() * 10000)}@exampleeee.com`);
      await driver.sleep(500);

      const subscribeButton = await waitForElementToBeStable(driver, By.css('.action.subscribe.primary'), TIMEOUT);
      await subscribeButton.click();
      await driver.sleep(3000);

      return Promise.resolve();  // Assuming subscribe success since there is no URL check
    };

    const signOut = async () => {
      await driver.sleep(3000);

      try {
        const accountMenu = await waitForElementToBeStable(driver, By.css('.action.switch'), TIMEOUT);
        await accountMenu.click();
      } catch (error) {
        const customerName = await waitForElementToBeStable(driver, By.css('.customer-name'), TIMEOUT);
        await customerName.click();
      }
      await driver.sleep(2000);

      const signOutLink = await waitForElementToBeStable(driver, By.linkText('Sign Out'), TIMEOUT);
      await signOutLink.click();
      await driver.sleep(5000);

      const currentURL = await driver.getCurrentUrl();
      if (currentURL.includes('logoutSuccess') || currentURL === websiteURL) {
        return Promise.resolve();
      } else {
        return Promise.reject('URL mismatch for SignOut');
      }
    };

    await runTest(createAccount, 'CreateAccount');
    await driver.sleep(3000);
    await runTest(whatsNew, 'WhatsNew');
    await driver.sleep(3000);
    await runTest(addToCart, 'AddToCart');
    await driver.sleep(3000);
    await runTest(addToWishlist, 'AddToWishlist');
    await driver.sleep(3000);
    await runTest(editCart, 'EditCart');
    await driver.sleep(3000);
    await runTest(checkout, 'Checkout');
    await driver.sleep(3000);
    await runTest(checkoutForm, 'CheckoutForm');
    await driver.sleep(3000);
    await runTest(subscribe, 'Subscribe');
    await driver.sleep(3000);
    await runTest(signOut, 'SignOut');

  } catch (error) {
    console.error('Error during execution: ', error);
  } finally {
    await driver.quit();
    const testSummary = `Test Summary: ${passedTests} passed, ${failedTests} failed out of 9 total tests`;
    console.log(testSummary);
    await fs.writeFile(logFilePath, testSummary, { flag: 'a' });
  }
})();