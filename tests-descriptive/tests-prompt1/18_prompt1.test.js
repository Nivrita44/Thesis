import { solve } from '../../solutions-descriptive/18.js';

test('Example 1 - 1x1 matrix, same', () => {
  expect(solve(
    1, 1,
    [[5]],
    [[5]]
  )).toBe('Yes');
});

test('Example 2 - 1x1 matrix, different', () => {
  expect(solve(
    1, 1,
    [[8]],
    [[10]]
  )).toBe('No');
});

test('Example 3 - Bitwise AND to zero', () => {
  expect(solve(
    2, 2,
    [
      [3, 7],
      [1, 0]
    ],
    [
      [0, 0],
      [0, 0]
    ]
  )).toBe('Yes');
});

test('Example 4 - Bitwise OR to make all ones', () => {
  expect(solve(
    2, 2,
    [
      [0, 0],
      [0, 0]
    ],
    [
      [1, 1],
      [1, 1]
    ]
  )).toBe('Yes');
});

test('Example 5 - Mixed operations required', () => {
  expect(solve(
    2, 3,
    [
      [4, 5, 6],
      [7, 8, 9]
    ],
    [
      [4, 5, 7],
      [7, 8, 11]
    ]
  )).toBe('No');
});

test('Example 6 - Impossible, trying to set bits not present in original', () => {
  expect(solve(
    2, 2,
    [
      [1, 1],
      [2, 2]
    ],
    [
      [3, 1],
      [2, 6]
    ]
  )).toBe('No');
});

test('Example 7 - Large matrix, all become zero', () => {
  expect(solve(
    3, 3,
    [
      [5, 6, 7],
      [8, 9, 10],
      [11, 12, 13]
    ],
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  )).toBe('Yes');
});

test('Example 8 - Large matrix, matching', () => {
  expect(solve(
    3, 3,
    [
      [1, 2, 4],
      [8, 16, 32],
      [64, 128, 256]
    ],
    [
      [1, 2, 4],
      [8, 16, 32],
      [64, 128, 256]
    ]
  )).toBe('Yes');
});

test('Example 9 - Single row, OR operation only', () => {
  expect(solve(
    1, 3,
    [
      [0, 1, 2]
    ],
    [
      [1, 1, 3]
    ]
  )).toBe('Yes');
});

test('Example 10 - Single column, AND operation only', () => {
  expect(solve(
    3, 1,
    [
      [7],
      [7],
      [7]
    ],
    [
      [5],
      [7],
      [1]
    ]
  )).toBe('Yes');
});