// @ts-nocheck
import { solve } from '../../../solutions-descriptive/35.js'

test('example case from description', () => {
    expect(solve(5, 2, [1, 2, 3, 4, 5])).toBe(9);
});

test('minimal case', () => {
    expect(solve(2, 1, [1, 2])).toBe(2);
});

test('edge case with all same values', () => {
    expect(solve(4, 2, [5, 5, 5, 5])).toBe(10);
});

test('large case with maximum values', () => {
    expect(solve(6, 3, [1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000])).toBe(2000000000);
});

test('case with alternating values', () => {
    expect(solve(6, 2, [1, 10, 2, 20, 3, 30])).toBe(60);
});

test('case with decreasing values', () => {
    expect(solve(5, 2, [100, 80, 60, 40, 20])).toBe(180);
});

test('tricky case with optimal selection', () => {
    expect(solve(7, 3, [5, 8, 3, 10, 2, 1, 4])).toBe(18);
});

test('case with primeumbers', () => {
    expect(solve(6, 2, [2, 3, 5, 7, 11, 13])).toBe(31);
});