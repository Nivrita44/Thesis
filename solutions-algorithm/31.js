'use strict';

export function solve(t, values) {
    const results = [];

    for (let i = 0; i < t; i++) {
        const value = values[i];
        let result = "";

        if (value === 3) {
            result = "-1";
        } else {
            const arr = [value, value - 1];
            for (let j = 1; j < value - 1; j++) {
                arr.push(j);
            }
            result = arr.join(' ');
        }

        results.push(result);
    }

    return results;
}

// Test Function
function testing_test() {
    const testCases = {
        input: {
            t: 5,
            values: [4, 3, 7, 5, 2]
        },
        expected: [
            "4 3 1 2",
            "-1",
            "7 6 1 2 3 4 5",
            "5 4 1 2 3",
            "2 1"
        ]
    };

    const result = solve(testCases.input.t, testCases.input.values);
    console.log("Running Tests...\n");

    for (let i = 0; i < testCases.expected.length; i++) {
        const res = result[i];
        const exp = testCases.expected[i];
        const status = res === exp ? "PASS" : `FAIL (Expected: "${exp}")`;
        console.log(`Output: ${res} | ${status}`);
    }

    const overall = JSON.stringify(result) === JSON.stringify(testCases.expected);
    console.log(`\nOverall Status: ${overall ? "PASS" : "FAIL"}`);
}

testing_test();