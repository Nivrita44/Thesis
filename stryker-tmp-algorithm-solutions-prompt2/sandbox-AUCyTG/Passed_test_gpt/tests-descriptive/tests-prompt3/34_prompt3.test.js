import { solve } from '../../../solutions-descriptive/34.js';

test('simple k, mod is 3', () => {
    expect(solve([4, 7, 10], [1, 1, 1])).toBe('3');
});

test('unordered b, mod 2', () => {
    expect(solve([4, 7, 9], [1, 1, 0])).toBe('2');
});

test('b impossible: sum b > sum a', () => {
    expect(solve([1, 2, 3], [4, 5, 6])).toBe('-1');
});

test('b impossible: same sum but values dont match', () => {
    expect(solve([5, 10, 15], [0, 2, 3])).toBe('-1');
});

test('single element, b greater than a', () => {
    expect(solve([1], [2])).toBe('-1');
});

test('all ones, b all zeros', () => {
    expect(solve([1, 1, 1, 1], [0, 0, 0, 0])).toBe('1');
});

test('different possible k, picks the lowest valid', () => {
    expect(solve([14, 17, 19], [0, 3, 5])).toBe('7');
});

test('impossible because max b >= k', () => {
    expect(solve([6, 9, 15], [4, 3, 2])).toBe('-1');
});

test('peakX + 1 exceeds 1e9', () => {
    expect(solve([1e9, 1e9], [1e9, 1e9])).toBe('-1');
});

test('minimum length with impossible', () => {
    expect(solve([1], [2])).toBe('-1');
});