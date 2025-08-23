// @ts-nocheck
import { solve } from '../../../solutions-algorithm/8.js';

describe('solve function tests', () => {
    test('basic case with repeating numbers', () => {
        const result = solve(10, [1, 2, 3, 4, 1, 2, 3, 4, 100000, 99999], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(result).toEqual([6, 6, 6, 6, 6, 5, 4, 3, 2, 1]);
    });

    test('small array with unique numbers', () => {
        const result = solve(3, [1, 2, 3], [1, 2, 3]);
        expect(result).toEqual([3, 2, 1]);
    });

    test('array with all same numbers', () => {
        const result = solve(5, [1, 1, 1, 1, 1], [1, 2, 3, 4, 5]);
        expect(result).toEqual([1, 1, 1, 1, 1]);
    });

    test('single element array', () => {
        const result = solve(1, [42], [1]);
        expect(result).toEqual([1]);
    });

    test('large numbers in array', () => {
        const result = solve(4, [1000000, 999999, 999998, 999997], [1, 2, 3, 4]);
        expect(result).toEqual([4, 3, 2, 1]);
    });

    test('sparse queries', () => {
        const result = solve(6, [1, 2, 3, 4, 5, 6], [1, 3, 6]);
        expect(result).toEqual([6, 4, 1]);
    });

    test('array with zero values', () => {
        const result = solve(5, [0, 0, 1, 0, 2], [1, 2, 3, 4, 5]);
        expect(result).toEqual([3, 3, 3, 2, 1]);
    });

    test('negative numbers in array', () => {
        const result = solve(4, [-1, -2, -1, -3], [1, 2, 3, 4]);
        expect(result).toEqual([3, 3, 2, 1]);
    });
});
