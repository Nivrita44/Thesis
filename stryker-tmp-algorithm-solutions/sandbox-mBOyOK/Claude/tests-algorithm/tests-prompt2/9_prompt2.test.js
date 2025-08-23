// @ts-nocheck
import { solve } from '../../../solutions-algorithm/9.js';

describe('solve function tests', () => {
    test('basic case with small numbers', () => {
        expect(solve([1, 2, 3, 4, 5], [1, 3, 4], [1, 3])).toEqual([5, 4]);
    });

    test('numbers not in sequential order', () => {
        expect(solve([1, 5, 8, 123, 7], [123, 7, 5, 1], [5, 1, 7])).toEqual([8, 123]);
    });

    test('repeated numbers in original array', () => {
        expect(solve([1, 2, 2, 3, 3, 3], [1, 2, 3, 3], [1, 2, 3])).toEqual([3, 3]);
    });

    test('single digit array', () => {
        expect(solve([5], [], [])).toEqual([5, 5]);
    });

    test('large numbers case', () => {
        expect(solve([1000000, 2000000, 3000000], [1000000], [2000000])).toEqual([2000000, 3000000]);
    });

    test('zero included in arrays', () => {
        expect(solve([0, 1, 2, 3], [1, 2], [0, 1])).toEqual([3, 2]);
    });

    test('all same numbers except missing', () => {
        expect(solve([1, 1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1])).toEqual([1, 1]);
    });

    test('sparse sequence with gaps', () => {
        expect(solve([2, 4, 6, 8, 10], [2, 4, 8], [2, 4])).toEqual([10, 8]);
    });
});
