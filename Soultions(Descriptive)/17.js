function generateMatrix(n, m) {
    if (m > 2 * n - 1) {
        return null;  // Impossible case
    }

    const ans = Array(2 * n).fill().map(() => Array(m));

    for (let i = 0; i < 2 * n; i++) {
        for (let j = 0; j < m; j++) {
            ans[i][j] = Math.floor(((j - i + 2 * n) % (2 * n)) / 2);
        }
    }

    // Add 1 to all entries to match original output (1-based)
    for (let i = 0; i < 2 * n; i++) {
        for (let j = 0; j < m; j++) {
            ans[i][j] += 1;
        }
    }

    return ans;
}
