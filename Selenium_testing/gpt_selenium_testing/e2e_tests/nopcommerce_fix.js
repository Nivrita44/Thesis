import { Builder, By, until, Key, Select } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome.js";

const TIMEOUT = 3000;
let passedCount = 0;
let totalCount = 0;
let driver;

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ----------------- SETUP -----------------
async function setup() {
  const options = new Options();
  options.addArguments("--incognito");
  options.addArguments("--start-maximized");
  options.addArguments("--disable-logging");
  options.addArguments("--disable-gpu");
  options.addArguments("--no-sandbox");

  driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();
  await driver.manage().setTimeouts({ implicit: 5000 });
  await driver.get("https://demo.nopcommerce.com/");
  await delay(2000);
}

// ----------------- TEARDOWN -----------------
async function teardown() {
  if (driver) {
    await delay(2000);
    await driver.quit();
    console.log("🔹 Browser closed successfully.");
  }
}

// ----------------- TEST RUNNER -----------------
async function runTest(name, testFn) {
  totalCount++;
  console.log(`\n@Test ${name}`);
  try {
    await testFn();
    console.log(`✅ ${name} - Passed`);
    passedCount++;
  } catch (err) {
    console.log(`❌ ${name} - Failed: ${err.message}`);
  }
  await delay(2000);
}

async function handleAlert(timeout = 2000) {
  try {
    await driver.wait(until.alertIsPresent(), timeout); // wait for alert
    let alert = await driver.switchTo().alert(); // switch to it
    await alert.accept(); // accept the alert
    console.log("✅ Alert handled successfully");
    await delay(500); // small delay after handling
  } catch (err) {
    console.log("ℹ️ No alert appeared");
  }
}

/* =====================
      TEST CASES
===================== */

// Global variable to store registered email
let registeredEmail = "";

async function testRegister() {
  await driver.get("https://demo.nopcommerce.com/register");
  await delay(TIMEOUT);
  await driver.findElement(By.id("gender-male")).click();
  await driver.findElement(By.id("FirstName")).sendKeys("Yasin");
  await delay(2000);
  await driver.findElement(By.id("LastName")).sendKeys("Bashar");
  await delay(2000);

  // Dynamic email stored globally
  registeredEmail = `yasin${Date.now()}@mail.com`;
  await driver.findElement(By.id("Email")).sendKeys(registeredEmail);
  await delay(1000);

  await driver.findElement(By.id("Password")).sendKeys("Password123");
  await delay(2000);
  await driver.findElement(By.id("ConfirmPassword")).sendKeys("Password123");
  await delay(1000);
  await driver.findElement(By.id("register-button")).click();
  await delay(TIMEOUT);
}

async function testLogin() {
  await driver.get("https://demo.nopcommerce.com/");
  await delay(2000);
  const logoutButtons = await driver.findElements(By.linkText("Log out"));
  if (logoutButtons.length > 0) {
    await logoutButtons[0].click();
    await delay(2000);
  }
  await driver.findElement(By.linkText("Log in")).click();
  await delay(2000);
  await driver.findElement(By.id("Email")).sendKeys(registeredEmail); // replace with valid login
  await driver.findElement(By.id("Password")).sendKeys("Password123");
  await driver
    .findElement(By.xpath("//button[@class='button-1 login-button']"))
    .click();
  await delay(TIMEOUT);
}

async function testAddToCart() {
  //   await driver.get("https://demo.nopcommerce.com/books");
  await driver
    .findElement(By.xpath("/html/body/div[6]/div[2]/ul[1]/li[5]/a"))
    .click();
  await delay(TIMEOUT);
  await driver
    .findElement(By.xpath("(//button[contains(text(),'Add to cart')])[1]"))
    .click();
  await delay(TIMEOUT);
}

async function testChangeCurrency() {
  await driver.get("https://demo.nopcommerce.com/");
  await delay(TIMEOUT);
  await driver.findElement(By.id("customerCurrency")).sendKeys("Euro");
  await delay(TIMEOUT);
}

async function testSearch() {
  //   await driver.get("https://demo.nopcommerce.com/");
  //   await delay(2000);
  await driver.findElement(By.id("small-searchterms")).sendKeys("laptop");
  await driver
    .findElement(By.xpath("//button[@class='button-1 search-box-button']"))
    .click();
  await delay(TIMEOUT);
}

// 🧩 Filter Category - Shoes page (Filter by Size and Color)
async function testFilterCategory() {
  try {
    await driver.get("https://demo.nopcommerce.com/jewelry");
    await delay(4000);

    // Scroll to make slider visible
    await driver.executeScript("window.scrollBy(0, 500)");
    await delay(1000);

    // Locate slider handles
    const leftHandle = await driver.findElement(
      By.xpath("//*[@id='price-range-slider']/span[1]")
    );
    const rightHandle = await driver.findElement(
      By.xpath("//*[@id='price-range-slider']/span[2]")
    );

    const actions = driver.actions({ async: true });

    // Drag right handle to max 2000
    await actions.dragAndDrop(rightHandle, { x: -80, y: 0 }).perform(); // adjust x based on screen resolution
    await delay(3000);

    // Drag left handle to min 0 if needed
    await actions.dragAndDrop(leftHandle, { x: 0, y: 0 }).perform();
    await delay(3000);

    console.log("✅ Jewelry price filter applied (0-2000)");
  } catch (err) {
    console.log(`❌ FilterCategory - Failed: ${err.message}`);
  }
}

async function testSort() {
  await driver
    .findElement(By.id("products-orderby"))
    .sendKeys("Price: High to Low");
  await delay(TIMEOUT);
}

async function testViewDetails() {
  await driver
    .findElement(By.xpath("/html/body/div[6]/div[2]/ul[1]/li[5]/a"))
    .click();
  await delay(TIMEOUT);
  await driver
    .findElement(By.xpath("(//h2[@class='product-title']/a)[1]"))
    .click();
  await delay(TIMEOUT);
}

async function testWishlist() {
  await driver
    .findElement(By.xpath("(//button[contains(text(),'Add to wishlist')])[1]"))
    .click();
  await delay(TIMEOUT);
  await handleAlert();
}

async function testCompareList() {
  await driver
    .findElement(
      By.xpath("(//button[contains(text(),'Add to compare list')])[1]")
    )
    .click();
  await delay(TIMEOUT);
  await handleAlert();
}

async function testContactUs() {
  await driver
    .findElement(By.xpath("/html/body/div[6]/div[4]/div[1]/div[1]/ul/li[6]/a"))
    .click();
  await delay(TIMEOUT);
  //   await driver.findElement(By.id("FullName")).sendKeys("Yasin Bashar");
  //   await driver.findElement(By.id("Email")).sendKeys("yasin@mail.com");
  await driver
    .findElement(By.id("Enquiry"))
    .sendKeys("Hello, I’m testing Selenium automation.");
  await delay(1000);
  await driver.findElement(By.name("send-email")).click();
  await delay(TIMEOUT);
}

async function testNewsletter() {
  await driver
    .findElement(By.id("newsletter-email"))
    .sendKeys(`yasin${Date.now()}@mail.com`);
  await delay(2000);
  await driver.findElement(By.id("newsletter-subscribe-button")).click();
  await delay(TIMEOUT);
}

async function testCoupon() {
  // Go to Cart Page
  await driver.findElement(By.id("topcartlink")).click();
  await delay(2000);
  const coupon = await driver.findElements(By.id("discountcouponcode"));
  if (coupon.length > 0) {
    await coupon[0].sendKeys("FAKECODE");
    await driver.findElement(By.name("applydiscountcouponcode")).click();
  }
  await delay(TIMEOUT);
}

// ✅ Unified Checkout Process
async function testCheckoutForm() {
  console.log("🔹 Running test: CheckoutForm");

  // Go to Cart Page
  await driver.findElement(By.id("topcartlink")).click();
  await delay(2000);

  // Click "I agree to terms"
  await driver.findElement(By.id("termsofservice")).click();
  await delay(1000);

  // Click Checkout
  await driver.findElement(By.id("checkout")).click();
  await delay(3000);

  // 🧾 Fill Checkout Form
  const countrySelect = await driver.findElement(
    By.id("BillingNewAddress_CountryId")
  );
  const countryDropdown = new Select(countrySelect);
  await countryDropdown.selectByVisibleText("India");
  await delay(1000);

  const stateSelect = await driver.findElement(
    By.id("BillingNewAddress_StateProvinceId")
  );
  const stateDropdown = new Select(stateSelect);
  await stateDropdown.selectByVisibleText("Bihar");
  await delay(1000);

  await driver.findElement(By.id("BillingNewAddress_City")).sendKeys("Patna");
  await driver
    .findElement(By.id("BillingNewAddress_Address1"))
    .sendKeys("MG Road");
  await driver
    .findElement(By.id("BillingNewAddress_ZipPostalCode"))
    .sendKeys("800001");
  await driver
    .findElement(By.id("BillingNewAddress_PhoneNumber"))
    .sendKeys("9876543210");
  await delay(1000);

  // Continue Billing
  await driver
    .findElement(By.xpath("//*[@id='billing-buttons-container']/button[2]"))
    .click();
  await delay(4000);
}

async function testShippingMethod() {
  console.log("🔹 Running test: ShippingMethod");

  await driver
    .findElement(
      By.xpath("//*[@id='shipping-method-buttons-container']/button")
    )
    .click();
  await delay(3000);
}

async function testPaymentMethod() {
  console.log("🔹 Running test: PaymentMethod");

  await driver
    .findElement(By.xpath("//*[@id='payment-method-buttons-container']/button"))
    .click();
  await delay(3000);
}

async function testConfirmOrder() {
  console.log("🔹 Running test: ConfirmOrder");

  const currentUrl = await driver.getCurrentUrl();
  if (currentUrl.includes("opc-payment_info")) {
    await driver
      .findElement(By.xpath("//*[@id='payment-info-buttons-container']/button"))
      .click();
    await delay(3000);
  }

  await driver
    .findElement(By.xpath("//*[@id='confirm-order-buttons-container']/button"))
    .click();
  await delay(4000);
}

async function testMyAccount() {
  await driver
    .findElement(
      By.xpath("/html/body/div[6]/div[1]/div[1]/div[2]/div[1]/ul/li[1]/a")
    )
    .click();
  await delay(TIMEOUT);
}

async function updateMyAccount() {
  await driver.findElement(By.id("LastName")).sendKeys(" Anik");
  await delay(TIMEOUT);
  await driver.findElement(By.name("save-info-button")).click();
  await delay(TIMEOUT);
  await driver.findElement(By.xpath('//*[@id="bar-notification"]/div/span')).click();
await delay(1000); // optional, to see effect


  await handleAlert();
}

async function testLogout() {
    await delay(5000); 
  const logout = await driver.findElements(By.linkText("Log out"));
  if (logout.length > 0) {
    await logout[0].click();
  }
  await delay(TIMEOUT);
}

/* =====================
        MAIN RUNNER
  ===================== */

// ----------------- MAIN -----------------
(async function main() {
  try {
    await setup();

    await runTest("Register", testRegister);
    await runTest("Login", testLogin);
    await runTest("AddToCart", testAddToCart);
    await runTest("ChangeCurrency", testChangeCurrency);
    await runTest("Search", testSearch);
    await runTest("FilterCategory", testFilterCategory);
    await runTest("Sort", testSort);
    await runTest("ViewDetails", testViewDetails);
    await runTest("Wishlist", testWishlist);
    await runTest("CompareList", testCompareList);
    await runTest("ContactUs", testContactUs);
    await runTest("Newsletter", testNewsletter);
    await runTest("Coupon", testCoupon);
    await runTest("CheckoutForm", testCheckoutForm);
    await runTest("ShippingMethod", testShippingMethod);
    await runTest("PaymentMethod", testPaymentMethod);
    await runTest("ConfirmOrder", testConfirmOrder);
    await runTest("MyAccount", testMyAccount);
    await runTest("UpdateMyAccount", updateMyAccount);
    await runTest("Logout", testLogout);

    console.log(`\n✅ ${passedCount}/${totalCount} tests passed successfully.`);
  } catch (err) {
    console.error("❌ Error during tests:", err);
  } finally {
    await teardown();
  }
})();
