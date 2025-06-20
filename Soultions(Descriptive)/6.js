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

function test() {
    const testCases = [
        { n: 3, a: [1, 7, 9], expected: 3 },
        { n: 4, a: [179, 1, 1,179], expected: 9 },
        { n: 5, a: [1, 2, 3,3, 2], expected: 39 },
        { n: 12, a: [8 ,2, 5, 3, 9, 1, 8, 12, 9, 9, 9, 4], expected: 123 },
        { n: 1, a: [1000000000], expected: 3 }
    ];

    for (const { n, a, expected } of testCases) {
        const result = solve(n, a);
        console.log(`n=${n}, a=${a}: Expected=${expected}, Got=${result}`);
        console.log(result === expected ? "PASS" : "FAIL");
    }
}

test();
