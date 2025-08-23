// @ts-nocheck
import { solve } from '../../../solutions-algorithm/42.js';

describe('solve function tests', () => {
    test('basic ascending sequence', () => {
        expect(solve(3, [1, 2, 3])).toBe(3);
    });

    test('basic descending sequence', () => {
        expect(solve(3, [3, 2, 1])).toBe(1);
    });

    test('mixed sequence with increasing subsequence', () => {
        expect(solve(5, [4, 2, 1, 3, 5])).toBe(3);
    });

    test('single element array', () => {
        expect(solve(1, [42])).toBe(1);
    });

    test('array with repeated elements', () => {
        expect(solve(6, [1, 1, 1, 1, 1, 1])).toBe(1);
    });

    test('large mixed sequence', () => {
        expect(solve(10, [1, 9, 8, 10, 2, 3, 4, 6, 5, 7])).toBe(6);
    });

    test('zigzag sequence', () => {
        expect(solve(7, [1, 7, 2, 6, 3, 5, 4])).toBe(3);
    });

    test('large array with specific pattern', () => {
        const arr = Array.from({length: 1000}, (_, i) => i % 2 === 0 ? i : 1000 - i);
        expect(solve(1000, arr)).toBe(500);
    });
});
