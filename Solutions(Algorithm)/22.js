'use strict';

// ✅ Pure function: takes an array of integers and returns the corresponding winners
function whoWins(numbers) {
    return numbers.map(n => (n % 3 === 0 ? "Second" : "First"));
}

// ✅ Test function to verify correctness
function test() {
    const testCases = [{
            input: [1, 3, 5, 100, 999, 1000],
            expected: ["First", "Second", "First", "First", "Second", "First"]
        }

    ];

    console.log("Running Tests...\n");

    testCases.forEach(({ input, expected }, index) => {
        const result = whoWins(input);
        const pass = JSON.stringify(result) === JSON.stringify(expected);
        console.log(`Test Case ${index + 1}:`);
        input.forEach((n, i) => {
            const status = result[i] === expected[i] ? 'PASS ✅' : 'FAIL ❌';
            console.log(`Input: ${n} | Expected: ${expected[i]} | Got: ${result[i]} | ${status}`);
        });
        console.log(`Overall Status: ${pass ? 'PASS ✅' : 'FAIL ❌'}\n`);
    });
}

// Run test
test();