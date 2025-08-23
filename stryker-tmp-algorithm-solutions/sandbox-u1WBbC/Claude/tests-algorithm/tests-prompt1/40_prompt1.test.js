// @ts-nocheck
import { solve } from '../../../solutions-algorithm/40.js'

test('example case with a=2, b=4 should return 8', () => {
    expect(solve(2, 4)).toBe(8);
});

test('edge case with a=1, b=2 should return 4', () => {
    expect(solve(1, 2)).toBe(4);
});

test('large input case with a=499999999, b=999999998 should return 999999998', () => {
    expect(solve(499999999, 999999998)).toBe(999999998);
});

test('minimal case with a=1, b=3 should return 6', () => {
    expect(solve(1, 3)).toBe(6);
});

test('when divisors are consecutiveumbers a=6, b=7 should return 14', () => {
    expect(solve(6, 7)).toBe(14);
});

test('typical case with a=3, b=6 should return 12', () => {
    expect(solve(3, 6)).toBe(12);
});

test('when divisors are far apart a=5, b=25 should return 50', () => {
    expect(solve(5, 25)).toBe(50);
});

test('medium size case with a=100, b=200 should return 400', () => {
    expect(solve(100, 200)).toBe(400);
});