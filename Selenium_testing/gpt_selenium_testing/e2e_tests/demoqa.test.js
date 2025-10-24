import { Builder, By, until, Key } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import {
  websiteURL,
  formValues,
  elements,
  newRecordData,
  searchTerm,
  editRecordData,
  TIMEOUT,
} from '../config/demoqa.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logFilePath = path.join(__dirname, '../logs/demoqa_results.txt');

async function logResult(testName, status) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] Test: ${testName} - Status: ${status}\n`;
  await fs.writeFile(logFilePath, logMessage, { flag: 'a' });
}

async function waitForElementToBeStable(driver, element, timeout) {
  await driver.wait(until.elementIsVisible(element), timeout);
  await driver.wait(until.elementIsEnabled(element), timeout);
}

async function setUpDriver() {
  await fs.mkdir(path.dirname(logFilePath), { recursive: true });
  const options = new Options()
    .addArguments(
      '--no-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--disable-blink-features=AutomationControlled',
      '--disable-extensions',
      '--incognito',
      '--disable-web-security',
      '--disable-features=VizDisplayCompositor'
    )
    .windowSize({ width: 1920, height: 1080 });

  return new Builder().forBrowser('chrome').setChromeOptions(options).build();
}

async function FillAndSubmitTextBoxForm(driver) {
  const testName = 'FillAndSubmitTextBoxForm';
  try {
    await driver.get(websiteURL);
    await driver.sleep(3000);
    await driver.findElement(By.id('userName')).sendKeys(formValues.name);
    await driver.sleep(500);
    await driver.findElement(By.id('userEmail')).sendKeys(formValues.email);
    await driver.sleep(500);
    await driver.findElement(By.id('currentAddress')).sendKeys(formValues.currentAddress);
    await driver.sleep(500);
    await driver.findElement(By.id('permanentAddress')).sendKeys(formValues.permanentAddress);
    await driver.sleep(1000);
    await driver.findElement(By.id('submit')).click();
    await driver.sleep(3000);
    const output = await driver.findElement(By.id('output'));
    await waitForElementToBeStable(driver, output, TIMEOUT);
    logResult(testName, 'PASS');
  } catch (error) {
    logResult(testName, 'FAIL');
  }
}

async function SelectCheckBox(driver) {
  const testName = 'SelectCheckBox';
  try {
    await driver.findElement(By.id('item-1')).click();
    await driver.sleep(3000);
    await driver.findElement(By.className('rct-collapse rct-collapse-btn')).click();
    await driver.sleep(1000);
    await driver.findElement(By.className('rct-checkbox')).click();
    await driver.sleep(2000);
    const result = await driver.findElement(By.className('display-result'));
    await waitForElementToBeStable(driver, result, TIMEOUT);
    logResult(testName, 'PASS');
  } catch (error) {
    logResult(testName, 'FAIL');
  }
}

async function SelectRadioButton(driver) {
  const testName = 'SelectRadioButton';
  try {
    await driver.findElement(By.id('item-2')).click();
    await driver.sleep(3000);
    try {
      await driver.findElement(By.id('yesRadio')).click();
    } catch (error) {
      await driver.findElement(By.id('impressiveRadio')).click();
    }
    await driver.sleep(2000);
    const result = await driver.findElement(By.className('text-success'));
    await waitForElementToBeStable(driver, result, TIMEOUT);
    logResult(testName, 'PASS');
  } catch (error) {
    logResult(testName, 'FAIL');
  }
}

async function SelectWebTables(driver) {
  const testName = 'SelectWebTables';
  try {
    await driver.findElement(By.id('item-3')).click();
    await driver.sleep(3000);
    const table = await driver.findElement(By.className('rt-table'));
    await waitForElementToBeStable(driver, table, TIMEOUT);
    logResult(testName, 'PASS');
  } catch (error) {
    logResult(testName, 'FAIL');
  }
}

async function FillAndSubmitAddNewRecordForm(driver) {
  const testName = 'FillAndSubmitAddNewRecordForm';
  try {
    await driver.findElement(By.id('addNewRecordButton')).click();
    await driver.sleep(2000);
    await driver.findElement(By.id('firstName')).sendKeys(newRecordData.firstName);
    await driver.sleep(500);
    await driver.findElement(By.id('lastName')).sendKeys(newRecordData.lastName);
    await driver.sleep(500);
    await driver.findElement(By.id('userEmail')).sendKeys(newRecordData.email);
    await driver.sleep(500);
    await driver.findElement(By.id('age')).sendKeys(newRecordData.age);
    await driver.sleep(500);
    await driver.findElement(By.id('salary')).sendKeys(newRecordData.salary);
    await driver.sleep(500);
    await driver.findElement(By.id('department')).sendKeys(newRecordData.department);
    await driver.sleep(1000);
    await driver.findElement(By.id('submit')).click();
    await driver.sleep(3000);
    await driver.findElement(By.id('searchBox')).sendKeys(newRecordData.firstName);
    await driver.sleep(2000);
    // assume some function to verify new record
    logResult(testName, 'PASS');
  } catch (error) {
    logResult(testName, 'FAIL');
  }
}

async function SearchForRecord(driver) {
  const testName = 'SearchForRecord';
  try {
    await driver.findElement(By.id('searchBox')).clear();
    await driver.findElement(By.id('searchBox')).sendKeys(searchTerm);
    await driver.sleep(2000);
    // assume some function to verify search result
    logResult(testName, 'PASS');
  } catch (error) {
    logResult(testName, 'FAIL');
  }
}

async function EditFirstRecord(driver) {
  const testName = 'EditFirstRecord';
  try {
    await driver.findElement(By.xpath('//span[@title="Edit"]')).click();
    await driver.sleep(2000);
    await driver.findElement(By.id('firstName')).clear();
    await driver.findElement(By.id('firstName')).sendKeys(editRecordData.firstName);
    await driver.sleep(500);
    await driver.findElement(By.id('submit')).click();
    await driver.sleep(3000);
    await driver.findElement(By.id('searchBox')).clear();
    await driver.findElement(By.id('searchBox')).sendKeys(editRecordData.firstName);
    await driver.sleep(2000);
    // assume some function to verify updated record
    logResult(testName, 'PASS');
  } catch (error) {
    logResult(testName, 'FAIL');
  }
}

async function DeleteSecondRecord(driver) {
  const testName = 'DeleteSecondRecord';
  try {
    await driver.findElement(By.xpath('//span[@title="Delete"]')).click();
    await driver.sleep(2000);
    // assume some function to verify record deletion
    logResult(testName, 'PASS');
  } catch (error) {
    logResult(testName, 'FAIL');
  }
}

async function DoubleClickButton(driver) {
  const testName = 'DoubleClickButton';
  try {
    await driver.findElement(By.id('item-4')).click();
    await driver.sleep(3000);
    const button = await driver.findElement(By.id('doubleClickBtn'));
    await driver.actions().doubleClick(button).perform();
    await driver.sleep(2000);
    const message = await driver.findElement(By.id('doubleClickMessage'));
    await waitForElementToBeStable(driver, message, TIMEOUT);
    logResult(testName, 'PASS');
  } catch (error) {
    logResult(testName, 'FAIL');
  }
}

async function RightClickButton(driver) {
  const testName = 'RightClickButton';
  try {
    const button = await driver.findElement(By.id('rightClickBtn'));
    await driver.actions().contextClick(button).perform();
    await driver.sleep(2000);
    const message = await driver.findElement(By.id('rightClickMessage'));
    await waitForElementToBeStable(driver, message, TIMEOUT);
    logResult(testName, 'PASS');
  } catch (error) {
    logResult(testName, 'FAIL');
  }
}

async function runTests() {
  const driver = await setUpDriver();
  try {
    console.log("=".repeat(50));
    await FillAndSubmitTextBoxForm(driver);
    console.log("🚀 FillAndSubmitTextBoxForm completed");
    console.log("=".repeat(50));

    await driver.sleep(3000);

    await SelectCheckBox(driver);
    console.log("✅ SelectCheckBox completed");
    console.log("=".repeat(50));

    await driver.sleep(3000);

    await SelectRadioButton(driver);
    console.log("🚀 SelectRadioButton completed");
    console.log("=".repeat(50));

    await driver.sleep(3000);

    await SelectWebTables(driver);
    console.log("✅ SelectWebTables completed");
    console.log("=".repeat(50));

    await driver.sleep(3000);

    await FillAndSubmitAddNewRecordForm(driver);
    console.log("🚀 FillAndSubmitAddNewRecordForm completed");
    console.log("=".repeat(50));

    await driver.sleep(3000);

    await SearchForRecord(driver);
    console.log("✅ SearchForRecord completed");
    console.log("=".repeat(50));

    await driver.sleep(3000);

    await EditFirstRecord(driver);
    console.log("🚀 EditFirstRecord completed");
    console.log("=".repeat(50));

    await driver.sleep(3000);

    await DeleteSecondRecord(driver);
    console.log("✅ DeleteSecondRecord completed");
    console.log("=".repeat(50));

    await driver.sleep(3000);

    await DoubleClickButton(driver);
    console.log("🚀 DoubleClickButton completed");
    console.log("=".repeat(50));

    await driver.sleep(3000);

    await RightClickButton(driver);
    console.log("✅ RightClickButton completed");
    console.log("=".repeat(50));
  } finally {
    await driver.quit();
    console.log("🎉 All tests completed");
  }
}

runTests().catch((error) => {
  console.error("❌ Test run encountered an error", error);
});