import { solve } from '../../solutions-algorithm/41.js';

describe('Shortest Path in Weighted Graph', () => {
    test('basic path with multiple possible routes', () => {
        const result = solve(5, [
            [1, 2, 2],
            [2, 5, 5],
            [2, 3, 4],
            [1, 4, 1],
            [4, 3, 3],
            [3, 5, 1]
        ]);
        expect(result).toBe('1 4 3 5');
    });

    test('simple linear path', () => {
        const result = solve(3, [
            [1, 2, 1],
            [2, 3, 1]
        ]);
        expect(result).toBe('1 2 3');
    });

    test('no path exists to target', () => {
        const result = solve(3, [
            [1, 2, 1]
        ]);
        expect(result).toBe('-1');
    });

    test('single node graph', () => {
        const result = solve(1, []);
        expect(result).toBe('1');
    });

    test('graph with self-loops', () => {
        const result = solve(3, [
            [1, 1, 1],
            [1, 2, 2],
            [2, 3, 3]
        ]);
        expect(result).toBe('1 2 3');
    });

    test('large graph', () => {
        const edges = [];
        for (let i = 1; i < 1000; i++) {
            edges.push([i, i + 1, 1]);
        }
        const result = solve(1000, edges);
        expect(result.split(' ').length).toBe(1000);
    });

    test('multiple paths with same total weight', () => {
        const result = solve(4, [
            [1, 2, 1],
            [2, 4, 2],
            [1, 3, 2],
            [3, 4, 1]
        ]);
        expect(result.split(' ').length).toBe(3);
    });

    test('empty edge list with multiple nodes', () => {
        const result = solve(5, []);
        expect(result).toBe('-1');
    });
});