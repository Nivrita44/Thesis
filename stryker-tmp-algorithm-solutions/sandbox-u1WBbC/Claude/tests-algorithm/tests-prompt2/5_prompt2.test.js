// @ts-nocheck
import { solve } from '../../../solutions-algorithm/5.js';

describe('solve function', () => {
    test('array with one duplicate element returns correct position', () => {
        expect(solve([3, 1, 4, 3])).toBe(1);
    });

    test('array with all same elements returns n-1', () => {
        expect(solve([1, 1, 1, 1, 1])).toBe(4);
    });

    test('single element array returns 0', () => {
        expect(solve([1])).toBe(0);
    });

    test('sorted array with no duplicates returns 0', () => {
        expect(solve([6, 5, 4, 3, 2, 1])).toBe(0);
    });

    test('array with multiple duplicates returns first occurrence from right', () => {
        expect(solve([1, 2, 1, 7, 1, 2, 1])).toBe(5);
    });

    test('large array with duplicate at start', () => {
        const arr = Array.from({ length: 1000 }, (_, i) => i + 1);
        arr.push(1);
        expect(solve(arr)).toBe(1000);
    });

    test('empty array returns 0', () => {
        expect(solve([])).toBe(0);
    });

    test('array with negative numbers', () => {
        expect(solve([-1, -2, -1, -3])).toBe(1);
    });
});
