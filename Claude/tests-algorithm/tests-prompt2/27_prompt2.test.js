import { solve } from '../../solutions-algorithm/27.js';

describe('solve function tests', () => {
    test('basic single-digit numbers', () => {
        expect(solve([1, 2, 3, 4, 5])).toEqual([0, 0, 0, 0, 0]);
    });

    test('numbers ending in 9', () => {
        expect(solve([9, 19, 29, 99])).toEqual([1, 2, 3, 10]);
    });

    test('mixed numbers with and without 9s', () => {
        expect(solve([10, 34, 89, 91, 45])).toEqual([1, 3, 9, 9, 4]);
    });

    test('large numbers', () => {
        expect(solve([880055535, 999999999])).toEqual([88005553, 100000000]);
    });

    test('zero and near-zero cases', () => {
        expect(solve([0, 8, 9])).toEqual([0, 0, 1]);
    });

    test('consecutive numbers ending in 9', () => {
        expect(solve([89, 99, 109, 119])).toEqual([9, 10, 11, 12]);
    });

    test('empty array', () => {
        expect(solve([])).toEqual([]);
    });

    test('numbers all ending in 8', () => {
        expect(solve([8, 18, 28, 98])).toEqual([0, 1, 2, 9]);
    });
});