// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/20.js'

test('example case with three drinks', () => {
    expect(solve(3, [50, 50, 100])).toBeCloseTo(66.666666666666657, 10);
});

test('single drink case', () => {
    expect(solve(1, [75])).toBe(75);
});

test('maximum input case', () => {
    const arr = Array(100).fill(100);
    expect(solve(100, arr)).toBe(100);
});

test('minimum input case', () => {
    expect(solve(1, [0])).toBe(0);
});

test('all zeros case', () => {
    expect(solve(4, [0, 0, 0, 0])).toBe(0);
});

test('mixed percentages case', () => {
    expect(solve(4, [20, 40, 60, 80])).toBe(50);
});

test('decimal result case', () => {
    expect(solve(3, [33, 33, 34])).toBe(33.333333333333336);
});

test('large variation case', () => {
    expect(solve(4, [1, 99, 50, 50])).toBe(50);
});

test('single 100% case', () => {
    expect(solve(1, [100])).toBe(100);
});