import { solve } from '../../solutions-descriptive/11.js'

test('basic example case', () => {
  expect(solve(
    4, 5, 3,
    [[1, 2, 3], [2, 3, 2], [3, 4, 5], [1, 3, 4], [2, 4, 1]],
    [[1, 4, 1], [1, 4, 2], [1, 4, 3]]
  )).toEqual([5, 4, 3]);
});

test('minimum graph with 2 vertices', () => {
  expect(solve(
    2, 1, 1,
    [[1, 2, 5]],
    [[1, 2, 1]]
  )).toEqual([5]);
});

test('complete graph with 4 vertices', () => {
  expect(solve(
    4, 6, 2,
    [[1, 2, 6], [2, 3, 5], [3, 4, 4], [1, 3, 3], [2, 4, 2], [1, 4, 1]],
    [[1, 4, 1], [1, 4, 2]]
  )).toEqual([6, 5]);
});

test('linear path graph', () => {
  expect(solve(
    4, 3, 2,
    [[1, 2, 3], [2, 3, 2], [3, 4, 1]],
    [[1, 4, 1], [1, 4, 2]]
  )).toEqual([3, 2]);
});

test('star shaped graph', () => {
  expect(solve(
    4, 3, 1,
    [[1, 2, 10], [1, 3, 20], [1, 4, 30]],
    [[2, 3, 1]]
  )).toEqual([20]);
});

test('maximum edge weights', () => {
  expect(solve(
    3, 3, 1,
    [[1, 2, 1000000000], [2, 3, 1000000000], [1, 3, 1000000000]],
    [[1, 3, 2]]
  )).toEqual([1000000000]);
});

test('multiple paths between vertices', () => {
  expect(solve(
    5, 6, 2,
    [[1, 2, 7], [2, 3, 6], [3, 5, 5], [1, 4, 4], [4, 5, 3], [1, 5, 2]],
    [[1, 5, 1], [1, 5, 2]]
  )).toEqual([7, 6]);
});