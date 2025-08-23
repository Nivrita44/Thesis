// @ts-nocheck
import { solve } from '../../../solutions-descriptive/20.js';

describe('solve', () => {
    test('example case: equal array [1, 1]', () => {
        expect(solve([1, 1])).toBe(0);
    });

    test('example case: impossible array [1, 3, 2]', () => {
        expect(solve([1, 3, 2])).toBe(-1);
    });

    test('example case: array [2, 1, 2, 6]', () => {
        expect(solve([2, 1, 2, 6])).toBe(3);
    });

    test('minimum size array with large difference', () => {
        expect(solve([1, 999999999])).toBe(-1);
    });

    test('array with all equal values', () => {
        expect(solve([5, 5, 5, 5, 5])).toBe(0);
    });

    test('larger array with possible solution', () => {
        expect(solve([4, 2, 4, 2, 4, 2])).toBe(6);
    });

    test('array requiring maximum operations', () => {
        expect(solve([10, 2, 6, 4, 8])).toBe(14);
    });

    test('edge case with alternating values', () => {
        expect(solve([1, 2, 1, 2, 1, 2])).toBe(3);
    });
});
