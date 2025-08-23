// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/11.js';

test('No path exists (disconnected graph)', () => {
    const nodeCount = 4;
    const edgeCount = 2;
    const edgeList = [
        { u: 1, v: 2, w: 1 },
        { u: 3, v: 4, w: 2 }
    ];
    const queryList = [
        [1, 3, 10], // disconnected
        [2, 1, 1], // connected
        [4, 3, 2] // connected
    ];
    expect(solve(nodeCount, edgeCount, edgeList, queryList)).toEqual([-1, 1, 2]);
});

test('Multiple queries, tie breaking on weight', () => {
    const nodeCount = 4;
    const edgeCount = 3;
    const edgeList = [
        { u: 1, v: 2, w: 5 },
        { u: 2, v: 3, w: 2 },
        { u: 3, v: 4, w: 2 }
    ];
    const queryList = [
        [1, 4, 5], // 1-2-3-4, min weight should be 2
        [1, 2, 2], // directly adjacent, min weight 2
        [4, 1, 10] // reverse direction, min weight 2
    ];
    expect(solve(nodeCount, edgeCount, edgeList, queryList)).toEqual([2, 2, 2]);
});

test('Edge case: Empty graph (no queries returns empty)', () => {
    const nodeCount = 5;
    const edgeCount = 0;
    const edgeList = [];
    const queryList = [];
    expect(solve(nodeCount, edgeCount, edgeList, queryList)).toEqual([]);
});

test('Edge case: One node loop', () => {
    const nodeCount = 1;
    const edgeCount = 0;
    const edgeList = [];
    const queryList = [
        [1, 1, 0],
        [1, 1, 1]
    ];
    expect(solve(nodeCount, edgeCount, edgeList, queryList)).toEqual([-1, -1]);
});

test('Edge case: All nodes connected in a cycle', () => {
    const nodeCount = 4;
    const edgeCount = 4;
    const edgeList = [
        { u: 1, v: 2, w: 3 },
        { u: 2, v: 3, w: 4 },
        { u: 3, v: 4, w: 5 },
        { u: 4, v: 1, w: 2 }
    ];
    const queryList = [
        [1, 3, 3], // can go 1-2-3 or 1-4-3, weight 2 is smallest usable
        [1, 4, 1], // 1-4, weight 2
        [2, 4, 2], // 2-3-4, minimal weight 2
        [3, 1, 4] // 3-4-1, min weight 2
    ];
    expect(solve(nodeCount, edgeCount, edgeList, queryList)).toEqual([2, 2, 2, 2]);
});