'use strict';

// Pure function: processes an array of [l, r] pairs
export function solve(pairs) {
    return pairs.map(([l, r]) => {
        return r < 2 * l ? ['-1', '-1'] : [String(l), String(2 * l)];
    });
}

// Test function
// function testing_test() {
//     const testCases = [{
//             input: [
//                 [1, 1337],
//                 [13, 69],
//                 [2, 4],
//                 [88, 89]
//             ],
//             expected: [
//                 ['1', '2'],
//                 ['13', '26'],
//                 ['2', '4'],
//                 ['-1', '-1']
//             ]
//         },
//         {
//             input: [
//                 [5, 20],
//                 [10, 19],
//                 [6, 11]
//             ],
//             expected: [

//                 ['5', '10'],
//                 ['-1', '-1'],
//                 ['-1', '-1']


//             ]
//         }
//     ];

//     console.log("Running Tests...\n");
//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input);
//         const pass = JSON.stringify(result) === JSON.stringify(expected);
//         console.log(`Test Case ${index + 1}:`);
//         input.forEach((pair, i) => {
//             console.log(`Input: ${pair.join(' ')} | Output: ${result[i].join(' ')} | Expected: ${expected[i].join(' ')} | ${result[i].join(' ') === expected[i].join(' ') ? 'PASS ✅' : 'FAIL ❌'}`);
//         });
//         console.log(`Overall Status: ${pass ? 'PASS ✅' : 'FAIL ❌'}\n`);
//     });
// }

// // Run the test
// testing_test();