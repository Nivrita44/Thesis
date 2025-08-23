// @ts-nocheck
import { solve } from '../../../solutions-descriptive/10.js';

describe('solve', () => {
    test('example case 1', () => {
        expect(solve(4, [0, 6, 0, 5], [11, 6, 0, 5], [[2, 1], [3, 1], [4, 3]])).toBe(11);
    });

    test('example case 2', () => {
        expect(solve(7, [1, 0, 0, 2, 2, 2, 2], [1, 5, 5, 2, 2, 2, 2], [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7]])).toBe(3);
    });

    test('single node tree', () => {
        expect(solve(1, [5], [10], [])).toBe(5);
    });

    test('linear tree', () => {
        expect(solve(3, [1, 2, 3], [4, 5, 6], [[1, 2], [2, 3]])).toBe(3);
    });

    test('star tree', () => {
        expect(solve(4, [1, 1, 1, 0], [1, 1, 1, 0], [[1, 4], [2, 4], [3, 4]])).toBe(3);
    });

    test('max values', () => {
        expect(solve(5, [1000000000, 0, 1000000000, 0, 1000000000], [1000000000, 0, 1000000000, 0, 1000000000], [[3, 2], [2, 1], [1, 4], [4, 5]])).toBe(3000000000);
    });

    test('mixed values', () => {
        expect(solve(6, [21, 57, 98, 61, 15, 23], [88, 81, 99, 76, 50, 67], [[2, 1], [3, 2], [4, 3], [5, 3], [6, 4]])).toBe(98);
    });

    test('equal bounds', () => {
        expect(solve(4, [5, 5, 5, 5], [5, 5, 5, 5], [[1, 2], [2, 3], [3, 4]])).toBe(5);
    });
});
