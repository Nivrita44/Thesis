'use strict';

// Pure function: calculates the average percentage of orange juice
export function solve(types, percents) {
    const sum = percents.reduce((acc, val) => acc + val, 0);
    return sum / types;
}

// Test function to validate the logic
// function testing_test() {
//     const testCases = [{
//             input: { types: 3, percents: [50, 50, 100] },
//             expected: 66.66666666666667
//         },
//         {
//             input: { types: 4, percents: [0, 25, 50, 75] },
//             expected: 37.5
//         },
//         {
//             input: { types: 3, percents: [0, 1, 8] },
//             expected: 3
//         },
//         {
//             input: { types: 1, percents: [100] },
//             expected: 100
//         }
//     ];

//     console.log("Running Tests...\n");

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input.types, input.percents);
//         const pass = Math.abs(result - expected) < 1e-9; // handle floating point precision
//         console.log(`Test Case ${index + 1}:`);
//         console.log(`Input: types = ${input.types}, percents = [${input.percents.join(', ')}]`);
//         console.log(`Expected: ${expected}`);
//         console.log(`Actual:   ${result}`);
//         console.log(`Status: ${pass ? 'PASS' : 'FAIL'}\n`);
//     });
// }

// // Run the test
// testing_test();