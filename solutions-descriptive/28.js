function minimumCostToEqualize(xBig, yBig) {
    const MAX_BITS = 60;
    const powersOfTwo = Array(MAX_BITS + 1).fill(1n);
    for (let i = 1; i <= MAX_BITS; i++) {
        powersOfTwo[i] = powersOfTwo[i - 1] * 2n;
    }

    
    const dp = Array.from({ length: MAX_BITS + 1 }, () =>
        Array.from({ length: MAX_BITS + 1 }, () =>
            Array(MAX_BITS + 1).fill(Infinity)
        )
    );

    dp[0][0].fill(0n);

    function update(i, j, k, val) {
        if (i <= MAX_BITS && j <= MAX_BITS) {
            dp[i][j][k] = dp[i][j][k] < val ? dp[i][j][k] : val;
        }
    }

    for (let i = 0; i <= MAX_BITS; i++) {
        for (let j = 0; j <= MAX_BITS; j++) {
            for (let k = MAX_BITS; k >= 1; k--) {
                if (dp[i][j][k] === Infinity) continue;
                const cost = dp[i][j][k] + powersOfTwo[k - 1];
                update(i + k - 1, j, k - 1, cost);
                update(i, j + k - 1, k - 1, cost);
                update(i, j, k - 1, dp[i][j][k]);
            }
            for (let k = 1; k <= MAX_BITS; k++) {
                update(i, j, 0, dp[i][j][k]);
            }
        }
    }

    
    const xAncestors = new Map();
    let x = xBig;
    for (let i = 0; i <= MAX_BITS; i++) {
        xAncestors.set(x, i);
        if (x === 0n) break;
        x = x / 2n;
    }

    let y = yBig;
    let answer = Infinity;
    for (let i = 0; i <= MAX_BITS; i++) {
        if (xAncestors.has(y)) {
            const j = xAncestors.get(y);
            answer = answer < dp[j][i][0] ? answer : dp[j][i][0];
        }
        y = y / 2n;
    }

    return answer;
}

function testMinimumCostToEqualize() {
    const testCases = [
        { input: [0n, 1n], expected: 2n },
        { input: [6n, 2n], expected: 6n },
        { input: [3n, 3n], expected: 0n },
        { input: [13n, 37n], expected: 26n },
        { input: [4238659325782394n, 12983091057341925n], expected: 32764n }
    ];

    let allPassed = true;
    testCases.forEach(({ input, expected }, index) => {
        const result = minimumCostToEqualize(...input);
        if (result === expected) {
            console.log(`Test case ${index + 1}: ✅ Passed`);
        } else {
            console.log(`Test case ${index + 1}: ❌ Failed (Got ${result}, Expected ${expected})`);
            allPassed = false;
        }
    });

    if (allPassed) {
        console.log("🎉 All test cases passed!");
    }
}

testMinimumCostToEqualize();
