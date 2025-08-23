// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/35.js';

describe('solve function tests', () => {
    test('basic case with n=5, k=2', () => {
        expect(solve(5, 2, [3, 6, 4, 1, 2])).toBe(6);
    });

    test('alternate pattern with n=7, k=1', () => {
        expect(solve(7, 1, [3, 1, 4, 1, 5, 9, 2])).toBe(16);
    });

    test('minimal case with k=3', () => {
        expect(solve(4, 3, [4, 3, 2, 1])).toBe(4);
    });

    test('sorted sequence', () => {
        expect(solve(6, 2, [1, 3, 5, 2, 4, 6])).toBe(6);
    });

    test('large values with k=1', () => {
        expect(solve(6, 1, [1000000000, 1, 1000000000, 1, 1000000000, 1])).toBe(3000000000);
    });

    test('single element array', () => {
        expect(solve(1, 1, [5])).toBe(5);
    });

    test('array with all same values', () => {
        expect(solve(5, 1, [3, 3, 3, 3, 3])).toBe(9);
    });

    test('array with zeros', () => {
        expect(solve(6, 2, [0, 0, 0, 0, 0, 0])).toBe(0);
    });
});
