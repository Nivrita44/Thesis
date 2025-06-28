const MAXN = 200010;
const UB = 1000000010;
const LB = -UB;

let n;
let a = new Uint32Array(MAXN);

function c(x) {
    let xi = x;
    for (let i = n - 1; i >= 0; i--) {
        x = 2 * x - a[i];
        if (x < LB) return -1;
        if (x > UB) return 1;
    }
    if (x < xi) return -1;
    if (x > xi) return 1;
    return 0;
}

function b() {
    let l = LB, h = UB;
    while (h - l > 1) {
        let m = (h + l) >> 1;
        let r = c(m);
        if (r === 0) return m;
        else if (r < 0) l = m;
        else h = m;
    }
    return LB - 100;
}

function solve(arr) {
    n = arr.length;
    a.set(arr);

    let as = 0;
    for (let i = 0; i < n; i++) {
        as += a[i];
    }

    let x = b();
    if (x < LB) return -1;

    let m = UB + 100;
    let u = 0;
    for (let i = n - 1; i >= 0; i--) {
        m = Math.min(m, x);
        u += x;
        x = 2 * x - a[i];
    }
    u -= n * m;

    if (u > as) return -1;
    return u;
}

function test() {
    const testCases = [
        { input: [1, 1], expected: 0 },
        { input: [1, 3, 2], expected: -1 },
        { input: [2, 1, 2, 6], expected: 3 },
    ];

    for (let i = 0; i < testCases.length; i++) {
        const { input, expected } = testCases[i];
        const result = solve(input);
        console.log(`Test Case ${i + 1}:`, result === expected ? "Passed" : `Failed (Expected: ${expected}, Got: ${result})`);
    }
}

test();