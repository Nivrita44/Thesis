// @ts-nocheck
import { solve } from '../../../solutions-descriptive/50.js'

test('example from problem description', () => {
    expect(solve([1, 5, 7, 8, 2, 4, 3])).toBe(3);
});

test('array with single element', () => {
    expect(solve([1])).toBe(0);
});

test('large array with ascending elements', () => {
    expect(solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(4);
});

test('array with all same elements', () => {
    expect(solve([5, 5, 5, 5])).toBe(0);
});

test('array with co-primeumbers', () => {
    expect(solve([2, 3, 5, 7, 11, 13])).toBe(3);
});

test('array with powers of 2', () => {
    expect(solve([1, 2, 4, 8, 16])).toBe(2);
});

test('array with mixedumbers', () => {
    expect(solve([6, 10, 15, 20, 30])).toBe(2);
});

test('array with consecutiveumbers', () => {
    expect(solve([1, 2, 3, 4, 5])).toBe(2);
});

test('array with large primeumbers', () => {
    expect(solve([997, 991, 983, 977, 971])).toBe(3);
});