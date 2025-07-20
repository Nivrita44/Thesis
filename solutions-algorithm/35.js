"use strict";

/**
 * Calculates the minimum number of operations needed.
 * @param {number} num - The initial number.
 * @param {number} k - The base for operations.
 * @returns {number}
 */
 function calculation(num, k) {
    if (k === 1) {
        return num;
    }
    let count = 0;
    while (num > 0) {
        count += num % k;
        num = Math.floor(num / k);
    }
    return count;
}

/**
 * Processes all test cases.
 * @param {Array<[number, number]>} cases - An array of [num, k] pairs.
 * @returns {number[]} - Array of results for each test case.
 */
export function solve(cases) {
    return cases.map(([num, k]) => calculation(num, k));
}

// ✅ Test function
function testing_test() {
    const input = [
        [5, 2],
        [3, 5],
        [16, 4],
        [100, 3],
        [6492, 10],
        [10, 1],
    ];
    const expected = [2, 3, 1, 4, 21, 10];
    const result = solve(input);

    console.log("Running Tests...\n");
    let allPass = true;

    result.forEach((out, i) => {
        const status = out === expected[i] ? "PASS " : `FAIL  (Expected: ${expected[i]}, Got: ${out})`;
        if (out !== expected[i]) allPass = false;
        console.log(`Test Case ${i + 1}: Output = ${out} | ${status}`);
    });

    console.log(`\nOverall Status: ${allPass ? "PASS " : "FAIL "}`);
}

// Run the test
testing_test();