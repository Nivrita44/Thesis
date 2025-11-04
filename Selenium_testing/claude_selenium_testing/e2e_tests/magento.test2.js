import { Builder, By, until, Key } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import { websiteURL, elements, TIMEOUT } from '../config/magento.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logFilePath = path.join(__dirname, '../logs/magento_results2.txt');

let testResults = [];

async function logResult(testName, status) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] Test: ${testName} - Status: ${status}\n`;
    testResults.push({ testName, status });
    
    try {
        await fs.mkdir(path.dirname(logFilePath), { recursive: true });
        const existingLogs = testResults.map(result => 
            `[${timestamp}] Test: ${result.testName} - Status: ${result.status}`
        ).join('\n') + '\n';
        await fs.writeFile(logFilePath, existingLogs);
    } catch (error) {
        console.error('Failed to write log:', error);
    }
}

async function waitForElementToBeStable(driver, element, timeout) {
    await driver.wait(until.elementIsVisible(element), timeout);
    await driver.wait(until.elementIsEnabled(element), timeout);
}

async function createAccount(driver) {
    try {
        await driver.get(websiteURL);
        
        const createAccountLink = await driver.findElement(By.linkText('Create an Account'));
        await waitForElementToBeStable(driver, createAccountLink, TIMEOUT);
        await createAccountLink.click();
        
        const firstNameField = await driver.findElement(By.id('firstname'));
        await waitForElementToBeStable(driver, firstNameField, TIMEOUT);
        await firstNameField.sendKeys('Test');
        
        const lastNameField = await driver.findElement(By.id('lastname'));
        await waitForElementToBeStable(driver, lastNameField, TIMEOUT);
        await lastNameField.sendKeys('User');
        
        const subscribeCheckbox = await driver.findElement(By.id('is_subscribed'));
        await waitForElementToBeStable(driver, subscribeCheckbox, TIMEOUT);
        await subscribeCheckbox.click();
        
        const randomEmail = `test${Math.floor(Math.random() * 10000)}@exampl.com`;
        const emailField = await driver.findElement(By.id('email_address'));
        await waitForElementToBeStable(driver, emailField, TIMEOUT);
        await emailField.sendKeys(randomEmail);
        
        const passwordField = await driver.findElement(By.id('password'));
        await waitForElementToBeStable(driver, passwordField, TIMEOUT);
        await passwordField.sendKeys('TestPassword123!');
        
        const confirmPasswordField = await driver.findElement(By.id('password-confirmation'));
        await waitForElementToBeStable(driver, confirmPasswordField, TIMEOUT);
        await confirmPasswordField.sendKeys('TestPassword123!');
        
        const submitButton = await driver.findElement(By.css('button.submit'));
        await waitForElementToBeStable(driver, submitButton, TIMEOUT);
        await submitButton.click();
        
        await driver.wait(until.urlContains('customer/account/'), TIMEOUT);
        await logResult('CreateAccount', 'PASS');
        
    } catch (error) {
        console.error('CreateAccount test failed:', error);
        await logResult('CreateAccount', 'FAIL');
    }
}

async function whatsNew(driver) {
    try {
        await driver.get(websiteURL);
        
        const whatsNewLink = await driver.findElement(By.linkText("What's New"));
        await waitForElementToBeStable(driver, whatsNewLink, TIMEOUT);
        await whatsNewLink.click();
        
        await driver.executeScript("window.scrollBy(0, 500)");
        
        const productLink = await driver.findElement(By.linkText('Echo Fit Compression Short'));
        await waitForElementToBeStable(driver, productLink, TIMEOUT);
        await productLink.click();
        
        await driver.wait(until.urlContains('echo-fit-compression-short'), TIMEOUT);
        await logResult('WhatsNew', 'PASS');
        
    } catch (error) {
        console.error('WhatsNew test failed:', error);
        await logResult('WhatsNew', 'FAIL');
    }
}

async function addToCart(driver) {
    try {
        const sizeOption = await driver.findElement(By.id('option-label-size-144-item-171'));
        await waitForElementToBeStable(driver, sizeOption, TIMEOUT);
        await sizeOption.click();
        
        const colorOption = await driver.findElement(By.id('option-label-color-93-item-49'));
        await waitForElementToBeStable(driver, colorOption, TIMEOUT);
        await colorOption.click();
        
        const addToCartButton = await driver.findElement(By.id('product-addtocart-button'));
        await waitForElementToBeStable(driver, addToCartButton, TIMEOUT);
        await addToCartButton.click();
        
        const successMessage = await driver.findElement(By.css('.message-success'));
        await waitForElementToBeStable(driver, successMessage, TIMEOUT);
        
        await logResult('AddToCart', 'PASS');
        
    } catch (error) {
        console.error('AddToCart test failed:', error);
        await logResult('AddToCart', 'FAIL');
    }
}

async function addToWishlist(driver) {
    try {
        const wishlistButton = await driver.findElement(By.xpath('//*[@id="maincontent"]/div[2]/div/div[3]/div[5]/div/a[1]/span'));
        await waitForElementToBeStable(driver, wishlistButton, TIMEOUT);
        await wishlistButton.click();
        
        await driver.wait(until.urlContains('wishlist'), TIMEOUT);
        await logResult('AddToWishlist', 'PASS');
        
    } catch (error) {
        console.error('AddToWishlist test failed:', error);
        await logResult('AddToWishlist', 'FAIL');
    }
}

async function editCart(driver) {
    try {
        const cartIcon = await driver.findElement(By.css('.action.showcart'));
        await waitForElementToBeStable(driver, cartIcon, TIMEOUT);
        await cartIcon.click();
        
        const viewEditCartLink = await driver.findElement(By.linkText('View and Edit Cart'));
        await waitForElementToBeStable(driver, viewEditCartLink, TIMEOUT);
        await viewEditCartLink.click();
        
        const qtyInput = await driver.findElement(By.css('input.input-text.qty'));
        await waitForElementToBeStable(driver, qtyInput, TIMEOUT);
        await qtyInput.clear();
        await qtyInput.sendKeys('2');
        
        const updateButton = await driver.findElement(By.css('button.action.update'));
        await waitForElementToBeStable(driver, updateButton, TIMEOUT);
        await updateButton.click();
        
        await driver.wait(until.urlContains('checkout/cart'), TIMEOUT);
        await logResult('EditCart', 'PASS');
        
    } catch (error) {
        console.error('EditCart test failed:', error);
        await logResult('EditCart', 'FAIL');
    }
}

async function checkout(driver) {
    try {
        const checkoutButton = await driver.findElement(By.xpath('//*[@id="maincontent"]/div[3]/div/div[2]/div[1]/ul/li[1]/button'));
        await waitForElementToBeStable(driver, checkoutButton, TIMEOUT);
        await checkoutButton.click();
        
        await driver.wait(until.urlContains('checkout'), TIMEOUT);
        await logResult('Checkout', 'PASS');
        
    } catch (error) {
        console.error('Checkout test failed:', error);
        await logResult('Checkout', 'FAIL');
    }
}

async function checkoutForm(driver) {
    try {
        const emailField = await driver.findElement(By.id('customer-email'));
        await waitForElementToBeStable(driver, emailField, TIMEOUT);
        await emailField.sendKeys(`checkout${Math.floor(Math.random() * 1000)}@test.com`);
        
        const firstNameField = await driver.findElement(By.name('firstname'));
        await waitForElementToBeStable(driver, firstNameField, TIMEOUT);
        await firstNameField.sendKeys('John');
        
        const lastNameField = await driver.findElement(By.name('lastname'));
        await waitForElementToBeStable(driver, lastNameField, TIMEOUT);
        await lastNameField.sendKeys('Doe');
        
        const streetField = await driver.findElement(By.name('street[0]'));
        await waitForElementToBeStable(driver, streetField, TIMEOUT);
        await streetField.sendKeys('123 Main Street');
        
        const cityField = await driver.findElement(By.name('city'));
        await waitForElementToBeStable(driver, cityField, TIMEOUT);
        await cityField.sendKeys('New York');
        
        const stateField = await driver.findElement(By.name('region_id'));
        await waitForElementToBeStable(driver, stateField, TIMEOUT);
        await stateField.sendKeys('New York');
        
        const postcodeField = await driver.findElement(By.name('postcode'));
        await waitForElementToBeStable(driver, postcodeField, TIMEOUT);
        await postcodeField.sendKeys('10001');
        
        const telephoneField = await driver.findElement(By.name('telephone'));
        await waitForElementToBeStable(driver, telephoneField, TIMEOUT);
        await telephoneField.sendKeys('1234567890');
        
        const shippingMethod = await driver.findElement(By.xpath('//*[@id="checkout-shipping-method-load"]/table/tbody/tr[1]/td[1]/input'));
        await waitForElementToBeStable(driver, shippingMethod, TIMEOUT);
        await shippingMethod.click();
        
        const nextButton = await driver.findElement(By.css('.button.action.continue.primary'));
        await waitForElementToBeStable(driver, nextButton, TIMEOUT);
        await nextButton.click();
        
        await driver.wait(until.urlContains('payment'), TIMEOUT);
        await logResult('CheckoutForm', 'PASS');
        
    } catch (error) {
        console.error('CheckoutForm test failed:', error);
        await logResult('CheckoutForm', 'FAIL');
    }
}

async function subscribe(driver) {
    try {
        await driver.get(websiteURL);
        
        const newsletterInput = await driver.findElement(By.id('newsletter'));
        await waitForElementToBeStable(driver, newsletterInput, TIMEOUT);
        await newsletterInput.sendKeys(`newsletter${Math.floor(Math.random() * 1000)}@test.com`);
        
        const subscribeButton = await driver.findElement(By.css('.action.subscribe.primary'));
        await waitForElementToBeStable(driver, subscribeButton, TIMEOUT);
        await subscribeButton.click();
        
        await logResult('Subscribe', 'PASS');
        
    } catch (error) {
        console.error('Subscribe test failed:', error);
        await logResult('Subscribe', 'FAIL');
    }
}

async function signOut(driver) {
    try {
        const accountMenu = await driver.findElement(By.css('.action.switch'));
        await waitForElementToBeStable(driver, accountMenu, TIMEOUT);
        await accountMenu.click();
        
        const signOutLink = await driver.findElement(By.linkText('Sign Out'));
        await waitForElementToBeStable(driver, signOutLink, TIMEOUT);
        await signOutLink.click();
        
        await driver.wait(async () => {
            const currentUrl = await driver.getCurrentUrl();
            return currentUrl.includes('logoutSuccess') || currentUrl === websiteURL;
        }, TIMEOUT);
        
        await logResult('SignOut', 'PASS');
        
    } catch (error) {
        try {
            const customerName = await driver.findElement(By.css('.customer-name'));
            await waitForElementToBeStable(driver, customerName, TIMEOUT);
            await customerName.click();
            
            const signOutLink = await driver.findElement(By.linkText('Sign Out'));
            await waitForElementToBeStable(driver, signOutLink, TIMEOUT);
            await signOutLink.click();
            
            await logResult('SignOut', 'PASS');
        } catch (secondError) {
            console.error('SignOut test failed:', secondError);
            await logResult('SignOut', 'FAIL');
        }
    }
}

async function main() {
    const options = new Options();
    options.addArguments('--incognito');
    options.addArguments('--disable-web-security');
    options.addArguments('--disable-features=VizDisplayCompositor');
    options.addArguments('--no-first-run');
    options.addArguments('--disable-default-apps');
    
    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    
    try {
        await fs.mkdir(path.dirname(logFilePath), { recursive: true });
        
        console.log("=".repeat(50));
        console.log("Starting CreateAccount test");
        await createAccount(driver);
        console.log("CreateAccount test completed");
        
        console.log("=".repeat(50));
        console.log("Starting WhatsNew test");
        await whatsNew(driver);
        console.log("WhatsNew test completed");
        
        console.log("=".repeat(50));
        console.log("Starting AddToCart test");
        await addToCart(driver);
        console.log("AddToCart test completed");
        
        console.log("=".repeat(50));
        console.log("Starting AddToWishlist test");
        await addToWishlist(driver);
        console.log("AddToWishlist test completed");
        
        console.log("=".repeat(50));
        console.log("Starting EditCart test");
        await editCart(driver);
        console.log("EditCart test completed");
        
        console.log("=".repeat(50));
        console.log("Starting Checkout test");
        await checkout(driver);
        console.log("Checkout test completed");
        
        console.log("=".repeat(50));
        console.log("Starting CheckoutForm test");
        await checkoutForm(driver);
        console.log("CheckoutForm test completed");
        
        console.log("=".repeat(50));
        console.log("Starting Subscribe test");
        await subscribe(driver);
        console.log("Subscribe test completed");
        
        console.log("=".repeat(50));
        console.log("Starting SignOut test");
        await signOut(driver);
        console.log("SignOut test completed");
        
        const passedTests = testResults.filter(result => result.status === 'PASS').length;
        const failedTests = testResults.filter(result => result.status === 'FAIL').length;
        const totalTests = testResults.length;
        
        const summary = `Test Summary: