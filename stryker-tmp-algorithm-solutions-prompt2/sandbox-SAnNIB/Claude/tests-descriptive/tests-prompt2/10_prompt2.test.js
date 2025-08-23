// @ts-nocheck
import { solve } from '../../../solutions-descriptive/10.js';

describe('solve', () => {
    test('basic tree with 4 nodes', () => {
        expect(solve(
            4,
            [0, 6, 0, 5],
            [11, 6, 0, 5],
            [[2, 1], [3, 1], [4, 3]]
        )).toBe(11);
    });

    test('balanced tree with 7 nodes', () => {
        expect(solve(
            7,
            [1, 0, 0, 2, 2, 2, 2],
            [1, 5, 5, 2, 2, 2, 2],
            [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7]]
        )).toBe(3);
    });

    test('star-shaped tree', () => {
        expect(solve(
            4,
            [1, 1, 1, 0],
            [1, 1, 1, 0],
            [[1, 4], [2, 4], [3, 4]]
        )).toBe(3);
    });

    test('single node case', () => {
        expect(solve(
            1,
            [42],
            [42],
            []
        )).toBe(42);
    });

    test('linear chain tree', () => {
        expect(solve(
            4,
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [[1, 2], [2, 3], [3, 4]]
        )).toBe(4);
    });

    test('tree with large values', () => {
        expect(solve(
            5,
            [1000000000, 0, 1000000000, 0, 1000000000],
            [1000000000, 0, 1000000000, 0, 1000000000],
            [[3, 2], [2, 1], [1, 4], [4, 5]]
        )).toBe(3000000000);
    });

    test('tree with varying ranges', () => {
        expect(solve(
            6,
            [21, 57, 98, 61, 15, 23],
            [88, 81, 99, 76, 50, 67],
            [[2, 1], [3, 2], [4, 3], [5, 3], [6, 4]]
        )).toBe(98);
    });

    test('tree with zero values', () => {
        expect(solve(
            5,
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [[1, 2], [2, 3], [3, 4], [4, 5]]
        )).toBe(0);
    });
});
