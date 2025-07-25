import solve from '../../solutions-algorithm/41.js';

test('simple path exists', () => {
  const n = 4, m = 4;
  const edges = [
    [1, 2, 1],
    [2, 4, 2],
    [1, 3, 5],
    [3, 4, 1]
  ];
  expect(solve(n, m, edges)).toEqual([1, 2, 4]);
});

test('no path', () => {
  const n = 3, m = 1;
  const edges = [
    [1, 2, 1]
  ];
  expect(solve(n, m, edges)).toBe(-1);
});

test('simple direct connection', () => {
  const n = 2, m = 1;
  const edges = [
    [1, 2, 42]
  ];
  expect(solve(n, m, edges)).toEqual([1, 2]);
});

test('multiple edges between same pair', () => {
  const n = 3, m = 4;
  const edges = [
    [1, 2, 3],
    [1, 2, 1],
    [2, 3, 1],
    [1, 3, 10]
  ];
  expect(solve(n, m, edges)).toEqual([1, 2, 3]);
});

test('loop does not affect path', () => {
  const n = 3, m = 3;
  const edges = [
    [1, 1, 100],
    [1, 2, 1],
    [2, 3, 1]
  ];
  expect(solve(n, m, edges)).toEqual([1, 2, 3]);
});

test('path involves all nodes', () => {
  const n = 5, m = 4;
  const edges = [
    [1, 2, 2],
    [2, 3, 2],
    [3, 4, 2],
    [4, 5, 2]
  ];
  expect(solve(n, m, edges)).toEqual([1, 2, 3, 4, 5]);
});

test('disconnected large node', () => {
  const n = 4, m = 2;
  const edges = [
    [1, 2, 2],
    [2, 3, 2]
  ];
  expect(solve(n, m, edges)).toBe(-1);
});

test('edges are not sorted', () => {
  const n = 3, m = 2;
  const edges = [
    [2, 3, 1],
    [1, 2, 2]
  ];
  expect(solve(n, m, edges)).toEqual([1, 2, 3]);
});

test('minimum input', () => {
  const n = 2, m = 0;
  const edges = [];
  expect(solve(n, m, edges)).toBe(-1);
});

test('multiple shortest paths', () => {
  const n = 4, m = 5;
  const edges = [
    [1, 2, 1],
    [2, 4, 1],
    [1, 3, 1],
    [3, 4, 1],
    [2, 3, 100]
  ];
  const result = solve(n, m, edges);
  expect(
    JSON.stringify(result) === JSON.stringify([1, 2, 4]) ||
    JSON.stringify(result) === JSON.stringify([1, 3, 4])
  ).toBe(true);
});