// @ts-nocheck
import { solve } from '../../../solutions-descriptive/43.js';

describe('Sheriff of Nottingham Camps', () => {
    test('basic example case', () => {
        expect(solve(3, 1, [2, 3, 1], [[1, 2], [2, 3]])).toBe(3);
    });

    test('all positive values case', () => {
        expect(solve(3, 1, [3, 6, 3], [[1, 2], [2, 3]])).toBe(8);
    });

    test('all negative values case', () => {
        expect(solve(3, 1, [-2, -3, -1], [[1, 2], [2, 3]])).toBe(0);
    });

    test('mixed values star topology', () => {
        expect(solve(4, 2, [5, -4, 3, 6], [[1, 2], [1, 3], [1, 4]])).toBe(5);
    });

    test('larger mixed case', () => {
        expect(solve(6, 1, [5, -4, 3, 6, 7, 3], [[4, 1], [5, 1], [3, 5], [3, 6], [1, 2]])).toBe(17);
    });

    test('complex tree structure', () => {
        expect(solve(8, 1, [3, 5, 2, 7, 8, 5, -3, -4], [[7, 3], [1, 8], [4, 3], [3, 5], [7, 6], [8, 7], [2, 1]])).toBe(26);
    });

    test('single node case', () => {
        expect(solve(1, 5, [10], [])).toBe(10);
    });

    test('two node case with high cost', () => {
        expect(solve(2, 1000000000, [5, 5], [[1, 2]])).toBe(5);
    });
});
