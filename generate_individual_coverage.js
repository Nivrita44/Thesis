// import { execSync } from 'child_process';
// import path from 'path';
// import fs from 'fs';

// const testFolders = [
//   'tests-descriptive/tests-prompt1',
//   'tests-descriptive/tests-prompt2',
//   'tests-descriptive/tests-prompt3'
// ];
// const coverageRoot = 'coverage-descriptive';

// // Make sure coverage directory exists
// if (!fs.existsSync(coverageRoot)) {
//   fs.mkdirSync(coverageRoot);
// }

// for (const folder of testFolders) {
//   const testFiles = fs.readdirSync(folder);

//   for (const file of testFiles) {
//     const problemId = path.basename(file, '.test.js'); // e.g. "1_prompt1"
//     const testPath = path.join(folder, file);
//     const coverageDir = path.join(coverageRoot, problemId);

    

//     console.log(`Running coverage for ${testPath}`);
//     try {
//         // Pass the explicit config to Jest so it uses the ESM config
//         execSync(
//           `cross-env NODE_OPTIONS=--experimental-vm-modules npx jest --config=jest.config.mjs ${testPath} --coverage --coverageDirectory=${coverageDir}`,
//           { stdio: 'inherit' }
//         );
//       } catch (error) {
//         console.error(`❌ Test failed: ${testPath}`);
//       }
//     }
//   }


import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const testFolders = [
  'tests-descriptive/tests-prompt1',
  'tests-descriptive/tests-prompt2',
  'tests-descriptive/tests-prompt3'
];
const coverageRoot = 'coverage-descriptive';

// Make sure coverage directory exists
if (!fs.existsSync(coverageRoot)) {
  fs.mkdirSync(coverageRoot);
}

for (const folder of testFolders) {
  const testFiles = fs.readdirSync(folder);

  for (const file of testFiles) {
    const problemId = path.basename(file, '.test.js');
    const testPath = path.join(folder, file);
    const coverageDir = path.join(coverageRoot, problemId);

    // Using the arguments passed from the npm script
    const args = process.argv.slice(2); // Gets ['1', 'descriptive']
    // Check if the current test file matches the arguments
    if (args.length > 0 && !args.some(arg => testPath.includes(arg))) {
        continue; // Skip if it doesn't match
    }


    console.log(`✅ Running: ${testPath}`);
    try {
      // THIS IS THE CORRECTED COMMAND
      const command = `node --experimental-vm-modules node_modules/jest/bin/jest.js --config=jest.config.mjs ${testPath} --coverage --coverageDirectory=${coverageDir}`;
      execSync(command, { stdio: 'inherit' });
    } catch (error) {
      console.error(`❌ Error while testing ${testPath}`);
    }
  }
}