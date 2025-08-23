// @ts-nocheck
import { solve } from '../../../solutions-algorithm/17.js';

describe('solve function tests', () => {
    test('basic case with mix of 3 and non-3 numbers', () => {
        expect(solve([3, 15])).toEqual([3, 2]);
    });

    test('array with all 3s', () => {
        expect(solve([3, 3, 3])).toEqual([3, 3, 3]);
    });

    test('array with no 3s', () => {
        expect(solve([1, 2, 4, 5])).toEqual([2, 2, 2, 2]);
    });

    test('empty array', () => {
        expect(solve([])).toEqual([]);
    });

    test('array with single element 3', () => {
        expect(solve([3])).toEqual([3]);
    });

    test('array with single non-3 element', () => {
        expect(solve([7])).toEqual([2]);
    });

    test('large array performance test', () => {
        const largeInput = Array(1000).fill(4);
        const expectedOutput = Array(1000).fill(2);
        expect(solve(largeInput)).toEqual(expectedOutput);
    });

    test('array with negative numbers', () => {
        expect(solve([-3, -2, 3, 0])).toEqual([2, 2, 3, 2]);
    });
});
