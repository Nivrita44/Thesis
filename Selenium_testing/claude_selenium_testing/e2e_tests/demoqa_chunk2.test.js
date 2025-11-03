import { Builder, By, until, Key } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import { websiteURL, formValues, elements, newRecordData, searchTerm, editRecordData, TIMEOUT } from '../config/demoqa.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logFilePath = path.join(__dirname, '../logs/demoqa_chunk2_results.txt');

let driver;
let testResults = [];

async function logResult(testName, status) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] Test: ${testName} - Status: ${status}`;
    console.log(logEntry);
    testResults.push({ testName, status });
    
    await fs.mkdir(path.dirname(logFilePath), { recursive: true });
    
    const allLogs = testResults.map(result => 
        `[${new Date().toISOString()}] Test: ${result.testName} - Status: ${result.status}`
    ).join('\n');
    
    const passedTests = testResults.filter(r => r.status === 'PASS').length;
    const failedTests = testResults.filter(r => r.status === 'FAIL').length;
    const summary = `\nTest Summary: ${passedTests} passed, ${failedTests} failed out of ${testResults.length} total tests`;
    
    await fs.writeFile(logFilePath, allLogs + summary);
}

async function waitForElementToBeStable(driver, element, timeout = TIMEOUT) {
    await driver.wait(until.elementIsVisible(element), timeout);
    await driver.wait(until.elementIsEnabled(element), timeout);
}

async function setupBrowser() {
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
    
    await driver.manage().window().maximize();
    console.log('🚀 Browser initialized successfully');
}

async function searchForRecord() {
    try {
        console.log('🔍 Starting Search For Record test...');
        
        await driver.get('https://demoqa.com/webtables');
        await driver.sleep(3000);
        
        const searchBox = await driver.findElement(By.id('searchBox'));
        await waitForElementToBeStable(driver, searchBox);
        await driver.sleep(1000);
        
        await searchBox.clear();
        await driver.sleep(500);
        await searchBox.sendKeys(searchTerm);
        await driver.sleep(2000);
        
        const tableRows = await driver.findElements(By.css('.rt-tbody .rt-tr-group'));
        let recordFound = false;
        
        for (let row of tableRows) {
            const cellText = await row.getText();
            if (cellText.includes(searchTerm)) {
                recordFound = true;
                break;
            }
        }
        
        if (recordFound) {
            console.log(`✅ Search successful - Found record containing: ${searchTerm}`);
            await logResult('SearchForRecord', 'PASS');
        } else {
            console.log(`❌ Search failed - No record found containing: ${searchTerm}`);
            await logResult('SearchForRecord', 'FAIL');
        }
        
    } catch (error) {
        console.log(`❌ Search For Record test failed: ${error.message}`);
        await logResult('SearchForRecord', 'FAIL');
    }
}

async function editFirstRecord() {
    try {
        console.log('✏️ Starting Edit First Record test...');
        
        await driver.get('https://demoqa.com/webtables');
        await driver.sleep(3000);
        
        const editButton = await driver.findElement(By.css('[title="Edit"]'));
        await waitForElementToBeStable(driver, editButton);
        await driver.sleep(1000);
        await editButton.click();
        await driver.sleep(2000);
        
        const firstNameField = await driver.findElement(By.id('firstName'));
        await waitForElementToBeStable(driver, firstNameField);
        await firstNameField.clear();
        await driver.sleep(500);
        await firstNameField.sendKeys(editRecordData.firstName);
        await driver.sleep(1000);
        
        const lastNameField = await driver.findElement(By.id('lastName'));
        await waitForElementToBeStable(driver, lastNameField);
        await lastNameField.clear();
        await driver.sleep(500);
        await lastNameField.sendKeys(editRecordData.lastName);
        await driver.sleep(1000);
        
        const submitButton = await driver.findElement(By.id('submit'));
        await waitForElementToBeStable(driver, submitButton);
        await driver.sleep(1000);
        await submitButton.click();
        await driver.sleep(3000);
        
        const updatedRow = await driver.findElement(By.css('.rt-tbody .rt-tr-group'));
        const updatedText = await updatedRow.getText();
        
        if (updatedText.includes(editRecordData.firstName) && updatedText.includes(editRecordData.lastName)) {
            console.log('✅ Edit First Record test passed - Record updated successfully');
            await logResult('EditFirstRecord', 'PASS');
        } else {
            console.log('❌ Edit First Record test failed - Record not updated properly');
            await logResult('EditFirstRecord', 'FAIL');
        }
        
    } catch (error) {
        console.log(`❌ Edit First Record test failed: ${error.message}`);
        await logResult('EditFirstRecord', 'FAIL');
    }
}

async function deleteSecondRecord() {
    try {
        console.log('🗑️ Starting Delete Second Record test...');
        
        await driver.get('https://demoqa.com/webtables');
        await driver.sleep(3000);
        
        const initialRows = await driver.findElements(By.css('.rt-tbody .rt-tr-group:not([style*="display: none"])'));
        const initialCount = initialRows.length;
        console.log(`Initial record count: ${initialCount}`);
        
        const deleteButtons = await driver.findElements(By.css('[title="Delete"]'));
        if (deleteButtons.length >= 2) {
            await waitForElementToBeStable(driver, deleteButtons[1]);
            await driver.sleep(1000);
            await deleteButtons[1].click();
            await driver.sleep(3000);
            
            const finalRows = await driver.findElements(By.css('.rt-tbody .rt-tr-group:not([style*="display: none"])'));
            const finalCount = finalRows.length;
            console.log(`Final record count: ${finalCount}`);
            
            if (finalCount < initialCount) {
                console.log('✅ Delete Second Record test passed - Record deleted successfully');
                await logResult('DeleteSecondRecord', 'PASS');
            } else {
                console.log('❌ Delete Second Record test failed - Record count unchanged');
                await logResult('DeleteSecondRecord', 'FAIL');
            }
        } else {
            console.log('❌ Delete Second Record test failed - Not enough records to delete');
            await logResult('DeleteSecondRecord', 'FAIL');
        }
        
    } catch (error) {
        console.log(`❌ Delete Second Record test failed: ${error.message}`);
        await logResult('DeleteSecondRecord', 'FAIL');
    }
}

async function doubleClickButton() {
    try {
        console.log('👆 Starting Double Click Button test...');
        
        await driver.get('https://demoqa.com/buttons');
        await driver.sleep(3000);
        
        const doubleClickBtn = await driver.findElement(By.id('doubleClickBtn'));
        await waitForElementToBeStable(driver, doubleClickBtn);
        await driver.sleep(1000);
        
        const actions = await driver.actions({bridge: true});
        await actions.doubleClick(doubleClickBtn).perform();
        await driver.sleep(2000);
        
        try {
            const message = await driver.findElement(By.id('doubleClickMessage'));
            const messageText = await message.getText();
            
            if (messageText.includes('double click')) {
                console.log('✅ Double Click Button test passed - Message displayed correctly');
                await logResult('DoubleClickButton', 'PASS');
            } else {
                console.log('❌ Double Click Button test failed - Incorrect message displayed');
                await logResult('DoubleClickButton', 'FAIL');
            }
        } catch (msgError) {
            console.log('❌ Double Click Button test failed - No message displayed');
            await logResult('DoubleClickButton', 'FAIL');
        }
        
    } catch (error) {
        console.log(`❌ Double Click Button test failed: ${error.message}`);
        await logResult('DoubleClickButton', 'FAIL');
    }
}

async function rightClickButton() {
    try {
        console.log('👆 Starting Right Click Button test...');
        
        await driver.get('https://demoqa.com/buttons');
        await driver.sleep(3000);
        
        const rightClickBtn = await driver.findElement(By.id('rightClickBtn'));
        await waitForElementToBeStable(driver, rightClickBtn);
        await driver.sleep(1000);
        
        const actions = await driver.actions({bridge: true});
        await actions.contextClick(rightClickBtn).perform();
        await driver.sleep(2000);
        
        try {
            const message = await driver.findElement(By.id('rightClickMessage'));
            const messageText = await message.getText();
            
            if (messageText.includes('right click')) {
                console.log('✅ Right Click Button test passed - Message displayed correctly');
                await logResult('RightClickButton', 'PASS');
            } else {
                console.log('❌ Right Click Button test failed - Incorrect message displayed');
                await logResult('RightClickButton', 'FAIL');
            }
        } catch (msgError) {
            console.log('❌ Right Click Button test failed - No message displayed');
            await logResult('RightClickButton', 'FAIL');
        }
        
    } catch (error) {
        console.log(`❌ Right Click Button test failed: ${error.message}`);
        await logResult('RightClickButton', 'FAIL');
    }
}

async function runTests() {
    try {
        await fs.mkdir(path.dirname(logFilePath), { recursive: true });
        
        console.log('🎯 Starting DemoQA E2E Test Suite - Chunk 2');
        console.log('='.repeat(50));
        
        await setupBrowser();
        
        console.log('='.repeat(50));
        await searchForRecord();
        await driver.sleep(3000);
        
        console.log('='.repeat(50));
        await editFirstRecord();
        await driver.sleep(3000);
        
        console.log('='.repeat(50));
        await deleteSecondRecord();
        await driver.sleep(3000);
        
        console.log('='.repeat(50));
        await doubleClickButton();
        await driver.sleep(3000);
        
        console.log('='.repeat(50));
        await rightClickButton();
        await driver.sleep(3000);
        
        console.log('='.repeat(50));
        console.log('🎉 All tests completed!');
        
        const passedTests = testResults.filter(r => r.status === 'PASS').length;
        const failedTests = testResults.filter(r => r.status === 'FAIL').length;
        console.log(`📊 Final Results: ${passedTests} passed, ${failedTests} failed out of ${testResults.length} total tests`);
        
    } catch (error) {
        console.log(`❌ Test suite failed: ${error.message}`);
    } finally {
        if (driver) {
            await driver.quit();
            console.log('🔚 Browser closed');
        }
    }
}

runTests();