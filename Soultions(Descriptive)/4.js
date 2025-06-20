function solveLogic(a) {
    const n = a.length;
    const dp = Array(n).fill(0).map(() => Array(n).fill(0));
    let temp;

    for (let step = 3; step <= n; step++) {
        for (let i = 0; i + step - 1 < n; i++) {
            const j = i + step - 1;
            for (let k = i + 1; k < j; k++) {
                temp = a[i] * a[j] * a[k]
                    + (i + 1 <= k - 1 ? dp[i + 1][k - 1] : 0)
                    + (k + 1 <= j - 1 ? dp[k + 1][j - 1] : 0);
                dp[i][j] = Math.max(dp[i][j], temp);

                temp = dp[i][k] + (k + 1 <= j ? dp[k + 1][j] : 0);
                dp[i][j] = Math.max(dp[i][j], temp);

                temp = (i <= k - 1 ? dp[i][k - 1] : 0) + dp[k][j];
                dp[i][j] = Math.max(dp[i][j], temp);
            }
        }
    }
    return dp[0][n - 1];
}
function testSolveLogic() {
    const testCases = [
        { input: [2, 1, 2, 1, 1, 1], expected: 5 },
        { input: [1, 2, 1, 3, 1, 5], expected: 30 },
        { input: [9, 9, 8, 2, 4, 4, 3, 5, 3], expected: 732 },
        { input: [9, 9, 3, 2, 4, 4, 8, 5, 3], expected: 696 }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = solveLogic(input);
        console.log(`Test Case ${index + 1}:`, result === expected ? "Passed" : `Failed (Expected: ${expected}, Got: ${result})`);
    });
}

testSolveLogic();