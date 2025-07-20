'use strict';

// Pure function: returns the minimum number of steps
export function solve(x) {
    return Math.floor(x / 5) + (x % 5 !== 0 ? 1 : 0);
}

// Test function to verify correctness
function testing_test() {
    const testCases = [
        { input: 5, expected: 1 },
        { input: 12, expected: 3 }
    ];

    console.log("Running Tests...\n");
    testCases.forEach(({ input, expected }, index) => {
        const result = solve(input);
        const pass = result === expected;
        console.log(
            `Test Case ${index + 1}: Input = ${input}\n` +
            `Expected: ${expected}\n` +
            `Result:   ${result}\n` +
            `Status: ${pass ? 'PASS' : 'FAIL'}\n`
        );
    });
}

// Run the test
testing_test();