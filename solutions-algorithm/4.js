// Core logic function
function Solve(arr) {
    const lenOfArray = arr.length;
    const sortedArr = [...arr].sort((a, b) => a - b);
    const max1 = sortedArr[lenOfArray - 1];
    const max2 = sortedArr[lenOfArray - 2];

    const temp = arr.map(value => {
        if (value !== max1) {
            return value - max1;
        } else {
            return value - max2;
        }
    });

    return temp;
}

// Test function
function testSolve() {
    const testCases = [
        { input: [4, 7, 3, 5], expected: [-3, 2, -4, -2] },
        { input: [1, 2], expected: [-1, 1] },
        { input: [1, 2, 3, 4, 5], expected: [-4, -3, -2, -1, 1] },
        { input: [4, 9, 4], expected: [-5, 5, -5] },
        { input: [4, 4, 4, 4], expected: [0, 0, 0, 0] }
    ];

    for (let i = 0; i < testCases.length; i++) {
        const { input, expected } = testCases[i];
        const result = Solve(input);
        const pass = JSON.stringify(result) === JSON.stringify(expected);
        console.log(`Test ${i + 1}: Expected = [${expected}], Got = [${result}] => ${pass ? "PASS" : "FAIL"}`);
    }
}

// Run tests when executed directly
if (require.main === module) {
    testSolve();
}