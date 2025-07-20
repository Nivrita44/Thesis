export function solve(arr) {
    const n = arr.length;
    const seen = {};
    let moves = 0;

    for (let j = n - 1; j >= 0; j--) {
        if (seen[arr[j]] === 1) {
            moves = j + 1;
            break;
        } else {
            seen[arr[j]] = 1;
        }
    }

    return moves;
}

// Test function
function testing_test() {
    const testCases = [
        { input: [3, 1, 4, 3], expected: 1 },
        { input: [1, 1, 1, 1, 1], expected: 4 },
        { input: [1], expected: 0 },
        { input: [6, 5, 4, 3, 2, 1], expected: 0 },
        { input: [1, 2, 1, 7, 1, 2, 1], expected: 5 },
    ];

    for (let i = 0; i < testCases.length; i++) {
        const { input, expected } = testCases[i];
        const result = solve(input);
        const status = result === expected ? "PASS" : "FAIL";
        console.log(`Test ${i + 1}: Expected = ${expected}, Got = ${result} => ${status}`);
    }
}

// Run tests if file is executed directly
if (require.main === module) {
    testing_test();
}