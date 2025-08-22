import { solve } from '../../../solutions-descriptive/14.js';

test('Single scarecrow at 0, k=3, l=5', () => {
    expect(solve(1, 3, 5, [0])).toBe(4);
});

test('Multiple scarecrows, k=2, l=5, a=[2,5,5]', () => {
    expect(solve(3, 2, 5, [2, 5, 5])).toBe(5);
});

test('Single scarecrow at the end, k=l=10', () => {
    expect(solve(1, 10, 10, [10])).toBe(20);
});

test('One scarecrow at every integer in range, k=1, l=10', () => {
    expect(solve(10, 1, 10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(0);
});

test('Two scarecrows both at 0, k=1, l=2', () => {
    expect(solve(2, 1, 2, [0, 0])).toBe(2);
});

test('Two scarecrows at 0 and 2, k=1, l=2', () => {
    expect(solve(2, 1, 2, [0, 2])).toBe(1);
});

test('k=1, l=1, single scarecrow at 0', () => {
    expect(solve(1, 1, 1, [0])).toBe(0);
});

test('k=l=1, single scarecrow at 1', () => {
    expect(solve(1, 1, 1, [1])).toBe(2);
});

test('Edge: all scarecrows at 0, l=100000000, k=99999999', () => {
    expect(solve(2, 99999999, 100000000, [0, 0])).toBe(2);
});

test('Scarecrows at even positions, k=3, l=12', () => {
    expect(solve(4, 3, 12, [0, 2, 4, 6])).toBe(6);
});

test('n=200000, k=1, l=10^8, all scarecrows at 0', () => {
    const n = 200000;
    const a = Array(n).fill(0);
    expect(solve(n, 1, 100000000, a)).toBe(199999998);
});

test('Edge: k=1, l=1, scarecrow at 0', () => {
    expect(solve(1, 1, 1, [0])).toBe(0);
});

test('Edge: k=1, l=1, scarecrow at 1', () => {
    expect(solve(1, 1, 1, [1])).toBe(2);
});