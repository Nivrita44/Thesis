import { solve } from '../../solutions-descriptive/11.js';

test('Basic test with 2 nodes and 1 edge', () => {
  const nodeCount = 2;
  const edgeCount = 1;
  const edgeList = [{ u: 1, v: 2, w: 5 }];
  const queryList = [
    [1, 2, 2], // distance = 1+1 -> must allow, answer 5
    [2, 1, 1], // distance = 1+1, answer 5
    [1, 2, 1], // distance > maxAllowedDistance, answer -1
    [1, 1, 0]  // distance 0+0+1 = 1, answer 5
  ];
  expect(solve(nodeCount, edgeCount, edgeList, queryList)).toEqual([5, 5, -1, 5]);
});

test('3 nodes, 2 edges, reachable and unreachable cases', () => {
  const nodeCount = 3;
  const edgeCount = 2;
  const edgeList = [
    { u: 1, v: 2, w: 3 }, 
    { u: 2, v: 3, w: 2 }
  ];
  const queryList = [
    [1, 3, 3], // 1-2-3, needs at least 3
    [1, 3, 2], // not possible, needs at least 3
    [2, 2, 1], // self, minimal weight
    [3, 1, 3]  // reverse direction, same as [1, 3, 3]
  ];
  expect(solve(nodeCount, edgeCount, edgeList, queryList)).toEqual([2, -1, 2, 2]);
});

test('No path exists (disconnected graph)', () => {
  const nodeCount = 4;
  const edgeCount = 2;
  const edgeList = [
    { u: 1, v: 2, w: 1 },
    { u: 3, v: 4, w: 2 }
  ];
  const queryList = [
    [1, 3, 10], // disconnected
    [2, 1, 1],  // connected
    [4, 3, 2]   // connected
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

test('All nodes self-queries', () => {
  const nodeCount = 3;
  const edgeCount = 3;
  const edgeList = [
    { u: 1, v: 2, w: 4 },
    { u: 2, v: 3, w: 5 },
    { u: 1, v: 3, w: 2 }
  ];
  const queryList = [
    [1, 1, 0],
    [2, 2, 1],
    [3, 3, 2]
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
    [3, 1, 4]  // 3-4-1, min weight 2
  ];
  expect(solve(nodeCount, edgeCount, edgeList, queryList)).toEqual([2, 2, 2, 2]);
});