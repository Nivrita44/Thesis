// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/18.js'

test('example from description - 2x2 matrices', () => {
    expect(solve(2, 2, [
        [1, 2],
        [3, 4]
    ], [
        [3, 2],
        [3, 4]
    ])).toBe('YES\n');
});

test('minimal 1x1 matrices', () => {
    expect(solve(1, 1, [
        [5]
    ], [
        [5]
    ])).toBe('YES\n');
});

test('edge case - identical matrices', () => {
    expect(solve(2, 3, [
        [1, 2, 3],
        [4, 5, 6]
    ], [
        [1, 2, 3],
        [4, 5, 6]
    ])).toBe('YES\n');
});

test('large 3x3 matrices with max values', () => {
    expect(solve(3, 3, [
        [1000000000, 1000000000, 1000000000],
        [1000000000, 1000000000, 1000000000],
        [1000000000, 1000000000, 1000000000]
    ], [
        [1000000000, 1000000000, 1000000000],
        [1000000000, 1000000000, 1000000000],
        [1000000000, 1000000000, 1000000000]
    ])).toBe('YES\n');
});

test('impossible transformation', () => {
    expect(solve(2, 2, [
        [0, 0],
        [0, 0]
    ], [
        [1, 0],
        [0, 1]
    ])).toBe('NO\n');
});

test('3x2 matrices with bitwise operations', () => {
    expect(solve(3, 2, [
        [7, 8],
        [9, 10],
        [11, 12]
    ], [
        [15, 8],
        [15, 10],
        [15, 12]
    ])).toBe('YES\n');
});

test('2x3 matrices requiring both AND and OR operations', () => {
    expect(solve(2, 3, [
        [1, 3, 5],
        [2, 4, 6]
    ], [
        [1, 7, 5],
        [2, 7, 6]
    ])).toBe('YES\n');
});

test('corner case - all zeros to ones transformation', () => {
    expect(solve(2, 2, [
        [0, 0],
        [0, 0]
    ], [
        [1, 1],
        [1, 1]
    ])).toBe('NO\n');
});