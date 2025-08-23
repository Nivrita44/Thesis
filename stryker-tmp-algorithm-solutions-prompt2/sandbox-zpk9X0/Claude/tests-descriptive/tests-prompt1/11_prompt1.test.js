// @ts-nocheck
import { solve } from '../../../solutions-descriptive/11.js';

test('basic example case', () => {
    const nodeCount = 4;
    const edgeCount = 5;
    const queryCount = 3;
    const edges = [
        { u: 1, v: 2, w: 3 },
        { u: 2, v: 3, w: 2 },
        { u: 3, v: 4, w: 5 },
        { u: 1, v: 3, w: 4 },
        { u: 2, v: 4, w: 1 }
    ];
    const queries = [
        [1, 4, 1],
        [1, 4, 2],
        [1, 4, 3]
    ];
    expect(solve(nodeCount, edgeCount, edges, queries)).toEqual([5, 4, 3]);
});

test('minimum graph with 2 vertices', () => {
    const nodeCount = 2;
    const edgeCount = 1;
    const queryCount = 1;
    const edges = [
        { u: 1, v: 2, w: 5 }
    ];
    const queries = [
        [1, 2, 1]
    ];
    expect(solve(nodeCount, edgeCount, edges, queries)).toEqual([5]);
});

test('complete graph with 4 vertices', () => {
    const nodeCount = 4;
    const edgeCount = 6;
    const queryCount = 2;
    const edges = [
        { u: 1, v: 2, w: 6 },
        { u: 2, v: 3, w: 5 },
        { u: 3, v: 4, w: 4 },
        { u: 1, v: 3, w: 3 },
        { u: 2, v: 4, w: 2 },
        { u: 1, v: 4, w: 1 }
    ];
    const queries = [
        [1, 4, 1],
        [1, 4, 2]
    ];
    expect(solve(nodeCount, edgeCount, edges, queries)).toEqual([6, 5]);
});

test('linear path graph', () => {
    const nodeCount = 4;
    const edgeCount = 3;
    const queryCount = 2;
    const edges = [
        { u: 1, v: 2, w: 3 },
        { u: 2, v: 3, w: 2 },
        { u: 3, v: 4, w: 1 }
    ];
    const queries = [
        [1, 4, 1],
        [1, 4, 2]
    ];
    expect(solve(nodeCount, edgeCount, edges, queries)).toEqual([3, 2]);
});

test('star shaped graph', () => {
    const nodeCount = 4;
    const edgeCount = 3;
    const queryCount = 1;
    const edges = [
        { u: 1, v: 2, w: 10 },
        { u: 1, v: 3, w: 20 },
        { u: 1, v: 4, w: 30 }
    ];
    const queries = [
        [2, 3, 1]
    ];
    expect(solve(nodeCount, edgeCount, edges, queries)).toEqual([20]);
});

test('maximum edge weights', () => {
    const nodeCount = 3;
    const edgeCount = 3;
    const queryCount = 1;
    const edges = [
        { u: 1, v: 2, w: 1000000000 },
        { u: 2, v: 3, w: 1000000000 },
        { u: 1, v: 3, w: 1000000000 }
    ];
    const queries = [
        [1, 3, 2]
    ];
    expect(solve(nodeCount, edgeCount, edges, queries)).toEqual([1000000000]);
});

test('multiple paths between vertices', () => {
    const nodeCount = 5;
    const edgeCount = 6;
    const queryCount = 2;
    const edges = [
        { u: 1, v: 2, w: 7 },
        { u: 2, v: 3, w: 6 },
        { u: 3, v: 5, w: 5 },
        { u: 1, v: 4, w: 4 },
        { u: 4, v: 5, w: 3 },
        { u: 1, v: 5, w: 2 }
    ];
    const queries = [
        [1, 5, 1],
        [1, 5, 2]
    ];
    expect(solve(nodeCount, edgeCount, edges, queries)).toEqual([7, 6]);
});