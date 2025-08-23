// @ts-nocheck
import { solve } from '../../../solutions-algorithm/24.js';

describe('solve function tests', () => {
    test('basic positive numbers', () => {
        expect(solve([4, 6, 8])).toStrictEqual([2, 3, 4]);
    });

    test('odd numbers', () => {
        expect(solve([3, 5, 7])).toStrictEqual([1, 2, 3]);
    });

    test('zero and one', () => {
        expect(solve([0, 1])).toStrictEqual([0, 0]);
    });

    test('negative numbers', () => {
        expect(solve([-4, -7, -9])).toStrictEqual([-2, -3, -4]);
    });

    test('mixed positive and negative', () => {
        expect(solve([-5, 0, 5])).toStrictEqual([-2, 0, 2]);
    });

    test('large numbers', () => {
        expect(solve([1000000, 999999])).toStrictEqual([500000, 499999]);
    });

    test('empty array', () => {
        expect(solve([])).toStrictEqual([]);
    });

    test('decimal numbers', () => {
        expect(solve([3.9, 2.1, 5.5])).toStrictEqual([1, 1, 2]);
    });
});
