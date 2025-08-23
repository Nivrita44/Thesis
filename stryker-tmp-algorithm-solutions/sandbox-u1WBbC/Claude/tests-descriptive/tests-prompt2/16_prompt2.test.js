// @ts-nocheck
import { solve } from '../../../solutions-descriptive/16.js';

describe('solve function tests', () => {
    test('basic case with sufficient sum', () => {
        expect(solve([3, 4, 2], 6)).toBe(2);
    });

    test('exact sum match', () => {
        expect(solve([2, 3, 4], 5)).toBe(2);
    });

    test('need more than available sum', () => {
        expect(solve([1, 2, 3], 10)).toBe(1000000000);
    });

    test('empty array', () => {
        expect(solve([], 1)).toBe(1000000000);
    });

    test('single element sufficient', () => {
        expect(solve([5], 4)).toBe(1);
    });

    test('need zero amount', () => {
        expect(solve([1, 2, 3], 0)).toBe(0);
    });

    test('large array with early break', () => {
        const largeArray = Array(1000).fill(1);
        expect(solve(largeArray, 5)).toBe(5);
    });

    test('array with exact total needed', () => {
        expect(solve([1, 2, 3, 4, 5], 15)).toBe(5);
    });

    test('array with negative numbers', () => {
        expect(solve([-1, -2, 5, 8], 3)).toBe(3);
    });
});
