// @ts-nocheck
'use strict';

// Core logic
function getDelays(pins) {
    return pins.map(pin => {
        let curr = 1;
        let sum = 0;
        for (let j = 0; j < pin.length; j++) {
            let next = pin[j] === '0' ? 10 : +pin[j];
            sum += Math.abs(curr - next);
            curr = next;
        }
        return sum + 4;
    });
}

// Test function
function test() {
    const testCases = [{
            input: [
                "1111",
                "1236",
                "1010",
                "1920",
                "9273",
                "0000",
                "7492",
                "8543",
                "0294",
                "8361"
            ],
            expected: [4, 9, 31, 27, 28, 13, 25, 16, 33, 24]
        },
        {
            input: ["0000", "9999", "1234", "9876"],
            expected: [13, 12, 7, 15] // ✅ Corrected
        }
    ];

    console.log("Running Tests...\n");

    testCases.forEach(({ input, expected }, index) => {
        const result = getDelays(input);
        const pass = JSON.stringify(result) === JSON.stringify(expected);

        console.log(`Test Case ${index + 1}:`);
        input.forEach((pin, i) => {
            const status = result[i] === expected[i] ? "PASS ✅" : "FAIL ❌";
            console.log(`PIN: ${pin} | Expected: ${expected[i]} | Got: ${result[i]} | ${status}`);
        });
        console.log(`Overall Status: ${pass ? "PASS ✅" : "FAIL ❌"}\n`);
    });
}

test();