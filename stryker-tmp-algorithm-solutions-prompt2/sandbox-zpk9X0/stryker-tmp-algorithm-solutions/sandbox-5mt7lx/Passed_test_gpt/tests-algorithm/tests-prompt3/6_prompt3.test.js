// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/6.js';

test('All elements same', () => {
    expect(solve(4, [3, 3, 3, 3])).toBe(0);
});

test('Example with distinct and repeated elements', () => {
    expect(solve(8, [1, 2, 2, 3, 1, 5, 6, 1])).toBe(9);
});

test('Sorted input, large gaps', () => {
    expect(solve(5, [1, 2, 3, 100, 200])).toBe(297);
});

test('Unordered with duplicates at ends', () => {
    expect(solve(6, [7, 8, 3, 1, 1, 8])).toBe(14);
});

test('All minimums except two high maximums', () => {
    expect(solve(6, [1, 1, 1, 1000000000, 999999999, 1])).toBe(1999999997);
});



test('Small array no repetition', () => {
    expect(solve(4, [4, 10, 2, 9])).toBe(13);
});

test('Input with negative values replaced by minimum valid', () => {
    expect(solve(4, [1, 1, 1, 2])).toBe(1);
});


test('All values are the maximum', () => {
    expect(solve(6, [100, 100, 100, 100, 100, 100])).toBe(0);
});

test('Array with minimum and maximum alternated', () => {
    expect(solve(8, [1, 100, 1, 100, 1, 100, 1, 100])).toBe(198);
});

test('Edge case: second max and min are also at the ends', () => {
    expect(solve(4, [100, 1, 99, 2])).toBe(196);
});
