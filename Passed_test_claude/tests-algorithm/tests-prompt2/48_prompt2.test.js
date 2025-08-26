import { solve } from '../../../solutions-algorithm/48.js';

describe('solve function tests', () => {
    test('basic tree with multiple levels', () => {
        const result = solve(5, 1000, 1000, [
            [1, 2],
            [1, 3],
            [3, 4],
            [3, 5]
        ]);
        expect(result).toBe(4);
    });

    test('simple tree with three nodes', () => {
        const result = solve(3, 1, 2, [
            [1, 2],
            [1, 3]
        ]);
        expect(result).toBe(1);
    });

    test('linear tree', () => {
        const result = solve(4, 10, 5, [
            [1, 2],
            [2, 3],
            [3, 4]
        ]);
        expect(result).toBe(3);
    });

    test('star-shaped tree', () => {
        const result = solve(5, 100, 10, [
            [1, 2],
            [1, 3],
            [1, 4],
            [1, 5]
        ]);
        expect(result).toBe(4);
    });

    test('small k constraint', () => {
        const result = solve(6, 2, 1000, [
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 5],
            [5, 6]
        ]);
        expect(result).toBe(2);
    });


    test('minimum tree', () => {
        const result = solve(2, 1, 1, [
            [1, 2]
        ]);
        expect(result).toBe(1);
    });
});