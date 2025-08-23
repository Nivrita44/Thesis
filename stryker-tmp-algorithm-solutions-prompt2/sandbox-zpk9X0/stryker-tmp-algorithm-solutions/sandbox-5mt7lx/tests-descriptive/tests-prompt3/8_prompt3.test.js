// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/8.js';

test('minimum input (n=1, m=1)', () => {
    expect(solve(1, 1, [0], [0])).toBe('0');
});

test('n=2, m=1', () => {
    expect(solve(2, 1, [0, 1], [0])).toBe('1\n2');
}); //fail

test('n=1, m=2', () => {
    expect(solve(1, 2, [0], [0, 3])).toBe('1\n3');
});

test('n=2, m=2: smallest nontrivial, expect 1 operation', () => {
    expect(solve(2, 2, [0, 5], [1, 4])).toBe('1\n5');
});

test('all identical A or B throws off (no actual identicals allowed)', () => {
    expect(solve(2, 1, [2, -4], [6])).toBe('1\n10');
}); //fail

test('n=3, m=3', () => {
    expect(solve(3, 3, [1, 2, 9], [2, 3, 8])).toBe('2\n8 15');
}); //fail

test('n=3, m=4', () => {
    expect(solve(3, 4, [1, 2, 9], [2, 3, 8, 20])).toBe('2\n13 27');
}); //fail

test('n=4, m=3', () => {
    expect(solve(4, 3, [0, 3, 5, 10], [1, 4, 6])).toBe('2\n9 17');
}); //fail

test('large values in A and B', () => {
    expect(solve(2, 2, [-1e9, 1e9], [-1e9, 1e9])).toBe('1\n2000000000');
});

test('all points negative', () => {
    expect(solve(4, 4, [-5, -1, -2, -3], [-10, -6, -9, -7])).toBe('2\n9 17');
}); //fail

test('all points positive', () => {
    expect(solve(4, 4, [1, 2, 3, 4], [6, 5, 9, 7])).toBe('2\n8 14');
}); //fail

test('mixed distribution', () => {
    expect(solve(3, 4, [-88, 0, 100], [-11, 5, 19, 77])).toBe('2\n188 277');
}); //fail

test('just enough to make 3 triangles', () => {
    expect(solve(5, 4, [1, 100, -100, 5, 6], [13, -19, 90, 44])).toBe('3\n200 298 363');
}); //fail

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
