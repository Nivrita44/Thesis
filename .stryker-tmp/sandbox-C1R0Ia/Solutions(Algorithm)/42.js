// @ts-nocheck
"use strict";

// Core logic function for Hackerrank-style use
function lengthOfLIS(n, a) {
    const stack = [];
    for (let i = 0; i < n; i++) {
        let l = 0,
            r = stack.length;
        while (l < r) {
            const m = (l + r) >> 1;
            if (stack[m] <= a[i]) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        stack[l] = a[i];
    }
    return stack.length;
}

// Test function to ensure correctness
function test() {
    const tests = [
        { input: { n: 3, a: [3, 1, 2] }, expected: 2 },
        { input: { n: 5, a: [4, 2, 1, 3, 5] }, expected: 3 },
        { input: { n: 1, a: [42] }, expected: 1 },
        { input: { n: 10, a: [1, 9, 8, 10, 2, 3, 4, 6, 5, 7] }, expected: 6 }
    ];

    for (const { input, expected }
        of tests) {
        const result = lengthOfLIS(input.n, input.a);
        console.log(`Input: ${input.a.join(' ')}`);
        console.log(`Output: ${result} | Expected: ${expected} | ${result === expected ? "✅ PASS" : "❌ FAIL"}`);
        console.log('---');
    }
}

// Run tests
test();