function solve(n, a) {
    const m = 1000000007;

    const e = new Uint32Array(n + 1);
    for (let i = 0; i < n; i++) {
        e[i + 1] = e[i] ^ a[i];
    }

    const d = new Map();
    d.set(0, 1);

    for (let i = 1; i <= n; i++) {
        const prev = e[i - 1];
        const curr = e[i];
        const v = d.get(prev) || 0;
        const u = d.get(curr) || 0;
        d.set(prev, (3 * v + 2 * u) % m);
    }

    let s = 0;
    for (const v of d.values()) {
        s = (s + v) % m;
    }

    return s;
}
