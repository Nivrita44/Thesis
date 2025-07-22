import { solve } from '../../solutions-descriptive/43.js';

test('single node', () => {
  expect(solve(1, 10, [5], [])).toBe(5);
});

test('two nodes, no cost penalty', () => {
  expect(solve(2, 0, [5, 7], [[1,2]])).toBe(12);
});

test('two nodes, high cost penalty', () => {
  expect(solve(2, 10, [5, 7], [[1,2]])).toBe(7);
});

test('three node line, zero cost', () => {
  expect(solve(3, 0, [3, 2, 1], [[1,2],[2,3]])).toBe(6);
});

test('three node line, some cost', () => {
  expect(solve(3, 2, [3, 2, 1], [[1,2],[2,3]])).toBe(5);
});

test('three node star, central penalty', () => {
  expect(solve(3, 1, [10, 2, 2], [[1,2],[1,3]])).toBe(12);
});

test('three node star, higher cost', () => {
  expect(solve(3, 5, [10, 2, 2], [[1,2],[1,3]])).toBe(10);
});

test('all negative values', () => {
  expect(solve(3, 2, [-1, -2, -3], [[1,2],[2,3]])).toBe(0);
});

test('mix of negative and positive', () => {
  expect(solve(4, 1, [7, -2, 5, -3], [[1,2],[2,3],[3,4]])).toBe(10);
});

test('big linear tree', () => {
  expect(solve(5, 1, [1, 2, 3, 4, 5], [[1,2],[2,3],[3,4],[4,5]])).toBe(11);
});

test('small binary tree', () => {
  expect(solve(3, 2, [4, 5, 6], [[1,2],[1,3]])).toBe(10);
});

test('selecting none yields higher (all negatives)', () => {
  expect(solve(4, 3, [-1, -2, -3, -4], [[1,2],[2,3],[3,4]])).toBe(0);
});

test('complex tree', () => {
  expect(solve(
    7, 2,
    [9, 7, 5, 3, 10, 12, 8],
    [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7]]
  )).toBe(41);
});

test('zero cost, large balanced tree', () => {
  expect(solve(
    7, 0,
    [3, 2, 1, 5, 4, 6, 7],
    [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7]]
  )).toBe(28);
});