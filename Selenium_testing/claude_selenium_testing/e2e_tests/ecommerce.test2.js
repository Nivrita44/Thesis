import { Builder, By, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import { websiteURL, usernamePrefix, password, productName, TIMEOUT } from '../config/config.js';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

let username = "";
let driver;

async function logResult(testName, status) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] Test: ${testName} - Status: ${status}\n`;
  await fs.writeFile('../logs/test_results2.txt', logEntry, { flag: 'a' });
}

async function testRegister() {
  try {
    await driver.get(websiteURL);
    
    const signupButton = await driver.wait(until.elementLocated(By.id('signin2')), TIMEOUT);
    await driver.wait(until.elementIsEnabled(signupButton), TIMEOUT);
    await signupButton.click();
    
    username = usernamePrefix + Math.floor(Math.random() * 10000);
    
    const usernameField = await driver.wait(until.elementLocated(By.id('sign-username')), TIMEOUT);
    await driver.wait(until.elementIsVisible(usernameField), TIMEOUT);
    await usernameField.clear();
    await usernameField.sendKeys(username);
    
    const passwordField = await driver.wait(until.elementLocated(By.id('sign-password')), TIMEOUT);
    await passwordField.clear();
    await passwordField.sendKeys(password);
    
    const signupSubmitButton = await driver.wait(until.elementLocated(By.xpath("//button[contains(text(),'Sign up')]")), TIMEOUT);
    await signupSubmitButton.click();
    
    await driver.wait(until.alertIsPresent(), TIMEOUT);
    const alert = await driver.switchTo().alert();
    await alert.accept();
    
    await logResult('Register', 'PASS');
  } catch (error) {
    await logResult('Register', 'FAIL');
  }
}

async function testLogin() {
  try {
    await driver.get(websiteURL);
    
    const loginButton = await driver.wait(until.elementLocated(By.id('login2')), TIMEOUT);
    await driver.wait(until.elementIsEnabled(loginButton), TIMEOUT);
    await loginButton.click();
    
    const usernameField = await driver.wait(until.elementLocated(By.id('loginusername')), TIMEOUT);
    await driver.wait(until.elementIsVisible(usernameField), TIMEOUT);
    await usernameField.clear();
    await usernameField.sendKeys(username);
    
    const passwordField = await driver.wait(until.elementLocated(By.id('loginpassword')), TIMEOUT);
    await passwordField.clear();
    await passwordField.sendKeys(password);
    
    const loginSubmitButton = await driver.wait(until.elementLocated(By.xpath("//button[contains(text(),'Log in')]")), TIMEOUT);
    await loginSubmitButton.click();
    
    const nameOfUser = await driver.wait(until.elementLocated(By.id('nameofuser')), TIMEOUT);
    await driver.wait(until.elementIsVisible(nameOfUser), TIMEOUT);
    
    await logResult('Login', 'PASS');
  } catch (error) {
    await logResult('Login', 'FAIL');
  }
}

async function testAddToCart() {
  try {
    await driver.get(websiteURL);
    
    await driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
    
    const productLink = await driver.wait(until.elementLocated(By.linkText(productName)), TIMEOUT);
    await driver.wait(until.elementIsEnabled(productLink), TIMEOUT);
    await productLink.click();
    
    const addToCartButton = await driver.wait(until.elementLocated(By.xpath("//a[text()='Add to cart']")), TIMEOUT);
    await driver.wait(until.elementIsEnabled(addToCartButton), TIMEOUT);
    await addToCartButton.click();
    
    await driver.wait(until.alertIsPresent(), TIMEOUT);
    const alert = await driver.switchTo().alert();
    await alert.accept();
    
    await logResult('AddToCart', 'PASS');
  } catch (error) {
    await logResult('AddToCart', 'FAIL');
  }
}

async function testVerifyCart() {
  try {
    const cartLink = await driver.wait(until.elementLocated(By.id('cartur')), TIMEOUT);
    await driver.wait(until.elementIsEnabled(cartLink), TIMEOUT);
    await cartLink.click();
    
    const cartItems = await driver.wait(until.elementLocated(By.css('#tbodyid tr')), TIMEOUT);
    await driver.wait(until.elementIsVisible(cartItems), TIMEOUT);
    
    const productInCart = await driver.wait(until.elementLocated(By.xpath("//td[contains(text(),'Samsung galaxy s6')]")), TIMEOUT);
    await driver.wait(until.elementIsVisible(productInCart), TIMEOUT);
    
    await logResult('VerifyCart', 'PASS');
  } catch (error) {
    await logResult('VerifyCart', 'FAIL');
  }
}

async function testCheckout() {
  try {
    const placeOrderButton = await driver.wait(until.elementLocated(By.xpath("//button[text()='Place Order']")), TIMEOUT);
    await driver.wait(until.elementIsEnabled(placeOrderButton), TIMEOUT);
    await placeOrderButton.click();
    
    const nameField = await driver.wait(until.elementLocated(By.id('name')), TIMEOUT);
    await driver.wait(until.elementIsVisible(nameField), TIMEOUT);
    await nameField.clear();
    await nameField.sendKeys('John Doe');
    
    const countryField = await driver.wait(until.elementLocated(By.id('country')), TIMEOUT);
    await countryField.clear();
    await countryField.sendKeys('USA');
    
    const cityField = await driver.wait(until.elementLocated(By.id('city')), TIMEOUT);
    await cityField.clear();
    await cityField.sendKeys('New York');
    
    const cardField = await driver.wait(until.elementLocated(By.id('card')), TIMEOUT);
    await cardField.clear();
    await cardField.sendKeys('1234567890123456');
    
    const monthField = await driver.wait(until.elementLocated(By.id('month')), TIMEOUT);
    await monthField.clear();
    await monthField.sendKeys('12');
    
    const yearField = await driver.wait(until.elementLocated(By.id('year')), TIMEOUT);
    await yearField.clear();
    await yearField.sendKeys('2025');
    
    const purchaseButton = await driver.wait(until.elementLocated(By.xpath("//button[text()='Purchase']")), TIMEOUT);
    await purchaseButton.click();
    
    const confirmationModal = await driver.wait(until.elementLocated(By.css('.sweet-alert.showSweetAlert.visible')), TIMEOUT);
    await driver.wait(until.elementIsVisible(confirmationModal), TIMEOUT);
    
    const okButton = await driver.wait(until.elementLocated(By.xpath("//button[text()='OK']")), TIMEOUT);
    await okButton.click();
    
    await logResult('Checkout', 'PASS');
  } catch (error) {
    await logResult('Checkout', 'FAIL');
  }
}

async function runTests() {
  const options = new Options();
  options.addArguments('--disable-blink-features=AutomationControlled');
  options.addArguments('--no-sandbox');
  options.addArguments('--disable-dev-shm-usage');
  
  driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
  
  try {
    await fs.writeFile('../logs/test_results2.txt', '');
    
    await testRegister();
    await testLogin();
    await testAddToCart();
    await testVerifyCart();
    await testCheckout();
    
    const logContent = await fs.readFile('../logs/test_results2.txt', 'utf8');
    const passCount = (logContent.match(/PASS/g) || []).length;
    const failCount = (logContent.match(/FAIL/g) || []).length;
    const totalTests = 5;
    
    const summary = `Test Summary: ${passCount} passed, ${failCount} failed out of ${totalTests} total tests\n`;
    await fs.appendFile('../logs/test_results2.txt', summary);
    
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
}

runTests();