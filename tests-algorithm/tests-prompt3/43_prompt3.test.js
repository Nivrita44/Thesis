import { solve } from '../../solutions-algorithm/43.js';

test('example 1', () => {
  expect(solve(5, [4, 0, 3, 1, 2])).toEqual([3, 2]);
});

test('example 2', () => {
  expect(solve(5, [1, 2, 3, 4, 0])).toEqual([3, 4]);
});

test('example 3', () => {
  expect(solve(5, [1, 3, 4, 0, 2])).toEqual([4, 5]);
});

test('sorted ascending, minimum n', () => {
  expect(solve(2, [0, 1])).toEqual([0, 1]);
});

test('reverse sorted, minimum n', () => {
  expect(solve(2, [1, 0])).toEqual([0, 1]);
});

test('sorted ascending, n=4', () => {
  expect(solve(4, [0, 1, 2, 3])).toEqual([0, 3]);
});

test('reverse sorted, n=4', () => {
  expect(solve(4, [3, 2, 1, 0])).toEqual([2, 1]);
});

test('single inversion, n=3', () => {
  expect(solve(3, [0, 2, 1])).toEqual([0, 2]);
});

test('single inversion different place, n=3', () => {
  expect(solve(3, [1, 0, 2])).toEqual([0, 2]);
});

test('random permutation, n=6', () => {
  expect(solve(6, [3, 0, 5, 2, 1, 4])).toEqual([7, 2]);
});

test('random with large n', () => {
  const arr = Array.from({length: 100}, (v, i) => i);
  const shuffled = arr.slice().reverse();
  const result = solve(100, shuffled);
  expect(result[0]).toBeLessThan(4950);
  expect(result[1]).toBeGreaterThanOrEqual(1);
});

test('almost sorted except last 2 swapped', () => {
  expect(solve(6, [0, 1, 2, 3, 5, 4])).toEqual([0, 5]);
});

test('cyclic shift', () => {
  expect(solve(4, [1, 2, 3, 0])).toEqual([2, 2]);
});

test('edge case: all possible swaps, n=3', () => {
  expect(solve(3, [2, 1, 0])).toEqual([1, 1]);
});