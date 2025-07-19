// ✅ Functional logic
function getOutput(n, y) {
    return n === y ? n : "1";
}

// 🧪 Test runner
function test() {
    const testCases = [
        { input: ["1", "2"], expected: "1" },
        { input: ["61803398874989484820458683436563811772030917980576", "61803398874989484820458683436563811772030917980576"], expected: "61803398874989484820458683436563811772030917980576" },
        { input: ["1", "100"], expected: "1" },
        { input: ["100", "100000"], expected: "1" },
        { input: ["12345", "67890123456789123457"], expected: "1" },
    ];

    console.log("Running Tests...\n");

    testCases.forEach(({ input, expected }, index) => {
        const result = getOutput(input[0], input[1]);
        const pass = result === expected;
        console.log(
            `Test Case ${index + 1}: Input: ${input.join(" ")} | Output: ${result} | Expected: ${expected} | ${
        pass ? "PASS " : "FAIL "
      }`
        );
    });
}

// ▶️ Uncomment to run tests
test();