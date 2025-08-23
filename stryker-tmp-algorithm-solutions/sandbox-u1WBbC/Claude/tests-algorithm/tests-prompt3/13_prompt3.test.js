// @ts-nocheck
import { solve } from '../../../solutions-algorithm/13.js';

describe('solve function', () => {
    test('basic example inputs', () => {
        expect(solve([2])).toEqual([1n]);
        expect(solve([4])).toEqual([3n]);
        expect(solve([6])).toEqual([5n]);
    });

    test('minimum input value n=2', () => {
        expect(solve([2])).toEqual([1n]);
    });

    test('maximum input value n=100', () => {
        expect(solve([100])).toEqual([99n]);
    });

    test('multiple values in array', () => {
        expect(solve([2, 4, 6, 8])).toEqual([1n, 3n, 5n, 7n]);
    });

    test('consecutive numbers', () => {
        expect(solve([3, 4, 5])).toEqual([2n, 3n, 4n]);
    });

    test('large numbers near upper bound', () => {
        expect(solve([98, 99, 100])).toEqual([97n, 98n, 99n]);
    });

    test('mixed numbers from different ranges', () => {
        expect(solve([2, 50, 100])).toEqual([1n, 49n, 99n]);
    });

    test('empty array', () => {
        expect(solve([])).toEqual([]);
    });
});
