import { Builder, By, until, Key } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import { websiteURL, formValues, elements, newRecordData, searchTerm, editRecordData, TIMEOUT } from '../config/demoqa.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logFilePath = path.join(__dirname, '../logs/demoqa_chunk1_results.txt');

let testResults = [];
let passedTests = 0;
let failedTests = 0;
const totalTests = 5;

async function ensureLogDirectory() {
    await fs.mkdir(path.dirname(logFilePath), { recursive: true });
}

async function logResult(testName, status) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] Test: ${testName} - Status: ${status}`;
    testResults.push(logEntry);
    
    if (status === 'PASS') {
        passedTests++;
        console.log(`✅ ${testName} - PASSED`);
    } else {
        failedTests++;
        console.log(`❌ ${testName} - FAILED`);
    }
}

async function waitForElementToBeStable(driver, element, timeout) {
    await driver.wait(until.elementIsVisible(element), timeout);
    await driver.wait(until.elementIsEnabled(element), timeout);
}

async function setupDriver() {
    const options = new Options();
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');
    options.addArguments('--disable-gpu');
    options.addArguments('--disable-blink-features=AutomationControlled');
    options.addArguments('--disable-extensions');
    options.addArguments('--incognito');
    options.addArguments('--disable-web-security');
    options.addArguments('--disable-features=VizDisplayCompositor');
    options.addArguments('--window-size=1920,1080');

    return await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
}

async function FillAndSubmitTextBoxForm(driver) {
    try {
        console.log('🚀 Starting FillAndSubmitTextBoxForm test...');
        
        await driver.get(websiteURL);
        await driver.sleep(3000);

        const fullNameField = await driver.wait(until.elementLocated(By.id('userName')), TIMEOUT);
        await waitForElementToBeStable(driver, fullNameField, TIMEOUT);
        await fullNameField.clear();
        await fullNameField.sendKeys(formValues.fullName);
        await driver.sleep(500);

        const emailField = await driver.findElement(By.id('userEmail'));
        await waitForElementToBeStable(driver, emailField, TIMEOUT);
        await emailField.clear();
        await emailField.sendKeys(formValues.email);
        await driver.sleep(500);

        const currentAddressField = await driver.findElement(By.id('currentAddress'));
        await waitForElementToBeStable(driver, currentAddressField, TIMEOUT);
        await currentAddressField.clear();
        await currentAddressField.sendKeys(formValues.currentAddress);
        await driver.sleep(500);

        const permanentAddressField = await driver.findElement(By.id('permanentAddress'));
        await waitForElementToBeStable(driver, permanentAddressField, TIMEOUT);
        await permanentAddressField.clear();
        await permanentAddressField.sendKeys(formValues.permanentAddress);
        await driver.sleep(1000);

        const submitButton = await driver.findElement(By.id('submit'));
        await waitForElementToBeStable(driver, submitButton, TIMEOUT);
        await driver.executeScript("arguments[0].scrollIntoView(true);", submitButton);
        await driver.sleep(1000);
        await submitButton.click();
        await driver.sleep(3000);

        const outputDiv = await driver.wait(until.elementLocated(By.id('output')), TIMEOUT);
        const isVisible = await outputDiv.isDisplayed();
        
        if (isVisible) {
            await logResult('FillAndSubmitTextBoxForm', 'PASS');
        } else {
            await logResult('FillAndSubmitTextBoxForm', 'FAIL');
        }
    } catch (error) {
        console.error('Error in FillAndSubmitTextBoxForm:', error);
        await logResult('FillAndSubmitTextBoxForm', 'FAIL');
    }
}

async function SelectCheckBox(driver) {
    try {
        console.log('🚀 Starting SelectCheckBox test...');
        
        await driver.get('https://demoqa.com/checkbox');
        await driver.sleep(3000);

        const expandButton = await driver.wait(until.elementLocated(By.css('.rct-option-expand-all')), TIMEOUT);
        await waitForElementToBeStable(driver, expandButton, TIMEOUT);
        await expandButton.click();
        await driver.sleep(2000);

        const desktopCheckbox = await driver.wait(until.elementLocated(By.css('label[for="tree-node-desktop"] .rct-checkbox')), TIMEOUT);
        await waitForElementToBeStable(driver, desktopCheckbox, TIMEOUT);
        await desktopCheckbox.click();
        await driver.sleep(1000);

        const documentsCheckbox = await driver.findElement(By.css('label[for="tree-node-documents"] .rct-checkbox'));
        await waitForElementToBeStable(driver, documentsCheckbox, TIMEOUT);
        await documentsCheckbox.click();
        await driver.sleep(2000);

        const resultDiv = await driver.wait(until.elementLocated(By.id('result')), TIMEOUT);
        const isVisible = await resultDiv.isDisplayed();
        
        if (isVisible) {
            await logResult('SelectCheckBox', 'PASS');
        } else {
            await logResult('SelectCheckBox', 'FAIL');
        }
    } catch (error) {
        console.error('Error in SelectCheckBox:', error);
        await logResult('SelectCheckBox', 'FAIL');
    }
}

async function SelectRadioButton(driver) {
    try {
        console.log('🚀 Starting SelectRadioButton test...');
        
        await driver.get('https://demoqa.com/radio-button');
        await driver.sleep(3000);

        const yesRadioLabel = await driver.wait(until.elementLocated(By.css('label[for="yesRadio"]')), TIMEOUT);
        await waitForElementToBeStable(driver, yesRadioLabel, TIMEOUT);
        await yesRadioLabel.click();
        await driver.sleep(1000);

        const impressiveRadioLabel = await driver.findElement(By.css('label[for="impressiveRadio"]'));
        await waitForElementToBeStable(driver, impressiveRadioLabel, TIMEOUT);
        await impressiveRadioLabel.click();
        await driver.sleep(2000);

        const resultText = await driver.wait(until.elementLocated(By.css('.text-success')), TIMEOUT);
        const text = await resultText.getText();
        
        if (text === 'Impressive') {
            await logResult('SelectRadioButton', 'PASS');
        } else {
            await logResult('SelectRadioButton', 'FAIL');
        }
    } catch (error) {
        console.error('Error in SelectRadioButton:', error);
        await logResult('SelectRadioButton', 'FAIL');
    }
}

async function SelectWebTables(driver) {
    try {
        console.log('🚀 Starting SelectWebTables test...');
        
        await driver.get('https://demoqa.com/webtables');
        await driver.sleep(3000);

        const searchBox = await driver.wait(until.elementLocated(By.id('searchBox')), TIMEOUT);
        await waitForElementToBeStable(driver, searchBox, TIMEOUT);
        await searchBox.clear();
        await searchBox.sendKeys(searchTerm);
        await driver.sleep(2000);

        const tableRows = await driver.findElements(By.css('.rt-tbody .rt-tr-group'));
        let foundRecord = false;
        
        for (let row of tableRows) {
            const cells = await row.findElements(By.css('.rt-td'));
            if (cells.length > 0) {
                const firstCellText = await cells[0].getText();
                if (firstCellText.includes(searchTerm)) {
                    foundRecord = true;
                    break;
                }
            }
        }
        
        if (foundRecord) {
            await logResult('SelectWebTables', 'PASS');
        } else {
            await logResult('SelectWebTables', 'FAIL');
        }
    } catch (error) {
        console.error('Error in SelectWebTables:', error);
        await logResult('SelectWebTables', 'FAIL');
    }
}

async function FillAndSubmitAddNewRecordForm(driver) {
    try {
        console.log('🚀 Starting FillAndSubmitAddNewRecordForm test...');
        
        await driver.get('https://demoqa.com/webtables');
        await driver.sleep(3000);

        const addButton = await driver.wait(until.elementLocated(By.id('addNewRecordButton')), TIMEOUT);
        await waitForElementToBeStable(driver, addButton, TIMEOUT);
        await addButton.click();
        await driver.sleep(2000);

        const firstNameField = await driver.wait(until.elementLocated(By.id('firstName')), TIMEOUT);
        await waitForElementToBeStable(driver, firstNameField, TIMEOUT);
        await firstNameField.clear();
        await firstNameField.sendKeys(newRecordData.firstName);
        await driver.sleep(500);

        const lastNameField = await driver.findElement(By.id('lastName'));
        await waitForElementToBeStable(driver, lastNameField, TIMEOUT);
        await lastNameField.clear();
        await lastNameField.sendKeys(newRecordData.lastName);
        await driver.sleep(500);

        const emailField = await driver.findElement(By.id('userEmail'));
        await waitForElementToBeStable(driver, emailField, TIMEOUT);
        await emailField.clear();
        await emailField.sendKeys(newRecordData.email);
        await driver.sleep(500);

        const ageField = await driver.findElement(By.id('age'));
        await waitForElementToBeStable(driver, ageField, TIMEOUT);
        await ageField.clear();
        await ageField.sendKeys(newRecordData.age.toString());
        await driver.sleep(500);

        const salaryField = await driver.findElement(By.id('salary'));
        await waitForElementToBeStable(driver, salaryField, TIMEOUT);
        await salaryField.clear();
        await salaryField.sendKeys(newRecordData.salary.toString());
        await driver.sleep(500);

        const departmentField = await driver.findElement(By.id('department'));
        await waitForElementToBeStable(driver, departmentField, TIMEOUT);
        await departmentField.clear();
        await departmentField.sendKeys(newRecordData.department);
        await driver.sleep(1000);

        const submitButton = await driver.findElement(By.id('submit'));
        await waitForElementToBeStable(driver, submitButton, TIMEOUT);
        await submitButton.click();
        await driver.sleep(3000);

        const tableRows = await driver.findElements(By.css('.rt-tbody .rt-tr-group'));
        let recordAdded = false;
        
        for (let row of tableRows) {
            const cells = await row.findElements(By.css('.rt-td'));
            if (cells.length > 0) {
                const firstCellText = await cells[0].getText();
                if (firstCellText.includes(newRecordData.firstName)) {
                    recordAdded = true;
                    break;
                }
            }
        }
        
        if (recordAdded) {
            await logResult('FillAndSubmitAddNewRecordForm', 'PASS');
        } else {
            await logResult('FillAndSubmitAddNewRecordForm', 'FAIL');
        }
    } catch (error) {
        console.error('Error in FillAndSubmitAddNewRecordForm:', error);
        await logResult('FillAndSubmitAddNewRecordForm', 'FAIL');
    }
}

async function writeResultsToFile() {
    const summary = `Test Summary: ${passedTests} passed, ${failedTests} failed out of ${totalTests} total tests`;
    testResults.push(summary);
    const allResults = testResults.join('\n');
    await fs.writeFile(logFilePath, allResults, 'utf8');
    console.log(`\n🎉 Test results written to: ${logFilePath}`);
    console.log(summary);
}

async function runAllTests() {
    await ensureLogDirectory();
    
    let driver;
    try {
        driver = await setupDriver();
        console.log('🚀 Starting DemoQA E2E Test Suite...\n');

        await FillAndSubmitTextBoxForm(driver);
        console.log("=".repeat(50));
        await driver.sleep(3000);

        await SelectCheckBox(driver);
        console.log("=".repeat(50));
        await driver.sleep(3000);

        await SelectRadioButton(driver);
        console.log("=".repeat(50));
        await driver.sleep(3000);

        await SelectWebTables(driver);
        console.log("=".repeat(50));
        await driver.sleep(3000);

        await FillAndSubmitAddNewRecordForm(driver);
        console.log("=".repeat(50));

        await writeResultsToFile();
        
    } catch (error) {
        console.error('❌ Test suite failed:', error);
    } finally {
        if (driver) {
            await driver.quit();
            console.log('🎉 Test suite completed and browser closed');
        }
    }
}

runAllTests().catch(console.error);