'use strict';

// ✅ Pure function: returns "yes" or "no" for each pair [n, k]
export function solve(testCases) {
    return testCases.map(([n, k]) => {
        n = BigInt(n);
        k = BigInt(k);
        //TODO function problem
        for (let i = 0n; i <= 2n; i++) {
            if (n - k * i >= 0n && (n - k * i) % 2n === 0n) {
                return "yes";
            }
        }
        return "no";
    });
}

// ✅ Test function
function testing_test() {
    const testCases = [{
            input: [
                [5, 3],
                [6, 1],
                [7, 4],
                [8, 8]
            ],
            expected: ["yes", "yes", "no", "yes"]
        },
        {
            input: [
                [10, 2], // 10 - 2*0 = 10, even => yes
                [3, 2], // 3-2*0 = 3 odd, 3-2*1 = 1 odd, 3-2*2 = -1 invalid => no
                [1000000000000000000, 1] // very large n, k=1, 10^18 is even => yes
            ],
            expected: ["yes", "no", "yes"]
        }
    ];

    console.log("Running Tests...\n");

    testCases.forEach(({ input, expected }, index) => {
        const result = solve(input);
        const pass = JSON.stringify(result) === JSON.stringify(expected);

        console.log(`Test Case ${index + 1}:`);
        input.forEach(([n, k], i) => {
            const status = result[i] === expected[i] ? "PASS ✅" : "FAIL ❌";
            console.log(`Input: n=${n}, k=${k} | Expected: ${expected[i]} | Got: ${result[i]} | ${status}`);
        });
        console.log(`Overall Status: ${pass ? "PASS" : "FAIL"}\n`);
    });
}

// Run the test
testing_test();