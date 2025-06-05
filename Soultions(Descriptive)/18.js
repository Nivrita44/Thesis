function processMatrices(n, m, a, b) {
    for (let t = 0; t < Math.min(n, m) + 1; t++) {
        for (let i = 0; i < n; i++) {
            let k = 0;
            for (let j = 0; j < m; j++) {
                k |= (a[i][j] ^ b[i][j]) & a[i][j];
            }
            k = ((1n << 31n) - 1n) ^ BigInt(k);
            for (let j = 0; j < m; j++) {
                a[i][j] &= Number(k);
            }
        }

        for (let j = 0; j < m; j++) {
            let k = 0;
            for (let i = 0; i < n; i++) {
                k |= (a[i][j] ^ b[i][j]) & b[i][j];
            }
            for (let i = 0; i < n; i++) {
                a[i][j] |= k;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (a[i][j] !== b[i][j]) {
                return "No\n";
            }
        }
    }
    return "Yes\n";
}
