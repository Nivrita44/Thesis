// Function to compute GCD (NOD)
function gcd(...args) {
    let x = args[0];
    for (let i = 1; i < args.length; i++) {
        let y = args[i];
        while (x && y) {
            x > y ? (x %= y) : (y %= x);
        }
        x += y;
    }
    return x;
}

// Function to compute the desired result for one pair (a,b)
function computeResult(a, b) {
    const n = gcd(a, b);
    let res = (a / n) * b;
    if (res === b) {
        if (a === n) {
            res *= b / n;
        } else {
            res *= 2;
        }
    }
    return res;
}

// Test function to verify correctness
function test() {
    const testCases = [
        { input: [2, 3], expected: 6 },
        { input: [1, 2], expected: 4 },
        { input: [3, 11], expected: 33 },
        { input: [1, 5], expected: 25 },
        { input: [5, 10], expected: 20 },
        { input: [4, 6], expected: 12 },
        { input: [3, 9], expected: 27 },
        { input: [250000000, 500000000], expected: 1000000000 },
    ];

    let allPassed = true;
    for (let i = 0; i < testCases.length; i++) {
        const { input, expected } = testCases[i];
        const output = computeResult(input[0], input[1]);
        const pass = output === expected;
        console.log(
            `Test #${i + 1}: Input: ${input} | Output: ${output} | Expected: ${expected} | ${pass ? 'PASS ✅' : 'FAIL ❌'}`
        );
        if (!pass) allPassed = false;
    }

    if (allPassed) {
        console.log('\nAll tests passed!');
    } else {
        console.log('\nSome tests failed.');
    }
}

// Run tests
test();