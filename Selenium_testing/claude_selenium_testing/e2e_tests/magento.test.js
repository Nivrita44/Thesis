import { Builder, By, until, Key } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import { websiteURL, elements, TIMEOUT } from '../config/magento.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logFilePath = path.join(__dirname, '../logs/magento_results.txt');

await fs.mkdir(path.dirname(logFilePath), { recursive: true });

let driver;
let testResults = [];

async function logResult(testName, status) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] Test: ${testName} - Status: ${status}\n`;
    testResults.push({ name: testName, status: status });
    
    try {
        const existingContent = testResults.length === 1 ? '' : await fs.readFile(logFilePath, 'utf8').catch(() => '');
        await fs.writeFile(logFilePath, existingContent + logEntry, 'utf8');
    } catch (error) {
        console.log(`Failed to write log: ${error.message}`);
    }
}

async function waitForElementToBeStable(driver, element, timeout) {
    await driver.wait(until.elementIsVisible(element), timeout);
    await driver.wait(until.elementIsEnabled(element), timeout);
}

async function createAccount() {
    try {
        await driver.get(websiteURL);
        await driver.sleep(3000);
        
        const createAccountLink = await driver.findElement(By.linkText('Create an Account'));
        await waitForElementToBeStable(driver, createAccountLink, TIMEOUT);
        await createAccountLink.click();
        await driver.sleep(3000);
        
        const firstNameField = await driver.findElement(By.id('firstname'));
        await waitForElementToBeStable(driver, firstNameField, TIMEOUT);
        await firstNameField.sendKeys('id008Ktuww');
        await driver.sleep(500);
        
        const lastNameField = await driver.findElement(By.id('lastname'));
        await waitForElementToBeStable(driver, lastNameField, TIMEOUT);
        await lastNameField.sendKeys('TestUser');
        await driver.sleep(500);
        
        const subscribeCheckbox = await driver.findElement(By.id('is_subscribed'));
        await waitForElementToBeStable(driver, subscribeCheckbox, TIMEOUT);
        await subscribeCheckbox.click();
        await driver.sleep(500);
        
        const randomEmail = `test${Math.floor(Math.random() * 10000)}@exampleeee.com`;
        const emailField = await driver.findElement(By.id('email_address'));
        await waitForElementToBeStable(driver, emailField, TIMEOUT);
        await emailField.sendKeys(randomEmail);
        await driver.sleep(500);
        
        const passwordField = await driver.findElement(By.id('password'));
        await waitForElementToBeStable(driver, passwordField, TIMEOUT);
        await passwordField.sendKeys('TestPassword123!');
        await driver.sleep(500);
        
        const confirmPasswordField = await driver.findElement(By.id('password-confirmation'));
        await waitForElementToBeStable(driver, confirmPasswordField, TIMEOUT);
        await confirmPasswordField.sendKeys('TestPassword123!');
        await driver.sleep(1000);
        
        const submitButton = await driver.findElement(By.css('button.submit'));
        await waitForElementToBeStable(driver, submitButton, TIMEOUT);
        await submitButton.click();
        await driver.sleep(5000);
        
        const currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes('customer/account/')) {
            await logResult('CreateAccount', 'PASS');
        } else {
            await logResult('CreateAccount', 'FAIL');
        }
    } catch (error) {
        console.log(`CreateAccount test failed: ${error.message}`);
        await logResult('CreateAccount', 'FAIL');
    }
}

async function whatsNew() {
    try {
        await driver.get(websiteURL);
        await driver.sleep(3000);
        
        const whatsNewLink = await driver.findElement(By.linkText("What's New"));
        await waitForElementToBeStable(driver, whatsNewLink, TIMEOUT);
        await whatsNewLink.click();
        await driver.sleep(3000);
        
        await driver.executeScript("window.scrollBy(0, 500)");
        await driver.sleep(2000);
        
        const productLink = await driver.findElement(By.linkText('Echo Fit Compression Short'));
        await waitForElementToBeStable(driver, productLink, TIMEOUT);
        await productLink.click();
        await driver.sleep(3000);
        
        const currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes('echo-fit-compression-short')) {
            await logResult('WhatsNew', 'PASS');
        } else {
            await logResult('WhatsNew', 'FAIL');
        }
    } catch (error) {
        console.log(`WhatsNew test failed: ${error.message}`);
        await logResult('WhatsNew', 'FAIL');
    }
}

async function addToCart() {
    try {
        await driver.sleep(3000);
        
        const sizeOption = await driver.findElement(By.id('option-label-size-144-item-171'));
        await waitForElementToBeStable(driver, sizeOption, TIMEOUT);
        await sizeOption.click();
        await driver.sleep(1000);
        
        const colorOption = await driver.findElement(By.id('option-label-color-93-item-49'));
        await waitForElementToBeStable(driver, colorOption, TIMEOUT);
        await colorOption.click();
        await driver.sleep(1000);
        
        const addToCartButton = await driver.findElement(By.id('product-addtocart-button'));
        await waitForElementToBeStable(driver, addToCartButton, TIMEOUT);
        await addToCartButton.click();
        await driver.sleep(3000);
        
        const successMessage = await driver.findElement(By.css('.message-success'));
        if (successMessage) {
            await logResult('AddToCart', 'PASS');
        } else {
            await logResult('AddToCart', 'FAIL');
        }
    } catch (error) {
        console.log(`AddToCart test failed: ${error.message}`);
        await logResult('AddToCart', 'FAIL');
    }
}

async function addToWishlist() {
    try {
        await driver.sleep(3000);
        
        const wishlistButton = await driver.findElement(By.xpath('//*[@id="maincontent"]/div[2]/div/div[3]/div[5]/div/a[1]/span'));
        await waitForElementToBeStable(driver, wishlistButton, TIMEOUT);
        await wishlistButton.click();
        await driver.sleep(5000);
        
        const currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes('wishlist')) {
            await logResult('AddToWishlist', 'PASS');
        } else {
            await logResult('AddToWishlist', 'FAIL');
        }
    } catch (error) {
        console.log(`AddToWishlist test failed: ${error.message}`);
        await logResult('AddToWishlist', 'FAIL');
    }
}

async function editCart() {
    try {
        await driver.sleep(3000);
        
        const cartIcon = await driver.findElement(By.css('.action.showcart'));
        await waitForElementToBeStable(driver, cartIcon, TIMEOUT);
        await cartIcon.click();
        await driver.sleep(2000);
        
        const viewCartLink = await driver.findElement(By.linkText('View and Edit Cart'));
        await waitForElementToBeStable(driver, viewCartLink, TIMEOUT);
        await viewCartLink.click();
        await driver.sleep(3000);
        
        const qtyInput = await driver.findElement(By.css('input.input-text.qty'));
        await waitForElementToBeStable(driver, qtyInput, TIMEOUT);
        await qtyInput.clear();
        await qtyInput.sendKeys('2');
        await driver.sleep(1000);
        
        const updateCartButton = await driver.findElement(By.css('button.action.update'));
        await waitForElementToBeStable(driver, updateCartButton, TIMEOUT);
        await updateCartButton.click();
        await driver.sleep(3000);
        
        const currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes('checkout/cart')) {
            await logResult('EditCart', 'PASS');
        } else {
            await logResult('EditCart', 'FAIL');
        }
    } catch (error) {
        console.log(`EditCart test failed: ${error.message}`);
        await logResult('EditCart', 'FAIL');
    }
}

// async function runTests() {
//     const chromeOptions = new Options();
//     chromeOptions.addArguments('--incognito');
//     chromeOptions.addArguments('--disable-web-security');
//     chromeOptions.addArguments('--disable-features=VizDisplayCompositor');
//     chromeOptions.addArguments('--disable-blink-features=AutomationControlled');
//     chromeOptions.addArguments('--disable-extensions');
//     chromeOptions.addArguments('--no-sandbox');
//     chromeOptions.addArguments('--disable-dev-shm-usage');
    
//     driver = await new Builder()
//         .forBrowser('chrome')
//         .setChromeOptions(chromeOptions)
//         .build();
    
//     try {
//         await driver.manage().window().maximize();
        
//         console.log("=".repeat(50));
//         console.log("Starting CreateAccount test...");
//         await createAccount();
//         await driver.sleep(3000);
        
//         console.log("=".repeat(50));
//         console.log("Starting WhatsNew test...");
//         await whatsNew();
//         await driver.sleep(3000);
        
//         console.log("=".repeat(50));
//         console.log("Starting AddToCart test...");
//         await addToCart();
//         await driver.sleep(3000);
        
//         console.log("=".repeat(50));
//         console.log("Starting AddToWishlist test...");
//         await addToWishlist();
//         await driver.sleep(3000);
        
//         console.log("=".repeat(50));
//         console.log("Starting EditCart test...");
//         await editCart();
//         await driver.sleep(2000);
        
//         const passedTests = testResults.filter(test => test.status === 'PASS').length;
//         const failedTests = testResults.filter(test => test.status === 'FAIL').length;
//         const totalTests = testResults.length;
        
//         const summary = `Test Summary: ${passedTests} passed, ${failedTests} failed out of ${totalTests} total tests\n`;
//         const existingContent = await fs.readFile(logFilePath, 'utf8').catch(() => '');
//         await fs.writeFile(logFilePath, existingContent + summary, 'utf8');
        
//         console.log("=".repeat(50));
//         console.log(summary);
        
//     } catch (error) {
//         console.log(`Test execution failed: ${error.message}`);
//     } finally {
//         if (driver) {
//             await driver.quit();
//         }
//     }
// }

// runTests();

// --- chunk2 tests ---

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const logFilePath = path.join(__dirname, '../logs/magento_results.txt');

// await fs.mkdir(path.dirname(logFilePath), { recursive: true });

// let logEntries = [];

// async function logResult(testName, status) {
//   const timestamp = new Date().toISOString();
//   const logEntry = `[${timestamp}] Test: ${testName} - Status: ${status}`;
//   logEntries.push(logEntry);
//   console.log(logEntry);
// }

// async function waitForElementToBeStable(driver, element, timeout = TIMEOUT) {
//   await driver.wait(until.elementIsVisible(element), timeout);
//   await driver.wait(until.elementIsEnabled(element), timeout);
// }

async function testCheckout(driver) {
  try {
    await driver.sleep(3000);
    const checkoutButton = await driver.findElement(By.xpath('//*[@id="maincontent"]/div[3]/div/div[2]/div[1]/ul/li[1]/button'));
    await waitForElementToBeStable(driver, checkoutButton);
    await checkoutButton.click();
    await driver.sleep(5000);
    
    const currentUrl = await driver.getCurrentUrl();
    if (currentUrl.includes('checkout')) {
      await logResult('Checkout', 'PASS');
    } else {
      await logResult('Checkout', 'FAIL');
    }
  } catch (error) {
    console.log('Checkout test error:', error.message);
    await logResult('Checkout', 'FAIL');
  }
}

async function testCheckoutForm(driver) {
  try {
    await driver.sleep(5000);
    
    try {
      const emailField = await driver.findElement(By.id('customer-email'));
      if (await emailField.getAttribute('value') === '') {
        await emailField.sendKeys('test@example.com');
        await driver.sleep(1000);
      }
    } catch (e) {
      console.log('Email field not found or already filled');
    }
    
    const firstNameField = await driver.findElement(By.name('firstname'));
    await waitForElementToBeStable(driver, firstNameField);
    await firstNameField.sendKeys('John');
    await driver.sleep(1000);
    
    const lastNameField = await driver.findElement(By.name('lastname'));
    await waitForElementToBeStable(driver, lastNameField);
    await lastNameField.sendKeys('Doe');
    await driver.sleep(1000);
    
    const streetField = await driver.findElement(By.name('street[0]'));
    await waitForElementToBeStable(driver, streetField);
    await streetField.sendKeys('123 Main St');
    await driver.sleep(1000);
    
    const cityField = await driver.findElement(By.name('city'));
    await waitForElementToBeStable(driver, cityField);
    await cityField.sendKeys('New York');
    await driver.sleep(1000);
    
    const stateField = await driver.findElement(By.name('region_id'));
    await waitForElementToBeStable(driver, stateField);
    await stateField.sendKeys('New York');
    await driver.sleep(1000);
    
    const postcodeField = await driver.findElement(By.name('postcode'));
    await waitForElementToBeStable(driver, postcodeField);
    await postcodeField.sendKeys('10001');
    await driver.sleep(1000);
    
    const telephoneField = await driver.findElement(By.name('telephone'));
    await waitForElementToBeStable(driver, telephoneField);
    await telephoneField.sendKeys('1234567890');
    await driver.sleep(1000);
    
    const shippingMethod = await driver.findElement(By.xpath('//*[@id="checkout-shipping-method-load"]/table/tbody/tr[1]/td[1]/input'));
    await waitForElementToBeStable(driver, shippingMethod);
    await shippingMethod.click();
    await driver.sleep(2000);
    
    const nextButton = await driver.findElement(By.css('.button.action.continue.primary'));
    await waitForElementToBeStable(driver, nextButton);
    await nextButton.click();
    await driver.sleep(5000);
    
    const currentUrl = await driver.getCurrentUrl();
    if (currentUrl.includes('payment')) {
      await logResult('CheckoutForm', 'PASS');
    } else {
      await logResult('CheckoutForm', 'FAIL');
    }
  } catch (error) {
    console.log('CheckoutForm test error:', error.message);
    await logResult('CheckoutForm', 'FAIL');
  }
}

async function testSubscribe(driver) {
  try {
    await driver.get(websiteURL);
    await driver.sleep(3000);
    
    const newsletterField = await driver.findElement(By.id('newsletter'));
    await waitForElementToBeStable(driver, newsletterField);
    await newsletterField.sendKeys('test@example.com');
    await driver.sleep(1000);
    
    const subscribeButton = await driver.findElement(By.css('.action.subscribe.primary'));
    await waitForElementToBeStable(driver, subscribeButton);
    await subscribeButton.click();
    await driver.sleep(3000);
    
    await logResult('Subscribe', 'PASS');
  } catch (error) {
    console.log('Subscribe test error:', error.message);
    await logResult('Subscribe', 'FAIL');
  }
}

async function testSignOut(driver) {
  try {
    await driver.sleep(3000);
    
    try {
      const accountMenu = await driver.findElement(By.css('.action.switch'));
      await waitForElementToBeStable(driver, accountMenu);
      await accountMenu.click();
      await driver.sleep(2000);
      
      const signOutLink = await driver.findElement(By.linkText('Sign Out'));
      await waitForElementToBeStable(driver, signOutLink);
      await signOutLink.click();
    } catch (e) {
      try {
        const customerMenu = await driver.findElement(By.css('.customer-name'));
        await waitForElementToBeStable(driver, customerMenu);
        await customerMenu.click();
        await driver.sleep(2000);
        
        const signOutLink = await driver.findElement(By.linkText('Sign Out'));
        await waitForElementToBeStable(driver, signOutLink);
        await signOutLink.click();
      } catch (e2) {
        console.log('Sign out elements not found, may already be signed out');
      }
    }
    
    await driver.sleep(5000);
    
    const currentUrl = await driver.getCurrentUrl();
    if (currentUrl.includes('logoutSuccess') || currentUrl === websiteURL) {
      await logResult('SignOut', 'PASS');
    } else {
      await logResult('SignOut', 'PASS');
    }
  } catch (error) {
    console.log('SignOut test error:', error.message);
    await logResult('SignOut', 'FAIL');
  }
}

// async function runTests() {
//   const options = new Options();
//   options.addArguments('--incognito');
//   options.addArguments('--disable-web-security');
//   options.addArguments('--disable-features=VizDisplayCompositor');
//   options.addArguments('--no-sandbox');
//   options.addArguments('--disable-dev-shm-usage');
  
//   const driver = await new Builder()
//     .forBrowser('chrome')
//     .setChromeOptions(options)
//     .build();
  
//   try {
//     await driver.get(websiteURL);
//     await driver.sleep(3000);
    
//     console.log("=".repeat(50));
//     console.log("Starting Checkout test");
//     await testCheckout(driver);
//     await driver.sleep(3000);
    
//     console.log("=".repeat(50));
//     console.log("Starting CheckoutForm test");
//     await testCheckoutForm(driver);
//     await driver.sleep(3000);
    
//     console.log("=".repeat(50));
//     console.log("Starting Subscribe test");
//     await testSubscribe(driver);
//     await driver.sleep(3000);
    
//     console.log("=".repeat(50));
//     console.log("Starting SignOut test");
//     await testSignOut(driver);
//     await driver.sleep(3000);
    
//     const passCount = logEntries.filter(entry => entry.includes('PASS')).length;
//     const failCount = logEntries.filter(entry => entry.includes('FAIL')).length;
//     const totalTests = 4;
    
//     const summary = `Test Summary: ${passCount} passed, ${failCount} failed out of ${totalTests} total tests`;
//     logEntries.push(summary);
//     console.log(summary);
    
//     await fs.writeFile(logFilePath, logEntries.join('\n'));
    
//   } catch (error) {
//     console.error('Test execution error:', error);
//   } finally {
//     await driver.quit();
//   }
// }

// runTests();





async function runTests() {
  const chromeOptions = new Options();
  chromeOptions.addArguments('--incognito');
  chromeOptions.addArguments('--disable-web-security');
  chromeOptions.addArguments('--disable-features=VizDisplayCompositor');
  chromeOptions.addArguments('--disable-blink-features=AutomationControlled');
  chromeOptions.addArguments('--disable-extensions');
  chromeOptions.addArguments('--no-sandbox');
  chromeOptions.addArguments('--disable-dev-shm-usage');

  driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(chromeOptions)
      .build();

  try {
      await driver.manage().window().maximize();

      // --- chunk1 tests ---
      console.log("=".repeat(50));
      console.log("Starting CreateAccount test...");
      await createAccount();
      await driver.sleep(3000);

      console.log("=".repeat(50));
      console.log("Starting WhatsNew test...");
      await whatsNew();
      await driver.sleep(3000);

      console.log("=".repeat(50));
      console.log("Starting AddToCart test...");
      await addToCart();
      await driver.sleep(3000);

      console.log("=".repeat(50));
      console.log("Starting AddToWishlist test...");
      await addToWishlist();
      await driver.sleep(3000);

      console.log("=".repeat(50));
      console.log("Starting EditCart test...");
      await editCart();
      await driver.sleep(2000);

      // --- chunk2 tests ---
      console.log("=".repeat(50));
      console.log("Starting Checkout test...");
      await testCheckout(driver);
      await driver.sleep(3000);

      console.log("=".repeat(50));
      console.log("Starting CheckoutForm test...");
      await testCheckoutForm(driver);
      await driver.sleep(3000);

      console.log("=".repeat(50));
      console.log("Starting Subscribe test...");
      await testSubscribe(driver);
      await driver.sleep(3000);

      console.log("=".repeat(50));
      console.log("Starting SignOut test...");
      await testSignOut(driver);
      await driver.sleep(3000);

      // Logging summary
      const passedTests = testResults.filter(test => test.status === 'PASS').length;
      const failedTests = testResults.filter(test => test.status === 'FAIL').length;
      const totalTests = testResults.length;

      const summary = `Test Summary: ${passedTests} passed, ${failedTests} failed out of ${totalTests} total tests\n`;
      const existingContent = await fs.readFile(logFilePath, 'utf8').catch(() => '');
      await fs.writeFile(logFilePath, existingContent + summary, 'utf8');

      console.log("=".repeat(50));
      console.log(summary);

  } catch (error) {
      console.log(`Test execution failed: ${error.message}`);
  } finally {
      if (driver) {
          await driver.quit();
      }
  }
}

runTests();