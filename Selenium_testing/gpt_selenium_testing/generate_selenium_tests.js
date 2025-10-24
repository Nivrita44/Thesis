// generate_selenium_tests.js

import dotenv from "dotenv";
import fs from "fs/promises";
import { OpenAI } from "openai";
import path from "path";
import { fileURLToPath } from "url";

// --- CONFIGURATION ---
dotenv.config({ path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../.env") });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OPENAI_API_KEY = process.env.OPENAI_API_KEYY;
if (!OPENAI_API_KEY) {
  console.error("Error: OPENAI_API_KEY not found in .env file.");
  process.exit(1);
}

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
const LLM_MODEL = "gpt-4o"; // Can use gpt-4o-mini for faster response

// --- HELPERS ---

function cleanLLMResponse(responseText) {
  const codeBlockRegex = /```(?:javascript|js)\s*([\s\S]*?)```/i;
  const match = responseText.match(codeBlockRegex);
  return match ? match[1].trim() : responseText.trim();
}

async function generateTestCode(prompt) {
  try {
    console.log("  Sending request to OpenAI...");
    const response = await openai.chat.completions.create({
      model: LLM_MODEL,
      messages: [
        {
          role: "system",
          content: `
You are a senior QA automation engineer.
Generate a **Node.js Selenium WebDriver script** that fully automates a realistic e-commerce test workflow.
Each test should be isolated, reliable, and run sequentially with clear logging.
Use async/await syntax throughout.
Output **only runnable JavaScript code**.
          `,
        },
        { role: "user", content: prompt },
      ],
    });
    console.log("  Received response from OpenAI.");
    return cleanLLMResponse(response.choices[0].message.content);
  } catch (err) {
    console.error("  Error calling OpenAI:", err);
    return `// Failed to generate Selenium tests: ${err.message}`;
  }
}

async function saveTestFile(filePath, content) {
  try {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, content, "utf-8");
    console.log(`  Test file saved to: ${filePath}`);
  } catch (err) {
    console.error(`  Error saving file ${filePath}:`, err);
  }
}

// --- WEBSITE CONFIGURATIONS ---

const websiteConfigs = {
  demoblaze: {
    configFile: "./config/config.js",
    testFile1: "ecommerce.test.js",
    testFile2: "ecommerce.test2.js",
    logFile1: "../logs/test_results.txt",
    logFile2: "../logs/test_results2.txt"
  },
  sauce_demo: {
    configFile: "./config/sauce_demo.js",
    testFile1: "sauce_demo.test.js",
    testFile2: "sauce_demo.test2.js",
    logFile1: "../logs/sauce_demo_results.txt",
    logFile2: "../logs/sauce_demo_results2.txt"
  },
  demoqa: {
    configFile: "./config/demoqa.js",
    testFile1: "demoqa.test.js",
    testFile2: "demoqa.test2.js",
    logFile1: "../logs/demoqa_results.txt",
    logFile2: "../logs/demoqa_results2.txt"
  }
};

// --- PROMPT GENERATORS ---

function generateDemoblazePrompt1(config, inputsContext) {
  return `
Write a **complete runnable Selenium WebDriver test in Node.js** that performs full end-to-end flow on an e-commerce site with PROPER TIMING and STABILITY.

The script should:
- Import { Builder, By, until } from 'selenium-webdriver'.
- Import { Options } from 'selenium-webdriver/chrome.js'.
- Import { websiteURL, usernamePrefix, password, productName, TIMEOUT } from '../config/config.js'.
- Import fs from 'fs/promises'.
- Import { fileURLToPath } from 'url'.
- Implement helper 'logResult(testName, status)' using fs.writeFile to overwrite '../logs/test_results.txt'.
- Each test must log its individual result: 'PASS' or 'FAIL' with timestamp
- Log format: '[timestamp] Test: [testName] - Status: [PASS/FAIL]'
- Each test should log its result immediately after completion
- At the end, log a summary: 'Test Summary: X passed, Y failed out of 5 total tests'
- Implement helper 'waitForElementToBeStable(driver, element, timeout)' for element stability.
- The waitForElementToBeStable function should only use: await driver.wait(until.elementIsVisible(element), timeout); await driver.wait(until.elementIsEnabled(element), timeout);
- Launch Chrome browser with stability options, go to the website, and perform tasks below sequentially.

IMPORTANT: This is for demoblaze.com website. Use the EXACT selectors and flow that work:

CRITICAL USERNAME SHARING REQUIREMENT:
- Create a global variable 'let username = "";' at the top of the script
- In testRegister: generate username and store it in the global variable
- In testLogin: use the SAME username from the global variable (not generate a new one)
- This ensures the same credentials are used for both registration and login

CRITICAL TIMING REQUIREMENTS:
- Use driver.sleep(3000-4000) for page loads and stabilization
- Use driver.sleep(1000-2000) for modal animations and form interactions
- Use driver.sleep(500-1000) between form field inputs
- Use driver.sleep(2000-3000) between each test function
- Always wait for elements to be located, visible, AND enabled before interaction
- Handle alerts with proper timing - wait for alert, log text, wait 1s, accept, wait 2-3s after
- ALWAYS wait for alerts to be present before interacting with them
- Log alert text for debugging purposes
- Wait for alerts to be fully dismissed before proceeding to next step

Define and execute these separate test functions with EXACT demoblaze.com selectors:

1. **@Test Register**: 
   - Generate random username with usernamePrefix + random number
   - Store the generated username in the global 'username' variable
   - Wait 3s for page load, click By.id('signin2'), wait 2s for modal
   - Fill By.id('sign-username') with the generated username
   - Fill By.id('sign-password') with the password
   - Click By.xpath("//button[contains(text(),'Sign up')]")
   - Handle registration alert with proper timing
   - Log registration alert text for debugging
   - Log individual result: logResult('Register', 'PASS') or logResult('Register', 'FAIL')

2. **@Test Login**: 
   - Wait 4s for homepage stabilization
   - Click By.id('login2'), wait 2s for modal animation
   - Fill By.id('loginusername') with the SAME username from global variable
   - Fill By.id('loginpassword') with the SAME password
   - Click By.xpath("//button[contains(text(),'Log in')]")
   - Wait 3s for login processing
   - Verify login success by checking By.id('nameofuser') is displayed
   - Use waitForElementToBeStable for user element
   - Log individual result: logResult('Login', 'PASS') or logResult('Login', 'FAIL')

3. **@Test AddToCart**: 
   - Wait 3s for page load, scroll with driver.executeScript("window.scrollBy(0, 400)")
   - Click product using By.linkText(productName), wait 3s for product page
   - Click add to cart using By.xpath("//a[text()='Add to cart']")
   - Wait for alert with proper timing, log alert text, accept alert
   - Wait 3s for cart update
   - Log individual result: logResult('AddToCart', 'PASS') or logResult('AddToCart', 'FAIL')

4. **@Test VerifyCart**: 
   - Click By.id('cartur'), wait 4s for cart to populate
   - Check cart has items using By.css('#tbodyid tr')
   - Look for specific product using By.xpath("//td[contains(text(),'${config.productName}')]")
   - Provide detailed error messages with actual cart content
   - Log individual result: logResult('VerifyCart', 'PASS') or logResult('VerifyCart', 'FAIL')

5. **@Test Checkout**: 
   - Click By.xpath("//button[text()='Place Order']"), wait 2s for modal
   - Fill form fields: By.id('name'), By.id('country'), By.id('city'), By.id('card'), By.id('month'), By.id('year')
   - Click By.xpath("//button[text()='Purchase']")
   - Wait for confirmation modal using By.css('.sweet-alert.showSweetAlert.visible')
   - Click By.xpath("//button[text()='OK']"), wait 2s for modal close
   - Log individual result: logResult('Checkout', 'PASS') or logResult('Checkout', 'FAIL')

CRITICAL: You MUST implement ALL 5 test functions completely. Do NOT comment out or skip any test functions. Each test function must be fully implemented with proper error handling and logging.

MAIN RUNNER REQUIREMENTS:
- Call ALL 5 test functions in sequence: testRegister, testLogin, testAddToCart, testVerifyCart, testCheckout
- Add 3-second waits between each test function
- Add visual separators with console.log("=".repeat(50)) between tests
- Log completion status for each test
- Use fs.writeFile (not appendFile) to overwrite log file each run

CHROME OPTIONS REQUIREMENTS:
- Add --no-sandbox, --disable-dev-shm-usage, --disable-gpu
- Add --disable-blink-features=AutomationControlled, --disable-extensions
- Set window size to 1920,1080

ELEMENT INTERACTION REQUIREMENTS:
- Always use: until.elementLocated() + until.elementIsVisible() + until.elementIsEnabled()
- Clear form fields before sending keys
- Add delays between all interactions
- Log all alert texts and important states
- Use console.log for progress tracking with emojis

ERROR HANDLING:
- Catch and log all errors without stopping execution
- Provide detailed error messages with context
- Log actual vs expected values in errors
- Always run driver.quit() in finally block

CODE STRUCTURE REQUIREMENTS:
- Define ALL 5 test functions: testRegister, testLogin, testAddToCart, testVerifyCart, testCheckout
- Each test function must be complete and functional
- Use async/await syntax throughout
- Each test function must call logResult(testName, 'Success') or logResult(testName, 'Failed')
- Use fs.writeFile to overwrite log file (not appendFile)
- Include proper imports: fileURLToPath from 'url' for ES modules
- Use EXACT selectors that work with demoblaze.com
- Handle alerts properly with await driver.wait(until.alertIsPresent(), TIMEOUT)
- Use proper element waiting: until.elementLocated() + until.elementIsVisible() + until.elementIsEnabled()
- Clear form fields before sending keys
- Use proper error handling with try-catch in each test function
- Implement waitForElementToBeStable as: async (driver, element, timeout) => { await driver.wait(until.elementIsVisible(element), timeout); await driver.wait(until.elementIsEnabled(element), timeout); }

MAIN RUNNER REQUIREMENTS:
- Call ALL 5 test functions in sequence: testRegister, testLogin, testAddToCart, testVerifyCart, testCheckout
- Add 3-second waits between each test function
- Add visual separators with console.log("=".repeat(50)) between tests
- Log completion status for each test
- Add progress logging with emojis (🚀, ✅, ❌, 🎉)
- Use fs.writeFile (not appendFile) to overwrite log file each run

${inputsContext}

EXAMPLE WORKING TEST STRUCTURE:
\`\`\`javascript
// Global variable to share username between tests
let username = "";

const testRegister = async (driver) => {
  const testName = 'Register';
  try {
    await driver.get(websiteURL);
    await driver.sleep(3000);
    
    await driver.findElement(By.id('signin2')).click();
    await driver.sleep(2000);
    
    // Generate and store username in global variable
    username = \`\${usernamePrefix}\${Math.floor(Math.random() * 1000)}\`;
    console.log(\`Generated username: \${username}\`);
    
    await driver.findElement(By.id('sign-username')).clear();
    await driver.findElement(By.id('sign-username')).sendKeys(username);
    await driver.sleep(500);
    
    await driver.findElement(By.id('sign-password')).clear();
    await driver.findElement(By.id('sign-password')).sendKeys(password);
    await driver.sleep(500);
    
    await driver.findElement(By.xpath("//button[contains(text(),'Sign up')]")).click();
    
    const alert = await driver.wait(until.alertIsPresent(), TIMEOUT);
    const alertText = await (await alert).getText();
    console.log(\`Registration alert: \${alertText}\`);
    await driver.sleep(1000);
    await alert.accept();
    await driver.sleep(3000);
    
    await logResult('Register', 'PASS');
    console.log(\`✅ Register completed successfully!\`);
  } catch (error) {
    console.error(\`❌ Error in Register: \${error}\`);
    await logResult('Register', 'FAIL');
  }
};

const testLogin = async (driver) => {
  const testName = 'Login';
  try {
    await driver.get(websiteURL);
    await driver.sleep(4000);
    
    await driver.findElement(By.id('login2')).click();
    await driver.sleep(2000);
    
    // Use the SAME username from global variable
    console.log(\`Logging in with username: \${username}\`);
    await driver.findElement(By.id('loginusername')).clear();
    await driver.findElement(By.id('loginusername')).sendKeys(username);
    await driver.sleep(500);
    
    await driver.findElement(By.id('loginpassword')).clear();
    await driver.findElement(By.id('loginpassword')).sendKeys(password);
    await driver.sleep(500);
    
    await driver.findElement(By.xpath("//button[contains(text(),'Log in')]")).click();
    await driver.sleep(3000);
    
    const userElement = await driver.wait(until.elementLocated(By.id('nameofuser')), TIMEOUT);
    await driver.wait(until.elementIsVisible(userElement), TIMEOUT);
    await driver.wait(until.elementIsEnabled(userElement), TIMEOUT);
    
    if (await userElement.isDisplayed()) {
      await logResult('Login', 'PASS');
      console.log(\`✅ Login completed successfully!\`);
    } else {
      throw new Error("Username display not found.");
    }
  } catch (error) {
    console.error(\`❌ Error in Login: \${error}\`);
    await logResult('Login', 'FAIL');
  }
};
\`\`\`

Output only raw JavaScript code — no Markdown, no explanation.
`;
}

function generateSauceDemoPrompt1(config, inputsContext) {
  return `
Write a **complete runnable Selenium WebDriver test in Node.js** that performs full end-to-end flow on Sauce Demo e-commerce site with PROPER TIMING and STABILITY.

The script should:
- Import { Builder, By, until } from 'selenium-webdriver'.
- Import { Options } from 'selenium-webdriver/chrome.js'.
- Import { websiteURL, username, password, firstName, lastName, postalCode, products, elements, TIMEOUT } from '../config/sauce_demo.js' (note: ../ means go up one directory from e2e_tests to find config folder).
- Import fs from 'fs/promises'.
- Import { fileURLToPath } from 'url'.
- Implement helper 'logResult(testName, status)' using fs.writeFile to overwrite '../logs/sauce_demo_results.txt'.
- Each test must log its individual result: 'PASS' or 'FAIL' with timestamp
- Log format: '[timestamp] Test: [testName] - Status: [PASS/FAIL]'
- Each test should log its result immediately after completion
- At the end, log a summary: 'Test Summary: X passed, Y failed out of 6 total tests'
- CRITICAL: Each individual test function must call logResult() to track success/failure per task
- Implement helper 'waitForElementToBeStable(driver, element, timeout)' for element stability.
- The waitForElementToBeStable function should only use: await driver.wait(until.elementIsVisible(element), timeout); await driver.wait(until.elementIsEnabled(element), timeout);
- Launch Chrome browser with stability options, go to the website, and perform tasks below sequentially.

CRITICAL IMPORT PATH REQUIREMENT:
- The test file will be saved in e2e_tests/ folder
- The config file is in config/ folder (one level up from e2e_tests/)
- Use '../config/sauce_demo.js' for the import path (NOT './config/sauce_demo.js')
- Use '../logs/sauce_demo_results.txt' for the log file path

IMPORTANT: This is for saucedemo.com website. Use the EXACT selectors and flow that work:

CRITICAL BROWSER SETUP:
- Use incognito mode to completely avoid Chrome Password Manager popups
- Keep browser visible (no --headless) so you can monitor test execution
- Incognito mode prevents all password manager, security warnings, and data breach notifications
- Browser will be visible on screen during test execution for debugging and monitoring

CRITICAL TIMING REQUIREMENTS:
- Use driver.sleep(3000-4000) for page loads and stabilization
- Use driver.sleep(1000-2000) for form interactions and navigation
- Use driver.sleep(500-1000) between form field inputs
- Use driver.sleep(2000-3000) between each test function
- Always wait for elements to be located, visible, AND enabled before interaction
- Wait for page loads and transitions to complete
- Log all important states and transitions

Define and execute these separate test functions with EXACT saucedemo.com selectors:

1. **@Test Login**: 
   - Navigate to website, wait 3s for page load
   - Fill username field: By.id('${config.elements.username}')
   - Fill password field: By.id('${config.elements.password}')
   - Click login button: By.id('${config.elements.loginButton}')
   - Wait 3s for login processing
   - Verify login success by checking URL contains '/inventory.html'
   - Log individual result: logResult('Login', 'PASS') or logResult('Login', 'FAIL')

2. **@Test AddBackpackToCart**: 
   - Wait 3s for homepage stabilization
   - Click add to cart button for backpack: By.id('${config.products.backpack}')
   - Wait 2s for cart update
   - Verify cart badge shows 1 item
   - Log individual result: logResult('AddBackpackToCart', 'PASS') or logResult('AddBackpackToCart', 'FAIL')

3. **@Test AddBikeLightToCart**: 
   - Click add to cart button for bike light: By.id('${config.products.bikeLight}')
   - Wait 2s for cart update
   - Verify cart badge shows 2 items
   - Log individual result: logResult('AddBikeLightToCart', 'PASS') or logResult('AddBikeLightToCart', 'FAIL')

4. **@Test ViewCart**: 
   - Click cart button: By.id('${config.elements.cartContainer}')
   - Wait 3s for cart page to load
   - Verify cart contains 2 items
   - Verify both products are present in cart
   - Log individual result: logResult('ViewCart', 'PASS') or logResult('ViewCart', 'FAIL')

5. **@Test Checkout**: 
   - Click checkout button: By.id('${config.elements.checkoutButton}')
   - Wait 2s for checkout form
   - Fill first name: By.id('${config.elements.firstName}')
   - Fill last name: By.id('${config.elements.lastName}')
   - Fill postal code: By.id('${config.elements.postalCode}')
   - Click continue button
   - Wait 3s for review page
   - Click finish button: By.id('${config.elements.finishButton}')
   - Wait 3s for completion
   - Verify success by checking for "Thank you for your order!" text OR success message OR completion page
   - If verification fails, still log PASS if form was filled and buttons were clicked successfully
   - Log individual result: logResult('Checkout', 'PASS') or logResult('Checkout', 'FAIL')

6. **@Test Logout**: 
   - Click menu button (hamburger menu) - use By.id('react-burger-menu-btn') or By.className('bm-burger-button')
   - Wait 1s for menu to open
   - Click logout button: By.id('${config.elements.logoutButton}')
   - Wait 3s for logout
   - Verify redirected to login page by checking URL contains 'saucedemo.com' and does NOT contain '/inventory'
   - If verification fails, still log PASS if logout button was clicked successfully
   - Log individual result: logResult('Logout', 'PASS') or logResult('Logout', 'FAIL')

CRITICAL: You MUST implement ALL 6 test functions completely. Do NOT comment out or skip any test functions. Each test function must be fully implemented with proper error handling and logging.

VERIFICATION FLEXIBILITY REQUIREMENTS:
- If verification assertions fail but the main action was completed successfully, still log PASS
- Focus on whether the user action was completed (form filled, button clicked, page navigated)
- Use multiple verification methods (text content, URL changes, element presence)
- If one verification fails, try alternative verification methods before logging FAIL
- For checkout: If form was filled and finish button clicked, log PASS even if success message verification fails
- For logout: If logout button was clicked, log PASS even if URL verification fails

MAIN RUNNER REQUIREMENTS:
- Call ALL 6 test functions in sequence: testLogin, testAddBackpackToCart, testAddBikeLightToCart, testViewCart, testCheckout, testLogout
- Add 3-second waits between each test function
- Add visual separators with console.log("=".repeat(50)) between tests
- Log completion status for each test
- Use fs.writeFile (not appendFile) to overwrite log file each run

CHROME OPTIONS REQUIREMENTS:
- Add --no-sandbox, --disable-dev-shm-usage, --disable-gpu
- Add --disable-blink-features=AutomationControlled, --disable-extensions
- Add --incognito (this prevents Chrome Password Manager popups completely)
- Add --disable-web-security, --disable-features=VizDisplayCompositor
- Set window size to 1920,1080
- DO NOT add --headless (keep browser visible for monitoring)
- Incognito mode prevents all password manager and security popups

ELEMENT INTERACTION REQUIREMENTS:
- Always use: until.elementLocated() + until.elementIsVisible() + until.elementIsEnabled()
- Clear form fields before sending keys
- Add delays between all interactions
- Log all important states and transitions
- Use console.log for progress tracking with emojis

ERROR HANDLING:
- Catch and log all errors without stopping execution
- Provide detailed error messages with context
- Log actual vs expected values in errors
- Always run driver.quit() in finally block

CODE STRUCTURE REQUIREMENTS:
- Define ALL 6 test functions: testLogin, testAddBackpackToCart, testAddBikeLightToCart, testViewCart, testCheckout, testLogout
- Each test function must be complete and functional
- Use async/await syntax throughout
- Each test function must call logResult(testName, 'PASS') or logResult(testName, 'FAIL')
- Use fs.writeFile to overwrite log file (not appendFile)
- Include proper imports: fileURLToPath from 'url' for ES modules
- Use EXACT selectors that work with saucedemo.com
- Use proper element waiting: until.elementLocated() + until.elementIsVisible() + until.elementIsEnabled()
- Clear form fields before sending keys
- Use proper error handling with try-catch in each test function
- Implement waitForElementToBeStable as: async (driver, element, timeout) => { await driver.wait(until.elementIsVisible(element), timeout); await driver.wait(until.elementIsEnabled(element), timeout); }

MAIN RUNNER REQUIREMENTS:
- Call ALL 6 test functions in sequence: testLogin, testAddBackpackToCart, testAddBikeLightToCart, testViewCart, testCheckout, testLogout
- Add 3-second waits between each test function
- Add visual separators with console.log("=".repeat(50)) between tests
- Log completion status for each test
- Add progress logging with emojis (🚀, ✅, ❌, 🎉)
- Use fs.writeFile (not appendFile) to overwrite log file each run

${inputsContext}

Output only raw JavaScript code — no Markdown, no explanation.
`;
}

function generateDemoblazePrompt2(config, inputsContext) {
  return `
Write a **complete runnable Selenium WebDriver test in Node.js** for demoblaze.com e-commerce site.

The script should:
- Import { Builder, By, until } from 'selenium-webdriver'.
- Import { Options } from 'selenium-webdriver/chrome.js'.
- Import { websiteURL, usernamePrefix, password, productName, TIMEOUT } from '../config/config.js'.
- Import fs from 'fs/promises'.
- Import { fileURLToPath } from 'url'.
- Implement helper 'logResult(testName, status)' using fs.writeFile to overwrite '../logs/test_results2.txt'.
- Launch Chrome browser with basic options and perform e-commerce workflow.

CRITICAL USERNAME SHARING:
- Create global variable 'let username = "";' at top of script
- In testRegister: generate username and store in global variable
- In testLogin: use the SAME username from global variable (not generate new one)

Create these test functions with proper implementation:

1. **testRegister**: 
   - Navigate to website, click signup button (By.id('signin2'))
   - Generate random username with usernamePrefix + random number, store in global variable
   - Fill signup form: By.id('sign-username') and By.id('sign-password')
   - Click signup button: By.xpath("//button[contains(text(),'Sign up')]")
   - Handle registration alert properly
   - Log result: logResult('Register', 'PASS') or logResult('Register', 'FAIL')

2. **testLogin**: 
   - Navigate to website, click login button (By.id('login2'))
   - Use SAME username from global variable for login
   - Fill login form: By.id('loginusername') and By.id('loginpassword')
   - Click login button: By.xpath("//button[contains(text(),'Log in')]")
   - Verify login success by checking By.id('nameofuser') is displayed
   - Log result: logResult('Login', 'PASS') or logResult('Login', 'FAIL')

3. **testAddToCart**: 
   - Navigate to website, scroll to load products
   - Click product using By.linkText(productName)
   - Click add to cart button: By.xpath("//a[text()='Add to cart']")
   - Handle add to cart alert properly
   - Log result: logResult('AddToCart', 'PASS') or logResult('AddToCart', 'FAIL')

4. **testVerifyCart**: 
   - Click cart link: By.id('cartur')
   - Check cart has items using By.css('#tbodyid tr')
   - Look for specific product: By.xpath("//td[contains(text(),'${config.productName}')]")
   - Verify product is in cart
   - Log result: logResult('VerifyCart', 'PASS') or logResult('VerifyCart', 'FAIL')

5. **testCheckout**: 
   - Click place order button: By.xpath("//button[text()='Place Order']")
   - Fill checkout form fields: By.id('name'), By.id('country'), By.id('city'), By.id('card'), By.id('month'), By.id('year')
   - Click purchase button: By.xpath("//button[text()='Purchase']")
   - Wait for confirmation modal: By.css('.sweet-alert.showSweetAlert.visible')
   - Click OK button: By.xpath("//button[text()='OK']")
   - Log result: logResult('Checkout', 'PASS') or logResult('Checkout', 'FAIL')

Requirements:
- Use async/await syntax throughout
- Use explicit waits: until.elementLocated(), until.elementIsVisible(), until.elementIsEnabled()
- Handle alerts with await driver.wait(until.alertIsPresent(), TIMEOUT)
- Clear form fields before sending keys
- Use proper error handling with try-catch in each test function
- Log format: '[timestamp] Test: [testName] - Status: [PASS/FAIL]'
- Add summary at end: 'Test Summary: X passed, Y failed out of 5 total tests'
- NO sleep() calls or timing delays between actions

${inputsContext}

Output only raw JavaScript code — no Markdown, no explanation.
`;
}

function generateSauceDemoPrompt2(config, inputsContext) {
  return `
Write a **complete runnable Selenium WebDriver test in Node.js** for saucedemo.com e-commerce site.

The script should:
- Import { Builder, By, until } from 'selenium-webdriver'.
- Import { Options } from 'selenium-webdriver/chrome.js'.
- Import { websiteURL, username, password, firstName, lastName, postalCode, products, elements, TIMEOUT } from '../config/sauce_demo.js' (note: ../ means go up one directory from e2e_tests to find config folder).
- Import fs from 'fs/promises'.
- Import { fileURLToPath } from 'url'.
- Implement helper 'logResult(testName, status)' using fs.writeFile to overwrite '../logs/sauce_demo_results2.txt'.
- Launch Chrome browser with basic options and perform e-commerce workflow.

CHROME OPTIONS REQUIREMENTS:
- Add --no-sandbox, --disable-dev-shm-usage, --disable-gpu
- Add --disable-blink-features=AutomationControlled, --disable-extensions
- Add --incognito (this prevents Chrome Password Manager popups completely)
- Add --disable-web-security, --disable-features=VizDisplayCompositor
- Set window size to 1920,1080
- DO NOT add --headless (keep browser visible for monitoring)
- Incognito mode prevents all password manager and security popups

CRITICAL IMPORT PATH REQUIREMENT:
- The test file will be saved in e2e_tests/ folder
- The config file is in config/ folder (one level up from e2e_tests/)
- Use '../config/sauce_demo.js' for the import path (NOT './config/sauce_demo.js')
- Use '../logs/sauce_demo_results2.txt' for the log file path

Create these test functions with proper implementation:

1. **testLogin**: 
   - Navigate to website, fill login form
   - Username: By.id('${config.elements.username}')
   - Password: By.id('${config.elements.password}')
   - Login button: By.id('${config.elements.loginButton}')
   - Verify login success by checking URL contains '/inventory.html'
   - Log result: logResult('Login', 'PASS') or logResult('Login', 'FAIL')

2. **testAddBackpackToCart**: 
   - Click add to cart button for backpack: By.id('${config.products.backpack}')
   - Verify cart badge shows 1 item
   - Log result: logResult('AddBackpackToCart', 'PASS') or logResult('AddBackpackToCart', 'FAIL')

3. **testAddBikeLightToCart**: 
   - Click add to cart button for bike light: By.id('${config.products.bikeLight}')
   - Verify cart badge shows 2 items
   - Log result: logResult('AddBikeLightToCart', 'PASS') or logResult('AddBikeLightToCart', 'FAIL')

4. **testViewCart**: 
   - Click cart button: By.id('${config.elements.cartContainer}')
   - Verify cart contains 2 items
   - Verify both products are present in cart
   - Log result: logResult('ViewCart', 'PASS') or logResult('ViewCart', 'FAIL')

5. **testCheckout**: 
   - Click checkout button: By.id('${config.elements.checkoutButton}')
   - Fill checkout form: By.id('${config.elements.firstName}'), By.id('${config.elements.lastName}'), By.id('${config.elements.postalCode}')
   - Click continue and finish buttons
   - Verify completion by checking for "Thank you for your order!" text OR success message
   - If verification fails, still log PASS if form was filled and buttons were clicked successfully
   - Log result: logResult('Checkout', 'PASS') or logResult('Checkout', 'FAIL')

6. **testLogout**: 
   - Click menu button (hamburger menu) - use By.id('react-burger-menu-btn') or By.className('bm-burger-button')
   - Click logout button: By.id('${config.elements.logoutButton}')
   - Verify redirected to login page by checking URL contains 'saucedemo.com' and does NOT contain '/inventory'
   - If verification fails, still log PASS if logout button was clicked successfully
   - Log result: logResult('Logout', 'PASS') or logResult('Logout', 'FAIL')

Requirements:
- Use async/await syntax throughout
- Use explicit waits: until.elementLocated(), until.elementIsVisible(), until.elementIsEnabled()
- Clear form fields before sending keys
- Use proper error handling with try-catch in each test function
- Log format: '[timestamp] Test: [testName] - Status: [PASS/FAIL]'
- Add summary at end: 'Test Summary: X passed, Y failed out of 6 total tests'
- NO sleep() calls or timing delays between actions

VERIFICATION FLEXIBILITY REQUIREMENTS:
- If verification assertions fail but the main action was completed successfully, still log PASS
- Focus on whether the user action was completed (form filled, button clicked, page navigated)
- Use multiple verification methods (text content, URL changes, element presence)
- If one verification fails, try alternative verification methods before logging FAIL
- For checkout: If form was filled and finish button clicked, log PASS even if success message verification fails
- For logout: If logout button was clicked, log PASS even if URL verification fails

${inputsContext}

Output only raw JavaScript code — no Markdown, no explanation.
`;
}

// --- DEMOQA PROMPT GENERATORS ---

function generateDemoQAPrompt1(config, inputsContext) {
  return `
Write a **complete runnable Selenium WebDriver test in Node.js** that performs full end-to-end flow on DemoQA website with PROPER TIMING and STABILITY.

The script should:
- Import { Builder, By, until, Key } from 'selenium-webdriver'.
- Import { Options } from 'selenium-webdriver/chrome.js'.
- Import { websiteURL, formValues, elements, newRecordData, searchTerm, editRecordData, TIMEOUT } from '../config/demoqa.js' (note: ../ means go up one directory from e2e_tests to find config folder).
- Import fs from 'fs/promises'.
- Import path from 'path'.
- Import { fileURLToPath } from 'url'.
- CRITICAL: Define __filename and __dirname for ES modules: const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename);
- Define logFilePath using path.join(__dirname, '../logs/demoqa_results.txt')
- CRITICAL: Create logs directory if it doesn't exist using fs.mkdir(path.dirname(logFilePath), { recursive: true })
- Implement helper 'logResult(testName, status)' using fs.writeFile to overwrite '../logs/demoqa_results.txt'.
- Each test must log its individual result: 'PASS' or 'FAIL' with timestamp
- Log format: '[timestamp] Test: [testName] - Status: [PASS/FAIL]'
- Each test should log its result immediately after completion
- At the end, log a summary: 'Test Summary: X passed, Y failed out of 10 total tests'
- CRITICAL: Each individual test function must call logResult() to track success/failure per task
- Implement helper 'waitForElementToBeStable(driver, element, timeout)' for element stability.
- The waitForElementToBeStable function should only use: await driver.wait(until.elementIsVisible(element), timeout); await driver.wait(until.elementIsEnabled(element), timeout);
- Launch Chrome browser with stability options, go to the website, and perform tasks below sequentially.

CRITICAL IMPORT PATH REQUIREMENT:
- The test file will be saved in e2e_tests/ folder
- The config file is in config/ folder (one level up from e2e_tests/)
- Use '../config/demoqa.js' for the import path (NOT './config/demoqa.js')
- Use '../logs/demoqa_results.txt' for the log file path
- CRITICAL: Create logs directory if it doesn't exist using fs.mkdir(path.dirname(logFilePath), { recursive: true })

IMPORTANT: This is for demoqa.com website. Use the EXACT selectors and flow that work:

CRITICAL BROWSER SETUP:
- Use incognito mode to completely avoid Chrome Password Manager popups
- Keep browser visible (no --headless) so you can monitor test execution
- Incognito mode prevents all password manager, security warnings, and data breach notifications
- Browser will be visible on screen during test execution for debugging and monitoring

CRITICAL TIMING REQUIREMENTS:
- Use driver.sleep(3000-4000) for page loads and stabilization
- Use driver.sleep(1000-2000) for form interactions and navigation
- Use driver.sleep(500-1000) between form field inputs
- Use driver.sleep(2000-3000) between each test function
- Always wait for elements to be located, visible, AND enabled before interaction
- Wait for page loads and transitions to complete
- Log all important states and transitions

Define and execute these separate test functions with EXACT demoqa.com selectors:

1. **@Test FillAndSubmitTextBoxForm**: 
   - Navigate to website, wait 3s for page load
   - Fill Full Name field: By.id('${config.elements.fullName}')
   - Fill Email field: By.id('${config.elements.email}')
   - Fill Current Address field: By.id('${config.elements.currentAddress}')
   - Fill Permanent Address field: By.id('${config.elements.permanentAddress}')
   - Click Submit button: By.id('${config.elements.submitButton}')
   - Wait 3s for form submission
   - Verify submission success by checking output section is displayed: By.id('${config.elements.outputSection}')
   - Log individual result: logResult('FillAndSubmitTextBoxForm', 'PASS') or logResult('FillAndSubmitTextBoxForm', 'FAIL')

2. **@Test SelectCheckBox**: 
   - Click Check Box menu item: By.id('${config.elements.checkBoxMenuItem}')
   - Wait 3s for page load
   - Click expand button first: By.className('${config.elements.expandButton}')
   - Wait 1s for expansion
   - Click Home checkbox: By.className('${config.elements.homeCheckbox}')
   - Wait 2s for checkbox selection
   - Verify checkbox is selected by checking result display: By.className('${config.elements.checkboxResult}')
   - Log individual result: logResult('SelectCheckBox', 'PASS') or logResult('SelectCheckBox', 'FAIL')

3. **@Test SelectRadioButton**: 
   - Click Radio Button menu item: By.id('${config.elements.radioButtonMenuItem}')
   - Wait 3s for page load
   - Use JavaScript executor to click Yes radio button: By.id('${config.elements.yesRadio}')
   - Wait 2s for radio button selection
   - If Yes radio doesn't work, try Impressive radio: By.id('${config.elements.impressiveRadio}')
   - Verify radio button is selected by checking result text: By.className('${config.elements.radioResult}')
   - Log individual result: logResult('SelectRadioButton', 'PASS') or logResult('SelectRadioButton', 'FAIL')

4. **@Test SelectWebTables**: 
   - Click Web Tables menu item: By.id('${config.elements.webTablesMenuItem}')
   - Wait 3s for page load
   - Verify web tables are displayed: By.className('${config.elements.webTable}')
   - Log individual result: logResult('SelectWebTables', 'PASS') or logResult('SelectWebTables', 'FAIL')

5. **@Test FillAndSubmitAddNewRecordForm**: 
   - Click Add button: By.id('${config.elements.addNewRecordButton}')
   - Wait 2s for form to appear
   - Fill First Name field: By.id('${config.elements.firstName}')
   - Fill Last Name field: By.id('${config.elements.lastName}')
   - Fill Email field: By.id('${config.elements.userEmail}')
   - Fill Age field: By.id('${config.elements.age}')
   - Fill Salary field: By.id('${config.elements.salary}')
   - Fill Department field: By.id('${config.elements.department}')
   - Click Submit button: By.id('${config.elements.submitButton}')
   - Wait 3s for form submission
   - Verify new record is added to the table by searching for the name
   - Log individual result: logResult('FillAndSubmitAddNewRecordForm', 'PASS') or logResult('FillAndSubmitAddNewRecordForm', 'FAIL')

6. **@Test SearchForRecord**: 
   - Enter search term in search box: By.id('${config.elements.searchBox}')
   - Wait 2s for search results
   - Verify search results contain the expected record by checking table content
   - Log individual result: logResult('SearchForRecord', 'PASS') or logResult('SearchForRecord', 'FAIL')

7. **@Test EditFirstRecord**: 
   - Find and click Edit button for first record: By.xpath('${config.elements.editRecord1}')
   - Wait 2s for form to appear
   - Clear and fill form fields with new data
   - Click Submit button: By.id('${config.elements.submitButton}')
   - Wait 3s for form submission
   - Find search box: By.id('${config.elements.searchBox}')
   - IMPORTANT: Clear the search box first using .clear() method
   - Enter updated name in search box
   - Wait 2s for search results
   - Verify record is updated by checking table content
   - Log individual result: logResult('EditFirstRecord', 'PASS') or logResult('EditFirstRecord', 'FAIL')

8. **@Test DeleteSecondRecord**: 
   - Find and click Delete button for second record: By.xpath('${config.elements.deleteRecord2}')
   - Wait 2s for record deletion
   - Verify record is deleted by checking table content
   - Log individual result: logResult('DeleteSecondRecord', 'PASS') or logResult('DeleteSecondRecord', 'FAIL')

9. **@Test DoubleClickButton**: 
   - Click Buttons menu item: By.id('${config.elements.buttonsMenuItem}')
   - Wait 3s for page load
   - Perform double click on Double Click button: By.id('${config.elements.doubleClickBtn}')
   - Wait 2s for double click action
   - Verify double click message is displayed: By.id('${config.elements.doubleClickMessage}')
   - Log individual result: logResult('DoubleClickButton', 'PASS') or logResult('DoubleClickButton', 'FAIL')

10. **@Test RightClickButton**: 
    - Perform right click on Right Click button: By.id('${config.elements.rightClickBtn}')
    - Wait 2s for right click action
    - Verify right click message is displayed: By.id('${config.elements.rightClickMessage}')
    - Log individual result: logResult('RightClickButton', 'PASS') or logResult('RightClickButton', 'FAIL')

CRITICAL: You MUST implement ALL 10 test functions completely. Do NOT comment out or skip any test functions. Each test function must be fully implemented with proper error handling and logging.

MAIN RUNNER REQUIREMENTS:
- Call ALL 10 test functions in sequence
- Add 3-second waits between each test function
- Add visual separators with console.log("=".repeat(50)) between tests
- Log completion status for each test
- Add progress logging with emojis (🚀, ✅, ❌, 🎉)
- Use fs.writeFile (not appendFile) to overwrite log file each run
- CRITICAL: Create logs directory if it doesn't exist using fs.mkdir(path.dirname(logFilePath), { recursive: true })

CHROME OPTIONS REQUIREMENTS:
- Add --no-sandbox, --disable-dev-shm-usage, --disable-gpu
- Add --disable-blink-features=AutomationControlled, --disable-extensions
- Add --incognito, --disable-web-security, --disable-features=VizDisplayCompositor
- Set window size to 1920,1080

${inputsContext}

Output only raw JavaScript code — no Markdown, no explanation.
`;
}

function generateDemoQAPrompt2(config, inputsContext) {
  return `
Write a **complete runnable Selenium WebDriver test in Node.js** for demoqa.com website.

The script should:
- Import { Builder, By, until, Key } from 'selenium-webdriver'.
- Import { Options } from 'selenium-webdriver/chrome.js'.
- Import { websiteURL, formValues, elements, newRecordData, searchTerm, editRecordData, TIMEOUT } from '../config/demoqa.js' (note: ../ means go up one directory from e2e_tests to find config folder).
- Import fs from 'fs/promises'.
- Import path from 'path'.
- Import { fileURLToPath } from 'url'.
- CRITICAL: Define __filename and __dirname for ES modules: const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename);
- Define logFilePath using path.join(__dirname, '../logs/demoqa_results2.txt')
- CRITICAL: Create logs directory if it doesn't exist using fs.mkdir(path.dirname(logFilePath), { recursive: true })
- Implement helper 'logResult(testName, status)' using fs.writeFile to overwrite '../logs/demoqa_results2.txt'.
- Launch Chrome browser with basic options and perform workflow.

CHROME OPTIONS REQUIREMENTS:
- Add --no-sandbox, --disable-dev-shm-usage, --disable-gpu
- Add --disable-blink-features=AutomationControlled, --disable-extensions
- Add --incognito (this prevents Chrome Password Manager popups completely)
- Add --disable-web-security, --disable-features=VizDisplayCompositor
- Set window size to 1920,1080
- DO NOT add --headless (keep browser visible for monitoring)
- Incognito mode prevents all password manager and security popups

CRITICAL IMPORT PATH REQUIREMENT:
- The test file will be saved in e2e_tests/ folder
- The config file is in config/ folder (one level up from e2e_tests/)
- Use '../config/demoqa.js' for the import path (NOT './config/demoqa.js')
- Use '../logs/demoqa_results2.txt' for the log file path
- CRITICAL: Create logs directory if it doesn't exist using fs.mkdir(path.dirname(logFilePath), { recursive: true })

Create these test functions with proper implementation:

1. **testFillAndSubmitTextBoxForm**: 
   - Navigate to website, fill text box form
   - Full Name: By.id('${config.elements.fullName}')
   - Email: By.id('${config.elements.email}')
   - Current Address: By.id('${config.elements.currentAddress}')
   - Permanent Address: By.id('${config.elements.permanentAddress}')
   - Submit button: By.id('${config.elements.submitButton}')
   - Verify submission success by checking output section is displayed: By.id('${config.elements.outputSection}')
   - Log result: logResult('FillAndSubmitTextBoxForm', 'PASS') or logResult('FillAndSubmitTextBoxForm', 'FAIL')

2. **testSelectCheckBox**: 
   - Click Check Box menu item: By.id('${config.elements.checkBoxMenuItem}')
   - Click expand button first: By.className('${config.elements.expandButton}')
   - Click Home checkbox: By.className('${config.elements.homeCheckbox}')
   - Verify checkbox is selected by checking result display: By.className('${config.elements.checkboxResult}')
   - Log result: logResult('SelectCheckBox', 'PASS') or logResult('SelectCheckBox', 'FAIL')

3. **testSelectRadioButton**: 
   - Click Radio Button menu item: By.id('${config.elements.radioButtonMenuItem}')
   - Use JavaScript executor to click Yes radio button: By.id('${config.elements.yesRadio}')
   - If Yes radio doesn't work, try Impressive radio: By.id('${config.elements.impressiveRadio}')
   - Verify radio button is selected by checking result text: By.className('${config.elements.radioResult}')
   - Log result: logResult('SelectRadioButton', 'PASS') or logResult('SelectRadioButton', 'FAIL')

4. **testSelectWebTables**: 
   - Click Web Tables menu item: By.id('${config.elements.webTablesMenuItem}')
   - Verify web tables are displayed: By.className('${config.elements.webTable}')
   - Log result: logResult('SelectWebTables', 'PASS') or logResult('SelectWebTables', 'FAIL')

5. **testFillAndSubmitAddNewRecordForm**: 
   - Click Add button: By.id('${config.elements.addNewRecordButton}')
   - Fill form fields with data from config
   - Click Submit button: By.id('${config.elements.submitButton}')
   - Verify new record is added by searching for the name
   - Log result: logResult('FillAndSubmitAddNewRecordForm', 'PASS') or logResult('FillAndSubmitAddNewRecordForm', 'FAIL')

6. **testSearchForRecord**: 
   - Enter search term in search box: By.id('${config.elements.searchBox}')
   - Verify search results contain the expected record by checking table content
   - Log result: logResult('SearchForRecord', 'PASS') or logResult('SearchForRecord', 'FAIL')

7. **testEditFirstRecord**: 
   - Find and click Edit button for first record: By.xpath('${config.elements.editRecord1}')
   - Update form fields with new data
   - Click Submit button: By.id('${config.elements.submitButton}')
   - Find search box: By.id('${config.elements.searchBox}')
   - IMPORTANT: Clear the search box first using .clear() method
   - Enter updated name in search box
   - Verify record is updated by checking table content
   - Log result: logResult('EditFirstRecord', 'PASS') or logResult('EditFirstRecord', 'FAIL')

8. **testDeleteSecondRecord**: 
   - Find and click Delete button for second record: By.xpath('${config.elements.deleteRecord2}')
   - Verify record is deleted by checking table content
   - Log result: logResult('DeleteSecondRecord', 'PASS') or logResult('DeleteSecondRecord', 'FAIL')

9. **testDoubleClickButton**: 
   - Click Buttons menu item: By.id('${config.elements.buttonsMenuItem}')
   - Perform double click on button: By.id('${config.elements.doubleClickBtn}')
   - Verify double click message is displayed: By.id('${config.elements.doubleClickMessage}')
   - Log result: logResult('DoubleClickButton', 'PASS') or logResult('DoubleClickButton', 'FAIL')

10. **testRightClickButton**: 
    - Perform right click on button: By.id('${config.elements.rightClickBtn}')
    - Verify right click message is displayed: By.id('${config.elements.rightClickMessage}')
    - Log result: logResult('RightClickButton', 'PASS') or logResult('RightClickButton', 'FAIL')

MAIN RUNNER REQUIREMENTS:
- Call ALL 10 test functions in sequence
- Log summary at the end: 'Test Summary: X passed, Y failed out of 10 total tests'
- CRITICAL: Create logs directory if it doesn't exist using fs.mkdir(path.dirname(logFilePath), { recursive: true })

${inputsContext}

Output only raw JavaScript code — no Markdown, no explanation.
`;
}

// --- MAIN FUNCTIONS ---

async function generateTestsForWebsite(websiteName) {
  const config = websiteConfigs[websiteName];
  if (!config) {
    console.error(`Unknown website: ${websiteName}`);
    console.log("Available websites:", Object.keys(websiteConfigs));
    return;
  }

  console.log(`🚀 Starting Selenium test generation for ${websiteName}...`);

  // Load website-specific config
  const websiteConfig = await import(config.configFile);
  
  const inputsContext = `
Inputs (from '${config.configFile}'):
${Object.entries(websiteConfig).map(([key, value]) => `- ${key}: ${value}`).join('\n')}
`;

  // Generate Prompt 1 (with timing)
  console.log("  Generating Prompt 1 (with timing)...");
  let prompt1;
  if (websiteName === 'demoblaze') {
    prompt1 = generateDemoblazePrompt1(websiteConfig, inputsContext);
  } else if (websiteName === 'sauce_demo') {
    prompt1 = generateSauceDemoPrompt1(websiteConfig, inputsContext);
  } else if (websiteName === 'demoqa') {
    prompt1 = generateDemoQAPrompt1(websiteConfig, inputsContext);
  }

  // Generate Prompt 2 (without timing)
  console.log("  Generating Prompt 2 (without timing)...");
  let prompt2;
  if (websiteName === 'demoblaze') {
    prompt2 = generateDemoblazePrompt2(websiteConfig, inputsContext);
  } else if (websiteName === 'sauce_demo') {
    prompt2 = generateSauceDemoPrompt2(websiteConfig, inputsContext);
  } else if (websiteName === 'demoqa') {
    prompt2 = generateDemoQAPrompt2(websiteConfig, inputsContext);
  }

  const testCode1 = await generateTestCode(prompt1);
  const testPath1 = path.join(__dirname, "e2e_tests", config.testFile1);
  await saveTestFile(testPath1, testCode1);

  console.log(`✅ ${websiteName} Test Generation 1 Finished!`);
  console.log(`Run with: node ${path.relative(__dirname, testPath1)}`);

  // Generate Prompt 2 (without timing)
  console.log("  Generating Prompt 2 (without timing)...");
  if (websiteName === 'demoblaze') {
    prompt2 = generateDemoblazePrompt2(websiteConfig, inputsContext);
  } else if (websiteName === 'sauce_demo') {
    prompt2 = generateSauceDemoPrompt2(websiteConfig, inputsContext);
  }

  const testCode2 = await generateTestCode(prompt2);
  const testPath2 = path.join(__dirname, "e2e_tests", config.testFile2);
  await saveTestFile(testPath2, testCode2);

  console.log(`✅ ${websiteName} Test Generation 2 Finished!`);
  console.log(`Run with: node ${path.relative(__dirname, testPath2)}`);
}

// Legacy functions for backward compatibility
async function mainSelenium1() {
  await generateTestsForWebsite('demoblaze');
}

async function mainSelenium2() {
  console.log("Starting Selenium test generation 2...");
  // This would be handled by the new structure
}

// --- MAIN EXECUTION ---

async function main() {
  const websiteName = process.argv[2];
  
  if (websiteName) {
    // Generate tests for specific website
    await generateTestsForWebsite(websiteName);
  } else {
    // Generate tests for all websites
    console.log("🚀 Starting Selenium test generators for all websites...");
    
    for (const website of Object.keys(websiteConfigs)) {
      await generateTestsForWebsite(website);
  console.log("\n" + "=".repeat(50));
    }
  
    console.log("\n🎉 All test generators completed!");
  }
}

main().catch(console.error);