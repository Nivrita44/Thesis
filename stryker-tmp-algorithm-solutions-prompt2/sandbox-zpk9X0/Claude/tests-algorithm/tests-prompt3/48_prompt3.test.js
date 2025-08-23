// @ts-nocheck
import { solve } from '../../../solutions-algorithm/48.js';

describe('Tree Water Game', () => {
    test('example case 1', () => {
        expect(solve(5, 1000, 1000, [[1, 2], [1, 3], [3, 4], [3, 5]])).toBe(4);
    });

    test('example case 2', () => {
        expect(solve(3, 1, 2, [[1, 2], [1, 3]])).toBe(1);
    });

    test('minimal tree with 2 vertices', () => {
        expect(solve(2, 1, 1, [[1, 2]])).toBe(1);
    });

    test('linear tree', () => {
        expect(solve(4, 3, 5, [[1, 2], [2, 3], [3, 4]])).toBe(3);
    });

    test('star shaped tree', () => {
        expect(solve(6, 5, 10, [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6]])).toBe(5);
    });

    test('no water available', () => {
        expect(solve(4, 0, 100, [[1, 2], [2, 3], [3, 4]])).toBe(1);
    });

    test('no coins available', () => {
        expect(solve(4, 10, 0, [[1, 2], [2, 3], [3, 4]])).toBe(1);
    });

    test('balanced binary tree', () => {
        expect(solve(7, 6, 8, [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7]])).toBe(4);
    });
});
