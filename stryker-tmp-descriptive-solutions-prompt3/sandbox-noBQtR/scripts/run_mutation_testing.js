#!/usr/bin/env node

import { execSync } from 'child_process';
import { readdirSync, existsSync } from 'fs';
import { join } from 'path';

const solutionsDir = '../solutions-algorithm';
const testsDir = '../Passed_test_gpt/tests-algorithm/tests-prompt1';

console.log('🚀 Starting Mutation Testing for Algorithm Solutions...\n');

// Check if solutions directory exists
if (!existsSync(solutionsDir)) {
    console.error('❌ Solutions directory not found:', solutionsDir);
    process.exit(1);
}

// Check if tests directory exists
if (!existsSync(testsDir)) {
    console.error('❌ Tests directory not found:', testsDir);
    process.exit(1);
}

// Get all solution files
const solutionFiles = readdirSync(solutionsDir)
    .filter(file => file.endsWith('.js'))
    .sort((a, b) => parseInt(a) - parseInt(b));

console.log(`📁 Found ${solutionFiles.length} solution files`);
console.log(`🧪 Tests directory: ${testsDir}\n`);

// Check if corresponding test files exist
const testFiles = readdirSync(testsDir)
    .filter(file => file.endsWith('.test.js'))
    .map(file => file.replace('_prompt1.test.js', ''));

console.log(`✅ Found ${testFiles.length} test files\n`);

// Verify all solutions have tests
const missingTests = solutionFiles
    .map(file => file.replace('.js', ''))
    .filter(solution => !testFiles.includes(solution));

if (missingTests.length > 0) {
    console.log('⚠️  Solutions without tests:', missingTests.join(', '));
    console.log('   These will not be mutation tested!\n');
}

console.log('🎯 Running mutation testing...\n');

try {
    // Run Stryker mutation testing
    execSync('npm run mutation:algorithm', { 
        stdio: 'inherit',
        cwd: process.cwd()
    });
    
    console.log('\n✅ Mutation testing completed successfully!');
    console.log('📊 Check the mutation report in: mutation-reports/algorithm-solutions/');
    
} catch (error) {
    console.error('\n❌ Mutation testing failed:', error.message);
    process.exit(1);
}




