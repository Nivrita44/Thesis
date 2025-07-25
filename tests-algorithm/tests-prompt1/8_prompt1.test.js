import solve from '../../solutions-algorithm/8.js';

test('Basic small test', () => {
  expect(solve(
    5, 3,
    [1, 2, 1, 3, 2],
    [1, 2, 4]
  )).toEqual([3, 3, 2]);
});

test('All elements are the same', () => {
  expect(solve(
    4, 2,
    [5,5,5,5],
    [1,2]
  )).toEqual([1,1]);
});

test('All distinct elements', () => {
  expect(solve(
    6, 3,
    [1,2,3,4,5,6],
    [1,3,6]
  )).toEqual([6,4,1]);
});

test('li at last position', () => {
  expect(solve(
    7,1,
    [1,2,3,4,5,6,7],
    [7]
  )).toEqual([1]);
});

test('Repeat queries', () => {
  expect(solve(
    5,4,
    [2,1,1,3,2],
    [3,3,3,3]
  )).toEqual([3,3,3,3]);
});

test('Single element array', () => {
  expect(solve(
    1,1,
    [100],
    [1]
  )).toEqual([1]);
});

test('Two value alternation', () => {
  expect(solve(
    8,3,
    [1,2,1,2,1,2,1,2],
    [1,2,3]
  )).toEqual([2,2,2]);
});

test('Consecutive queries', () => {
  expect(solve(
    5,5,
    [3,1,3,2,1],
    [1,2,3,4,5]
  )).toEqual([3,3,2,2,1]);
});

test('Edge: maximums differing', () => {
  expect(solve(
    4,2,
    [100000,99999,100000,2],
    [1,2]
  )).toEqual([3,3]);
});