// @ts-nocheck
'use strict';

/**
 * Solves a set of test cases based on permutation cycles and constraints.
 * @param {Array} testCases - Array of test case objects with { N, A, B, C }
 * @returns {Array} - Array of answers for each test case.
 */
function solveCases(testCases) {
    //TODO error has to fix
    const MODD = 1 _000_000_007;
    const results = [];

    for (const { N, A, B, C }
        of testCases) {
        const arrow = {};
        for (let i = 0; i < N; i++) {
            arrow[A[i]] = B[i];
        }

        const cSet = new Set();
        for (let i = 0; i < N; i++) {
            if (C[i] !== 0) cSet.add(C[i]);
        }

        const taken = new Array(N + 1).fill(false);
        const cycles = [];

        for (let i = 1; i <= N; i++) {
            if (!taken[i]) {
                const cycle = [];
                let j = i;
                while (!taken[j]) {
                    taken[j] = true;
                    cycle.push(j);
                    j = arrow[j];
                }
                cycles.push(cycle);
            }
        }

        let ans = 1;
        for (const cycle of cycles) {
            let hasFixed = false;
            for (const u of cycle) {
                if (cSet.has(u)) {
                    hasFixed = true;
                    break;
                }
            }

            if (!hasFixed && cycle.length > 1) {
                ans = (ans * 2) % MODD;
            }
        }

        results.push(ans);
    }

    return results;
}

// ✅ Test function
function test() {
    const input = [{
            N: 7,
            A: [1, 2, 3, 4, 5, 6, 7],
            B: [2, 3, 1, 7, 6, 5, 4],
            C: [2, 0, 1, 0, 0, 0, 0],
        },
        {
            N: 1,
            A: [1],
            B: [1],
            C: [0],
        },
        {
            N: 6,
            A: [1, 5, 2, 4, 6, 3],
            B: [6, 5, 3, 1, 4, 2],
            C: [6, 0, 0, 0, 0, 0],
        },
        {
            N: 8,
            A: [1, 6, 4, 7, 2, 3, 8, 5],
            B: [3, 2, 8, 1, 4, 5, 6, 7],
            C: [1, 0, 0, 7, 0, 3, 0, 5],
        },
        {
            N: 10,
            A: [1, 8, 6, 2, 4, 7, 9, 3, 10, 5],
            B: [1, 9, 2, 3, 4, 10, 8, 6, 7, 5],
            C: [1, 9, 2, 3, 4, 10, 8, 6, 7, 5],
        },
        {
            N: 7,
            A: [1, 2, 3, 4, 5, 6, 7],
            B: [2, 3, 1, 7, 6, 5, 4],
            C: [0, 0, 0, 0, 0, 0, 0],
        },
        {
            N: 5,
            A: [1, 2, 3, 4, 5],
            B: [1, 2, 3, 4, 5],
            C: [0, 0, 0, 0, 0],
        },
        {
            N: 5,
            A: [1, 2, 3, 4, 5],
            B: [1, 2, 3, 5, 4],
            C: [0, 0, 0, 0, 0],
        },
        {
            N: 3,
            A: [1, 2, 3],
            B: [3, 1, 2],
            C: [0, 0, 0],
        }
    ];

    const expected = [4, 1, 2, 2, 1, 8, 1, 2, 2];

    const result = solveCases(input);
    console.log("Running Tests...\n");

    let pass = true;
    for (let i = 0; i < expected.length; i++) {
        const res = result[i];
        const exp = expected[i];
        const status = res === exp ? "PASS" : `FAIL(Expected: ${exp}, Got: ${res})`;
        if (res !== exp) pass = false;
        console.log(`Test Case ${i + 1}: Output = ${res} | ${status}`);
    }

    console.log(`\nOverall Status: ${pass ? "PASS" : "FAIL"}`);
}

// Run the test
test();