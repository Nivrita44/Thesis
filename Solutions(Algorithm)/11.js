'use strict';

// ✅ Pure function: accepts an array of two-digit numbers, returns an array of sums
function sumOfDigits(numbers) {
    return numbers.map(n => {
        const tens = Math.floor(n / 10);
        const ones = n % 10;
        return tens + ones;
    });
}

// ✅ Test function with expected output
function test() {
    const input = [77, 21, 40, 34, 19, 84, 10, 99];
    const expectedOutput = [14, 3, 4, 7, 10, 12, 1, 18];

    const result = sumOfDigits(input);

    console.log("Running Test...\n");
    result.forEach((value, index) => {
        console.log(`Input: ${input[index]} => Output: ${value} | Expected: ${expectedOutput[index]} | ${value === expectedOutput[index] ? "PASS" : "FAIL"}`);
    });
}

// Run the test
test();