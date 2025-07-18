// @ts-nocheck
'use strict';

//Pure function: Accepts an array of numbers, returns an array of results
function processInputs(numbers) {
    return numbers.map(num => (num === 3 ? 3 : 2));
}

//Test function to check correctness
function test() {
    const testCases = [{
        input: [3, 15],
        expected: [3, 2]
    }];

    console.log("Running Tests...\n");

    testCases.forEach(({ input, expected }, index) => {
        const result = processInputs(input);
        const pass = JSON.stringify(result) === JSON.stringify(expected);
        console.log(`Test Case ${index + 1}:`);
        console.log(`Input: ${input.join(', ')}`);
        console.log(`Expected Output: ${expected.join(', ')}`);
        console.log(`Actual Output:   ${result.join(', ')}`);
        console.log(`Status: ${pass ? "PASS" : "FAIL"}\n`);
    });
}

// Run the test
test();