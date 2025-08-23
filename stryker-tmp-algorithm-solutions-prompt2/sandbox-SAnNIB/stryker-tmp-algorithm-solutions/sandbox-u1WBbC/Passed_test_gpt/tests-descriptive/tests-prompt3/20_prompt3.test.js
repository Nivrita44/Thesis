// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/20.js';

test('Example 2: All same already', () => {
    expect(solve([5, 5, 5, 5])).toBe(0);
});

test('Example 3: Impossible, single odd among evens', () => {
    expect(solve([2, 2, 3, 2])).toBe(-1);
});

test('Edge 2: Only two elements, impossible', () => {
    expect(solve([2, 3])).toBe(-1);
});

test('Edge 3: Large values, already equal', () => {
    expect(solve([1000000000, 1000000000, 1000000000])).toBe(0);
});

test('All odd, not always possible', () => {
    expect(solve([3, 3, 3])).toBe(0);
});

test('Impossible: negative would result', () => {
    expect(solve([1, 1, 10])).toBe(-1);
});

test('Array of length 2, both very large equal', () => {
    expect(solve([1000000000, 1000000000])).toBe(0);
});

test('Max n: all same', () => {
    const arr = Array(2e5).fill(1);
    expect(solve(arr)).toBe(0);
});

test('n=3, impossible', () => {
    expect(solve([1, 2, 3])).toBe(-1);
});

test('All zeros', () => {
    expect(solve([0, 0, 0, 0])).toBe(0);
});