import { solve } from '../../../solutions-descriptive/49.js'

test('example from description', () => {
  expect(solve(4, 4, [[1,2], [2,3], [3,4], [4,1]])).toBe(4n);
});

test('minimal case - 2 vertices, 1 edge', () => {
  expect(solve(2, 1, [[1,2]])).toBe(0n);
});

test('edge case - single connected component after removal', () => {
  expect(solve(3, 3, [[1,2], [2,3], [3,1]])).toBe(3n);
});

test('upper bound case', () => {
  expect(solve(5, 7, [[1,2], [1,3], [1,4], [2,3], [2,5], [3,4], [4,5]])).toBe(10n);
});

test('cycle with spoke', () => {
  expect(solve(4, 4, [[1,2], [2,3], [3,1], [3,4]])).toBe(4n);
});

test('tree structure', () => {
  expect(solve(5, 4, [[1,2], [2,3], [3,4], [4,5]])).toBe(6n);
});

test('dense graph', () => {
  expect(solve(4, 5, [[1,2], [2,3], [3,4], [4,1], [1,3]])).toBe(5n);
});

test('bridge edge case', () => {
  expect(solve(6, 6, [[1,2], [2,3], [3,1], [4,5], [5,6], [6,4]])).toBe(6n);
});
