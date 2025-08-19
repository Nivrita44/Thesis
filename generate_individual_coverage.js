// import { execSync } from 'child_process';
// import path from 'path';
// import fs from 'fs';

// const args = process.argv.slice(2).map(a => a.toLowerCase());
// const isClaude = args.includes('claude');

// const testFolders = isClaude
//   ? [
//       'Claude/tests-algorithm/tests-prompt1',
//       'Claude/tests-algorithm/tests-prompt2',
//       'Claude/tests-algorithm/tests-prompt3'
//     ]
//   : [
//       'tests-algorithm/tests-prompt1',
//       'tests-algorithm/tests-prompt2',
//       'tests-algorithm/tests-prompt3'
//     ];

// const coverageRoot = isClaude
//   ? 'Claude/coverage-algorithm'
//   : 'coverage-algorithm';

// // Make sure coverage directory exists
// if (!fs.existsSync(coverageRoot)) {
//   fs.mkdirSync(coverageRoot, { recursive: true });
// }

// for (const folder of testFolders) {
//   const testFiles = fs.readdirSync(folder);

//   for (const file of testFiles) {
//     const problemId = path.basename(file, '.test.js');
//     const testPath = path.join(folder, file);
//     const coverageDir = path.join(coverageRoot, problemId);

//     // Check if the current test file matches the arguments
//     if (args.length > 0 && !args.some(arg => testPath.toLowerCase().includes(arg))) {
//       continue;
//     }

//     console.log(`✅ Running: ${testPath}`);
//     try {
//       const command = `node --experimental-vm-modules node_modules/jest/bin/jest.js --config=jest.config.mjs ${testPath} --coverage --coverageDirectory=${coverageDir}`;
//       execSync(command, { stdio: 'inherit' });
//     } catch (error) {
//       console.error(`❌ Error while testing ${testPath}`);
//     }
//   }
// }



import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const testFolders = [
  'tests-algorithm/tests-prompt1',
  'tests-algorithm/tests-prompt2',
  'tests-algorithm/tests-prompt3'
];
const coverageRoot = 'coverage-algorithm';

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
    const args = process.argv.slice(2); // Gets ['1', 'algorithm']
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