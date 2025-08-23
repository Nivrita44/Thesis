// @ts-nocheck
// generate_tests.js

import csv from "csv-parser";
import dotenv from "dotenv";
import { createReadStream } from "fs";
import fs from "fs/promises";
import { OpenAI } from "openai";
import path from "path";
import { fileURLToPath } from "url";

// --- CONFIGURATION ---
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OPENAI_API_KEY = process.env.OPENAI_API_KEYY;
if (!OPENAI_API_KEY) {
  console.error("Error: OPENAI_API_KEY not found in .env file.");
  process.exit(1);
}

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
const LLM_MODEL = "gpt-4.1";

const PATHS = {
  dataset: path.join(__dirname, "dataset.csv"),
  problems: path.join(__dirname, "problems-descriptive"),
  solutions: path.join(__dirname, "solutions-descriptive"),
  testsPrompt1: path.join(__dirname, "tests-descriptive", "tests-prompt1"),
  testsPrompt2: path.join(__dirname, "tests-descriptive", "tests-prompt2"),
  testsPrompt3: path.join(__dirname, "tests-descriptive", "tests-prompt3"),
};

// --- HELPER FUNCTIONS ---

/**
 * Reads and parses the dataset.csv file.
 * @returns {Promise<Array<{problem_path: string, solution_path: string}>>}
 */
async function readDataset() {
  return new Promise((resolve, reject) => {
    const results = [];
    createReadStream(PATHS.dataset)
      // Add the mapHeaders and mapValues options here
      .pipe(
        csv({
          mapHeaders: ({ header }) => header.trim(),
          mapValues: ({ value }) => value.trim(),
        })
      )
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
}

/**
 * Cleans the solution code by removing the testing function and module.exports.
 * @param {string} code - The original JS code.
 * @returns {string} - The cleaned code.
 */
function cleanSolutionCode(code) {
  // Remove the testing_test function and its call
  let cleanedCode = code.replace(
    /function testing_test\(\) {[\s\S]*?}\s*testing_test\(\);/s,
    ""
  );

  // Remove CommonJS export
  cleanedCode = cleanedCode.replace(/module\.exports\s*=\s*solve;/s, "");

  // Remove default export if present
  cleanedCode = cleanedCode.replace(/export\s+default\s+solve\s*;/s, "");

  // Ensure named export is added
  if (!/export\s+function\s+solve/.test(cleanedCode)) {
    cleanedCode = cleanedCode.replace(
      /function\s+solve\s*\(/,
      "export function solve("
    );
  }

  return cleanedCode.trim();
}

/**
 * Cleans the LLM response to extract only the JS code block.
 * @param {string} responseText - The full response from the LLM.
 * @returns {string} - The extracted Javascript code.
 */
function cleanLLMResponse(responseText) {
  const codeBlockRegex = /```(?:javascript|js)\s*([\s\S]*?)```/i;
  const match = responseText.match(codeBlockRegex);
  if (match && match[1]) {
    return match[1].trim();
  }
  // If no markdown block is found, assume the whole response is code.
  return responseText.trim();
}

/**
 * Calls the OpenAI API to generate test cases.
 * @param {string} prompt - The prompt to send to the LLM.
 * @returns {Promise<string>} - The generated test code.
 */
async function generateTestCode(prompt) {
  try {
    console.log("  Sending request to OpenAI...");
    const response = await openai.chat.completions.create({
      model: LLM_MODEL,
      messages: [
        {
          role: "system",
          content: `You are an expert software developer specializing in writing Jest test cases. 
The function to be tested is named 'solve' with signature 'function solve' and it returns some type according to the parameter type.
It does NOT use stdin or stdout. Write Jest test cases that directly call this function and use expect(...).toBe(...) assertions.
Only output raw JavaScript code.`,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    const generatedText = response.choices[0].message.content;
    console.log("  Received response from OpenAI.");
    return cleanLLMResponse(generatedText);
  } catch (error) {
    console.error("  Error calling OpenAI API:", error);
    return `// Failed to generate tests: ${error.message}`;
  }
}

/**
 * Saves the generated test file to the specified path.
 * @param {string} filePath - The full path where the file should be saved.
 * @param {string} content - The content to write to the file.
 */
async function saveTestFile(filePath, content) {
  try {
    const dir = path.dirname(filePath);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(filePath, content, "utf-8");
    console.log(`  Successfully saved test file to: ${filePath}`);
  } catch (error) {
    console.error(`  Error saving file ${filePath}:`, error);
  }
}

// --- MAIN EXECUTION LOGIC ---

async function main() {
  console.log("Starting test generation process...");
  const dataset = await readDataset();

  for (const row of dataset) {
    const { problem_path: problemFile, solution_path: solutionFile } = row;
    if (!problemFile || !solutionFile) continue;

    const problemId = path.basename(problemFile, ".txt");
    console.log(`\nProcessing Problem ID: ${problemId}`);

    const problemContent = await fs.readFile(
      path.join(PATHS.problems, problemFile),
      "utf-8"
    );
    const solutionContent = await fs.readFile(
      path.join(PATHS.solutions, solutionFile),
      "utf-8"
    );
    const cleanedSolutionContent = cleanSolutionCode(solutionContent);

    // --- Task 1: Generate tests from problem description only ---
    console.log("[Task 1/3] Generating tests from problem description...");

    const prompt1 = `
Generate clean, working Jest test cases for the following programming problem.

Assume the solution function is called 'solve'. It is exported from a JavaScript file using ES module syntax:
import { solve } from '../../solutions-descriptive/${solutionFile}'

Requirements:
- The function does NOT use stdin or stdout.
- It takes one or more direct arguments (not arrays of inputs).
- You must infer the number and type of arguments from the problem description.
- All numeric values should be treated as BigInt unless clearly stated otherwise.
- The return value should be treated as a single value (BigInt, string, number, etc.). Use .toBe(...) for primitive return types, or .toEqual(...) for arrays or objects.
- Do not use any comment lines. Only return clean code.
- Include at least 5 and at most 10 test cases:
  - One example from the description
  - One edge case
  - One upper-bound or large input case
  - One minimal or lower-bound case
  - One tricky or corner case
  - Two or more random or generic valid cases

Output format:
test('description', () => {
  expect(solve(...args)).toBe(expected);
});

Problem Description:
---
${problemContent}
`;

    const testCode1 = await generateTestCode(prompt1);
    const testPath1 = path.join(
      PATHS.testsPrompt1,
      `${problemId}_prompt1.test.js`
    );
    await saveTestFile(testPath1, testCode1);

    // --- Task 2: Generate tests from solution code only ---
    console.log("[Task 2/3] Generating tests from solution code only...");

    const prompt2 = `
Generate Jest test cases for the following JavaScript function named 'solve'. It is defined in '../../solutions-descriptive/${solutionFile}'.

Requirements:
- Do not use any comment lines. Only return clean code.
- Use ES module import syntax.
- The function does not use stdin or stdout.
- Analyze the code to identify typical, edge, boundary, and invalid cases.
- Treat all numbers as BigInt unless the code clearly uses primitive numbers.
- Include between 7 and 10 well-labeled test cases that target:
  - Common scenarios
  - Edge/boundary values
  - Performance limits or large values
  - Invalid or unexpected inputs (if applicable)

Solution Code:
---
${cleanedSolutionContent}
`;

    const testCode2 = await generateTestCode(prompt2);
    const testPath2 = path.join(
      PATHS.testsPrompt2,
      `${problemId}_prompt2.test.js`
    );
    await saveTestFile(testPath2, testCode2);

    // --- Task 3: Generate tests from both problem and solution ---
    console.log(
      "[Task 3/3] Generating tests from both problem and solution..."
    );

    const prompt3 = `
Generate Jest test cases for a function called 'solve', defined in '../../solutions-descriptive/${solutionFile}'.

Use both the problem description and the solution code to generate accurate, meaningful test coverage.

Requirements:
- Use ES module import syntax.
- The function does not use stdin or stdout.
- Do not include any comment lines. Only return clean code.
- Treat all numbers as BigInt unless otherwise indicated.
- Generate 7 to 10 test cases, covering:
  - Example from description
  - Edge cases
  - Upper-bound and lower-bound inputs
  - Unexpected values (if applicable)
  - Random or tricky valid inputs

Problem Description:
---
${problemContent}

Solution Code:
---
${cleanedSolutionContent}
`;

    const testCode3 = await generateTestCode(prompt3);
    const testPath3 = path.join(
      PATHS.testsPrompt3,
      `${problemId}_prompt3.test.js`
    );
    await saveTestFile(testPath3, testCode3);
  }

  console.log("\nTest generation process finished!");
}

main().catch(console.error);
