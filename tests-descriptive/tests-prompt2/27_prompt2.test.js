import { solve } from '../../solutions-descriptive/27.js';

test('returns unique point for typical case', () => {
  expect(
    solve(5, [
      [1, 2],
      [2, 3],
      [1, 2],
      [2, 3],
      [3, 4],
    ])
  ).toEqual([3, 4]);
});

test('returns unique point with negative coordinates', () => {
  expect(
    solve(3, [
      [-1, -2],
      [-1, -2],
      [5, 10],
    ])
  ).toEqual([5, 10]);
});

test('returns unique point when all x coordinates same except one', () => {
  expect(
    solve(3, [
      [4, 5],
      [4, 8],
      [10, 3],
    ])
  ).toEqual([10, 3]);
});

test('returns unique point when unique point is first', () => {
  expect(
    solve(3, [
      [100, 200],
      [1, 2],
      [1, 2],
    ])
  ).toEqual([100, 200]);
});

test('returns unique point when total points is one', () => {
  expect(solve(1, [[7, 9]])).toEqual([7, 9]);
});

test('returns unique point with large coordinates', () => {
  expect(
    solve(3, [
      [1000000, 2000000],
      [123456, 654321],
      [123456, 654321],
    ])
  ).toEqual([1000000, 2000000]);
});

test('returns unique point when y is negative and x positive', () => {
  expect(
    solve(3, [
      [3, -5],
      [4, 8],
      [3, -5],
    ])
  ).toEqual([4, 8]);
});

test('returns unique point when all points but one are identical', () => {
  expect(
    solve(5, [
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [7, 8],
    ])
  ).toEqual([7, 8]);
});

test('works with minimal valid input', () => {
  expect(solve(1, [[0, 0]])).toEqual([0, 0]);
});

test('unique point is last in input', () => {
  expect(
    solve(3, [
      [8, 9],
      [11, 15],
      [8, 9],
    ])
  ).toEqual([11, 15]);
});