// Main logic function
export function solve(n, arr) {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1] + arr[arr.length - 2] - arr[0] - arr[1];
}

// Test function
// function testing_test() {
//     const testCases = [
//         { input: [1, 2, 2, 3, 1, 5, 6, 1], expected: 9 },
//         { input: [1, 2, 3, 100, 200], expected: 297 },
//         { input: [3, 3, 3, 3], expected: 0 },
//         { input: [7, 8, 3, 1, 1, 8], expected: 14 }
//     ];

//     for (let i = 0; i < testCases.length; i++) {
//         const { input, expected } = testCases[i];
//         const result = solve(input);
//         const status = result === expected ? "PASS" : "FAIL";
//         console.log(`Test ${i + 1}: Expected = ${expected}, Got = ${result} => ${status}`);
//     }
// }

// // Run tests if this script is executed directly
// if (require.main === module) {
//     testing_test();
// }