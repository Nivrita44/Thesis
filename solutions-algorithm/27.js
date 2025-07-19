'use strict';

// Pure function: returns an array of results
function roundedDivisionResults(numbers) {
    return numbers.map(n => {
        return Math.floor(n / 10) + (n % 10 >= 9 ? 1 : 0);
    });
}

// Test function
function test() {
    const testCases = [{
            input: [1, 9, 10, 34, 880055535],
            expected: [0, 1, 1, 3, 88005553]
        },
        {
            input: [0, 8, 19, 29, 99],
            expected: [0, 0, 2, 3, 10]
        }
    ];

    console.log("Running Tests...\n");

    testCases.forEach(({ input, expected }, index) => {
        const result = roundedDivisionResults(input);
        const pass = JSON.stringify(result) === JSON.stringify(expected);

        console.log(`Test Case ${index + 1}:`);
        input.forEach((n, i) => {
            const status = result[i] === expected[i] ? "PASS ✅" : "FAIL ❌";
            console.log(`Input: ${n} | Expected: ${expected[i]} | Got: ${result[i]} | ${status}`);
        });
        console.log(`Overall Status: ${pass ? "PASS ✅" : "FAIL ❌"}\n`);
    });
}

// Run test
test();