function computeMinimumCost(n, k, mtr) {
    let v = [],
        w = [];

    for (let i = 0; i < n; i++) {
        v.push(mtr[i].a + mtr[i].b);
        w.push(mtr[i].a * mtr[i].b);
    }

    let ans = 1e15;

    for (let i = 0; i < n; i++) {
        let f = new Array(k + 1).fill(1e15);
        f[0] = 0;

        for (let j = 0; j < n; j++) {
            if (j === i) continue;
            for (let p = k; p >= v[j]; p--) {
                f[p] = Math.min(f[p], f[p - v[j]] + w[j]);
            }
        }

        for (let q = Math.max(k - v[i], 0); q <= k; q++) {
            let u = k - q;
            let res = 0;
            let aa = mtr[i].a;
            let bb = mtr[i].b;

            for (let j = 0; j < u; j++) {
                if (aa < bb) {
                    bb--;
                    res += aa;
                } else {
                    aa--;
                    res += bb;
                }
            }

            ans = Math.min(ans, f[q] + res);
        }
    }

    return ans === 1e15 ? -1 : ans;
}