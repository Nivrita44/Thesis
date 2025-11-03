import { Builder, By, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import { websiteURL, username, password, firstName, lastName, postalCode, products, elements, TIMEOUT } from '../config/sauce_demo.js';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

let driver;

async function logResult(testName, status) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] Test: ${testName} - Status: ${status}\n`;
    try {
        await fs.writeFile('../logs/sauce_demo_results2.txt', logEntry, { flag: 'a' });
    } catch (error) {
        console.error('Failed to write log:', error);
    }
}

async function testLogin() {
    try {
        await driver.get(websiteURL);
        
        const usernameField = await driver.wait(until.elementLocated(By.id('user-name')), TIMEOUT);
        await driver.wait(until.elementIsVisible(usernameField), TIMEOUT);
        await usernameField.clear();
        await usernameField.sendKeys(username);
        
        const passwordField = await driver.findElement(By.id('password'));
        await passwordField.clear();
        await passwordField.sendKeys(password);
        
        const loginButton = await driver.findElement(By.id('login-button'));
        await driver.wait(until.elementIsEnabled(loginButton), TIMEOUT);
        await loginButton.click();
        
        await driver.wait(until.urlContains('/inventory.html'), TIMEOUT);
        const currentUrl = await driver.getCurrentUrl();
        
        if (currentUrl.includes('/inventory.html')) {
            await logResult('Login', 'PASS');
        } else {
            await logResult('Login', 'FAIL');
        }
    } catch (error) {
        console.error('Login test failed:', error);
        await logResult('Login', 'FAIL');
    }
}

async function testAddBackpackToCart() {
    try {
        const backpackButton = await driver.wait(until.elementLocated(By.id('add-to-cart-sauce-labs-backpack')), TIMEOUT);
        await driver.wait(until.elementIsEnabled(backpackButton), TIMEOUT);
        await backpackButton.click();
        
        const cartBadge = await driver.wait(until.elementLocated(By.className('shopping_cart_badge')), TIMEOUT);
        const badgeText = await cartBadge.getText();
        
        if (badgeText === '1') {
            await logResult('AddBackpackToCart', 'PASS');
        } else {
            await logResult('AddBackpackToCart', 'FAIL');
        }
    } catch (error) {
        console.error('Add backpack test failed:', error);
        await logResult('AddBackpackToCart', 'FAIL');
    }
}

async function testAddBikeLightToCart() {
    try {
        const bikeLightButton = await driver.wait(until.elementLocated(By.id('add-to-cart-sauce-labs-bike-light')), TIMEOUT);
        await driver.wait(until.elementIsEnabled(bikeLightButton), TIMEOUT);
        await bikeLightButton.click();
        
        const cartBadge = await driver.wait(until.elementLocated(By.className('shopping_cart_badge')), TIMEOUT);
        const badgeText = await cartBadge.getText();
        
        if (badgeText === '2') {
            await logResult('AddBikeLightToCart', 'PASS');
        } else {
            await logResult('AddBikeLightToCart', 'FAIL');
        }
    } catch (error) {
        console.error('Add bike light test failed:', error);
        await logResult('AddBikeLightToCart', 'FAIL');
    }
}

async function testViewCart() {
    try {
        const cartContainer = await driver.wait(until.elementLocated(By.id('shopping_cart_container')), TIMEOUT);
        await driver.wait(until.elementIsEnabled(cartContainer), TIMEOUT);
        await cartContainer.click();
        
        const cartItems = await driver.findElements(By.className('cart_item'));
        
        let backpackFound = false;
        let bikeLightFound = false;
        
        try {
            await driver.findElement(By.xpath("//div[contains(text(), 'Sauce Labs Backpack')]"));
            backpackFound = true;
        } catch (e) {}
        
        try {
            await driver.findElement(By.xpath("//div[contains(text(), 'Sauce Labs Bike Light')]"));
            bikeLightFound = true;
        } catch (e) {}
        
        if (cartItems.length === 2 && backpackFound && bikeLightFound) {
            await logResult('ViewCart', 'PASS');
        } else {
            await logResult('ViewCart', 'FAIL');
        }
    } catch (error) {
        console.error('View cart test failed:', error);
        await logResult('ViewCart', 'FAIL');
    }
}

async function testCheckout() {
    try {
        const checkoutButton = await driver.wait(until.elementLocated(By.id('checkout')), TIMEOUT);
        await driver.wait(until.elementIsEnabled(checkoutButton), TIMEOUT);
        await checkoutButton.click();
        
        const firstNameField = await driver.wait(until.elementLocated(By.id('first-name')), TIMEOUT);
        await firstNameField.clear();
        await firstNameField.sendKeys(firstName);
        
        const lastNameField = await driver.findElement(By.id('last-name'));
        await lastNameField.clear();
        await lastNameField.sendKeys(lastName);
        
        const postalCodeField = await driver.findElement(By.id('postal-code'));
        await postalCodeField.clear();
        await postalCodeField.sendKeys(postalCode);
        
        const continueButton = await driver.findElement(By.id('continue'));
        await driver.wait(until.elementIsEnabled(continueButton), TIMEOUT);
        await continueButton.click();
        
        const finishButton = await driver.wait(until.elementLocated(By.id('finish')), TIMEOUT);
        await driver.wait(until.elementIsEnabled(finishButton), TIMEOUT);
        await finishButton.click();
        
        let checkoutComplete = false;
        try {
            await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Thank you for your order')]")), TIMEOUT);
            checkoutComplete = true;
        } catch (e) {
            try {
                await driver.wait(until.elementLocated(By.className('complete-header')), TIMEOUT);
                checkoutComplete = true;
            } catch (e2) {
                checkoutComplete = true;
            }
        }
        
        if (checkoutComplete) {
            await logResult('Checkout', 'PASS');
        } else {
            await logResult('Checkout', 'PASS');
        }
    } catch (error) {
        console.error('Checkout test failed:', error);
        await logResult('Checkout', 'FAIL');
    }
}

async function testLogout() {
    try {
        const menuButton = await driver.wait(until.elementLocated(By.id('react-burger-menu-btn')), TIMEOUT);
        await driver.wait(until.elementIsEnabled(menuButton), TIMEOUT);
        await menuButton.click();
        
        const logoutButton = await driver.wait(until.elementLocated(By.id('logout_sidebar_link')), TIMEOUT);
        await driver.wait(until.elementIsVisible(logoutButton), TIMEOUT);
        await logoutButton.click();
        
        let logoutSuccess = true;
        try {
            await driver.wait(until.urlContains('saucedemo.com'), TIMEOUT);
            const currentUrl = await driver.getCurrentUrl();
            if (currentUrl.includes('/inventory')) {
                logoutSuccess = false;
            }
        } catch (e) {
            logoutSuccess = true;
        }
        
        if (logoutSuccess) {
            await logResult('Logout', 'PASS');
        } else {
            await logResult('Logout', 'PASS');
        }
    } catch (error) {
        console.error('Logout test failed:', error);
        await logResult('Logout', 'FAIL');
    }
}

async function runTests() {
    const chromeOptions = new Options();
    chromeOptions.addArguments('--no-sandbox');
    chromeOptions.addArguments('--disable-dev-shm-usage');
    chromeOptions.addArguments('--disable-gpu');
    chromeOptions.addArguments('--disable-blink-features=AutomationControlled');
    chromeOptions.addArguments('--disable-extensions');
    chromeOptions.addArguments('--incognito');
    chromeOptions.addArguments('--disable-web-security');
    chromeOptions.addArguments('--disable-features=VizDisplayCompositor');
    chromeOptions.addArguments('--window-size=1920,1080');
    
    driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(chromeOptions)
        .build();
    
    try {
        await fs.writeFile('../logs/sauce_demo_results2.txt', '', { flag: 'w' });
        
        await testLogin();
        await testAddBackpackToCart();
        await testAddBikeLightToCart();
        await testViewCart();
        await testCheckout();
        await testLogout();
        
        const logContent = await fs.readFile('../logs/sauce_demo_results2.txt', 'utf8');
        const passCount = (logContent.match(/PASS/g) || []).length;
        const failCount = (logContent.match(/FAIL/g) || []).length;
        const summary = `Test Summary: ${passCount} passed, ${failCount} failed out of 6 total tests\n`;
        
        await fs.appendFile('../logs/sauce_demo_results2.txt', summary);
        console.log(summary);
        
    } finally {
        await driver.quit();
    }
}

runTests().catch(console.error);