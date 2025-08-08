import { solve } from '../../solutions-descriptive/9.js'

test('example case with 4 nodes', () => {
  expect(solve(4, [2, 4, 1, 3], [[1, 2], [2, 3], [2, 4]])).toBe(2n);
});

test('minimal tree with 1 node', () => {
  expect(solve(1, [1], [])).toBe(1n);
});

test('linear tree with 3 nodes in decreasing values', () => {
  expect(solve(3, [3, 2, 1], [[1, 2], [2, 3]])).toBe(1n);
});

test('star tree with center having lowest value', () => {
  expect(solve(4, [1, 4, 3, 2], [[1, 2], [1, 3], [1, 4]])).toBe(2n);
});

test('binary tree with all equal values', () => {
  expect(solve(7, [1, 1, 1, 1, 1, 1, 1], [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7]])).toBe(0n);
});

test('path tree with alternating values', () => {
  expect(solve(5, [2, 1, 4, 3, 5], [[1, 2], [2, 3], [3, 4], [4, 5]])).toBe(3n);
});

test('complete binary tree with increasing values', () => {
  expect(solve(7, [1, 2, 3, 4, 5, 6, 7], [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7]])).toBe(7n);
});

test('tree with single path and maximum value in middle', () => {
  expect(solve(5, [3, 2, 5, 1, 4], [[1, 2], [2, 3], [3, 4], [4, 5]])).toBe(3n);
});