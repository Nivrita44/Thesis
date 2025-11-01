import { Builder, By, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import { websiteURL, usernamePrefix, password, productName, TIMEOUT } from '../config/config.js';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

// Global variable to share username between tests
let username = "";
let testResults = [];

const logResult = async (testName, status) => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] Test: ${testName} - Status: ${status}`;
  testResults.push({ testName, status });
  
  try {
    const logContent = testResults.map(result => 
      `[${new Date().toISOString()}] Test: ${result.testName} - Status: ${result.status}`
    ).join('\n');
    await fs.writeFile('../logs/test_results.txt', logContent);
  } catch (error) {
    console.error(`Error writing log: ${error}`);
  }
};

const waitForElementToBeStable = async (driver, element, timeout) => {
  await driver.wait(until.elementIsVisible(element), timeout);
  await driver.wait(until.elementIsEnabled(element), timeout);
};

const testRegister = async (driver) => {
  const testName = 'Register';
  try {
    console.log(`🚀 Starting ${testName} test...`);
    await driver.get(websiteURL);
    await driver.sleep(3000);
    
    const signUpButton = await driver.wait(until.elementLocated(By.id('signin2')), TIMEOUT);
    await waitForElementToBeStable(driver, signUpButton, TIMEOUT);
    await signUpButton.click();
    await driver.sleep(2000);
    
    // Generate and store username in global variable
    username = `${usernamePrefix}${Math.floor(Math.random() * 10000)}`;
    console.log(`Generated username: ${username}`);
    
    const usernameField = await driver.wait(until.elementLocated(By.id('sign-username')), TIMEOUT);
    await waitForElementToBeStable(driver, usernameField, TIMEOUT);
    await usernameField.clear();
    await usernameField.sendKeys(username);
    await driver.sleep(500);
    
    const passwordField = await driver.wait(until.elementLocated(By.id('sign-password')), TIMEOUT);
    await waitForElementToBeStable(driver, passwordField, TIMEOUT);
    await passwordField.clear();
    await passwordField.sendKeys(password);
    await driver.sleep(500);
    
    const submitButton = await driver.wait(until.elementLocated(By.xpath("//button[contains(text(),'Sign up')]")), TIMEOUT);
    await waitForElementToBeStable(driver, submitButton, TIMEOUT);
    await submitButton.click();
    
    const alert = await driver.wait(until.alertIsPresent(), TIMEOUT);
    const alertText = await alert.getText();
    console.log(`Registration alert: ${alertText}`);
    await driver.sleep(1000);
    await alert.accept();
    await driver.sleep(3000);
    
    await logResult('Register', 'PASS');
    console.log(`✅ Register completed successfully!`);
  } catch (error) {
    console.error(`❌ Error in Register: ${error}`);
    await logResult('Register', 'FAIL');
  }
};

const testLogin = async (driver) => {
  const testName = 'Login';
  try {
    console.log(`🚀 Starting ${testName} test...`);
    await driver.get(websiteURL);
    await driver.sleep(4000);
    
    const loginButton = await driver.wait(until.elementLocated(By.id('login2')), TIMEOUT);
    await waitForElementToBeStable(driver, loginButton, TIMEOUT);
    await loginButton.click();
    await driver.sleep(2000);
    
    // Use the SAME username from global variable
    console.log(`Logging in with username: ${username}`);
    const usernameField = await driver.wait(until.elementLocated(By.id('loginusername')), TIMEOUT);
    await waitForElementToBeStable(driver, usernameField, TIMEOUT);
    await usernameField.clear();
    await usernameField.sendKeys(username);
    await driver.sleep(500);
    
    const passwordField = await driver.wait(until.elementLocated(By.id('loginpassword')), TIMEOUT);
    await waitForElementToBeStable(driver, passwordField, TIMEOUT);
    await passwordField.clear();
    await passwordField.sendKeys(password);
    await driver.sleep(500);
    
    const submitButton = await driver.wait(until.elementLocated(By.xpath("//button[contains(text(),'Log in')]")), TIMEOUT);
    await waitForElementToBeStable(driver, submitButton, TIMEOUT);
    await submitButton.click();
    await driver.sleep(3000);
    
    const userElement = await driver.wait(until.elementLocated(By.id('nameofuser')), TIMEOUT);
    await waitForElementToBeStable(driver, userElement, TIMEOUT);
    
    if (await userElement.isDisplayed()) {
      await logResult('Login', 'PASS');
      console.log(`✅ Login completed successfully!`);
    } else {
      throw new Error("Username display not found.");
    }
  } catch (error) {
    console.error(`❌ Error in Login: ${error}`);
    await logResult('Login', 'FAIL');
  }
};

const testAddToCart = async (driver) => {
  const testName = 'AddToCart';
  try {
    console.log(`🚀 Starting ${testName} test...`);
    await driver.sleep(3000);
    await driver.executeScript("window.scrollBy(0, 400)");
    await driver.sleep(1000);
    
    const productLink = await driver.wait(until.elementLocated(By.linkText(productName)), TIMEOUT);
    await waitForElementToBeStable(driver, productLink, TIMEOUT);
    await productLink.click();
    await driver.sleep(3000);
    
    const addToCartButton = await driver.wait(until.elementLocated(By.xpath("//a[text()='Add to cart']")), TIMEOUT);
    await waitForElementToBeStable(driver, addToCartButton, TIMEOUT);
    await addToCartButton.click();
    
    const alert = await driver.wait(until.alertIsPresent(), TIMEOUT);
    const alertText = await alert.getText();
    console.log(`Add to cart alert: ${alertText}`);
    await driver.sleep(1000);
    await alert.accept();
    await driver.sleep(3000);
    
    await logResult('AddToCart', 'PASS');
    console.log(`✅ AddToCart completed successfully!`);
  } catch (error) {
    console.error(`❌ Error in AddToCart: ${error}`);
    await logResult('AddToCart', 'FAIL');
  }
};

const testVerifyCart = async (driver) => {
  const testName = 'VerifyCart';
  try {
    console.log(`🚀 Starting ${testName} test...`);
    
    const cartButton = await driver.wait(until.elementLocated(By.id('cartur')), TIMEOUT);
    await waitForElementToBeStable(driver, cartButton, TIMEOUT);
    await cartButton.click();
    await driver.sleep(4000);
    
    const cartItems = await driver.wait(until.elementsLocated(By.css('#tbodyid tr')), TIMEOUT);
    
    if (cartItems.length === 0) {
      throw new Error("Cart is empty - no items found");
    }
    
    const productInCart = await driver.wait(until.elementLocated(By.xpath("//td[contains(text(),'Samsung galaxy s6')]")), TIMEOUT);
    await waitForElementToBeStable(driver, productInCart, TIMEOUT);
    
    if (await productInCart.isDisplayed()) {
      await logResult('VerifyCart', 'PASS');
      console.log(`✅ VerifyCart completed successfully!`);
    } else {
      throw new Error("Samsung galaxy s6 not found in cart");
    }
  } catch (error) {
    console.error(`❌ Error in VerifyCart: ${error}`);
    try {
      const cartContent = await driver.findElement(By.id('tbodyid')).getText();
      console.log(`Actual cart content: ${cartContent}`);
    } catch (e) {
      console.log("Could not retrieve cart content for debugging");
    }
    await logResult('VerifyCart', 'FAIL');
  }
};

const testCheckout = async (driver) => {
  const testName = 'Checkout';
  try {
    console.log(`🚀 Starting ${testName} test...`);
    
    const placeOrderButton = await driver.wait(until.elementLocated(By.xpath("//button[text()='Place Order']")), TIMEOUT);
    await waitForElementToBeStable(driver, placeOrderButton, TIMEOUT);
    await placeOrderButton.click();
    await driver.sleep(2000);
    
    const nameField = await driver.wait(until.elementLocated(By.id('name')), TIMEOUT);
    await waitForElementToBeStable(driver, nameField, TIMEOUT);
    await nameField.clear();
    await nameField.sendKeys('Test User');
    await driver.sleep(500);
    
    const countryField = await driver.wait(until.elementLocated(By.id('country')), TIMEOUT);
    await waitForElementToBeStable(driver, countryField, TIMEOUT);
    await countryField.clear();
    await countryField.sendKeys('USA');
    await driver.sleep(500);
    
    const cityField = await driver.wait(until.elementLocated(By.id('city')), TIMEOUT);
    await waitForElementToBeStable(driver, cityField, TIMEOUT);
    await cityField.clear();
    await cityField.sendKeys('New York');
    await driver.sleep(500);
    
    const cardField = await driver.wait(until.elementLocated(By.id('card')), TIMEOUT);
    await waitForElementToBeStable(driver, cardField, TIMEOUT);
    await cardField.clear();
    await cardField.sendKeys('1234567890123456');
    await driver.sleep(500);
    
    const monthField = await driver.wait(until.elementLocated(By.id('month')), TIMEOUT);
    await waitForElementToBeStable(driver, monthField, TIMEOUT);
    await monthField.clear();
    await monthField.sendKeys('12');
    await driver.sleep(500);
    
    const yearField = await driver.wait(until.elementLocated(By.id('year')), TIMEOUT);
    await waitForElementToBeStable(driver, yearField, TIMEOUT);
    await yearField.clear();
    await yearField.sendKeys('2025');
    await driver.sleep(500);
    
    const purchaseButton = await driver.wait(until.elementLocated(By.xpath("//button[text()='Purchase']")), TIMEOUT);
    await waitForElementToBeStable(driver, purchaseButton, TIMEOUT);
    await purchaseButton.click();
    await driver.sleep(3000);
    
    const confirmationModal = await driver.wait(until.elementLocated(By.css('.sweet-alert.showSweetAlert.visible')), TIMEOUT);
    await waitForElementToBeStable(driver, confirmationModal, TIMEOUT);
    
    const okButton = await driver.wait(until.elementLocated(By.xpath("//button[text()='OK']")), TIMEOUT);
    await waitForElementToBeStable(driver, okButton, TIMEOUT);
    await okButton.click();
    await driver.sleep(2000);
    
    await logResult('Checkout', 'PASS');
    console.log(`✅ Checkout completed successfully!`);
  } catch (error) {
    console.error(`❌ Error in Checkout: ${error}`);
    await logResult('Checkout', 'FAIL');
  }
};

const runAllTests = async () => {
  const chromeOptions = new Options();
  chromeOptions.addArguments('--no-sandbox');
  chromeOptions.addArguments('--disable-dev-shm-usage');
  chromeOptions.addArguments('--disable-gpu');
  chromeOptions.addArguments('--disable-blink-features=AutomationControlled');
  chromeOptions.addArguments('--disable-extensions');
  chromeOptions.addArguments('--window-size=1920,1080');
  
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();
    
  try {
    console.log("🚀 Starting E-commerce Test Suite...");
    console.log("=".repeat(50));
    
    await testRegister(driver);
    console.log("=".repeat(50));
    await driver.sleep(3000);
    
    await testLogin(driver);
    console.log("=".repeat(50));
    await driver.sleep(3000);
    
    await testAddToCart(driver);
    console.log("=".repeat(50));
    await driver.sleep(3000);
    
    await testVerifyCart(driver);
    console.log("=".repeat(50));
    await driver.sleep(3000);
    
    await testCheckout(driver);
    console.log("=".repeat(50));
    
    const passedTests = testResults.filter(result => result.status === 'PASS').length;
    const failedTests = testResults.filter(result => result.status === 'FAIL').length;
    const totalTests = testResults.length;
    
    const summary = `Test Summary: ${passedTests} passed, ${failedTests} failed out of ${totalTests} total tests`;
    console.log("🎉 " + summary);
    
    // Write final summary to log file
    const logContent = testResults.map(result => 
      `[${new Date().toISOString()}] Test: ${result.testName} - Status: ${result.status}`
    ).join('\n') + '\n' + summary;
    
    await fs.writeFile('../logs/test_results.txt', logContent);
    
  } catch (error) {
    console.error(`❌ Fatal error in test suite: ${error}`);
  } finally {
    await driver.quit();
    console.log("🏁 Test suite completed!");
  }
};

runAllTests();