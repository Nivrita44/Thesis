'use strict';

// Pure function: returns an array of floor(n / 2)
export function solve(numbers) {
    return numbers.map(n => Math.floor(n / 2));
}

// Test function to verify correctness
// function testing_test() {
//     const testCases = [{
//         input: [3, 5],
//         expected: [1, 2]
//     }];

//     console.log("Running Tests...\n");

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input);
//         const pass = JSON.stringify(result) === JSON.stringify(expected);
//         console.log(`Test Case ${index + 1}:`);
//         input.forEach((n, i) => {
//             const status = result[i] === expected[i] ? "PASS ✅" : "FAIL ❌";
//             console.log(`Input: ${n} | Expected: ${expected[i]} | Got: ${result[i]} | ${status}`);
//         });
//         console.log(`Overall Status: ${pass ? 'PASS ✅' : 'FAIL ❌'}\n`);
//     });
// }

// // Run the test
// testing_test();