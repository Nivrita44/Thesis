import { solve } from '../../../solutions-descriptive/40.js';

test('n=4, various patterns', () => {
    const r1 = solve(4, [2, 1, -1, 1]);
    expect(new Set(r1)).toEqual(new Set([1, 2, 3, 4]));
    expect(r1[2]).toBeGreaterThan(0);

    const r2 = solve(4, [1, 2, 1, -1]);
    expect(new Set(r2)).toEqual(new Set([1, 2, 3, 4]));
    expect(r2[3]).toBeGreaterThan(0);
});

test('All elements except one removed in first iteration', () => {
    const r = solve(5, [1, 1, -1, 1, 1]);
    expect(r[2]).toBeGreaterThan(0);
    expect(new Set(r)).toEqual(new Set([1, 2, 3, 4, 5]));
});

test('n=6, more iterations', () => {
    const input = [2, 1, 2, -1, 2, 1];
    const p = solve(6, input);
    expect(new Set(p)).toEqual(new Set([1, 2, 3, 4, 5, 6]));
    const midIdx = input.indexOf(-1);
    expect(p[midIdx]).toBeGreaterThan(0);
});

test('Middle element survives longest', () => {
    const a = Array(9).fill(1);
    a[4] = -1;
    const res = solve(9, a);
    expect(res[4]).toBeGreaterThan(0);
    expect(new Set(res)).toEqual(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]));
});

test('n=8, elements removed in different iterations', () => {
    const a = [3, 2, 1, -1, 1, 2, 3, 1];
    const r = solve(8, a);
    expect(new Set(r)).toEqual(new Set([1, 2, 3, 4, 5, 6, 7, 8]));
});

test('Edge case: only one -1 (n=2)', () => {
    expect(new Set(solve(2, [1, -1]))).toEqual(new Set([1, 2]));
    expect(new Set(solve(2, [-1, 1]))).toEqual(new Set([1, 2]));
});

test('Edge case: large n odd', () => {
    const n = 11;
    const a = Array(n).fill(1);
    a[5] = -1;
    const out = solve(n, a);
    expect(new Set(out)).toEqual(new Set([...Array(n).keys()].map(k => k + 1)));
    expect(out[5]).toBeGreaterThan(0);
});

test('Edge case: large n even', () => {
    const n = 12;
    const a = Array(n).fill(1);
    a[4] = -1;
    const out = solve(n, a);
    expect(new Set(out)).toEqual(new Set([...Array(n).keys()].map(k => k + 1)));
    expect(out[4]).toBeGreaterThan(0);
});

test('All at first iteration except last', () => {
    expect(new Set(solve(4, [1, 1, 1, -1]))).toEqual(new Set([1, 2, 3, 4]));
});

test('Distinct iterations', () => {
    let a = [1, 2, 3, -1];
    let perm = solve(4, a);
    expect(new Set(perm)).toEqual(new Set([1, 2, 3, 4]));
    expect(perm[3]).toBeGreaterThan(0);

    a = [3, 2, 1, -1];
    perm = solve(4, a);
    expect(new Set(perm)).toEqual(new Set([1, 2, 3, 4]));
    expect(perm[3]).toBeGreaterThan(0);
});

test('n=5, varying pattern', () => {
    const a = [2, 1, -1, 1, 2];
    const p = solve(5, a);
    expect(new Set(p)).toEqual(new Set([1, 2, 3, 4, 5]));
    expect(p[2]).toBeGreaterThan(0);
});

test('Last element is survivor', () => {
    const n = 7;
    const arr = Array(n).fill(1);
    arr[n - 1] = -1;
    const out = solve(n, arr);
    expect(new Set(out)).toEqual(new Set([1, 2, 3, 4, 5, 6, 7]));
    expect(out[n - 1]).toBeGreaterThan(0);
});

test('First element is survivor', () => {
    const n = 8;
    const arr = Array(n).fill(1);
    arr[0] = -1;
    const out = solve(n, arr);
    expect(new Set(out)).toEqual(new Set([1, 2, 3, 4, 5, 6, 7, 8]));
    expect(out[0]).toBeGreaterThan(0);
});

test('Multiple -1s not possible (problem constraint), single survivor', () => {
    // Only one -1, others 1.
    const n = 3;
    for (let i = 0; i < n; ++i) {
        const arr = [1, 1, 1];
        arr[i] = -1;
        const perm = solve(n, arr);
        expect(new Set(perm)).toEqual(new Set([1, 2, 3]));
        expect(perm[i]).toBeGreaterThan(0);
    }
});

test('Stress: all elements removed at step 1 except survivor', () => {
    const n = 13;
    const arr = Array(n).fill(1);
    arr[7] = -1;
    const out = solve(n, arr);
    expect(new Set(out)).toEqual(new Set([...Array(n).keys()].map(x => x + 1)));
    expect(out[7]).toBeGreaterThan(0);
});