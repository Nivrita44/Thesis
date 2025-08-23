// import { execSync } from 'child_process';
// import fs from 'fs';
// import path from 'path';

// const args = process.argv.slice(2);
// const problemId = args[0];
// const mode = args[1] || 'descriptive'; // default to descriptive if not specified

// if (!problemId || !['descriptive', 'algorithm'].includes(mode)) {
//   console.error('\nUsage: node scripts/run_problem_tests.js <problemId> [descriptive|algorithm]');
//   process.exit(1);
// }

// const baseTestPath = `tests-${mode}`;
// const baseCoveragePath = `coverage-${mode}`;

// const prompts = ['prompt1', 'prompt2', 'prompt3'];

// for (const prompt of prompts) {
//   const testFile = path.join(baseTestPath, `tests-${prompt}`, `${problemId}_${prompt}.test.js`);
//   const coverageDir = path.join(baseCoveragePath, `${problemId}_${prompt}`);

//   if (!fs.existsSync(testFile)) {
//     console.warn(`❌ Test file not found: ${testFile}`);
//     continue;
//   }

//   console.log(`✅ Running: ${testFile}`);
//   try {
//     // Pass the explicit config to Jest so it uses the ESM config
//     execSync(
//       `cross-env NODE_OPTIONS=--experimental-vm-modules npx jest --config=jest.config.mjs ${testFile} --coverage --coverageDirectory=${coverageDir}`,
//       { stdio: 'inherit' }
//     );
//   } catch (err) {
//     console.error(`❌ Error while testing ${testFile}`);
//   }
// }



import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
const problemId = args[0];
const mode = args[1] || 'descriptive'; // default to descriptive if not specified

if (!problemId || !['descriptive', 'algorithm'].includes(mode)) {
  console.error('\nUsage: node scripts/run_problem_tests.js <problemId> [descriptive|algorithm]');
  process.exit(1);
}

const baseTestPath = `tests-${mode}`;
const baseCoveragePath = `coverage-${mode}`;

const prompts = ['prompt1', 'prompt2', 'prompt3'];

for (const prompt of prompts) {
  const testFile = path.join(baseTestPath, `tests-${prompt}`, `${problemId}_${prompt}.test.js`);
  const coverageDir = path.join(baseCoveragePath, `${problemId}_${prompt}`);

  if (!fs.existsSync(testFile)) {
    console.warn(`❌ Test file not found, skipping: ${testFile}`);
    continue;
  }

  console.log(`✅ Running: ${testFile}`);
  try {
    // --- THIS IS THE ONLY LINE THAT HAS BEEN CHANGED ---
    // We now call Jest's script directly with Node and the required flag.
    const command = `node --experimental-vm-modules ./node_modules/jest/bin/jest.js --config=jest.config.mjs ${testFile} --coverage --coverageDirectory=${coverageDir}`;

    execSync(command, { stdio: 'inherit' });

  } catch (err) {
    // Jest's output is already shown due to stdio: 'inherit'.
    // This just adds a confirmation that an error occurred for this specific file.
    console.error(`❌ Error while testing ${testFile}`);
  }
}
