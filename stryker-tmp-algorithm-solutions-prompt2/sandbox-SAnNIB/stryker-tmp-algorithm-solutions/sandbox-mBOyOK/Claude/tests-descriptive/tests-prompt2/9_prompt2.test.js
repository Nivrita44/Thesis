// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/9.js';

describe('solve function tests', () => {
    test('basic tree with identical values', () => {
        const n = 4;
        const l = [2, 2, 4, 3];
        const edges = [[0, 1], [0, 2], [1, 3]];
        expect(solve(n, l, edges)).toBe(2);
    });

    test('linear path with increasing values', () => {
        const n = 5;
        const l = [1, 2, 3, 4, 5];
        const edges = [[0, 1], [1, 2], [2, 3], [3, 4]];
        expect(solve(n, l, edges)).toBe(0);
    });

    test('small star-shaped tree', () => {
        const n = 3;
        const l = [1, 2, 3];
        const edges = [[0, 1], [0, 2]];
        expect(solve(n, l, edges)).toBe(2);
    });

    test('tree with repeated values', () => {
        const n = 5;
        const l = [3, 1, 3, 4, 5];
        const edges = [[0, 1], [1, 2], [2, 3], [3, 4]];
        expect(solve(n, l, edges)).toBe(2);
    });

    test('larger complex tree', () => {
        const n = 10;
        const l = [1, 2, 3, 2, 4, 3, 3, 4, 4, 3];
        const edges = [[0, 3], [3, 5], [6, 3], [5, 8], [5, 4], [6, 7], [0, 1], [1, 2], [1, 9]];
        expect(solve(n, l, edges)).toBe(10);
    });

    test('single edge tree', () => {
        const n = 2;
        const l = [1, 1];
        const edges = [[0, 1]];
        expect(solve(n, l, edges)).toBe(0);
    });

    test('tree with all same values', () => {
        const n = 6;
        const l = [3, 3, 3, 3, 3, 3];
        const edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]];
        expect(solve(n, l, edges)).toBe(0);
    });

    test('large value tree', () => {
        const n = 4;
        const l = [999999, 999998, 999999, 999997];
        const edges = [[0, 1], [1, 2], [2, 3]];
        expect(solve(n, l, edges)).toBe(3);
    });
});
