// generate_selenium_test_claude.js

import dotenv from "dotenv";
import fs from "fs/promises";
import Anthropic from "@anthropic-ai/sdk";
import path from "path";
import { fileURLToPath } from "url";

// --- CONFIGURATION ---
dotenv.config({ path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../.env") });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import dummy config to embed variables in the prompt
const { websiteURL, usernamePrefix, password, productName, TIMEOUT } = await import("./config/config.js");

const Claude_API_KEY= process.env.CLAUDE_API_KEYY;
if (!Claude_API_KEY){
  console.error("Error: Claude_API_KEY not found in .env file.");
  process.exit(1);
}

const anthropic = new Anthropic({ apiKey: Claude_API_KEY });
const LLM_MODEL = "claude-sonnet-4-20250514"; // Latest Claude model

const PATHS = {
  testsSelenium1: path.join(__dirname, "e2e_tests", "ecommerce.test.js"),
  testsSelenium2: path.join(__dirname, "e2e_tests", "ecommerce.test2.js"),
};

// --- HELPERS ---

function cleanLLMResponse(responseText) {
  const codeBlockRegex = /```(?:javascript|js)\s*([\s\S]*?)```/i;
  const match = responseText.match(codeBlockRegex);
  return match ? match[1].trim() : responseText.trim();
}

async function generateTestCode(prompt) {
  try {
    console.log("  Sending request to Claude...");
    const response = await anthropic.messages.create({
      model: LLM_MODEL,
      max_tokens: 4000,
      messages: [
        {
          role: "user",
          content: `
You are a senior QA automation engineer.
Generate a **Node.js Selenium WebDriver script** that fully automates a realistic e-commerce test workflow.
Each test should be isolated, reliable, and run sequentially with clear logging.
Use async/await syntax throughout.
Output **only runnable JavaScript code**.

${prompt}
          `,
        },
      ],
    });
    console.log("  Received response from Claude.");
    return cleanLLMResponse(response.content[0].text);
  } catch (err) {
    console.error("  Error calling Claude:", err);
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



// --- MAIN ---
async function mainSelenium1() {
  console.log("Starting Selenium test generation...");

  const inputsContext = `
Inputs (from '../config/config.js'):
- websiteURL: ${websiteURL}
- usernamePrefix: ${usernamePrefix}
- password: ${password}
- productName: ${productName}
- TIMEOUT: ${TIMEOUT}
`;

  const seleniumPrompt = `
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
   - Look for specific product using By.xpath("//td[contains(text(),'${productName}')]")
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

  const testCode = await generateTestCode(seleniumPrompt);
  await saveTestFile(PATHS.testsSelenium1, testCode);

  console.log("\n✅ Selenium Test Generation 1 Finished!");
  console.log(`Run with: node ${path.relative(__dirname, PATHS.testsSelenium1)}`);
}

async function mainSelenium2() {
  console.log("Starting Selenium test generation 2...");

  const inputsContext = `
Inputs (from '../config/config.js'):
- websiteURL: ${websiteURL}
- usernamePrefix: ${usernamePrefix}
- password: ${password}
- productName: ${productName}
- TIMEOUT: ${TIMEOUT}
`;

  const seleniumPrompt2 = `
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
   - Look for specific product: By.xpath("//td[contains(text(),'${productName}')]")
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

  const testCode = await generateTestCode(seleniumPrompt2);
  await saveTestFile(PATHS.testsSelenium2, testCode);

  console.log("\n✅ Selenium Test Generation 2 Finished!");
  console.log(`Run with: node ${path.relative(__dirname, PATHS.testsSelenium2)}`);
}

// await checkAvailableModels();


// Run both generators
async function main() {
  console.log("🚀 Starting both Selenium test generators...");
  
  await mainSelenium1();
  console.log("\n" + "=".repeat(50));
  await mainSelenium2();
  
  console.log("\n🎉 Both test generators completed!");
}

main().catch(console.error);
