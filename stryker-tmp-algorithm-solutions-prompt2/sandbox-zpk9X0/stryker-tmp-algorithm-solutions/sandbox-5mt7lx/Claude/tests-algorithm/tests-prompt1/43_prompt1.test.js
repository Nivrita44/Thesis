// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/43.js'

test('example from description', () => {
    expect(solve(3, [2, 0, 1])).toEqual([1, 1]);
});

test('minimal case=2', () => {
    expect(solve(2, [1, 0])).toEqual([0, 1]);
});

test('already sorted except two elements', () => {
    expect(solve(5, [0, 2, 1, 3, 4])).toEqual([1, 1]);
});

test('reverse sorted', () => {
    expect(solve(5, [4, 3, 2, 1, 0])).toEqual([6, 10]);
});

test('large input case', () => {
    const arr = Array.from({ length: 10 }, (_, i) => 9 - i);
    expect(solve(10, arr)).toEqual([36, 45]);
});

test('single swapeeded middle elements', () => {
    expect(solve(4, [0, 2, 1, 3])).toEqual([1, 1]);
});

test('multiple possible optimal swaps', () => {
    expect(solve(4, [3, 1, 2, 0])).toEqual([3, 2]);
});

test('almost sorted array', () => {
    expect(solve(5, [0, 1, 3, 2, 4])).toEqual([1, 1]);
});