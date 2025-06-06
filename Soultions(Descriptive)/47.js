function computeScore(n, k, a, b) {
    let l = 0,
        r = 1 _000_000_001;
    while (r - l > 1) {
        let mid = Math.floor((r + l) / 2);
        let cnt = 0;
        for (let i = 0; i < n; i++) {
            cnt += Math.max(0, Math.floor((a[i] - mid) / b[i]) + 1);
        }
        if (cnt <= k) {
            r = mid;
        } else {
            l = mid;
        }
    }

    let score = 0 n;
    for (let i = 0; i < n; i++) {
        let iters = Math.max(0, Math.floor((a[i] - r) / b[i]) + 1);
        k -= iters;
        score += BigInt(iters) * BigInt(a[i] + a[i] - (iters - 1) * b[i]) / 2 n;
        a[i] -= b[i] * iters;
    }

    a.sort((x, y) => y - x);
    for (let i = 0; i < Math.min(n, k); i++) {
        if (a[i] <= 0) break;
        score += BigInt(a[i]);
    }

    return score;
}