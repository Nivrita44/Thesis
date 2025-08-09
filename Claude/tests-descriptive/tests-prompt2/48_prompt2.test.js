import { solve } from '../../solutions-descriptive/48.js';

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

    test('bipartite square graph', () => {
        const input = [{
            n: 4,
            m: 4,
            edges: [[1, 2], [2, 3], [3, 4], [4, 1]],
            queries: [[2, 3], [1, 2], [3, 1]]
        }];
        expect(solve(input)).toEqual(['Bob', '1 2', '2 1', '3 2']);
    });

    test('single edge graph', () => {
        const input = [{
            n: 2,
            m: 1,
            edges: [[1, 2]],
            queries: [[1, 2]]
        }];
        expect(solve(input)).toEqual(['Bob', '1 2']);
    });

    test('disconnected vertices', () => {
        const input = [{
            n: 4,
            m: 2,
            edges: [[1, 2], [3, 4]],
            queries: [[1, 2], [3, 4]]
        }];
        expect(solve(input)).toEqual(['Bob', '1 2', '3 1']);
    });

    test('star graph', () => {
        const input = [{
            n: 4,
            m: 3,
            edges: [[1, 2], [1, 3], [1, 4]],
            queries: [[2, 3], [1, 4]]
        }];
        expect(solve(input)).toEqual(['Bob', '2 2', '1 1']);
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