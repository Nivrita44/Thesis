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
