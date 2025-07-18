// @ts-nocheck
'use strict';

/**
 * Solve each test case: find the maximum reachable value using the described method.
 * @param {Array} testCases - Array of test cases, each with a number `n` and array `a`
 * @returns {Array<number>} - The resulting max values for each test case
 */
function solveCases(testCases) {
    const results = [];

    for (const { n, a }
        of testCases) {
        const s = new Set();
        const d = new Map();
        s.add(n);
        let ans = n;
        const q = [n];

        for (let i = 0; i < n; i++) {
            let e = a[i] + i;
            if (d.has(e)) {
                d.get(e).push(i);
            } else {
                d.set(e, [i]);
            }
        }

        for (const x of q) {
            if (!d.has(x)) continue;

            for (const y of d.get(x)) {
                const val = x + y;
                if (!s.has(val)) {
                    q.push(val);
                    s.add(val);
                    ans = Math.max(ans, val);
                }
            }
        }

        results.push(ans);
    }

    return results;
}

// ✅ Test function
function test() {
    const testCases = [
        { n: 5, a: [2, 4, 6, 2, 5] },
        { n: 5, a: [5, 4, 4, 5, 1] },
        { n: 4, a: [6, 8, 2, 3] },
        { n: 1, a: [1] },
    ];

    const expected = [10, 11, 10, 1];
    const result = solveCases(testCases);

    console.log("Running Tests...\n");
    let pass = true;

    for (let i = 0; i < expected.length; i++) {
        const res = result[i];
        const exp = expected[i];
        const status = res === exp ? "PASS " : `FAIL  (Expected: ${exp}, Got: ${res})`;
        if (res !== exp) pass = false;
        console.log(`Test Case ${i + 1}: Output = ${res} | ${status}`);
    }

    console.log(`\nOverall Status: ${pass ? "PASS " : "FAIL "}`);
}

// Run the test
test();