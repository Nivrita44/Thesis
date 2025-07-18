// @ts-nocheck
// Core logic function
function Solve(n, s) {
    let running = [0];
    let power = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] !== 0) {
            running.push(s[i]);
        } else {
            if (running.length < 1) {
                continue;
            }
            running.sort((a, b) => a - b);
            power += running.pop();
        }
    }

    return power;
}

// Test function with your exact input/output
function testSolve() {
    const testCases = [
        { n: 5, s: [3, 3, 3, 0, 0], expected: 6 },
        { n: 6, s: [0, 3, 3, 0, 0, 3], expected: 6 },
        { n: 7, s: [1, 2, 3, 0, 4, 5, 0], expected: 8 },
        { n: 7, s: [1, 2, 5, 0, 4, 3, 0], expected: 9 },
        { n: 5, s: [3, 1, 0, 0, 4], expected: 4 }
    ];

    for (let i = 0; i < testCases.length; i++) {
        const { n, s, expected } = testCases[i];
        const result = Solve(n, s);
        const status = result === expected ? "PASS" : "FAIL";
        console.log(`Test ${i + 1}: Expected = ${expected}, Got = ${result} => ${status}`);
    }
}

// Run tests when this script is executed directly
if (require.main === module) {
    testSolve();
}