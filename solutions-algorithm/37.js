// ✅ Functional version (HackerRank style)
export function solve(n) {
    const res = [];
    for (let i = 0; i < n; i++) {
        res.push(1 + 2 * i);
    }
    return res;
}

// 🧪 Test function
function testing_test() {
    const testCases = [
        { input: 3, expected: [1, 3, 5] },
        { input: 6, expected: [1, 3, 5, 7, 9, 11] },
        { input: 1, expected: [1] },
        { input: 5, expected: [1, 3, 5, 7, 9] }
    ];

    console.log("Running Tests...\n");

    testCases.forEach(({ input, expected }, idx) => {
        const output = solve(input);
        const passed = JSON.stringify(output) === JSON.stringify(expected);
        console.log(
            `Test Case ${idx + 1}: Input: ${input} | Output: ${output.join(" ")} | Expected: ${expected.join(" ")} | ${
        passed ? "PASS ✅" : "FAIL ❌"
      }`
        );
    });
}

// Uncomment to run tests
testing_test();