// @ts-nocheck
import { solve } from '../../../solutions-descriptive/6.js'

test('example case from description', () => {
    expect(solve(3, [1, 2, 3])).toBe(21);
});

test('single element array', () => {
    expect(solve(1, [5])).toBe(3);
});

test('array with identical elements', () => {
    expect(solve(4, [7, 7, 7, 7])).toBe(81);
});

test('array with powers of 2', () => {
    expect(solve(5, [1, 2, 4, 8, 16])).toBe(243);
});

test('large array with maximum values', () => {
    expect(solve(3, [1000000000, 999999999, 999999998])).toBe(21);
});

test('array with alternating values', () => {
    expect(solve(4, [1, 3, 1, 3])).toBe(81);
});

test('array with sequentialumbers', () => {
    expect(solve(5, [1, 2, 3, 4, 5])).toBe(243);
});

test('array with binary values', () => {
    expect(solve(4, [1, 0, 1, 0])).toBe(81);
});