import { solve } from '../../solutions-descriptive/48.js';

test('simple graph with 3 vertices and 2 edges', () => {
  expect(solve(3, 2, [[1, 2], [2, 3]])).toBe('Alice');
});

test('minimal graph with 2 vertices and 1 edge', () => {
  expect(solve(2, 1, [[1, 2]])).toBe('Bob');
});

test('complete graph with 4 vertices', () => {
  expect(solve(4, 6, [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]])).toBe('Alice');
});

test('line graph with 5 vertices', () => {
  expect(solve(5, 4, [[1, 2], [2, 3], [3, 4], [4, 5]])).toBe('Alice');
});

test('star graph with center vertex', () => {
  expect(solve(4, 3, [[1, 2], [1, 3], [1, 4]])).toBe('Bob');
});

test('cycle graph with 5 vertices', () => {
  expect(solve(5, 5, [[1, 2], [2, 3], [3, 4], [4, 5], [5, 1]])).toBe('Alice');
});

test('triangle graph', () => {
  expect(solve(3, 3, [[1, 2], [2, 3], [3, 1]])).toBe('Alice');
});

test('path graph with 4 vertices', () => {
  expect(solve(4, 3, [[1, 2], [2, 3], [3, 4]])).toBe('Alice');
});