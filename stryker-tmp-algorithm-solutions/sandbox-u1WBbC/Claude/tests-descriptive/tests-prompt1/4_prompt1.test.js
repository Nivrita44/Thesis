// @ts-nocheck
import { solve } from '../../../solutions-descriptive/4.js';

describe('Polygon Score Game Tests', () => {
    test('example from description - small triangle', () => {
        expect(solve([1, 2, 3])).toBe(6);
    });

    test('minimal case - 3 vertices', () => {
        expect(solve(3[1, 1, 1])).toBe(1);
    });

    test('square with identical values', () => {
        expect(solve([2, 2, 2, 2])).toBe(8);
    });

    test('pentagon with ascending values', () => {
        expect(solve([1, 2, 3, 4, 5])).toBe(60);
    });

    test('large values within bounds', () => {
        expect(solve([1000, 1000, 1000, 1000, 1000, 1000])).toBe(2000000000);
    });

    test('edge case - mixed large and small values', () => {
        expect(solve([1, 1000, 2, 999, 3, 998, 4])).toBe(2994000);
    });

    test('corner case - alternating values', () => {
        expect(solve([1, 10, 1, 10, 1, 10, 1, 10])).toBe(1000);
    });

    test('upper bound case', () => {
        const arr = Array(400).fill(1000);
        expect(solve(arr)).toBe(1000000000);
    });
});