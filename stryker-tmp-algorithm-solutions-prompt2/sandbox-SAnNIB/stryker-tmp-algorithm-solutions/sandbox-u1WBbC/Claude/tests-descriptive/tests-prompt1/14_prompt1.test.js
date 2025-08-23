// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/14.js'

test('example case', () => {
    expect(solve(3, 2, 5, [0, 2, 3])).toBe(6);
});

test('single scarecrow case', () => {
    expect(solve(1, 3, 10, [0])).toBe(14);
});

test('large values case', () => {
    expect(solve(4, 100000, 100000, [0, 25000, 50000, 75000])).toBe(200000);
});

test('minimum values case', () => {
    expect(solve(1, 1, 1, [0])).toBe(2);
});

test('all scarecrows at start case', () => {
    expect(solve(5, 2, 10, [0, 0, 0, 0, 0])).toBe(16);
});

test('scarecrows spread evenly case', () => {
    expect(solve(4, 3, 12, [0, 4, 8, 12])).toBe(12);
});

test('target equals k case', () => {
    expect(solve(2, 5, 5, [0, 2])).toBe(6);
});

test('single gap larger than k case', () => {
    expect(solve(3, 2, 8, [0, 1, 7])).toBe(10);
});