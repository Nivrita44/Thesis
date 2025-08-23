// @ts-nocheck
import { solve } from '../../../solutions-descriptive/48.js';

describe('Solve', () => {
    test('Triangle graph - not bipartite', () => {
        const input = [{
            n: 3,
            m: 3,
            edges: [[1,2], [2,3], [3,1]],
            queries: [[2,3], [1,2], [2,1]]
        }];
        const result = solve(input);
        expect(result[0]).toBe("Alice");
        expect(result[1]).toBe("2 3");
        expect(result[2]).toBe("1 2");
        expect(result[3]).toBe("2 1");
    });

    test('Square graph - bipartite', () => {
        const input = [{
            n: 4,
            m: 4, 
            edges: [[1,2], [2,3], [3,4], [4,1]],
            queries: [[2,3], [1,2], [3,1]]
        }];
        const result = solve(input);
        expect(result[0]).toBe("Bob");
        expect(result[1]).toBe("1 2");
        expect(result[2]).toBe("3 2");
        expect(result[3]).toBe("2 3");
    });

    test('Single edge graph', () => {
        const input = [{
            n: 2,
            m: 1,
            edges: [[1,2]],
            queries: [[1,2]]
        }];
        const result = solve(input);
        expect(result[0]).toBe("Bob");
        expect(result[1]).toBe("1 1");
    });

    test('Star graph', () => {
        const input = [{
            n: 4,
            m: 3,
            edges: [[1,2], [1,3], [1,4]],
            queries: [[1,2], [2,3], [1,3]]
        }];
        const result = solve(input);
        expect(result[0]).toBe("Bob");
    });

    test('Complete graph K4', () => {
        const input = [{
            n: 4,
            m: 6,
            edges: [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]],
            queries: [[1,2], [2,3], [1,3], [2,1]]
        }];
        const result = solve(input);
        expect(result[0]).toBe("Alice");
    });

    test('Path graph', () => {
        const input = [{
            n: 5,
            m: 4,
            edges: [[1,2], [2,3], [3,4], [4,5]],
            queries: [[1,2], [2,3], [1,3], [2,1], [3,2]]
        }];
        const result = solve(input);
        expect(result[0]).toBe("Bob");
    });

    test('Multiple test cases', () => {
        const input = [
            {
                n: 2,
                m: 1,
                edges: [[1,2]],
                queries: [[1,2]]
            },
            {
                n: 3,
                m: 3,
                edges: [[1,2], [2,3], [3,1]],
                queries: [[2,3], [1,2], [2,1]]
            }
        ];
        const result = solve(input);
        expect(result[0]).toBe("Bob");
        expect(result[3]).toBe("Alice");
    });
});
