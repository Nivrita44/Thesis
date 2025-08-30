import { solve } from '../../../solutions-descriptive/48.js';

describe('Graph Coloring and Query Handling', () => {
    test('non-bipartite triangle graph', () => {
        const input = [{
            n: 3,
            m: 3,
            edges: [[1, 2], [2, 3], [3, 1]],
            queries: [[2, 3], [1, 2], [2, 1]]
        }];
        expect(solve(input)).toEqual(['Alice', '2 3', '1 2', '2 1']);
    });


    test('empty graph', () => {
        const input = [{
            n: 1,
            m: 0,
            edges: [],
            queries: [[1, 1]]
        }];
        expect(solve(input)).toEqual(['Bob', '1 1']);
    });

    test('large bipartite graph', () => {
        const edges = [];
        for (let i = 1; i < 100; i++) {
            edges.push([i, i + 1]);
        }
        const input = [{
            n: 100,
            m: 99,
            edges,
            queries: [[1, 2], [50, 51], [99, 100]]
        }];
        const result = solve(input);
        expect(result[0]).toBe('Bob');
        expect(result.length).toBe(4);
    });
});
