// @ts-nocheck
import { solve } from '../../../solutions-descriptive/36.js'

test('example case', () => {
  expect(solve(3, 3, 2, [[1,1,0], [2,2,1]])).toBe(4);
});

test('edge case - all cells marked', () => {
  expect(solve(3, 3, 9, [[1,1,0],[1,2,1],[1,3,0],[2,1,1],[2,2,0],[2,3,1],[3,1,0],[3,2,1],[3,3,0]])).toBe(1);
});

test('large board minimal marks', () => {
  expect(solve(1000000000, 1000000000, 1, [[1,1,0]])).toBe(536870912);
});

test('minimal board size', () => {
  expect(solve(3, 3, 1, [[1,1,0]])).toBe(128);
});

test('corner case - marks form diagonal', () => {
  expect(solve(4, 4, 3, [[1,1,0], [2,2,1], [3,3,0]])).toBe(32);
});

test('random valid case 1', () => {
  expect(solve(5, 4, 4, [[1,1,0], [2,3,1], [4,2,0], [5,4,1]])).toBe(256);
});

test('random valid case 2', () => {
  expect(solve(4, 5, 3, [[2,2,0], [3,3,1], [4,4,0]])).toBe(512);
});

test('board with sparse marks', () => {
  expect(solve(10, 10, 2, [[1,1,0], [10,10,1]])).toBe(274877906944);
});
