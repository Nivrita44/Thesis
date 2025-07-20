'use strict';

// ✅ Pure function: takes an integer n and returns { count, parts[] }
export function solve(n) {
    const count = n >> 1; // Math.floor(n / 2)
    const parts = [];

    if (n % 2 === 1) {
        parts.push(3);
        n -= 3;
    }

    const twos = n / 2;
    for (let i = 0; i < twos; i++) {
        parts.push(2);
    }

    return { count, parts };
}

// ✅ Test function
function testing_test() {
    const testCases = [{
            input: 5,
            expected: {
                count: 2,
                parts: [3, 2]
            }
        },
        {
            input: 6,
            expected: {
                count: 3,
                parts: [2, 2, 2]
            }
        },
        {
            input: 7,
            expected: {
                count: 3,
                parts: [3, 2, 2]
            }
        },
        {
            input: 2,
            expected: {
                count: 1,
                parts: [2]
            }
        }
    ];

    console.log("Running Tests...\n");

    testCases.forEach(({ input, expected }, index) => {
        const result = solve(input);
        const countMatch = result.count === expected.count;
        const partsMatch = JSON.stringify(result.parts) === JSON.stringify(expected.parts);
        const pass = countMatch && partsMatch;

        console.log(`Test Case ${index + 1}:`);
        console.log(`Input: ${input}`);
        console.log(`Expected Count: ${expected.count}`);
        console.log(`Actual Count:   ${result.count}`);
        console.log(`Expected Parts: ${expected.parts.join(' ')}`);
        console.log(`Actual Parts:   ${result.parts.join(' ')}`);
        console.log(`Status: ${pass ? "PASS" : "FAIL"}\n`);
    });
}

// Run test
testing_test();