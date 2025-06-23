'use strict';

function solveNumbers(t, arr) {
    const results = [];

    for (let i = 0; i < t; i++) {
        const n = arr[i];
        let found = false;

        for (let x = 1; x < n && !found; x++) {
            for (let y = 1; y < n - x && !found; y++) {
                const z = n - x - y;
                if (z > 0 && x % 3 !== 0 && y % 3 !== 0 && z % 3 !== 0) {
                    // Sort in descending to match test cases like 5 4 1
                    const sorted = [x, y, z].sort((a, b) => b - a);
                    results.push("YES");
                    results.push(`${sorted[0]} ${sorted[1]} ${sorted[2]}`);
                    found = true;
                }
            }
        }

        if (!found) results.push("NO");
    }

    return results;
}

// ✅ Test function
function test() {
    const testCases = [{
            input: { t: 4, arr: [10, 4, 15, 9] },
            expected: [
                "YES", "5 4 1",
                "NO",
                "YES", "8 5 2",
                "NO"
            ]
        },
        {
            input: { t: 3, arr: [3, 5, 6] },
            expected: [
                "NO",
                "YES", "2 2 1",
                "YES", "2 3 1"
            ]
        }
    ];

    console.log("Running Tests...\n");

    testCases.forEach(({ input, expected }, index) => {
        const result = solveNumbers(input.t, input.arr);
        console.log(`Test Case ${index + 1}:`);

        for (let i = 0; i < expected.length; i++) {
            const exp = expected[i];
            const res = result[i];
            const status = res === exp ? "PASS ✅" : `FAIL ❌ (Expected: ${exp})`;
            console.log(`Output: ${res} | ${status}`);
        }

        const passed = JSON.stringify(result) === JSON.stringify(expected);
        console.log(`Overall Status: ${passed ? "PASS ✅" : "FAIL ❌"}\n`);
    });
}

test();