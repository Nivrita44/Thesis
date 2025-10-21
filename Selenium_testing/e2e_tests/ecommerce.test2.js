import { Builder, By, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import { websiteURL, usernamePrefix, password, productName, TIMEOUT } from '../config/config.js';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

let username = "";

async function logResult(testName, status) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] Test: ${testName} - Status: ${status}\n`;
    await fs.writeFile('../logs/test_results2.txt', logMessage, { flag: 'a' });
}

async function testRegister(driver) {
    try {
        await driver.get(websiteURL);
        const signUpBtn = await driver.wait(until.elementLocated(By.id('signin2')), TIMEOUT);
        await signUpBtn.click();

        username = usernamePrefix + Math.floor(Math.random() * 10000);

        const usernameInput = await driver.wait(until.elementLocated(By.id('sign-username')), TIMEOUT);
        const passwordInput = await driver.findElement(By.id('sign-password'));

        await usernameInput.clear();
        await passwordInput.clear();
        await usernameInput.sendKeys(username);
        await passwordInput.sendKeys(password);

        const registerBtn = await driver.findElement(By.xpath("//button[contains(text(),'Sign up')]"));
        await registerBtn.click();

        await driver.wait(until.alertIsPresent(), TIMEOUT);
        await driver.switchTo().alert().accept();

        await logResult('Register', 'PASS');
    } catch (error) {
        await logResult('Register', 'FAIL');
    }
}

async function testLogin(driver) {
    try {
        await driver.get(websiteURL);
        const loginBtn = await driver.wait(until.elementLocated(By.id('login2')), TIMEOUT);
        await loginBtn.click();

        const usernameInput = await driver.wait(until.elementLocated(By.id('loginusername')), TIMEOUT);
        const passwordInput = await driver.findElement(By.id('loginpassword'));

        await usernameInput.clear();
        await passwordInput.clear();
        await usernameInput.sendKeys(username);
        await passwordInput.sendKeys(password);

        const loginSubmitBtn = await driver.findElement(By.xpath("//button[contains(text(),'Log in')]"));
        await loginSubmitBtn.click();

        await driver.wait(until.elementLocated(By.id('nameofuser')), TIMEOUT);
        await logResult('Login', 'PASS');
    } catch (error) {
        await logResult('Login', 'FAIL');
    }
}

async function testAddToCart(driver) {
    try {
        await driver.get(websiteURL);
        await driver.wait(until.elementLocated(By.linkText(productName)), TIMEOUT).click();

        const addToCartBtn = await driver.wait(until.elementLocated(By.xpath("//a[text()='Add to cart']")), TIMEOUT);
        await addToCartBtn.click();

        await driver.wait(until.alertIsPresent(), TIMEOUT);
        await driver.switchTo().alert().accept();

        await logResult('AddToCart', 'PASS');
    } catch (error) {
        await logResult('AddToCart', 'FAIL');
    }
}

async function testVerifyCart(driver) {
    try {
        await driver.get(websiteURL);
        const cartLink = await driver.wait(until.elementLocated(By.id('cartur')), TIMEOUT);
        await cartLink.click();

        const cartItems = await driver.wait(until.elementsLocated(By.css('#tbodyid tr')), TIMEOUT);
        const productInCart = cartItems.some(async (item) => {
            const itemText = await item.getText();
            return itemText.includes(productName);
        });

        if (productInCart) {
            await logResult('VerifyCart', 'PASS');
        } else {
            await logResult('VerifyCart', 'FAIL');
        }
    } catch (error) {
        await logResult('VerifyCart', 'FAIL');
    }
}

async function testCheckout(driver) {
    try {
        const placeOrderBtn = await driver.wait(until.elementLocated(By.xpath("//button[text()='Place Order']")), TIMEOUT);
        await placeOrderBtn.click();

        const nameInput = await driver.findElement(By.id('name'));
        const countryInput = await driver.findElement(By.id('country'));
        const cityInput = await driver.findElement(By.id('city'));
        const cardInput = await driver.findElement(By.id('card'));
        const monthInput = await driver.findElement(By.id('month'));
        const yearInput = await driver.findElement(By.id('year'));

        await nameInput.clear();
        await countryInput.clear();
        await cityInput.clear();
        await cardInput.clear();
        await monthInput.clear();
        await yearInput.clear();

        await nameInput.sendKeys('Test User');
        await countryInput.sendKeys('USA');
        await cityInput.sendKeys('New York');
        await cardInput.sendKeys('1234567890123456');
        await monthInput.sendKeys('12');
        await yearInput.sendKeys('2025');

        const purchaseBtn = await driver.findElement(By.xpath("//button[text()='Purchase']"));
        await purchaseBtn.click();

        const confirmationModal = await driver.wait(until.elementLocated(By.css('.sweet-alert.showSweetAlert.visible')), TIMEOUT);
        const okBtn = await confirmationModal.findElement(By.xpath("//button[text()='OK']"));
        await okBtn.click();

        await logResult('Checkout', 'PASS');
    } catch (error) {
        await logResult('Checkout', 'FAIL');
    }
}

(async function runTests() {
    const options = new Options().setPageLoadStrategy('normal');
    const driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();

    let passed = 0;
    let failed = 0;

    try {
        await testRegister(driver);
        await testLogin(driver);
        await testAddToCart(driver);
        await testVerifyCart(driver);
        await testCheckout(driver);
    } finally {
        // Calculate pass/fail counts
        const logContents = await fs.readFile('../logs/test_results2.txt', 'utf-8');
        const results = logContents.split('\n').filter(result => result);
        results.forEach(result => result.includes('PASS') ? passed++ : failed++);

        console.log(`Test Summary: ${passed} passed, ${failed} failed out of 5 total tests`);
        await driver.quit();
    }
})();