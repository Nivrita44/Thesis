'use strict';

/**
 * Subtract 1 from each input number.
 * @param {number[]} inputs - Array of integers
 * @returns {number[]} - Resulting array with each number minus one
 */
export function solve(inputs) {
    return inputs.map(x => x - 1);
}

// Test Function
// function testing_test() {
//     const input = [10, 7, 21, 100, 2, 1000, 6];
//     const expected = [9, 6, 20, 99, 1, 999, 5];
//     const result = solve(input);

//     console.log("Running Tests...\n");
//     let allPass = true;
//     result.forEach((out, i) => {
//         const status = out === expected[i] ? "PASS" : `FAIL (Expected: ${expected[i]}, Got: ${out})`;
//         if (out !== expected[i]) allPass = false;
//         console.log(`Test Case ${i + 1}: Output = ${out} | ${status}`);
//     });

//     console.log(`\nOverall Status: ${allPass ? "PASS" : "FAIL"}`);
// }

// // Run the test
// testing_test();