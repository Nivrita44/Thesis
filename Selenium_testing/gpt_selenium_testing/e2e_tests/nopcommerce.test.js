import { Builder, By, until } from 'selenium-webdriver';
import { Select } from 'selenium-webdriver/lib/select.js';
import { Options } from 'selenium-webdriver/chrome.js';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { websiteURL, firstName, lastName, email, password, country, state, city, address, postalCode, phoneNumber, TIMEOUT } from '../config/nopcommerce.js';

let driver;
let registeredEmail = "";

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function logResult(testName, status) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] Test: ${testName} - Status: ${status}\n`;
  await fs.writeFile('../logs/nopcommerce_results.txt', logMessage, { flag: 'a' });
  console.log(logMessage);
}

async function handleAlert(timeout = 2000) {
  try {
    await driver.wait(until.alertIsPresent(), timeout);
    const alert = await driver.switchTo().alert();
    console.log(`⚠️ Alert Text: ${await alert.getText()}`);
    await alert.accept();
    console.log("✅ Alert handled successfully");
    await delay(1000);
  } catch {
    console.log("ℹ️ No alert appeared");
  }
}

async function initializeDriver() {
  const options = new Options()
    .addArguments('--incognito', '--start-maximized', '--disable-logging', '--disable-gpu', '--no-sandbox');
  driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
}

async function testRegister() {
  try {
    await driver.get("https://demo.nopcommerce.com/register");
    await delay(TIMEOUT);
    await driver.findElement(By.id('gender-male')).click();
    await delay(1000);
    await driver.findElement(By.id('FirstName')).sendKeys(firstName);
    await delay(1000);
    await driver.findElement(By.id('LastName')).sendKeys(lastName);
    await delay(1000);
    
    registeredEmail = `yasin${Date.now()}@mail.com`;
    await driver.findElement(By.id('Email')).sendKeys(registeredEmail);
    await delay(1000);
    await driver.findElement(By.id('Password')).sendKeys(password);
    await delay(1000);
    await driver.findElement(By.id('ConfirmPassword')).sendKeys(password);
    await delay(1000);
    await driver.findElement(By.id('register-button')).click();
    await delay(TIMEOUT);
    
    await logResult('Register', 'PASS');
  } catch (error) {
    console.error(`❌ Error in Register: ${error.message}`);
    await logResult('Register', 'FAIL');
  }
}

async function testLogin() {
  try {
    await driver.get("https://demo.nopcommerce.com/");
    const logoutButtons = await driver.findElements(By.linkText("Log out"));
    if (logoutButtons.length > 0) {
      await logoutButtons[0].click();
    }
    await delay(2000);
    
    await driver.findElement(By.linkText("Log in")).click();
    await delay(1000);
    await driver.findElement(By.id('Email')).clear();
    await driver.findElement(By.id('Email')).sendKeys(registeredEmail);
    await delay(1000);
    await driver.findElement(By.id('Password')).clear();
    await driver.findElement(By.id('Password')).sendKeys(password);
    await driver.findElement(By.xpath("//button[@class='button-1 login-button']")).click();
    await delay(TIMEOUT);
    
    await logResult('Login', 'PASS');
  } catch (error) {
    console.error(`❌ Error in Login: ${error.message}`);
    await logResult('Login', 'FAIL');
  }
}

async function testAddToCart() {
  try {
    await driver.findElement(By.xpath("/html/body/div[6]/div[2]/ul[1]/li[5]/a")).click();
    await delay(TIMEOUT);
    await driver.findElement(By.xpath("(//button[contains(text(),'Add to cart')])[1]")).click();
    await delay(TIMEOUT);
    
    await logResult('AddToCart', 'PASS');
  } catch (error) {
    console.error(`❌ Error in AddToCart: ${error.message}`);
    await logResult('AddToCart', 'FAIL');
  }
}

async function testChangeCurrency() {
  try {
    await driver.get("https://demo.nopcommerce.com/");
    await delay(TIMEOUT);
    const currencySelect = new Select(await driver.findElement(By.id('customerCurrency')));
    await currencySelect.selectByVisibleText("Euro");
    await delay(TIMEOUT);
    
    await logResult('ChangeCurrency', 'PASS');
  } catch (error) {
    console.error(`❌ Error in ChangeCurrency: ${error.message}`);
    await logResult('ChangeCurrency', 'FAIL');
  }
}

async function testSearch() {
  try {
    await driver.findElement(By.id('small-searchterms')).sendKeys("laptop");
    await delay(1000);
    await driver.findElement(By.xpath("//button[@class='button-1 search-box-button']")).click();
    await delay(TIMEOUT);
    
    await logResult('Search', 'PASS');
  } catch (error) {
    console.error(`❌ Error in Search: ${error.message}`);
    await logResult('Search', 'FAIL');
  }
}

async function testFilterCategory() {
  try {
    await driver.get("https://demo.nopcommerce.com/jewelry");
    await delay(TIMEOUT);
    const checkboxes = await driver.findElements(By.xpath("//div[@class='price-range-selector']//input[@type='checkbox']"));
    if (checkboxes.length > 0) {
      await checkboxes[0].click();
    }
    await delay(TIMEOUT);
    
    await logResult('FilterCategory', 'PASS');
  } catch (error) {
    console.error(`❌ Error in FilterCategory: ${error.message}`);
    await logResult('FilterCategory', 'FAIL');
  }
}

async function testSort() {
  try {
    const sortSelect = new Select(await driver.findElement(By.id('products-orderby')));
    await sortSelect.selectByVisibleText("Price: Low to High");
    await delay(TIMEOUT);
    
    await logResult('Sort', 'PASS');
  } catch (error) {
    console.error(`❌ Error in Sort: ${error.message}`);
    await logResult('Sort', 'FAIL');
  }
}

async function testViewDetails() {
  try {
    await driver.findElement(By.xpath("/html/body/div[6]/div[2]/ul[1]/li[5]/a")).click();
    await delay(TIMEOUT);
    await driver.findElement(By.xpath("(//h2[@class='product-title']/a)[1]")).click();
    await delay(TIMEOUT);
    
    await logResult('ViewDetails', 'PASS');
  } catch (error) {
    console.error(`❌ Error in ViewDetails: ${error.message}`);
    await logResult('ViewDetails', 'FAIL');
  }
}

async function testWishlist() {
  try {
    await driver.findElement(By.xpath("(//button[contains(text(),'Add to wishlist')])[1]")).click();
    await handleAlert();
    await delay(TIMEOUT);
    
    await logResult('Wishlist', 'PASS');
  } catch (error) {
    console.error(`❌ Error in Wishlist: ${error.message}`);
    await logResult('Wishlist', 'FAIL');
  }
}

async function testCompareList() {
  try {
    await driver.findElement(By.xpath("(//button[contains(text(),'Add to compare list')])[1]")).click();
    await handleAlert();
    await delay(TIMEOUT);
    
    await logResult('CompareList', 'PASS');
  } catch (error) {
    console.error(`❌ Error in CompareList: ${error.message}`);
    await logResult('CompareList', 'FAIL');
  }
}

async function testContactUs() {
  try {
    await driver.findElement(By.xpath("/html/body/div[6]/div[4]/div[1]/div[1]/ul/li[6]/a")).click();
    await delay(TIMEOUT);
    await driver.findElement(By.id('Enquiry')).sendKeys("Testing the contact form.");
    await delay(1000);
    await driver.findElement(By.name('send-email')).click();
    await delay(TIMEOUT);
    
    await logResult('ContactUs', 'PASS');
  } catch (error) {
    console.error(`❌ Error in ContactUs: ${error.message}`);
    await logResult('ContactUs', 'FAIL');
  }
}

async function testNewsletter() {
  try {
    await driver.findElement(By.id('newsletter-email')).sendKeys(registeredEmail);
    await delay(1000);
    await driver.findElement(By.id('newsletter-subscribe-button')).click();
    await delay(TIMEOUT);
    
    await logResult('Newsletter', 'PASS');
  } catch (error) {
    console.error(`❌ Error in Newsletter: ${error.message}`);
    await logResult('Newsletter', 'FAIL');
  }
}

async function testCoupon() {
  try {
    await driver.findElement(By.id('topcartlink')).click();
    await delay(TIMEOUT);
    const couponField = await driver.findElements(By.id('discountcouponcode'));
    if (couponField.length > 0) {
      await couponField[0].sendKeys("SAMPLE_COUPON");
      await delay(1000);
      await driver.findElement(By.name('applydiscountcouponcode')).click();
      await delay(TIMEOUT);
    }
    
    await logResult('Coupon', 'PASS');
  } catch (error) {
    console.error(`❌ Error in Coupon: ${error.message}`);
    await logResult('Coupon', 'FAIL');
  }
}

async function testCheckoutForm() {
  try {
    await driver.findElement(By.id('topcartlink')).click();
    await delay(TIMEOUT);
    await driver.findElement(By.id('termsofservice')).click();
    await delay(1000);
    await driver.findElement(By.id('checkout')).click();
    await delay(TIMEOUT);
    
    const countrySelect = new Select(await driver.findElement(By.id('BillingNewAddress_CountryId')));
    await countrySelect.selectByVisibleText(country);
    await delay(2000);
    
    const stateSelect = new Select(await driver.findElement(By.id('BillingNewAddress_StateProvinceId')));
    await stateSelect.selectByVisibleText(state);
    await delay(1000);
    
    await driver.findElement(By.id('BillingNewAddress_City')).sendKeys(city);
    await delay(1000);
    await driver.findElement(By.id('BillingNewAddress_Address1')).sendKeys(address);
    await delay(1000);
    await driver.findElement(By.id('BillingNewAddress_ZipPostalCode')).sendKeys(postalCode);
    await delay(1000);
    await driver.findElement(By.id('BillingNewAddress_PhoneNumber')).sendKeys(phoneNumber);
    await delay(1000);
    await driver.findElement(By.xpath("//*[@id='billing-buttons-container']/button[2]")).click();
    await delay(TIMEOUT);
    
    await logResult('CheckoutForm', 'PASS');
  } catch (error) {
    console.error(`❌ Error in CheckoutForm: ${error.message}`);
    await logResult('CheckoutForm', 'FAIL');
  }
}

async function testShippingMethod() {
  try {
    await delay(TIMEOUT);
    await driver.findElement(By.xpath("//*[@id='shipping-method-buttons-container']/button")).click();
    await delay(TIMEOUT);
    
    await logResult('ShippingMethod', 'PASS');
  } catch (error) {
    console.error(`❌ Error in ShippingMethod: ${error.message}`);
    await logResult('ShippingMethod', 'FAIL');
  }
}

async function testPaymentMethod() {
  try {
    await delay(TIMEOUT);
    await driver.findElement(By.xpath("//*[@id='payment-method-buttons-container']/button")).click();
    await delay(TIMEOUT);
    
    await logResult('PaymentMethod', 'PASS');
  } catch (error) {
    console.error(`❌ Error in PaymentMethod: ${error.message}`);
    await logResult('PaymentMethod', 'FAIL');
  }
}

async function testConfirmOrder() {
  try {
    await delay(TIMEOUT);
    await driver.findElement(By.xpath("//*[@id='payment-info-buttons-container']/button")).click();
    await delay(TIMEOUT);
    await driver.findElement(By.xpath("//button[@class='button-1 confirm-order-next-step-button']")).click();
    await delay(TIMEOUT);
    
    await logResult('ConfirmOrder', 'PASS');
  } catch (error) {
    console.error(`❌ Error in ConfirmOrder: ${error.message}`);
    await logResult('ConfirmOrder', 'FAIL');
  }
}

async function testMyAccount() {
  try {
    await driver.findElement(By.xpath("/html/body/div[6]/div[1]/div[1]/div[2]/div[1]/ul/li[1]/a")).click();
    await delay(TIMEOUT);
    
    await logResult('MyAccount', 'PASS');
  } catch (error) {
    console.error(`❌ Error in MyAccount: ${error.message}`);
    await logResult('MyAccount', 'FAIL');
  }
}

async function testUpdateMyAccount() {
  try {
    await driver.findElement(By.id('LastName')).clear();
    await delay(1000);
    await driver.findElement(By.id('LastName')).sendKeys('UpdatedLastName');
    await delay(1000);
    await driver.findElement(By.name('save-info-button')).click();
    await delay(TIMEOUT);
    
    const notificationClose = await driver.findElements(By.xpath('//*[@id="bar-notification"]/div/span'));
    if (notificationClose.length > 0) {
      await notificationClose[0].click();
    }
    
    await logResult('UpdateMyAccount', 'PASS');
  } catch (error) {
    console.error(`❌ Error in UpdateMyAccount: ${error.message}`);
    await logResult('UpdateMyAccount', 'FAIL');
  }
}

async function testLogout() {
  try {
    await delay(TIMEOUT);
    await driver.findElement(By.linkText('Log out')).click();
    await delay(TIMEOUT);
    
    await logResult('Logout', 'PASS');
  } catch (error) {
    console.error(`❌ Error in Logout: ${error.message}`);
    await logResult('Logout', 'FAIL');
  }
}

(async function main() {
  try {
    await initializeDriver();
    
    console.log("=".repeat(50));
    await testRegister();
    await delay(TIMEOUT);
    
    console.log("=".repeat(50));
    await testLogin();
    await delay(TIMEOUT);
    
    console.log("=".repeat(50));
    await testAddToCart();
    await delay(TIMEOUT);
    
    console.log("=".repeat(50));
    await testChangeCurrency();
    await delay(TIMEOUT);
    
    console.log("=".repeat(50));
    await testSearch();
    await delay(TIMEOUT);
    
    console.log("=".repeat(50));
    await testFilterCategory();
    await delay(TIMEOUT);
    
    console.log("=".repeat(50));
    await testSort();
    await delay(TIMEOUT);
    
    console.log("=".repeat(50));
    await testViewDetails();
    await delay(TIMEOUT);
    
    console.log("=".repeat(50));
    await testWishlist();
    await delay(TIMEOUT);
    
    console.log("=".repeat(50));
    await testCompareList();
    await delay(TIMEOUT);
    
    console.log("=".repeat(50));
    await testContactUs();
    await delay(TIMEOUT);
    
    console.log("=".repeat(50));
    await testNewsletter();
    await delay(TIMEOUT);
    
    console.log("=".repeat(50));
    await testCoupon();
    await delay(TIMEOUT);
    
    console.log("=".repeat(50));
    await testCheckoutForm();
    await delay(TIMEOUT);
    
    console.log("=".repeat(50));
    await testShippingMethod();
    await delay(TIMEOUT);
    
    console.log("=".repeat(50));
    await testPaymentMethod();
    await delay(TIMEOUT);
    
    console.log("=".repeat(50));
    await testConfirmOrder();
    await delay(TIMEOUT);
    
    console.log("=".repeat(50));
    await testMyAccount();
    await delay(TIMEOUT);
    
    console.log("=".repeat(50));
    await testUpdateMyAccount();
    await delay(TIMEOUT);
    
    console.log("=".repeat(50));
    await testLogout();
    
    // Log summary
    console.log("=".repeat(50));
    console.log("Test Summary: All tests completed.");
  } catch (e) {
    console.error(e);
  } finally {
    await driver.quit();
  }
})();