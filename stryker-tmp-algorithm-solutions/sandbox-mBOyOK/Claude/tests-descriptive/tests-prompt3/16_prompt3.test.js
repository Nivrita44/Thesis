// @ts-nocheck
import { solve } from '../../../solutions-descriptive/16.js';

describe('solve function tests', () => {
    test('simple array with need value', () => {
        expect(solve([2, 3, 1], 5)).toBe(2);
    });

    test('array where sum equals need', () => {
        expect(solve([3, 3, 3], 6)).toBe(2);
    });

    test('array where need is greater than sum', () => {
        expect(solve([1, 1, 1], 10)).toBe(1000000000);
    });

    test('single element array meeting need', () => {
        expect(solve([5], 4)).toBe(1);
    });

    test('empty array with positive need', () => {
        expect(solve([], 1)).toBe(1000000000);
    });

    test('array requiring all elements', () => {
        expect(solve([1, 2, 3, 4], 10)).toBe(4);
    });

    test('array with large numbers', () => {
        expect(solve([100000, 200000, 300000], 250000)).toBe(2);
    });

    test('array where first element meets need', () => {
        expect(solve([10, 1, 1], 5)).toBe(1);
    });
});
