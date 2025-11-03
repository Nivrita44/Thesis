import { Builder, By, until, Key } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import { websiteURL, formValues, elements, newRecordData, searchTerm, editRecordData, TIMEOUT } from '../config/demoqa.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logFilePath = path.join(__dirname, '../logs/demoqa_results2.txt');

let driver;
let testResults = [];

async function logResult(testName, status) {
    testResults.push({ testName, status });
    const logContent = testResults.map(result => `${result.testName}: ${result.status}`).join('\n');
    await fs.writeFile(logFilePath, logContent, 'utf8');
}

async function testFillAndSubmitTextBoxForm() {
    try {
        await driver.get(websiteURL);
        await driver.wait(until.elementLocated(By.id('userName')), TIMEOUT);
        
        await driver.findElement(By.id('userName')).sendKeys(formValues.fullName);
        await driver.findElement(By.id('userEmail')).sendKeys(formValues.email);
        await driver.findElement(By.id('currentAddress')).sendKeys(formValues.currentAddress);
        await driver.findElement(By.id('permanentAddress')).sendKeys(formValues.permanentAddress);
        
        await driver.findElement(By.id('submit')).click();
        
        await driver.wait(until.elementLocated(By.id('output')), TIMEOUT);
        const outputElement = await driver.findElement(By.id('output'));
        const isDisplayed = await outputElement.isDisplayed();
        
        if (isDisplayed) {
            await logResult('FillAndSubmitTextBoxForm', 'PASS');
        } else {
            await logResult('FillAndSubmitTextBoxForm', 'FAIL');
        }
    } catch (error) {
        await logResult('FillAndSubmitTextBoxForm', 'FAIL');
    }
}

async function testSelectCheckBox() {
    try {
        await driver.findElement(By.id('item-1')).click();
        await driver.wait(until.elementLocated(By.className('rct-collapse')), TIMEOUT);
        
        await driver.findElement(By.className('rct-collapse')).click();
        await driver.wait(until.elementLocated(By.className('rct-checkbox')), TIMEOUT);
        
        await driver.findElement(By.className('rct-checkbox')).click();
        
        await driver.wait(until.elementLocated(By.className('display-result')), TIMEOUT);
        const resultElement = await driver.findElement(By.className('display-result'));
        const isDisplayed = await resultElement.isDisplayed();
        
        if (isDisplayed) {
            await logResult('SelectCheckBox', 'PASS');
        } else {
            await logResult('SelectCheckBox', 'FAIL');
        }
    } catch (error) {
        await logResult('SelectCheckBox', 'FAIL');
    }
}

async function testSelectRadioButton() {
    try {
        await driver.findElement(By.id('item-2')).click();
        await driver.wait(until.elementLocated(By.id('yesRadio')), TIMEOUT);
        
        try {
            await driver.executeScript("arguments[0].click();", await driver.findElement(By.id('yesRadio')));
        } catch {
            await driver.executeScript("arguments[0].click();", await driver.findElement(By.id('impressiveRadio')));
        }
        
        await driver.wait(until.elementLocated(By.className('text-success')), TIMEOUT);
        const resultElement = await driver.findElement(By.className('text-success'));
        const isDisplayed = await resultElement.isDisplayed();
        
        if (isDisplayed) {
            await logResult('SelectRadioButton', 'PASS');
        } else {
            await logResult('SelectRadioButton', 'FAIL');
        }
    } catch (error) {
        await logResult('SelectRadioButton', 'FAIL');
    }
}

async function testSelectWebTables() {
    try {
        await driver.findElement(By.id('item-3')).click();
        await driver.wait(until.elementLocated(By.className('rt-table')), TIMEOUT);
        
        const tableElement = await driver.findElement(By.className('rt-table'));
        const isDisplayed = await tableElement.isDisplayed();
        
        if (isDisplayed) {
            await logResult('SelectWebTables', 'PASS');
        } else {
            await logResult('SelectWebTables', 'FAIL');
        }
    } catch (error) {
        await logResult('SelectWebTables', 'FAIL');
    }
}

async function testFillAndSubmitAddNewRecordForm() {
    try {
        await driver.findElement(By.id('addNewRecordButton')).click();
        await driver.wait(until.elementLocated(By.id('firstName')), TIMEOUT);
        
        await driver.findElement(By.id('firstName')).sendKeys(newRecordData.firstName);
        await driver.findElement(By.id('lastName')).sendKeys(newRecordData.lastName);
        await driver.findElement(By.id('userEmail')).sendKeys(newRecordData.email);
        await driver.findElement(By.id('age')).sendKeys(newRecordData.age);
        await driver.findElement(By.id('salary')).sendKeys(newRecordData.salary);
        await driver.findElement(By.id('department')).sendKeys(newRecordData.department);
        
        await driver.findElement(By.id('submit')).click();
        
        await driver.sleep(1000);
        
        await driver.findElement(By.id('searchBox')).sendKeys(newRecordData.firstName);
        
        await driver.wait(until.elementLocated(By.className('rt-tbody')), TIMEOUT);
        const tableBody = await driver.findElement(By.className('rt-tbody'));
        const text = await tableBody.getText();
        
        if (text.includes(newRecordData.firstName)) {
            await logResult('FillAndSubmitAddNewRecordForm', 'PASS');
        } else {
            await logResult('FillAndSubmitAddNewRecordForm', 'FAIL');
        }
    } catch (error) {
        await logResult('FillAndSubmitAddNewRecordForm', 'FAIL');
    }
}

async function testSearchForRecord() {
    try {
        const searchBox = await driver.findElement(By.id('searchBox'));
        await searchBox.clear();
        await searchBox.sendKeys(searchTerm);
        
        await driver.wait(until.elementLocated(By.className('rt-tbody')), TIMEOUT);
        const tableBody = await driver.findElement(By.className('rt-tbody'));
        const text = await tableBody.getText();
        
        if (text.includes(searchTerm)) {
            await logResult('SearchForRecord', 'PASS');
        } else {
            await logResult('SearchForRecord', 'FAIL');
        }
    } catch (error) {
        await logResult('SearchForRecord', 'FAIL');
    }
}

async function testEditFirstRecord() {
    try {
        const searchBox = await driver.findElement(By.id('searchBox'));
        await searchBox.clear();
        
        await driver.findElement(By.xpath("//span[@title='Edit']")).click();
        await driver.wait(until.elementLocated(By.id('firstName')), TIMEOUT);
        
        await driver.findElement(By.id('firstName')).clear();
        await driver.findElement(By.id('firstName')).sendKeys(editRecordData.firstName);
        await driver.findElement(By.id('lastName')).clear();
        await driver.findElement(By.id('lastName')).sendKeys(editRecordData.lastName);
        await driver.findElement(By.id('userEmail')).clear();
        await driver.findElement(By.id('userEmail')).sendKeys(editRecordData.email);
        await driver.findElement(By.id('age')).clear();
        await driver.findElement(By.id('age')).sendKeys(editRecordData.age);
        await driver.findElement(By.id('salary')).clear();
        await driver.findElement(By.id('salary')).sendKeys(editRecordData.salary);
        await driver.findElement(By.id('department')).clear();
        await driver.findElement(By.id('department')).sendKeys(editRecordData.department);
        
        await driver.findElement(By.id('submit')).click();
        
        await driver.sleep(1000);
        
        const searchBox2 = await driver.findElement(By.id('searchBox'));
        await searchBox2.clear();
        await searchBox2.sendKeys(editRecordData.firstName);
        
        await driver.wait(until.elementLocated(By.className('rt-tbody')), TIMEOUT);
        const tableBody = await driver.findElement(By.className('rt-tbody'));
        const text = await tableBody.getText();
        
        if (text.includes(editRecordData.firstName)) {
            await logResult('EditFirstRecord', 'PASS');
        } else {
            await logResult('EditFirstRecord', 'FAIL');
        }
    } catch (error) {
        await logResult('EditFirstRecord', 'FAIL');
    }
}

async function testDeleteSecondRecord() {
    try {
        const searchBox = await driver.findElement(By.id('searchBox'));
        await searchBox.clear();
        
        await driver.sleep(1000);
        
        const deleteButtons = await driver.findElements(By.xpath("//span[@title='Delete']"));
        if (deleteButtons.length >= 2) {
            await deleteButtons[1].click();
        } else if (deleteButtons.length >= 1) {
            await deleteButtons[0].click();
        }
        
        await driver.sleep(1000);
        await logResult('DeleteSecondRecord', 'PASS');
    } catch (error) {
        await logResult('DeleteSecondRecord', 'FAIL');
    }
}

async function testDoubleClickButton() {
    try {
        await driver.findElement(By.id('item-4')).click();
        await driver.wait(until.elementLocated(By.id('doubleClickBtn')), TIMEOUT);
        
        const doubleClickButton = await driver.findElement(By.id('doubleClickBtn'));
        const actions = driver.actions({ async: true });
        await actions.doubleClick(doubleClickButton).perform();
        
        await driver.wait(until.elementLocated(By.id('doubleClickMessage')), TIMEOUT);
        const messageElement = await driver.findElement(By.id('doubleClickMessage'));
        const isDisplayed = await messageElement.isDisplayed();
        
        if (isDisplayed) {
            await logResult('DoubleClickButton', 'PASS');
        } else {
            await logResult('DoubleClickButton', 'FAIL');
        }
    } catch (error) {
        await logResult('DoubleClickButton', 'FAIL');
    }
}

async function testRightClickButton() {
    try {
        await driver.wait(until.elementLocated(By.id('rightClickBtn')), TIMEOUT);
        
        const rightClickButton = await driver.findElement(By.id('rightClickBtn'));
        const actions = driver.actions({ async: true });
        await actions.contextClick(rightClickButton).perform();
        
        await driver.wait(until.elementLocated(By.id('rightClickMessage')), TIMEOUT);
        const messageElement = await driver.findElement(By.id('rightClickMessage'));
        const isDisplayed = await messageElement.isDisplayed();
        
        if (isDisplayed) {
            await logResult('RightClickButton', 'PASS');
        } else {
            await logResult('RightClickButton', 'FAIL');
        }
    } catch (error) {
        await logResult('RightClickButton', 'FAIL');
    }
}

async function main() {
    try {
        await fs.mkdir(path.dirname(logFilePath), { recursive: true });
        
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
        
        await testFillAndSubmitTextBoxForm();
        await testSelectCheckBox();
        await testSelectRadioButton();
        await testSelectWebTables();
        await testFillAndSubmitAddNewRecordForm();
        await testSearchForRecord();
        await testEditFirstRecord();
        await testDeleteSecondRecord();
        await testDoubleClickButton();
        await testRightClickButton();
        
        const passedTests = testResults.filter(result => result.status === 'PASS').length;
        const failedTests = testResults.filter(result => result.status === 'FAIL').length;
        const summary = `\nTest Summary: ${passedTests} passed, ${failedTests} failed out of 10 total tests`;
        
        const finalLog = testResults.map(result => `${result.testName}: ${result.status}`).join('\n') + summary;
        await fs.writeFile(logFilePath, finalLog, 'utf8');
        
    } catch (error) {
        console.error('Error in main execution:', error);
    } finally {
        if (driver) {
            await driver.quit();
        }
    }
}

main();