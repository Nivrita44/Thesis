import { solve } from '../../../solutions-descriptive/11.js';

describe('Graph Path Weight Tests', () => {
    test('Simple 4-node graph example', () => {
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

    test('6-node graph with multiple paths', () => {
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

    test('Minimum possible graph', () => {
        const nodeCount = 2;
        const edgeCount = 1;
        const edges = [{ u: 1, v: 2, w: 5 }];
        const queries = [[1, 2, 1]];
        expect(solve(nodeCount, edgeCount, edges, queries)).toEqual([5]);
    });

    test('Graph with maximum weight edges', () => {
        const nodeCount = 3;
        const edgeCount = 3;
        const edges = [
            { u: 1, v: 2, w: 1000000000 },
            { u: 2, v: 3, w: 1000000000 },
            { u: 1, v: 3, w: 1000000000 }
        ];
        const queries = [[1, 3, 2], [1, 2, 1]];
        expect(solve(nodeCount, edgeCount, edges, queries)).toEqual([1000000000, 1000000000]);
    });

    test('Linear graph path', () => {
        const nodeCount = 5;
        const edgeCount = 4;
        const edges = [
            { u: 1, v: 2, w: 1 },
            { u: 2, v: 3, w: 2 },
            { u: 3, v: 4, w: 3 },
            { u: 4, v: 5, w: 4 }
        ];
        const queries = [[1, 5, 4], [1, 4, 3], [2, 5, 3]];
        expect(solve(nodeCount, edgeCount, edges, queries)).toEqual([1, 1, 2]);
    });

    test('Dense graph maximum edges', () => {
        const nodeCount = 4;
        const edgeCount = 6;
        const edges = [
            { u: 1, v: 2, w: 5 },
            { u: 1, v: 3, w: 4 },
            { u: 1, v: 4, w: 3 },
            { u: 2, v: 3, w: 2 },
            { u: 2, v: 4, w: 1 },
            { u: 3, v: 4, w: 6 }
        ];
        const queries = [[1, 4, 2], [2, 3, 1], [1, 3, 3]];
        expect(solve(nodeCount, edgeCount, edges, queries)).toEqual([1, 2, 2]);
    });

    test('Graph with equal weight edges', () => {
        const nodeCount = 4;
        const edgeCount = 4;
        const edges = [
            { u: 1, v: 2, w: 5 },
            { u: 2, v: 3, w: 5 },
            { u: 3, v: 4, w: 5 },
            { u: 1, v: 4, w: 5 }
        ];
        const queries = [[1, 4, 3], [1, 3, 2], [2, 4, 1]];
        expect(solve(nodeCount, edgeCount, edges, queries)).toEqual([5, 5, 5]);
    });
});
