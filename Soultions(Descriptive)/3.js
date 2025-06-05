function solve(a, b, c, d) {
    const q1 = [], q2 = [];
    divide(q1, a, b, 0, 1 << 20);
    divide(q2, c, d, 0, 1 << 20);

    let s = 0;
    for (let x of q1) {
        for (let y of q2) {
            const g = gcd(x, y);
            s += (x / g) * (y / g);
        }
    }
    return s;
}

function divide(q, l, r, L, R) {
    if (l <= L && r >= R) {
        q.push(R - L);
        return;
    }
    const m = (L + R) / 2;
    if (l < m) divide(q, l, r, L, m);
    if (r > m) divide(q, l, r, m, R);
}

function gcd(a, b) {
    while (a) {
        const r = b % a;
        b = a;
        a = r;
    }
    return b;
}
