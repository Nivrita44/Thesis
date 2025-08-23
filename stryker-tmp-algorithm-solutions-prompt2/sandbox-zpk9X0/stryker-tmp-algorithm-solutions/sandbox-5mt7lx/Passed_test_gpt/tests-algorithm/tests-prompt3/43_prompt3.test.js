// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/43.js';

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


test('random with large n', () => {
  const arr = Array.from({length: 100}, (v, i) => i);
  const shuffled = arr.slice().reverse();
  const result = solve(100, shuffled);
  expect(result[0]).toBeLessThan(4950);
  expect(result[1]).toBeGreaterThanOrEqual(1);
});
