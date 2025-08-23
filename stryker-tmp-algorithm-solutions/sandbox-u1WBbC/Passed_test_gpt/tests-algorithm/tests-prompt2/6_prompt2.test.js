// @ts-nocheck
import { solve } from '../../../solutions-algorithm/6.js';

test('typical case with mixed values', () => {
    expect(solve(8, [1, 2, 2, 3, 1, 5, 6, 1])).toBe(9);
});

test('case with larger numbers', () => {
    expect(solve(5, [1, 2, 3, 100, 200])).toBe(297);
});

test('all equal values', () => {
    expect(solve(4, [3, 3, 3, 3])).toBe(0);
});

test('another typical case with duplicates', () => {
    expect(solve(6, [7, 8, 3, 1, 1, 8])).toBe(14);
});

test('minimum valid input length', () => {
    expect(solve(4, [1, 2, 3, 4])).toBe(4);
});

test('array with negative numbers', () => {
    expect(solve(5, [-10, -20, 0, 5, 15])).toBe(50);
});


test('array with zeros and positives', () => {
    expect(solve(4, [0, 0, 5, 10])).toBe(15);
});

test('array with large duplicate numbers', () => {
    expect(solve(4, [1000, 1000, 1000, 1000])).toBe(0);
});

test('array with only four numbers in descending order', () => {
    expect(solve(4, [100, 10, 1, 50])).toBe(139);
});



