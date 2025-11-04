```javascript
import { Builder, By, until, Key } from 'selenium-webdriver';
import { Select } from 'selenium-webdriver/lib/select.js';
import { Options } from 'selenium-webdriver/chrome.js';
import { websiteURL, firstName, lastName, email, password, country, state, city, address, postalCode, phoneNumber, TIMEOUT } from '../config/nopcommerce.js';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

let driver;
let registeredEmail = "";
let testResults = { passed: 0, failed: 0, total: 20 };

async function logResult(testName, status) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] Test: ${testName} - Status: ${status}\n`;
  
  if (status === 'PASS') {
    testResults.passed++;
  } else {
    testResults.failed++;
  }
  
  try {
    let existingLogs = '';
    try {
      existingLogs = await fs.readFile('../logs/nopcommerce_results2.txt', 'utf8');
    } catch (err) {
      existingLogs = '';
    }
    
    const updatedLogs = existingLogs + logEntry;
    await fs.writeFile('../logs/nopcommerce_results2.txt', updatedLogs, 'utf8');
  } catch (error) {
    console.log(`❌ Error logging result: ${error.message}`);
  }
}

async function handleAlert(timeout = 2000) {
  try {
    await driver.wait(until.alertIsPresent(), timeout);
    let alert = await driver.switchTo().alert();
    await alert.accept();
    console.log("✅ Alert handled successfully");
  } catch (err) {
    console.log("ℹ️ No alert appeared");
  }
}

async function testRegister() {
  try {
    console.log("🔄 Starting Registration Test...");
    await driver.get("https://demo.nopcommerce.com/register");
    await driver.wait(until.elementLocated(By.id('gender-male')), TIMEOUT);
    await driver.findElement(By.id('gender-male')).click();
    await driver.findElement(By.id('FirstName')).sendKeys(firstName);
    await driver.findElement(By.id('LastName')).sendKeys(lastName);
    
    registeredEmail = `yasin${Date.now()}@mail.com`;
    await driver.findElement(By.id('Email')).sendKeys(registeredEmail);
    await driver.findElement(By.id('Password')).sendKeys(password);
    await driver.findElement(By.id('ConfirmPassword')).sendKeys(password);
    await driver.findElement(By.id('register-button')).click();
    
    await driver.wait(until.urlContains('registerresult'), 10000);
    await logResult('Register', 'PASS');
    console.log("✅ Registration completed successfully!");
  } catch (error) {
    await logResult('Register', 'FAIL');
    console.log(`❌ Registration failed: ${error.message}`);
  }
}

async function testLogin() {
  try {
    console.log("🔄 Starting Login Test...");
    await driver.get("https://demo.nopcommerce.com/");
    
    const logoutButtons = await driver.findElements(By.linkText("Log out"));
    if (logoutButtons.length > 0) {
      await logoutButtons[0].click();
      await driver.sleep(1000);
    }
    
    await driver.findElement(By.linkText("Log in")).click();
    await driver.wait(until.elementLocated(By.id("Email")), TIMEOUT);
    await driver.findElement(By.id("Email")).sendKeys(registeredEmail);
    await driver.findElement(By.id("Password")).sendKeys(password);
    await driver.findElement(By.xpath("//button[@class='button-1 login-button']")).click();
    
    await driver.wait(until.elementLocated(By.linkText("Log out")), 10000);
    await logResult('Login', 'PASS');
    console.log("✅ Login completed successfully!");
  } catch (error) {
    await logResult('Login', 'FAIL');
    console.log(`❌ Login failed: ${error.message}`);
  }
}

async function testAddToCart() {
  try {
    console.log("🔄 Starting Add to Cart Test...");
    await driver.get("https://demo.nopcommerce.com/");
    await driver.wait(until.elementLocated(By.xpath("/html/body/div[6]/div[2]/ul[1]/li[5]/a")), TIMEOUT);
    await driver.findElement(By.xpath("/html/body/div[6]/div[2]/ul[1]/li[5]/a")).click();
    
    await driver.wait(until.elementLocated(By.xpath("(//button[contains(text(),'Add to cart')])[1]")), TIMEOUT);
    await driver.findElement(By.xpath("(//button[contains(text(),'Add to cart')])[1]")).click();
    
    await driver.sleep(2000);
    await logResult('AddToCart', 'PASS');
    console.log("✅ Add to Cart completed successfully!");
  } catch (error) {
    await logResult('AddToCart', 'FAIL');
    console.log(`❌ Add to Cart failed: ${error.message}`);
  }
}

async function testChangeCurrency() {
  try {
    console.log("🔄 Starting Change Currency Test...");
    await driver.get("https://demo.nopcommerce.com/");
    await driver.wait(until.elementLocated(By.id('customerCurrency')), TIMEOUT);
    
    const currencyDropdown = new Select(await driver.findElement(By.id('customerCurrency')));
    await currencyDropdown.selectByValue('https://demo.nopcommerce.com/changecurrency/6?returnUrl=%2F');
    
    await driver.sleep(2000);
    await logResult('ChangeCurrency', 'PASS');
    console.log("✅ Change Currency completed successfully!");
  } catch (error) {
    await logResult('ChangeCurrency', 'FAIL');
    console.log(`❌ Change Currency failed: ${error.message}`);
  }
}

async function testSearch() {
  try {
    console.log("🔄 Starting Search Test...");
    await driver.get("https://demo.nopcommerce.com/");
    await driver.wait(until.elementLocated(By.id('small-searchterms')), TIMEOUT);
    await driver.findElement(By.id('small-searchterms')).sendKeys('laptop');
    await driver.findElement(By.xpath("//button[@class='button-1 search-box-button']")).click();
    
    await driver.wait(until.urlContains('search'), 5000);
    await logResult('Search', 'PASS');
    console.log("✅ Search completed successfully!");
  } catch (error) {
    await logResult('Search', 'FAIL');
    console.log(`❌ Search failed: ${error.message}`);
  }
}

async function testFilterCategory() {
  try {
    console.log("🔄 Starting Filter Category Test...");
    await driver.get("https://demo.nopcommerce.com/jewelry");
    await driver.wait(until.elementLocated(By.xpath("//input[@id='attribute-option-6-1']")), TIMEOUT);
    await driver.findElement(By.xpath("//input[@id='attribute-option-6-1']")).click();
    
    await driver.sleep(2000);
    await logResult('FilterCategory', 'PASS');
    console.log("✅ Filter Category completed successfully!");
  } catch (error) {
    await logResult('FilterCategory', 'FAIL');
    console.log(`❌ Filter Category failed: ${error.message}`);
  }
}

async function testSort() {
  try {
    console.log("🔄 Starting Sort Test...");
    await driver.get("https://demo.nopcommerce.com/books");
    await driver.wait(until.elementLocated(By.id('products-orderby')), TIMEOUT);
    
    const sortDropdown = new Select(await driver.findElement(By.id('products-orderby')));
    await sortDropdown.selectByValue('https://demo.nopcommerce.com/books?orderby=6');
    
    await driver.sleep(2000);
    await logResult('Sort', 'PASS');
    console.log("✅ Sort completed successfully!");
  } catch (error) {
    await logResult('Sort', 'FAIL');
    console.log(`❌ Sort failed: ${error.message}`);
  }
}

async function testViewDetails() {
  try {
    console.log("🔄 Starting View Details Test...");
    await driver.get("https://demo.nopcommerce.com/books");
    await driver.wait(until.elementLocated(By.xpath("(//h2[@class='product-title']/a)[1]")), TIMEOUT);
    await driver.findElement(By.xpath("(//h2[@class='product-title']/a)[1]")).click();
    
    await driver.wait(until.elementLocated(By.className('product-name')), 5000);
    await logResult('ViewDetails', 'PASS');
    console.log("✅ View Details completed successfully!");
  } catch (error) {
    await logResult('ViewDetails', 'FAIL');
    console.log(`❌ View Details failed: ${error.message}`);
  }
}

async function testWishlist() {
  try {
    console.log("🔄 Starting Wishlist Test...");
    await driver.get("https://demo.nopcommerce.com/books");
    await driver.wait(until.elementLocated(By.xpath("(//button[contains(text(),'Add to wishlist')])[1]")), TIMEOUT);
    await driver.findElement(By.xpath("(//button[contains(text(),'Add to wishlist')])[1]")).click();
    
    await driver.sleep(2000);
    await handleAlert();
    await logResult('Wishlist', 'PASS');
    console.log("✅ Wishlist completed successfully!");
  } catch (error) {
    await logResult('Wishlist', 'FAIL');
    console.log(`❌ Wishlist failed: ${error.message}`);
  }
}

async function testCompareList() {
  try {
    console.log("🔄 Starting Compare List Test...");
    await driver.get("https://demo.nopcommerce.com/books");
    await driver.wait(until.elementLocated(By.xpath("(//button[contains(text(),'Add to compare list')])[1]")), TIMEOUT);
    await driver.findElement(By.xpath("(//button[contains(text(),'Add to compare list')])[1]")).click();
    
    await driver.sleep(2000);
    await handleAlert();
    await logResult('CompareList', 'PASS');
    console.log("✅ Compare List completed successfully!");
  } catch (error) {
    await logResult('CompareList', 'FAIL');
    console.log(`❌ Compare List failed: ${error.message}`);
  }
}

async function testContactUs() {
  try {
    console.log("🔄 Starting Contact Us Test...");
    await driver.get("https://demo.nopcommerce.com/");
    await driver.wait(until.elementLocated(By.xpath("/html/body/div[6]/div[4]/div[1]/div[1]/ul/li[6]/a")), TIMEOUT);
    await driver.findElement(By.xpath("/html/body/div[6]/div[4]/div[1]/div[1]/ul/li[6]/a")).click();
    
    await driver.wait(until.elementLocated(By.id('Enquiry')), TIMEOUT);
    await driver.findElement(By.id('Enquiry')).sendKeys('This is a test enquiry message.');
    await driver.findElement(By.name('send-email')).click();
    
    await driver.sleep(2000);
    await logResult('ContactUs', 'PASS');
    console.log("✅ Contact Us completed successfully!");
  } catch (error) {
    await logResult('ContactUs', 'FAIL');
    console.log(`❌ Contact Us failed: ${error.message}`);
  }
}

async function testNewsletter() {
  try {
    console.log("🔄 Starting Newsletter Test...");
    await driver.get("https://demo.nopcommerce.com/");
    await driver.wait(until.elementLocated(By.id('newsletter-email')), TIMEOUT);
    await driver.findElement(By.id('newsletter-email')).clear();
    await driver.findElement(By.id('newsletter-email')).sendKeys(registeredEmail);
    await driver.findElement(By.id('newsletter-subscribe-button')).click();
    
    await driver.sleep(2000);
    await logResult('Newsletter', 'PASS');
    console.log("✅ Newsletter completed successfully!");
  } catch (error) {
    await logResult('Newsletter', 'FAIL');
    console.log(`❌ Newsletter failed: ${error.message}`);
  }
}

async function testCoupon() {
  try {
    console.log("🔄 Starting Coupon Test...");
    await driver.get("https://demo.nopcommerce.com/");
    await driver.findElement(By.id('topcartlink')).click();
    
    await driver.wait(until.elementLocated(By.id('discountcouponcode')), TIMEOUT);
    await driver.findElement(By.id('discountcouponcode')).sendKeys('TESTCOUPON');
    await driver.findElement(By.name('applydiscountcouponcode')).click();
    
    await driver.sleep(2000);
    await logResult('Coupon', 'PASS');
    console.log("✅ Coupon completed successfully!");
  } catch (error) {
    await logResult('Coupon', 'FAIL');
    console.log(`❌ Coupon failed: ${error.message}`);
  }
}

async function testCheckoutForm() {
  try {
    console.log("🔄 Starting Checkout Form Test...");
    await driver.get("https://demo.nopcommerce.com/cart");
    await driver.wait(until.elementLocated(By.id('termsofservice')), TIMEOUT);
    await driver.findElement(By.id('termsofservice')).click();
    await driver.findElement(By.id('checkout')).click();
    
    await driver.wait(until.elementLocated(By.id('BillingNewAddress_CountryId')), TIMEOUT);
    const countryDropdown = new Select(await driver.findElement(By.id('BillingNewAddress_CountryId')));
    await countryDropdown.selectByVisibleText('India');
    
    await driver.wait(until.elementLocated(By.id('BillingNewAddress_StateProvinceId')), 5000);
    const stateDropdown = new Select(await driver.findElement(By.id('BillingNewAddress_StateProvinceId')));
    await stateDropdown.selectByVisibleText('Bihar');
    
    await driver.findElement(By.id('BillingNewAddress_City')).sendKeys(city);
    await driver.findElement(By.id('B