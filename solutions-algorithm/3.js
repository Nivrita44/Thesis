// Core function: q = number of elements, arr = array of numbers
function Solve(q, arr) {
    // Sort the array
    arr.sort((a, b) => a - b);

    let gaps = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] > 1) {
            gaps++;
        }
    }
    return gaps >= 1 ? "NO" : "YES";
}

// Test function
function testSolve() {
    const testCases = [
        { q: 3, arr: [1, 2, 2], expected: "YES" },
        { q: 4, arr: [5, 5, 5, 5], expected: "YES" },
        { q: 3, arr: [1, 2, 4], expected: "NO" },
        { q: 4, arr: [1, 3, 4, 4], expected: "NO" },
        { q: 1, arr: [100], expected: "YES" }
    ];

    for (let i = 0; i < testCases.length; i++) {
        const { q, arr, expected } = testCases[i];
        const result = Solve(q, arr);
        const status = result === expected ? "PASS" : "FAIL";
        console.log(`Test ${i + 1}: Expected = ${expected}, Got = ${result} => ${status}`);
    }
}

// Run tests if this script is run directlyn
if (require.main === module) {
    testSolve();
}