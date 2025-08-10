import { solve } from '../../../solutions-algorithm/34.js';

describe('solve - Subtract 1 from each number', () => {
    test('common case with positive integers', () => {
        expect(solve([10, 7, 21])).toEqual([9, 6, 20]);
    });

    test('large numbers', () => {
        expect(solve([1000000, 999999])).toEqual([999999, 999998]);
    });

    test('single element array', () => {
        expect(solve([5])).toEqual([4]);
    });

    test('array with zero', () => {
        expect(solve([0])).toEqual([-1]);
    });

    test('array with negative numbers', () => {
        expect(solve([-5, -10, -15])).toEqual([-6, -11, -16]);
    });

    test('empty array', () => {
        expect(solve([])).toEqual([]);
    });

    test('mixed positive and negative numbers', () => {
        expect(solve([-2, 0, 2])).toEqual([-3, -1, 1]);
    });

    test('array with repeated numbers', () => {
        expect(solve([5, 5, 5])).toEqual([4, 4, 4]);
    });
});
