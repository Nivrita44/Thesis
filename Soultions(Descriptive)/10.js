function solve(n, l, r, edges) {
    const deg = new Uint32Array(n);
    const mix = new Uint32Array(n);

    for (let [u, v] of edges) {
        deg[u]++;
        deg[v]++;
        mix[u] ^= v;
        mix[v] ^= u;
    }

    const h = [];
    for (let i = 0; i < n; i++) {
        if (deg[i] === 1) h.push(i);
    }

    let ans = 0;
    let hPos = 0;

    for (let i = 0; i < n - 1; i++) {
        const u = h[hPos++];
        const v = mix[u];

        if (l[u] > r[v]) {
            ans += l[u] - r[v];
            l[v] = r[v];
        } else if (l[u] > l[v]) {
            l[v] = l[u];
        }

        mix[v] ^= u;
        deg[v]--;
        if (deg[v] === 1) h.push(v);
    }

    return ans + l[h[hPos]];
}
