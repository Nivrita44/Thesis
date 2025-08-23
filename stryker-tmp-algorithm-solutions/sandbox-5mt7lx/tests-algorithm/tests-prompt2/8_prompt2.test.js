// @ts-nocheck
import { solve } from '../../../solutions-algorithm/8.js';

test('typical case with duplicates', () => {
  expect(
    solve(
      10,
      [1, 2, 3, 4, 1, 2, 3, 4, 100000, 99999],
      [1,2,3,4,5,6,7,8,9,10]
    )
  ).toEqual([6,6,6,6,6,5,4,3,2,1]);
});

test('simple all-unique array', () => {
  expect(
    solve(5, [1,2,3,4,5], [1,2,3,4,5])
  ).toEqual([5,4,3,2,1]);
});

test('all elements the same', () => {
  expect(
    solve(4, [7,7,7,7], [1,2,3,4])
  ).toEqual([1,1,1,1]);
});

test('queries at edges', () => {
  expect(
    solve(5, [2,3,2,3,2], [1,5])
  ).toEqual([2,1]);
});

test('single element array', () => {
  expect(
    solve(1, [42], [1])
  ).toEqual([1]);
});

test('query in the middle', () => {
  expect(
    solve(7, [1,2,1,3,2,4,5], [3,5])
  ).toEqual([4,3]);
});

test('mixed values and out-of-order queries', () => {
  expect(
    solve(
      6,
      [5,5,10,9,8,5],
      [6,1,3]
    )
  ).toEqual([1,4,4]);
});

test('zero queries', () => {
  expect(
    solve(3, [1,2,3], [])
  ).toEqual([]);
});

test('array with large numbers', () => {
  expect(
    solve(4, [100000, 100000, 99999, 99999], [1,2,3,4])
  ).toEqual([2,2,1,1]);
});

test('minimum input', () => {
  expect(
    solve(1, [0], [1])
  ).toEqual([1]);
});
