import { solve } from '../../../solutions-algorithm/44.js';

describe('solve function', () => {
    test('basic case with n=3, k=3', () => {
        expect(solve(3, 3)).toEqual([2, 1, 3]);
    });

    test('minimum valid case with n=2, k=1', () => {
        expect(solve(2, 1)).toEqual([1, 2]);
    });

    test('case with no swaps needed n=4, k=1', () => {
        expect(solve(4, 1)).toEqual([1, 2, 3, 4]);
    });

    test('invalid case with even k', () => {
        expect(solve(5, 4)).toBe(-1);
    });

    test('invalid case with k > 2n-1', () => {
        expect(solve(3, 7)).toBe(-1);
    });

    test('large valid case n=10, k=5', () => {
        expect(solve(10, 5)).toEqual([1, 2, 3, 2, 5, 6, 7, 8, 9, 10]);
    });

    test('edge case with maximum possible k', () => {
        const n = 5;
        expect(solve(n, 2 * n - 1)).toEqual([2, 1, 4, 3, 5]);
    });

    test('boundary case with k=1', () => {
        expect(solve(6, 1)).toEqual([1, 2, 3, 4, 5, 6]);
    });
});