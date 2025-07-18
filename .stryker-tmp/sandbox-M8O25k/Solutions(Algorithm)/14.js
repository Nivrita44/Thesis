// @ts-nocheck
'use strict';

// Pure function: performs the simulation and returns the final queue string
function finalQueue(t, n, queue) {
    let result = queue;
    for (let i = 0; i < n; i++) {
        result = result.replace(/BG/g, 'GB');
    }
    return result;
}

// Test function to validate correctness
function test() {
    const testCases = [{
            input: { t: 5, n: 1, queue: 'BGGBG' },
            expected: 'GBGGB'
        },
        {
            input: { t: 8, n: 3, queue: 'BBGBGBGB' },
            expected: 'GGBGBBBB'
        }
    ];

    console.log("Running Tests...\n");
    testCases.forEach(({ input, expected }, idx) => {
        const result = finalQueue(input.t, input.n, input.queue);
        const pass = result === expected;
        console.log(
            `Test Case ${idx + 1}:\n` +
            `Input: t=${input.t}, n=${input.n}, queue="${input.queue}"\n` +
            `Expected: "${expected}"\n` +
            `Actual:   "${result}"\n` +
            `Status: ${pass ? "PASS" : "FAIL"}\n`
        );
    });
}

// Run the test
test();