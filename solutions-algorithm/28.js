'use strict';

// ✅ Pure function
export function solve(testCases) {
    const results = [];

    for (const { x, y, f }
        of testCases) {
        let sum = 0;

        if (x[0] === f[0] && y[0] === f[0] && (f[1] - x[1]) * (f[1] - y[1]) < 0) {

            sum = Math.abs(x[1] - y[1]) + 2;
        } else if (x[1] === f[1] && y[1] === f[1] && (f[0] - x[0]) * (f[0] - y[0]) < 0) {

            sum = Math.abs(x[0] - y[0]) + 2;
        } else {

            sum = Math.abs(x[0] - y[0]) + Math.abs(x[1] - y[1]);
        }

        results.push(sum);
    }

    return results;
}

//Test function
// function testing_test() {
//     const testCases = [{
//         input: [
//             { x: [1, 1], y: [3, 3], f: [2, 2] },
//             { x: [2, 5], y: [2, 1], f: [2, 3] },
//             { x: [1000, 42], y: [1000, 1], f: [1000, 1000] },
//             { x: [1, 10], y: [3, 10], f: [2, 10] },
//             { x: [3, 8], y: [7, 8], f: [3, 7] },
//             { x: [2, 1], y: [4, 1], f: [1, 1] },
//             { x: [1, 344], y: [1, 10], f: [1, 1] }
//         ],
//         expected: [4, 6, 41, 4, 4, 2, 334]
//     }];

//     console.log("Running Tests...\n");

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input);
//         const pass = JSON.stringify(result) === JSON.stringify(expected);

//         console.log(`Test Case ${index + 1}:`);
//         input.forEach(({ x, y, f }, i) => {
//             const status = result[i] === expected[i] ? 'PASS ✅' : 'FAIL ❌';
//             console.log(`x=[${x}], y=[${y}], f=[${f}]`);
//             console.log(`Expected: ${expected[i]}, Got: ${result[i]} | ${status}\n`);
//         });
//         console.log(`Overall Status: ${pass ? 'PASS ✅' : 'FAIL ❌'}\n`);
//     });
// }

// // Run the test
// testing_test();