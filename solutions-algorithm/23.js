'use strict';

// Pure function
export function solve(testCases) {
    return testCases.map(([a, b, n]) => {
        const x = Math.floor((n - b) / a);
        return a * x + b;
    });
}

// Test function
// function testing_test() {
//     const testCases = [{
//         input: [
//             [7, 5, 12345],
//             [5, 0, 4],
//             [10, 5, 15],
//             [17, 8, 54321],
//             [499999993, 9, 1000000000],
//             [10, 5, 187],
//             [2, 0, 999999999]
//         ],
//         expected: [
//             12339,
//             0,
//             15,
//             54306,
//             999999995,
//             185,
//             999999998
//         ]
//     }];

//     console.log("Running Tests...\n");
//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input);
//         const pass = JSON.stringify(result) === JSON.stringify(expected);

//         console.log(`Test Case ${index + 1}:`);
//         input.forEach(([a, b, n], i) => {
//             const actual = result[i];
//             const expect = expected[i];
//             const status = actual === expect ? 'PASS ✅' : 'FAIL ❌';
//             console.log(`Input: a=${a}, b=${b}, n=${n} | Expected: ${expect} | Got: ${actual} | ${status}`);
//         });
//         console.log(`Overall Status: ${pass ? 'PASS ✅' : 'FAIL ❌'}\n`);
//     });
// }

// // Run test
// testing_test();