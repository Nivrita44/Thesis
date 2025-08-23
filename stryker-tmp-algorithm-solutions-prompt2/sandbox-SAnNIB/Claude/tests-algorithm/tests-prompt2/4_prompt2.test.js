// @ts-nocheck
import { solve } from '../../../solutions-algorithm/4.js';

describe('solve function tests', () => {
    test('basic array with distinct values', () => {
        expect(solve([4, 7, 3, 5])).toEqual([-3, 2, -4, -2]);
    });

    test('minimal array with two elements', () => {
        expect(solve([1, 2])).toEqual([-1, 1]);
    });

    test('array with sequential numbers', () => {
        expect(solve([1, 2, 3, 4, 5])).toEqual([-4, -3, -2, -1, 1]);
    });

    test('array with duplicate values', () => {
        expect(solve([4, 9, 4])).toEqual([-5, 5, -5]);
    });

    test('array with all identical values', () => {
        expect(solve([4, 4, 4, 4])).toEqual([0, 0, 0, 0]);
    });

    test('array with negative numbers', () => {
        expect(solve([-2, -5, -1, -3])).toEqual([3, 0, 4, 2]);
    });

    test('array with large numbers', () => {
        expect(solve([1000000, 999999, 999998])).toEqual([1, 0, -1]);
    });

    test('array with zero values', () => {
        expect(solve([0, 0, 1, 0])).toEqual([-1, -1, 1, -1]);
    });
});
