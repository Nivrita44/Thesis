```javascript
const { Builder, By, until, Key } = require('selenium-webdriver');
const { Select } = require('selenium-webdriver/lib/select.js');
const { Options } = require('selenium-webdriver/chrome.js');
const { websiteURL, firstName, lastName, email, password, country, state, city, address, postalCode, phoneNumber, TIMEOUT } = require('../config/nopcommerce.js');
const fs = require('fs/promises');
const { fileURLToPath } = require('url');

let driver;
let registeredEmail = "";
let testResults = [];

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function logResult(testName, status) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] Test: ${testName} - Status: ${status}`;
  testResults.push(logEntry);
  
  try {
    const logContent = testResults.join('\n') + '\n';
    await fs.writeFile('../logs/nopcommerce_results.txt', logContent, 'utf8');
  } catch (error) {
    console.log(`Error writing log: ${error.message}`);
  }
}

async function handleAlert(timeout = 2000) {
  try {
    await driver.wait(until.alertIsPresent(), timeout);
    let alert = await driver.switchTo().alert();
    const alertText = await alert.getText();
    console.log(`Alert text: ${alertText}`);
    await delay(1000);
    await alert.accept();
    await delay(2000);
    console.log("✅ Alert handled successfully");
  } catch (err) {
    console.log("ℹ️ No alert appeared");
  }
}

async function testRegister() {
  try {
    console.log("🔄 Starting Registration Test...");
    await driver.get("https://demo.nopcommerce.com/register");
    await delay(TIMEOUT);
    
    await driver.findElement(By.id('gender-male')).click();
    await delay(500);
    
    await driver.findElement(By.id('FirstName')).sendKeys(firstName);
    await delay(500);
    
    await driver.findElement(By.id('LastName')).sendKeys(lastName);
    await delay(500);
    
    registeredEmail = `yasin${Date.now()}@mail.com`;
    await driver.findElement(By.id('Email')).sendKeys(registeredEmail);
    await delay(500);
    
    await driver.findElement(By.id('Password')).sendKeys(password);
    await delay(500);
    
    await driver.findElement(By.id('ConfirmPassword')).sendKeys(password);
    await delay(1000);
    
    await driver.findElement(By.id('register-button')).click();
    await delay(TIMEOUT);
    
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
    await delay(2000);
    
    const logoutButtons = await driver.findElements(By.linkText("Log out"));
    if (logoutButtons.length > 0) {
      await logoutButtons[0].click();
      await delay(2000);
    }
    
    await driver.findElement(By.linkText("Log in")).click();
    await delay(2000);
    
    await driver.findElement(By.id("Email")).sendKeys(registeredEmail);
    await delay(500);
    
    await driver.findElement(By.id("Password")).sendKeys(password);
    await delay(500);
    
    await driver.findElement(By.xpath("//button[@class='button-1 login-button']")).click();
    await delay(TIMEOUT);
    
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
    await driver.findElement(By.xpath("/html/body/div[6]/div[2]/ul[1]/li[5]/a")).click();
    await delay(TIMEOUT);
    
    await driver.findElement(By.xpath("(//button[contains(text(),'Add to cart')])[1]")).click();
    await delay(2000);
    await handleAlert();
    
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
    await delay(2000);
    
    const currencyDropdown = new Select(await driver.findElement(By.id('customerCurrency')));
    await currencyDropdown.selectByValue('https://demo.nopcommerce.com/changecurrency/2?returnUrl=%2F');
    await delay(TIMEOUT);
    
    await logResult('ChangeCurrency', 'PASS');
    console.log("✅ Currency change completed successfully!");
  } catch (error) {
    await logResult('ChangeCurrency', 'FAIL');
    console.log(`❌ Currency change failed: ${error.message}`);
  }
}

async function testSearch() {
  try {
    console.log("🔄 Starting Search Test...");
    await driver.findElement(By.id('small-searchterms')).clear();
    await driver.findElement(By.id('small-searchterms')).sendKeys('laptop');
    await delay(500);
    
    await driver.findElement(By.xpath("//button[@class='button-1 search-box-button']")).click();
    await delay(TIMEOUT);
    
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
    await delay(TIMEOUT);
    
    const priceFilters = await driver.findElements(By.xpath("//div[@class='price-range-selector']//input[@type='checkbox']"));
    if (priceFilters.length > 0) {
      await priceFilters[0].click();
      await delay(2000);
    }
    
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
    const sortDropdown = new Select(await driver.findElement(By.id('products-orderby')));
    await sortDropdown.selectByValue('https://demo.nopcommerce.com/jewelry?orderby=10');
    await delay(TIMEOUT);
    
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
    await delay(2000);
    
    await driver.findElement(By.xpath("(//h2[@class='product-title']/a)[1]")).click();
    await delay(TIMEOUT);
    
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
    const wishlistButtons = await driver.findElements(By.xpath("(//button[contains(text(),'Add to wishlist')])[1]"));
    if (wishlistButtons.length > 0) {
      await wishlistButtons[0].click();
      await delay(2000);
      await handleAlert();
    }
    
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
    const compareButtons = await driver.findElements(By.xpath("(//button[contains(text(),'Add to compare list')])[1]"));
    if (compareButtons.length > 0) {
      await compareButtons[0].click();
      await delay(2000);
      await handleAlert();
    }
    
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
    await driver.findElement(By.xpath("/html/body/div[6]/div[4]/div[1]/div[1]/ul/li[6]/a")).click();
    await delay(2000);
    
    await driver.findElement(By.id('Enquiry')).sendKeys('This is a test enquiry message');
    await delay(500);
    
    await driver.findElement(By.name('send-email')).click();
    await delay(TIMEOUT);
    
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
    await delay(2000);
    
    await driver.findElement(By.id('newsletter-email')).clear();
    await driver.findElement(By.id('newsletter-email')).sendKeys(`newsletter${Date.now()}@mail.com`);
    await delay(500);
    
    await driver.findElement(By.id('newsletter-subscribe-button')).click();
    await delay(2000);
    await handleAlert();
    
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
    await driver.findElement(By.id('topcartlink')).click();
    await delay(2000);
    
    const couponFields = await driver.findElements(By.id('discountcouponcode'));
    if (couponFields.length > 0) {
      await couponFields[0].sendKeys('TESTCODE123');
      await delay(500);
      
      await driver.findElement(By.name('applydiscountcouponcode')).click();
      await delay(2000);
    }
    
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
    await driver.findElement(By.id('topcartlink')).click();
    await delay(2000);
    
    await driver.findElement(By.id('termsofservice')).click();
    await delay(500);
    
    await driver.findElement(By.id('checkout')).click();
    await delay(TIMEOUT);
    
    const countryDropdown = new Select(await driver.findElement(By.id('BillingNewAddress_CountryId')));
    await countryDropdown.selectByVisibleText('India');
    await delay(2000);
    
    const stateDropdown = new Select(await driver.findElement(By.id('BillingNewAddress_StateProvinceId')));
    await stateDropdown.selectByVisibleText('Bihar');
    await delay(1000);
    
    await driver.findElement(By.id('BillingNewAddress_City')).clear();
    await driver.findElement(By.id('BillingNewAddress_City')).sendKeys(city);
    await delay(500);
    
    await driver.findElement(By.id('BillingNewAddress_Address1')).clear();
    await driver.findElement(By.id('BillingNewAddress_Address1')).sendKeys(address);
    await delay(500);
    
    await driver.findElement(By.id('BillingNewAddress_ZipPostalCode')).clear();
    await driver.findElement(By.id('BillingNewAddress_ZipPostalCode')).sendKeys(postalCode);
    await delay(500);
    
    await driver.findElement(By.id('BillingNewAddress_PhoneNumber')).clear();
    await driver.findElement(By.id('BillingNewAddress_PhoneNumber')).sendKeys(phoneNumber);
    await delay(500);
    
    await driver.findElement(By.xpath("//*[@id='billing-buttons-container']/button[2]")).click();
    await delay(TIMEOUT);
    
    await logResult('CheckoutForm', 'PASS');
    console.log("✅ Checkout Form completed successfully!");
  } catch (error) {
    await logResult('CheckoutForm', 'FAIL');
    console.log(`❌ Checkout Form failed: ${error.message}`);
  }
}

async function testShippingMethod() {
  try {
    console.log("🔄 Starting Shipping Method Test...");
    await delay(2000);
    await driver.findElement(By.xpath("//*[@id='shipping-method-buttons-container']/button")).click();
    await delay(TIMEOUT);
    
    await logResult('ShippingMethod', 'PASS');
    console.log("✅