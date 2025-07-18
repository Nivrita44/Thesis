// @ts-nocheck
'use strict';

// ✅ Pure function: Takes array of integers, returns array of results
function subtractOne(numbers) {
    return numbers.map(n => n - 1);
}

// ✅ Test function: Verifies correctness
function test() {
    const input = [2, 4, 6];
    const expectedOutput = [1, 3, 5];
    const result = subtractOne(input);

    console.log("Running Tests...\n");
    result.forEach((val, idx) => {
        const pass = val === expectedOutput[idx];
        console.log(
            `Input: ${input[idx]} => Output: ${val} | Expected: ${expectedOutput[idx]} | ${pass ? "PASS" : "FAIL"}`
        );
    });
}

// Run the test
test();