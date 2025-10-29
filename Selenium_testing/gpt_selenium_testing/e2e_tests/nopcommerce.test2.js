import { Builder, By, until, Key } from 'selenium-webdriver';
import { Select } from 'selenium-webdriver/lib/select.js';
import { Options } from 'selenium-webdriver/chrome.js';
import { websiteURL, firstName, lastName, email, password, country, state, city, address, postalCode, phoneNumber, TIMEOUT } from '../config/nopcommerce.js';
import fs from 'fs/promises';

let registeredEmail = "";

async function logResult(testName, status) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] Test: ${testName} - Status: ${status}\n`;
  await fs.writeFile('../logs/nopcommerce_results2.txt', logEntry, { flag: 'a' });
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

async function main() {
  const chromeOptions = new Options()
    .addArguments('--incognito', '--start-maximized', '--disable-logging', '--disable-gpu', '--no-sandbox');

  const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();

  let passedTests = 0;
  let totalTests = 20;
  
  async function testRegister() {
    try {
      await driver.get("https://demo.nopcommerce.com/register");
      await driver.findElement(By.id('gender-male')).click();
      await driver.findElement(By.id('FirstName')).sendKeys(firstName);
      await driver.findElement(By.id('LastName')).sendKeys(lastName);
      registeredEmail = `yasin${Date.now()}@mail.com`;
      await driver.findElement(By.id('Email')).sendKeys(registeredEmail);
      await driver.findElement(By.id('Password')).sendKeys(password);
      await driver.findElement(By.id('ConfirmPassword')).sendKeys(password);
      await driver.findElement(By.id('register-button')).click();
      await logResult('Register', 'PASS');
      passedTests++;
      console.log("✅ Registration completed successfully!");
    } catch (err) {
      await logResult('Register', 'FAIL');
      console.error("❌ Registration test failed:", err);
    }
    console.log("=".repeat(50));
  }

  async function testLogin() {
    try {
      await driver.get("https://demo.nopcommerce.com/");
      const logoutButtons = await driver.findElements(By.linkText("Log out"));
      if (logoutButtons.length > 0) {
        await logoutButtons[0].click();
      }
      await driver.findElement(By.linkText("Log in")).click();
      await driver.findElement(By.id("Email")).sendKeys(registeredEmail);
      await driver.findElement(By.id("Password")).sendKeys(password);
      await driver.findElement(By.xpath("//button[@class='button-1 login-button']")).click();
      await logResult('Login', 'PASS');
      passedTests++;
      console.log("✅ Login completed successfully!");
    } catch (err) {
      await logResult('Login', 'FAIL');
      console.error("❌ Login test failed:", err);
    }
    console.log("=".repeat(50));
  }

  async function testAddToCart() {
    try {
      await driver.findElement(By.xpath("/html/body/div[6]/div[2]/ul[1]/li[5]/a")).click();
      await driver.findElement(By.xpath("(//button[contains(text(),'Add to cart')])[1]")).click();
      await logResult('AddToCart', 'PASS');
      passedTests++;
      console.log("✅ AddToCart completed successfully!");
    } catch (err) {
      await logResult('AddToCart', 'FAIL');
      console.error("❌ AddToCart test failed:", err);
    }
    console.log("=".repeat(50));
  }

  async function testChangeCurrency() {
    try {
      await driver.get("https://demo.nopcommerce.com/");
      const currencyDropdown = await driver.findElement(By.id('customerCurrency'));
      const selectCurrency = new Select(currencyDropdown);
      await selectCurrency.selectByVisibleText('Euro');
      await logResult('ChangeCurrency', 'PASS');
      passedTests++;
      console.log("✅ ChangeCurrency completed successfully!");
    } catch (err) {
      await logResult('ChangeCurrency', 'FAIL');
      console.error("❌ ChangeCurrency test failed:", err);
    }
    console.log("=".repeat(50));
  }

  async function testSearch() {
    try {
      await driver.findElement(By.id('small-searchterms')).sendKeys("laptop", Key.RETURN);
      await driver.wait(until.elementLocated(By.xpath("//button[@class='button-1 search-box-button']")), TIMEOUT);
      await logResult('Search', 'PASS');
      passedTests++;
      console.log("✅ Search completed successfully!");
    } catch (err) {
      await logResult('Search', 'FAIL');
      console.error("❌ Search test failed:", err);
    }
    console.log("=".repeat(50));
  }

  async function testFilterCategory() {
    try {
      await driver.get("https://demo.nopcommerce.com/jewelry");
      await driver.findElement(By.xpath("//input[@id='attribute-option-6-1']")).click();
      await logResult('FilterCategory', 'PASS');
      passedTests++;
      console.log("✅ FilterCategory completed successfully!");
    } catch (err) {
      await logResult('FilterCategory', 'FAIL');
      console.error("❌ FilterCategory test failed:", err);
    }
    console.log("=".repeat(50));
  }

  async function testSort() {
    try {
      const sortDropdown = await driver.findElement(By.id('products-orderby'));
      const selectSort = new Select(sortDropdown);
      await selectSort.selectByVisibleText('Price: High to Low');
      await logResult('Sort', 'PASS');
      passedTests++;
      console.log("✅ Sort completed successfully!");
    } catch (err) {
      await logResult('Sort', 'FAIL');
      console.error("❌ Sort test failed:", err);
    }
    console.log("=".repeat(50));
  }

  async function testViewDetails() {
    try {
      await driver.findElement(By.xpath("/html/body/div[6]/div[2]/ul[1]/li[5]/a")).click();
      await driver.findElement(By.xpath("(//h2[@class='product-title']/a)[1]")).click();
      await logResult('ViewDetails', 'PASS');
      passedTests++;
      console.log("✅ ViewDetails completed successfully!");
    } catch (err) {
      await logResult('ViewDetails', 'FAIL');
      console.error("❌ ViewDetails test failed:", err);
    }
    console.log("=".repeat(50));
  }

  async function testWishlist() {
    try {
      await driver.findElement(By.xpath("(//button[contains(text(),'Add to wishlist')])[1]")).click();
      await handleAlert();
      await logResult('Wishlist', 'PASS');
      passedTests++;
      console.log("✅ Wishlist completed successfully!");
    } catch (err) {
      await logResult('Wishlist', 'FAIL');
      console.error("❌ Wishlist test failed:", err);
    }
    console.log("=".repeat(50));
  }

  async function testCompareList() {
    try {
      await driver.findElement(By.xpath("(//button[contains(text(),'Add to compare list')])[1]")).click();
      await handleAlert();
      await logResult('CompareList', 'PASS');
      passedTests++;
      console.log("✅ CompareList completed successfully!");
    } catch (err) {
      await logResult('CompareList', 'FAIL');
      console.error("❌ CompareList test failed:", err);
    }
    console.log("=".repeat(50));
  }

  async function testContactUs() {
    try {
      await driver.findElement(By.xpath("/html/body/div[6]/div[4]/div[1]/div[1]/ul/li[6]/a")).click();
      await driver.findElement(By.id('Enquiry')).sendKeys("This is a test enquiry.");
      await driver.findElement(By.name('send-email')).click();
      await logResult('ContactUs', 'PASS');
      passedTests++;
      console.log("✅ ContactUs completed successfully!");
    } catch (err) {
      await logResult('ContactUs', 'FAIL');
      console.error("❌ ContactUs test failed:", err);
    }
    console.log("=".repeat(50));
  }

  async function testNewsletter() {
    try {
      await driver.findElement(By.id('newsletter-email')).sendKeys(email);
      await driver.findElement(By.id('newsletter-subscribe-button')).click();
      await logResult('Newsletter', 'PASS');
      passedTests++;
      console.log("✅ Newsletter completed successfully!");
    } catch (err) {
      await logResult('Newsletter', 'FAIL');
      console.error("❌ Newsletter test failed:", err);
    }
    console.log("=".repeat(50));
  }

  async function testCoupon() {
    try {
      await driver.findElement(By.id('topcartlink')).click();
      const discountField = await driver.findElements(By.id('discountcouponcode'));
      if (discountField.length > 0) {
        await driver.findElement(By.id('discountcouponcode')).sendKeys('COUPON2023');
        await driver.findElement(By.name('applydiscountcouponcode')).click();
      }
      await logResult('Coupon', 'PASS');
      passedTests++;
      console.log("✅ Coupon completed successfully!");
    } catch (err) {
      await logResult('Coupon', 'FAIL');
      console.error("❌ Coupon test failed:", err);
    }
    console.log("=".repeat(50));
  }

  async function testCheckoutForm() {
    try {
      await driver.findElement(By.id('topcartlink')).click();
      await driver.findElement(By.id('termsofservice')).click();
      await driver.findElement(By.id('checkout')).click();
      const countryDropdown = await driver.findElement(By.id('BillingNewAddress_CountryId'));
      const selectCountry = new Select(countryDropdown);
      await selectCountry.selectByVisibleText(country);
      await driver.wait(until.elementLocated(By.id('BillingNewAddress_StateProvinceId')), TIMEOUT);
      const stateDropdown = await driver.findElement(By.id('BillingNewAddress_StateProvinceId'));
      const selectState = new Select(stateDropdown);
      await selectState.selectByVisibleText(state);
      await driver.findElement(By.id('BillingNewAddress_City')).sendKeys(city);
      await driver.findElement(By.id('BillingNewAddress_Address1')).sendKeys(address);
      await driver.findElement(By.id('BillingNewAddress_ZipPostalCode')).sendKeys(postalCode);
      await driver.findElement(By.id('BillingNewAddress_PhoneNumber')).sendKeys(phoneNumber);
      await driver.findElement(By.xpath("//*[@id='billing-buttons-container']/button[2]")).click();
      await logResult('CheckoutForm', 'PASS');
      passedTests++;
      console.log("✅ CheckoutForm completed successfully!");
    } catch (err) {
      await logResult('CheckoutForm', 'FAIL');
      console.error("❌ CheckoutForm test failed:", err);
    }
    console.log("=".repeat(50));
  }

  async function testShippingMethod() {
    try {
      await driver.wait(until.elementLocated(By.xpath("//*[@id='shipping-method-buttons-container']/button")), TIMEOUT);
      await driver.findElement(By.xpath("//*[@id='shipping-method-buttons-container']/button")).click();
      await logResult('ShippingMethod', 'PASS');
      passedTests++;
      console.log("✅ ShippingMethod completed successfully!");
    } catch (err) {
      await logResult('ShippingMethod', 'FAIL');
      console.error("❌ ShippingMethod test failed:", err);
    }
    console.log("=".repeat(50));
  }

  async function testPaymentMethod() {
    try {
      await driver.wait(until.elementLocated(By.xpath("//*[@id='payment-method-buttons-container']/button")), TIMEOUT);
      await driver.findElement(By.xpath("//*[@id='payment-method-buttons-container']/button")).click();
      await logResult('PaymentMethod', 'PASS');
      passedTests++;
      console.log("✅ PaymentMethod completed successfully!");
    } catch (err) {
      await logResult('PaymentMethod', 'FAIL');
      console.error("❌ PaymentMethod test failed:", err);
    }
    console.log("=".repeat(50));
  }

  async function testConfirmOrder() {
    try {
      await driver.wait(until.elementLocated(By.xpath("//*[@id='payment-info-buttons-container']/button")), TIMEOUT);
      await driver.findElement(By.xpath("//*[@id='payment-info-buttons-container']/button")).click();
      await driver.wait(until.elementLocated(By.xpath("//*[@id='confirm-order-buttons-container']/button")), TIMEOUT);
      await driver.findElement(By.xpath("//*[@id='confirm-order-buttons-container']/button")).click();
      await logResult('ConfirmOrder', 'PASS');
      passedTests++;
      console.log("✅ ConfirmOrder completed successfully!");
    } catch (err) {
      await logResult('ConfirmOrder', 'FAIL');
      console.error("❌ ConfirmOrder test failed:", err);
    }
    console.log("=".repeat(50));
  }

  async function testMyAccount() {
    try {
      await driver.findElement(By.xpath("/html/body/div[6]/div[1]/div[1]/div[2]/div[1]/ul/li[1]/a")).click();
      await logResult('MyAccount', 'PASS');
      passedTests++;
      console.log("✅ MyAccount completed successfully!");
    } catch (err) {
      await logResult('MyAccount', 'FAIL');
      console.error("❌ MyAccount test failed:", err);
    }
    console.log("=".repeat(50));
  }

  async function testUpdateMyAccount() {
    try {
      await driver.findElement(By.id('LastName')).clear();
      await driver.findElement(By.id('LastName')).sendKeys(lastName + 'Updated');
      await driver.findElement(By.name('save-info-button')).click();
      await handleAlert();
      await logResult('UpdateMyAccount', 'PASS');
      passedTests++;
      console.log("✅ UpdateMyAccount completed successfully!");
    } catch (err) {
      await logResult('UpdateMyAccount', 'FAIL');
      console.error("❌ UpdateMyAccount test failed:", err);
    }
    console.log("=".repeat(50));
  }

  async function testLogout() {
    try {
      await driver.findElement(By.linkText('Log out')).click();
      await logResult('Logout', 'PASS');
      passedTests++;
      console.log("✅ Logout completed successfully!");
    } catch (err) {
      await logResult('Logout', 'FAIL');
      console.error("❌ Logout test failed:", err);
    }
    console.log("=".repeat(50));
  }

  try {
    await testRegister();
    await testLogin();
    await testAddToCart();
    await testChangeCurrency();
    await testSearch();
    await testFilterCategory();
    await testSort();
    await testViewDetails();
    await testWishlist();
    await testCompareList();
    await testContactUs();
    await testNewsletter();
    await testCoupon();
    await testCheckoutForm();
    await testShippingMethod();
    await testPaymentMethod();
    await testConfirmOrder();
    await testMyAccount();
    await testUpdateMyAccount();
    await testLogout();
    
    const summary = `Test Summary: ${passedTests} passed, ${totalTests - passedTests} failed out of ${totalTests} total tests\n`;
    await fs.writeFile('../logs/nopcommerce_results.txt', summary, { flag: 'a' });

  } finally {
    await driver.quit();
  }
}

main().catch(console.error);