// @ts-nocheck
'use strict';

// Pure function: processes a list of [a, b, c] triples and returns results
function checkSumTriplets(triplets) {
    return triplets.map(([a, b, c]) => {
        return (
            a + b === c ||
            b + c === a ||
            a + c === b
        ) ? "YES" : "NO";
    });
}

// Test function
function test() {
    const testCases = [{
        input: [
            [1, 4, 3],
            [2, 5, 8],
            [9, 11, 20],
            [0, 0, 0],
            [20, 20, 20],
            [4, 12, 3],
            [15, 7, 8]
        ],
        expected: [
            "YES",
            "NO",
            "YES",
            "YES",
            "NO",
            "NO",
            "YES"
        ]
    }];

    console.log("Running Tests...\n");

    testCases.forEach(({ input, expected }, index) => {
        const result = checkSumTriplets(input);
        const pass = JSON.stringify(result) === JSON.stringify(expected);
        console.log(`Test Case ${index + 1}:`);
        input.forEach((triple, i) => {
            const status = result[i] === expected[i] ? 'PASS ✅' : 'FAIL ❌';
            console.log(`Input: ${triple.join(' ')} | Expected: ${expected[i]} | Got: ${result[i]} | ${status}`);
        });
        console.log(`Overall Status: ${pass ? 'PASS ✅' : 'FAIL ❌'}\n`);
    });
}

// Run test
test();