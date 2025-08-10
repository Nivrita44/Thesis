import { solve } from '../../../solutions-algorithm/13.js';

describe('solve function tests', () => {
    test('basic positive numbers', () => {
        expect(solve([2, 4, 6])).toEqual([1, 3, 5]);
    });

    test('single element array', () => {
        expect(solve([1])).toEqual([0]);
    });

    test('empty array', () => {
        expect(solve([])).toEqual([]);
    });

    test('large numbers', () => {
        expect(solve([1000000, 999999])).toEqual([999999, 999998]);
    });

    test('negative numbers', () => {
        expect(solve([-1, -5, -10])).toEqual([-2, -6, -11]);
    });

    test('zero handling', () => {
        expect(solve([0, 0, 0])).toEqual([-1, -1, -1]);
    });

    test('mixed positive and negative numbers', () => {
        expect(solve([-2, 0, 2, 4, -4])).toEqual([-3, -1, 1, 3, -5]);
    });

    test('large array', () => {
        const input = Array.from({ length: 1000 }, (_, i) => i);
        const expected = Array.from({ length: 1000 }, (_, i) => i - 1);
        expect(solve(input)).toEqual(expected);
    });
});
