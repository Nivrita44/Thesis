'use strict';

export function solve(n) {
    const result = (n % 2) + 8;
    return [result, n - result];
}

function testing_test() {
    const testCases = [
        { input: 12, expected: [8, 4] },
        { input: 23, expected: [9, 14] },
        { input: 63874, expected: [8, 63866] },
    ];

    console.log("Running Tests...\n");
    testCases.forEach(({ input, expected }, index) => {
        const result = solve(input);
        const pass = result[0] === expected[0] && result[1] === expected[1];
        console.log(
            `Test Case ${index + 1}: Input = ${input}\n` +
            `Expected Output = ${expected.join(' ')}\n` +
            `Actual Output   = ${result.join(' ')}\n` +
            `Status: ${pass ? "PASS" : "FAIL"}\n`
        );
    });
}

testing_test();