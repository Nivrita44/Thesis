// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/27.js'

test('example case with single point', () => {
  expect(solve(1, [[0, 0]])).toEqual([0, 0]);
});

test('example case with 4 points in diamond shape', () => {
  expect(solve(4, [[0, 0], [0, 1], [1, -1], [1, 0]])).toEqual([0, 0]);
});

test('single point at max coordinates', () => {
  expect(solve(1, [[100000000, 100000000]])).toEqual([100000000, 100000000]);
});

test('single point at min coordinates', () => {
  expect(solve(1, [[-100000000, -100000000]])).toEqual([-100000000, -100000000]);
});

test('multiple points with negative coordinates', () => {
  expect(solve(4, [[-5, -3], [-5, -2], [-4, -4], [-4, -3]])).toEqual([-5, -3]);
});

test('points forming multiple diamonds', () => {
  expect(solve(8, [[1, 1], [1, 2], [2, 0], [2, 1], [3, 2], [3, 3], [4, 1], [4, 2]])).toEqual([1, 1]);
});

test('points in irregular pattern', () => {
  expect(solve(5, [[10, 20], [10, 21], [11, 19], [11, 20], [12, 21]])).toEqual([10, 20]);
});

test('single point at origin', () => {
  expect(solve(1, [[0, 0]])).toEqual([0, 0]);
});
