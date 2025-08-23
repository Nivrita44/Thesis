// @ts-nocheck
import { solve } from '../../../solutions-algorithm/47.js'

test('example case with k=2', () => {
    expect(solve(5, 2, [2, 5, 1, 3, 4])).toBe(3);
});

test('already sorted permutation', () => {
    expect(solve(4, 2, [1, 2, 3, 4])).toBe(0);
});

test('maximum size case', () => {
    const arr = Array.from({ length: 100000 }, (_, i) => BigInt(100000 - i));
    expect(solve(100000, 1, arr)).toBe(99999);
});

test('minimum size case', () => {
    expect(solve(2, 2, [2, 1])).toBe(1);
});

test('k equals array length', () => {
    expect(solve(5, 5, [5, 4, 3, 2, 1])).toBe(1);
});

test('reverse sorted array with k=2', () => {
    expect(solve(6, 2, [6, 5, 4, 3, 2, 1])).toBe(5);
});

test('random permutation case 1', () => {
    expect(solve(4, 3, [3, 1, 4, 2])).toBe(2);
});

test('random permutation case 2', () => {
    expect(solve(7, 4, [4, 2, 7, 1, 6, 3, 5])).toBe(2);
});