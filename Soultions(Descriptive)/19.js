function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}

function solve(n, a, b) {
    let r = new Uint32Array(n + 5);
    let c = new Uint32Array(n + 5);
    let x = 0, y = 0;

    for (let i = 1; i <= n; i++) {
        r[i] = gcd(i, a);
        if (r[i] === 1) x = i;
    }

    for (let j = 1; j <= n; j++) {
        c[j] = gcd(j, b);
        if (c[j] === 1) y = j;
    }

    let ans = 0;
    for (let i = 1; i <= x; i++) ans += r[i];
    for (let j = 1; j <= y; j++) ans += c[j];
    ans += (x + y - 2);

    let dp = Array(n - x + 1).fill().map(() => new Uint32Array(n - y + 1).fill(1e9));
    dp[0][0] = 0;

    for (let i = x; i <= n; i++) {
        for (let j = y; j <= n; j++) {
            if (i > x) dp[i - x][j - y] = Math.min(dp[i - x][j - y], dp[i - x - 1][j - y] + r[i] + c[j]);
            if (j > y) dp[i - x][j - y] = Math.min(dp[i - x][j - y], dp[i - x][j - y - 1] + r[i] + c[j]);
        }
    }

    return ans + dp[n - x][n - y];
}
