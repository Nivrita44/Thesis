import { Builder, By, until, Key } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { websiteURL, elements, TIMEOUT } from '../config/magento.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logFilePath = path.join(__dirname, '../logs/magento_results2.txt');

await fs.mkdir(path.dirname(logFilePath), { recursive: true });

async function logResult(testName, status) {
  const timestamp = new Date().toISOString();
  const logLine = `[${timestamp}] Test: ${testName} - Status: ${status}\n`;
  await fs.writeFile(logFilePath, logLine, { flag: 'a' });
}

async function waitForElementToBeStable(driver, element, timeout) {
  await driver.wait(until.elementIsVisible(element), timeout);
  await driver.wait(until.elementIsEnabled(element), timeout);
}

let driver;
let passCount = 0;
let failCount = 0;

async function runTest(testName, testFunction) {
  try {
    console.log(`Running: ${testName}`);
    await testFunction();
    await logResult(testName, 'PASS');
    passCount++;
  } catch (error) {
    console.error(`Error in ${testName}:`, error);
    await logResult(testName, 'FAIL');
    failCount++;
  }
  console.log("=".repeat(50));
}

async function createWebDriver() {
  const options = new Options();
  options.addArguments('incognito');
  options.addArguments('--disable-web-security');
  options.addArguments('--disable-features=VizDisplayCompositor');
  return await new Builder().forBrowser('chrome').setChromeOptions(options).build();
}


async function CreateAccount() {
  await driver.get(websiteURL);
  await driver.findElement(By.linkText('Create an Account')).click();
  await waitForElementToBeStable(driver, driver.findElement(By.id('firstname')), TIMEOUT);
  await driver.findElement(By.id('firstname')).sendKeys('John');
  await driver.findElement(By.id('lastname')).sendKeys('Doe');
  await driver.findElement(By.id('is_subscribed')).click();
  const email = `test${Math.floor(Math.random() * 10000)}@exampl.com`;
  await driver.findElement(By.id('email_address')).sendKeys(email);
  await driver.findElement(By.id('password')).sendKeys('Password123');
  await driver.findElement(By.id('password-confirmation')).sendKeys('Password123');
  await driver.findElement(By.css('button.submit')).click();
  await driver.wait(until.urlContains('customer/account'), TIMEOUT);
}

async function WhatsNew() {
  await driver.get(websiteURL);
  await driver.findElement(By.linkText("What's New")).click();
  await driver.executeScript("window.scrollBy(0,500)");
  await waitForElementToBeStable(driver, driver.findElement(By.linkText('Echo Fit Compression Short')), TIMEOUT);
  await driver.findElement(By.linkText('Echo Fit Compression Short')).click();
  await driver.wait(until.urlContains('echo-fit-compression-short'), TIMEOUT);
}

async function AddToCart() {
  await driver.get(websiteURL);
  await driver.findElement(By.linkText("What's New")).click();
  await driver.executeScript("window.scrollBy(0,500)");
  await waitForElementToBeStable(driver, driver.findElement(By.linkText('Echo Fit Compression Short')), TIMEOUT);
  await driver.findElement(By.linkText('Echo Fit Compression Short')).click();
  await waitForElementToBeStable(driver, driver.findElement(By.id('option-label-size-144-item-171')), TIMEOUT);
  await driver.findElement(By.id('option-label-size-144-item-171')).click();
  await driver.findElement(By.id('option-label-color-93-item-49')).click();
  await driver.findElement(By.id('product-addtocart-button')).click();
  await driver.wait(until.elementLocated(By.css('.message-success')), TIMEOUT);
}

async function AddToWishlist() {
  await driver.get(websiteURL);
  await driver.findElement(By.linkText("What's New")).click();
  await driver.executeScript("window.scrollBy(0,500)");
  await waitForElementToBeStable(driver, driver.findElement(By.linkText('Echo Fit Compression Short')), TIMEOUT);
  await driver.findElement(By.linkText('Echo Fit Compression Short')).click();
  await waitForElementToBeStable(driver, driver.findElement(By.xpath('//*[@id="maincontent"]/div[2]/div/div[3]/div[5]/div/a[1]/span')), TIMEOUT);
  await driver.findElement(By.xpath('//*[@id="maincontent"]/div[2]/div/div[3]/div[5]/div/a[1]/span')).click();
  await driver.wait(until.urlContains('wishlist'), TIMEOUT);
}

async function EditCart() {
  await driver.get(websiteURL);
  await driver.findElement(By.css('.action.showcart')).click();
  await waitForElementToBeStable(driver, driver.findElement(By.linkText('View and Edit Cart')), TIMEOUT);
  await driver.findElement(By.linkText('View and Edit Cart')).click();
  const qtyElement = await driver.findElement(By.css('input.input-text.qty'));
  await waitForElementToBeStable(driver, qtyElement, TIMEOUT);
  await qtyElement.clear();
  await qtyElement.sendKeys('2');
  await driver.findElement(By.css('button.action.update')).click();
  await driver.wait(until.urlContains('checkout/cart'), TIMEOUT);
}

async function Checkout() {
  await driver.get(websiteURL);
  await driver.findElement(By.css('.action.showcart')).click();
  await waitForElementToBeStable(driver, driver.findElement(By.xpath('//*[@id="maincontent"]/div[3]/div/div[2]/div[1]/ul/li[1]/button')), TIMEOUT);
  await driver.findElement(By.xpath('//*[@id="maincontent"]/div[3]/div/div[2]/div[1]/ul/li[1]/button')).click();
  await driver.wait(until.urlContains('checkout'), TIMEOUT);
}

async function CheckoutForm() {
  await driver.get(websiteURL);
  await driver.findElement(By.css('.action.showcart')).click();
  await waitForElementToBeStable(driver, driver.findElement(By.xpath('//*[@id="maincontent"]/div[3]/div/div[2]/div[1]/ul/li[1]/button')), TIMEOUT);
  await driver.findElement(By.xpath('//*[@id="maincontent"]/div[3]/div/div[2]/div[1]/ul/li[1]/button')).click();

  await waitForElementToBeStable(driver, driver.findElement(By.id('customer-email')), TIMEOUT);
  await driver.findElement(By.id('customer-email')).sendKeys('test@example.com');
  await driver.findElement(By.name('firstname')).sendKeys('John');
  await driver.findElement(By.name('lastname')).sendKeys('Doe');
  await driver.findElement(By.name('street[0]')).sendKeys('123 Elm Street');
  await driver.findElement(By.name('city')).sendKeys('Some City');
  await driver.findElement(By.name('region_id')).sendKeys('CA');
  await driver.findElement(By.name('postcode')).sendKeys('90001');
  await driver.findElement(By.name('telephone')).sendKeys('1234567890');

  await driver.findElement(By.xpath('//*[@id="checkout-shipping-method-load"]/table/tbody/tr[1]/td[1]/input')).click();
  await waitForElementToBeStable(driver, driver.findElement(By.css('.button.action.continue.primary')), TIMEOUT);
  await driver.findElement(By.css('.button.action.continue.primary')).click();
  await driver.wait(until.urlContains('payment'), TIMEOUT);
}

async function Subscribe() {
  await driver.get(websiteURL);
  await waitForElementToBeStable(driver, driver.findElement(By.id('newsletter')), TIMEOUT);
  await driver.findElement(By.id('newsletter')).sendKeys('subscribe@example.com');
  await driver.findElement(By.css('.action.subscribe.primary')).click();
}

async function SignOut() {
  await driver.get(websiteURL);
  try {
    await waitForElementToBeStable(driver, driver.findElement(By.css('.action.switch')), TIMEOUT);
    await driver.findElement(By.css('.action.switch')).click();
    await waitForElementToBeStable(driver, driver.findElement(By.linkText('Sign Out')), TIMEOUT);
    await driver.findElement(By.linkText('Sign Out')).click();
  } catch (err) {
    console.log('Sign out through alternative menu');
    await driver.findElement(By.css('.customer-name')).click();
    await driver.findElement(By.linkText('Sign Out')).click();
  }
  await driver.wait(until.urlContains('logoutSuccess'), TIMEOUT);
}

(async function runTests() {
  await fs.writeFile(logFilePath, '');
  driver = await createWebDriver(); // 🔥 create browser ONCE here

  try {
    await runTest('CreateAccount', CreateAccount);
    await runTest('WhatsNew', WhatsNew);
    await runTest('AddToCart', AddToCart);
    await runTest('AddToWishlist', AddToWishlist);
    await runTest('EditCart', EditCart);
    await runTest('Checkout', Checkout);
    await runTest('CheckoutForm', CheckoutForm);
    await runTest('Subscribe', Subscribe);
    await runTest('SignOut', SignOut);
  } catch (err) {
    console.error('Global test error:', err);
  } finally {
    await driver.quit(); // 🔥 close browser ONCE here
    console.log(`Test Summary: ${passCount} passed, ${failCount} failed out of 9 total tests`);
  }
})();
