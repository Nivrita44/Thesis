// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/8.js'

test('example case', () => {
    expect(solve(5, [1, 2, 3, 1, 2], [1, 2, 3, 4, 5])).toEqual([3, 3, 2, 2, 1]);
});

test('edge case with all same numbers', () => {
    expect(solve(5, [1, 1, 1, 1, 1], [1, 2, 3, 4, 5])).toEqual([1, 1, 1, 1, 1]);
});

test('large case with unique numbers', () => {
    expect(solve(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 5, 8])).toEqual([10, 6, 3]);
});

test('minimal case with single element', () => {
    expect(solve(1, [42], [1])).toEqual([1]);
});

test('tricky case with repeated queries', () => {
    expect(solve(5, [1, 2, 3, 2, 1], [1, 1, 1])).toEqual([3, 3, 3]);
});

test('generic case with mixed numbers', () => {
    expect(solve(5, [5, 1, 5, 1, 5], [1, 3, 5])).toEqual([2, 2, 1]);
});

test('case with alternating numbers', () => {
    expect(solve(5, [1, 2, 1, 2, 1], [2, 3, 4])).toEqual([2, 2, 2]);
});

test('case with descending positions', () => {
    expect(solve(5, [3, 2, 1, 2, 3], [5, 4, 3, 2, 1])).toEqual([1, 2, 2, 2, 3]);
});