import { solve } from '../../../solutions-descriptive/11.js';

describe('solve function tests', () => {
    test('basic test case with small graph', () => {
        const nodeCount = 4;
        const edgeCount = 4;
        const edges = [
            { u: 1, v: 2, w: 2 },
            { u: 2, v: 4, w: 2 },
            { u: 1, v: 3, w: 4 },
            { u: 3, v: 4, w: 1 }
        ];
        const queries = [[1, 4, 2], [2, 3, 1]];
        expect(solve(nodeCount, edgeCount, edges, queries)).toEqual([1, 2]);
    });

    test('larger graph with multiple paths', () => {
        const nodeCount = 6;
        const edgeCount = 7;
        const edges = [
            { u: 1, v: 2, w: 10 },
            { u: 2, v: 3, w: 3 },
            { u: 3, v: 4, w: 9 },
            { u: 4, v: 5, w: 2 },
            { u: 5, v: 6, w: 1 },
            { u: 2, v: 4, w: 10 },
            { u: 4, v: 6, w: 10 }
        ];
        const queries = [[1, 6, 3], [1, 6, 2], [2, 4, 1]];
        expect(solve(nodeCount, edgeCount, edges, queries)).toEqual([2, 9, 9]);
    });

    test('minimal graph with two nodes', () => {
        const nodeCount = 2;
        const edgeCount = 1;
        const edges = [{ u: 1, v: 2, w: 5 }];
        const queries = [[1, 2, 1]];
        expect(solve(nodeCount, edgeCount, edges, queries)).toEqual([5]);
    });

    test('disconnected nodes case', () => {
        const nodeCount = 4;
        const edgeCount = 2;
        const edges = [
            { u: 1, v: 2, w: 1 },
            { u: 3, v: 4, w: 2 }
        ];
        const queries = [[1, 4, 10]];
        expect(solve(nodeCount, edgeCount, edges, queries)).toEqual([-1]);
    });

    

    

    test('graph with same weights', () => {
        const nodeCount = 5;
        const edgeCount = 5;
        const edges = [
            { u: 1, v: 2, w: 3 },
            { u: 2, v: 3, w: 3 },
            { u: 3, v: 4, w: 3 },
            { u: 4, v: 5, w: 3 },
            { u: 1, v: 5, w: 3 }
        ];
        const queries = [[1, 4, 3], [2, 5, 4]];
        expect(solve(nodeCount, edgeCount, edges, queries)).toEqual([3, 3]);
    });
});
