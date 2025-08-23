import { solve } from '../../../solutions-descriptive/8.js';

test('minimum input (n=1, m=1)', () => {
    expect(solve(1, 1, [0], [0])).toBe('0');
});

test('n=1, m=2', () => {
    expect(solve(1, 2, [0], [0, 3])).toBe('1\n3');
});

test('n=2, m=2: smallest nontrivial, expect 1 operation', () => {
    expect(solve(2, 2, [0, 5], [1, 4])).toBe('1\n5');
});

test('large values in A and B', () => {
    expect(solve(2, 2, [-1e9, 1e9], [-1e9, 1e9])).toBe('1\n2000000000');
});

test('n=200000, m=200000 performance (random edge)', () => {
    const n = 200000,
        m = 200000;
    const a = Array.from({ length: n }, (_, i) => -1e9 + i * 10);
    const b = Array.from({ length: m }, (_, i) => 1e9 - i * 5);
    const kmax = Math.min(Math.floor((n + m) / 3), n, m);
    const out = solve(n, m, a, b).split('\n');
    expect(Number(out[0])).toBe(kmax);
    expect(out[1].split(' ').length).toBe(kmax);
});