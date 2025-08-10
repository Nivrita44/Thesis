import { solve } from '../../../solutions-descriptive/7.js'

test('example tree with 3 vertices in line', () => {
  expect(solve(3, [[1, 2], [2, 3]])).toBe(1n);
});

test('minimal tree with 2 vertices', () => {
  expect(solve(2, [[1, 2]])).toBe(0n);
});

test('star tree with root in center', () => {
  expect(solve(4, [[1, 2], [1, 3], [1, 4]])).toBe(3n);
});

test('balanced binary tree', () => {
  expect(solve(7, [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7]])).toBe(15n);
});

test('long chain tree', () => {
  expect(solve(5, [[1, 2], [2, 3], [3, 4], [4, 5]])).toBe(6n);
});

test('tree with multiple branches at different levels', () => {
  expect(solve(6, [[1, 2], [2, 3], [3, 4], [2, 5], [5, 6]])).toBe(9n);
});

test('maximum size tree with 10 vertices', () => {
  expect(solve(10, [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10]])).toBe(36n);
});
