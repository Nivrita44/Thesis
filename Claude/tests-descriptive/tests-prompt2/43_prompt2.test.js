import { solve } from '../../solutions-descriptive/43.js';

describe('solve function test cases', () => {
    test('basic linear graph', () => {
        const result = solve(3, 1, [2, 3, 1], [[1, 2], [2, 3]]);
        expect(result).toBe(3);
    });

    test('linear graph with higher values', () => {
        const result = solve(3, 1, [3, 6, 3], [[1, 2], [2, 3]]);
        expect(result).toBe(8);
    });

    test('graph with negative values', () => {
        const result = solve(3, 1, [-2, -3, -1], [[1, 2], [2, 3]]);
        expect(result).toBe(0);
    });

    test('star-shaped graph', () => {
        const result = solve(6, 1, [5, -4, 3, 6, 7, 3], [[4, 1], [5, 1], [3, 5], [3, 6], [1, 2]]);
        expect(result).toBe(17);
    });

    test('complex tree structure', () => {
        const result = solve(8, 1, [3, 5, 2, 7, 8, 5, -3, -4], 
            [[7, 3], [1, 8], [4, 3], [3, 5], [7, 6], [8, 7], [2, 1]]);
        expect(result).toBe(26);
    });

    test('minimal graph', () => {
        const result = solve(2, 1, [1, 2], [[1, 2]]);
        expect(result).toBe(2);
    });

    test('graph with high cost', () => {
        const result = solve(4, 100, [10, 20, 30, 40], [[1, 2], [2, 3], [3, 4]]);
        expect(result).toBe(100);
    });

    test('single node graph', () => {
        const result = solve(1, 1, [5], []);
        expect(result).toBe(5);
    });
});