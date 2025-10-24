import { Builder, By, Key, until } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome.js';
import { websiteURL, formValues, elements, newRecordData, searchTerm, editRecordData, TIMEOUT } from '../config/demoqa.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logFilePath = path.join(__dirname, '../logs/demoqa_results2.txt');
await fs.mkdir(path.dirname(logFilePath), { recursive: true });

let passedTests = 0;
let failedTests = 0;

async function logResult(testName, status) {
  const logMessage = `${testName}: ${status}\n`;
  await fs.appendFile(logFilePath, logMessage);
  if (status === 'PASS') {
    passedTests++;
  } else {
    failedTests++;
  }
}

async function runTests() {
  const options = new Options()
    .addArguments('--no-sandbox')
    .addArguments('--disable-dev-shm-usage')
    .addArguments('--disable-gpu')
    .addArguments('--disable-blink-features=AutomationControlled')
    .addArguments('--disable-extensions')
    .addArguments('--incognito')
    .addArguments('--disable-web-security')
    .addArguments('--disable-features=VizDisplayCompositor')
    .windowSize({ width: 1920, height: 1080 });

  const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

  async function testFillAndSubmitTextBoxForm() {
    try {
      await driver.get(websiteURL);
      await driver.findElement(By.id('userName')).sendKeys(formValues.fullName);
      await driver.findElement(By.id('userEmail')).sendKeys(formValues.email);
      await driver.findElement(By.id('currentAddress')).sendKeys(formValues.currentAddress);
      await driver.findElement(By.id('permanentAddress')).sendKeys(formValues.permanentAddress);
      await driver.findElement(By.id('submit')).click();
      const isDisplayed = await driver.wait(until.elementLocated(By.id('output')), TIMEOUT).isDisplayed();
      logResult('FillAndSubmitTextBoxForm', isDisplayed ? 'PASS' : 'FAIL');
    } catch (error) {
      logResult('FillAndSubmitTextBoxForm', 'FAIL');
    }
  }

  async function testSelectCheckBox() {
    try {
      await driver.findElement(By.id('item-1')).click();
      await driver.findElement(By.className('rct-collapse rct-collapse-btn')).click();
      await driver.findElement(By.className('rct-checkbox')).click();
      const isDisplayed = await driver.wait(until.elementLocated(By.className('display-result')), TIMEOUT).isDisplayed();
      logResult('SelectCheckBox', isDisplayed ? 'PASS' : 'FAIL');
    } catch (error) {
      logResult('SelectCheckBox', 'FAIL');
    }
  }

  async function testSelectRadioButton() {
    try {
      await driver.findElement(By.id('item-2')).click();
      const yesRadio = driver.findElement(By.id('yesRadio'));
      const impressiveRadio = driver.findElement(By.id('impressiveRadio'));
      const jsScript = 'arguments[0].click();';
      if (await yesRadio.isEnabled()) {
        await driver.executeScript(jsScript, yesRadio);
      } else {
        await driver.executeScript(jsScript, impressiveRadio);
      }
      const text = await driver.wait(until.elementLocated(By.className('text-success')), TIMEOUT).getText();
      logResult('SelectRadioButton', text ? 'PASS' : 'FAIL');
    } catch (error) {
      logResult('SelectRadioButton', 'FAIL');
    }
  }

  async function testSelectWebTables() {
    try {
      await driver.findElement(By.id('item-3')).click();
      const isDisplayed = await driver.wait(until.elementLocated(By.className('rt-table')), TIMEOUT).isDisplayed();
      logResult('SelectWebTables', isDisplayed ? 'PASS' : 'FAIL');
    } catch (error) {
      logResult('SelectWebTables', 'FAIL');
    }
  }

  async function testFillAndSubmitAddNewRecordForm() {
    try {
      await driver.findElement(By.id('addNewRecordButton')).click();
      await driver.findElement(By.id('firstName')).sendKeys(newRecordData.firstName);
      await driver.findElement(By.id('lastName')).sendKeys(newRecordData.lastName);
      await driver.findElement(By.id('userEmail')).sendKeys(newRecordData.email);
      await driver.findElement(By.id('age')).sendKeys(newRecordData.age.toString());
      await driver.findElement(By.id('salary')).sendKeys(newRecordData.salary.toString());
      await driver.findElement(By.id('department')).sendKeys(newRecordData.department);
      await driver.findElement(By.id('submit')).click();
      await driver.findElement(By.id('searchBox')).sendKeys(newRecordData.firstName);
      const rows = await driver.findElements(By.css('.rt-tbody .rt-tr-group'));
      logResult('FillAndSubmitAddNewRecordForm', rows.length > 0 ? 'PASS' : 'FAIL');
    } catch (error) {
      logResult('FillAndSubmitAddNewRecordForm', 'FAIL');
    }
  }

  async function testSearchForRecord() {
    try {
      await driver.findElement(By.id('searchBox')).sendKeys(searchTerm);
      const rows = await driver.findElements(By.css('.rt-tbody .rt-tr-group'));
      logResult('SearchForRecord', rows.length > 0 ? 'PASS' : 'FAIL');
    } catch (error) {
      logResult('SearchForRecord', 'FAIL');
    }
  }

  async function testEditFirstRecord() {
    try {
      await driver.findElement(By.xpath('//span[@title="Edit"]')).click();
      await driver.findElement(By.id('firstName')).clear();
      await driver.findElement(By.id('firstName')).sendKeys(editRecordData.firstName);
      await driver.findElement(By.id('submit')).click();
      await driver.findElement(By.id('searchBox')).clear();
      await driver.findElement(By.id('searchBox')).sendKeys(editRecordData.firstName);
      const rows = await driver.findElements(By.css('.rt-tbody .rt-tr-group'));
      logResult('EditFirstRecord', rows.length > 0 ? 'PASS' : 'FAIL');
    } catch (error) {
      logResult('EditFirstRecord', 'FAIL');
    }
  }

  async function testDeleteSecondRecord() {
    try {
      const deleteButton = await driver.findElement(By.xpath('(//span[@title="Delete"])[2]'));
      const parentRow = await deleteButton.findElement(By.xpath('ancestor::div[@role="row"]'));
      const rowText = await parentRow.getText();
      deleteButton.click();
      const rows = await driver.findElements(By.css('.rt-tbody .rt-tr-group'));
      const isDeleted = !rows.some(async row => await row.getText() === rowText);
      logResult('DeleteSecondRecord', isDeleted ? 'PASS' : 'FAIL');
    } catch (error) {
      logResult('DeleteSecondRecord', 'FAIL');
    }
  }

  async function testDoubleClickButton() {
    try {
      await driver.findElement(By.id('item-4')).click();
      const button = await driver.findElement(By.id('doubleClickBtn'));
      await driver.actions().doubleClick(button).perform();
      const message = await driver.wait(until.elementLocated(By.id('doubleClickMessage')), TIMEOUT).getText();
      logResult('DoubleClickButton', message ? 'PASS' : 'FAIL');
    } catch (error) {
      logResult('DoubleClickButton', 'FAIL');
    }
  }

  async function testRightClickButton() {
    try {
      const button = await driver.findElement(By.id('rightClickBtn'));
      await driver.actions().contextClick(button).perform();
      const message = await driver.wait(until.elementLocated(By.id('rightClickMessage')), TIMEOUT).getText();
      logResult('RightClickButton', message ? 'PASS' : 'FAIL');
    } catch (error) {
      logResult('RightClickButton', 'FAIL');
    }
  }

  try {
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
  } finally {
    await driver.quit();
    fs.writeFile(logFilePath, `Test Summary: ${passedTests} passed, ${failedTests} failed out of 10 total tests\n`, { flag: 'a' });
  }
}

runTests().catch(console.error);