import { Builder, By, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { websiteURL, usernamePrefix, password, productName, TIMEOUT } from '../config/config.js';

let username = "";

const logResult = async (testName, status) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] Test: ${testName} - Status: ${status}\n`;
  await fs.writeFile('../logs/test_results.txt', logMessage, { flag: 'a' });
};

const waitForElementToBeStable = async (driver, element, timeout) => {
  await driver.wait(until.elementIsVisible(element), timeout);
  await driver.wait(until.elementIsEnabled(element), timeout);
};

const testRegister = async (driver) => {
  const testName = 'Register';
  try {
    await driver.get(websiteURL);
    await driver.sleep(3000);

    await driver.findElement(By.id('signin2')).click();
    await driver.sleep(2000);

    username = `${usernamePrefix}${Math.floor(Math.random() * 1000)}`;
    console.log(`Generated username: ${username}`);

    await driver.findElement(By.id('sign-username')).clear();
    await driver.findElement(By.id('sign-username')).sendKeys(username);
    await driver.sleep(500);

    await driver.findElement(By.id('sign-password')).clear();
    await driver.findElement(By.id('sign-password')).sendKeys(password);
    await driver.sleep(500);

    await driver.findElement(By.xpath("//button[contains(text(),'Sign up')]")).click();

    const alert = await driver.wait(until.alertIsPresent(), TIMEOUT);
    const alertText = await (await alert).getText();
    console.log(`Registration alert: ${alertText}`);
    await driver.sleep(1000);
    await alert.accept();
    await driver.sleep(3000);

    await logResult(testName, 'PASS');
    console.log(`✅ ${testName} completed successfully!`);
  } catch (error) {
    console.error(`❌ Error in ${testName}: ${error}`);
    await logResult(testName, 'FAIL');
  }
};

const testLogin = async (driver) => {
  const testName = 'Login';
  try {
    await driver.get(websiteURL);
    await driver.sleep(4000);

    await driver.findElement(By.id('login2')).click();
    await driver.sleep(2000);

    console.log(`Logging in with username: ${username}`);
    await driver.findElement(By.id('loginusername')).clear();
    await driver.findElement(By.id('loginusername')).sendKeys(username);
    await driver.sleep(500);

    await driver.findElement(By.id('loginpassword')).clear();
    await driver.findElement(By.id('loginpassword')).sendKeys(password);
    await driver.sleep(500);

    await driver.findElement(By.xpath("//button[contains(text(),'Log in')]")).click();
    await driver.sleep(3000);

    const userElement = await driver.wait(until.elementLocated(By.id('nameofuser')), TIMEOUT);
    await waitForElementToBeStable(driver, userElement, TIMEOUT);

    if (await userElement.isDisplayed()) {
      await logResult(testName, 'PASS');
      console.log(`✅ ${testName} completed successfully!`);
    } else {
      throw new Error("Username display not found.");
    }
  } catch (error) {
    console.error(`❌ Error in ${testName}: ${error}`);
    await logResult(testName, 'FAIL');
  }
};

const testAddToCart = async (driver) => {
  const testName = 'AddToCart';
  try {
    await driver.get(websiteURL);
    await driver.sleep(3000);

    await driver.executeScript("window.scrollBy(0, 400)");
    await driver.findElement(By.linkText(productName)).click();
    await driver.sleep(3000);

    await driver.findElement(By.xpath("//a[text()='Add to cart']")).click();

    const alert = await driver.wait(until.alertIsPresent(), TIMEOUT);
    const alertText = await (await alert).getText();
    console.log(`Add to cart alert: ${alertText}`);
    await driver.sleep(1000);
    await alert.accept();
    await driver.sleep(3000);

    await logResult(testName, 'PASS');
    console.log(`✅ ${testName} completed successfully!`);
  } catch (error) {
    console.error(`❌ Error in ${testName}: ${error}`);
    await logResult(testName, 'FAIL');
  }
};

const testVerifyCart = async (driver) => {
  const testName = 'VerifyCart';
  try {
    await driver.findElement(By.id('cartur')).click();
    await driver.sleep(4000);

    const cartItems = await driver.findElements(By.css('#tbodyid tr'));
    if (cartItems.length > 0) {
      const productElement = await driver.findElement(By.xpath(`//td[contains(text(),'${productName}')]`));
      if (await productElement.isDisplayed()) {
        await logResult(testName, 'PASS');
        console.log(`✅ ${testName} completed successfully!`);
      } else {
        throw new Error(`${productName} not found in cart.`);
      }
    } else {
      throw new Error('Cart is empty.');
    }
  } catch (error) {
    console.error(`❌ Error in ${testName}: ${error}`);
    await logResult(testName, 'FAIL');
  }
};

const testCheckout = async (driver) => {
  const testName = 'Checkout';
  try {
    await driver.findElement(By.xpath("//button[text()='Place Order']")).click();
    await driver.sleep(2000);

    await driver.findElement(By.id('name')).sendKeys("Test User");
    await driver.findElement(By.id('country')).sendKeys("Test Country");
    await driver.findElement(By.id('city')).sendKeys("Test City");
    await driver.findElement(By.id('card')).sendKeys("1234567890123456");
    await driver.findElement(By.id('month')).sendKeys("12");
    await driver.findElement(By.id('year')).sendKeys("2025");
    await driver.findElement(By.xpath("//button[text()='Purchase']")).click();

    const confirmationModal = await driver.wait(until.elementLocated(By.css('.sweet-alert.showSweetAlert.visible')), TIMEOUT);
    await waitForElementToBeStable(driver, confirmationModal, TIMEOUT);
    await driver.findElement(By.xpath("//button[text()='OK']")).click();
    await driver.sleep(2000);

    await logResult(testName, 'PASS');
    console.log(`✅ ${testName} completed successfully!`);
  } catch (error) {
    console.error(`❌ Error in ${testName}: ${error}`);
    await logResult(testName, 'FAIL');
  }
};

(async () => {
  let passed = 0;
  let failed = 0;

  const options = new Options()
    .addArguments('--no-sandbox')
    .addArguments('--disable-dev-shm-usage')
    .addArguments('--disable-gpu')
    .addArguments('--disable-blink-features=AutomationControlled')
    .addArguments('--disable-extensions')
    .windowSize({ width: 1920, height: 1080 });

  const driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();

  try {
    await testRegister(driver);
    await driver.sleep(3000);
    console.log("=".repeat(50));

    await testLogin(driver);
    await driver.sleep(3000);
    console.log("=".repeat(50));

    await testAddToCart(driver);
    await driver.sleep(3000);
    console.log("=".repeat(50));

    await testVerifyCart(driver);
    await driver.sleep(3000);
    console.log("=".repeat(50));

    await testCheckout(driver);
    await driver.sleep(3000);
    console.log("=".repeat(50));

    const results = await fs.readFile('../logs/test_results.txt', 'utf8');
    results.split('\n').forEach(line => {
      if (line.includes('PASS')) passed++;
      if (line.includes('FAIL')) failed++;
    });

    console.log(`🎉 Test Summary: ${passed} passed, ${failed} failed out of 5 total tests`);
  } catch (error) {
    console.error(`❌ Error in test execution: ${error}`);
  } finally {
    await driver.quit();
  }
})();