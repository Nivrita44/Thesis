// Functional logic
export function solve(n, m, k) {
    return n * m - 1 === k ? 'YES' : 'NO';
}

// Testing logic
// function testing_test() {
//     const tests = [
//         { input: [1, 1, 0], expected: 'YES' },
//         { input: [1, 5, 5], expected: 'NO' },
//         { input: [2, 2, 3], expected: 'YES' },
//         { input: [2, 2, 4], expected: 'NO' },
//         { input: [1, 4, 3], expected: 'YES' },
//         { input: [100, 100, 10000], expected: 'NO' },
//     ];

//     tests.forEach(({ input, expected }, idx) => {
//         const result = solve(...input);
//         const pass = result === expected ? '✅ PASS' : '❌ FAIL';
//         console.log(`Test ${idx + 1} | Input: ${input.join(' ')} | Output: ${result} | Expected: ${expected} | ${pass}`);
//     });
// }

// // Run tests
// testing_test();