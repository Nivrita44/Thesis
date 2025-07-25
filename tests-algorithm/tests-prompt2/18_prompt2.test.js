import { solve } from '../../solutions-algorithm/18.js';

test('typical cases', () => {
  expect(
    solve([
      [1, 1337],
      [13, 69],
      [2, 4],
      [88, 89]
    ])
  ).toEqual([
    ['1', '2'],
    ['13', '26'],
    ['2', '4'],
    ['-1', '-1']
  ]);
});

test('r just below threshold', () => {
  expect(
    solve([
      [10, 19],
      [6, 11]
    ])
  ).toEqual([
    ['-1', '-1'],
    ['-1', '-1']
  ]);
});

test('r equals threshold', () => {
  expect(
    solve([
      [5, 10],
      [0, 0]
    ])
  ).toEqual([
    ['5', '10'],
    ['0', '0']
  ]);
});

test('single edge minimum values', () => {
  expect(
    solve([
      [0, 0]
    ])
  ).toEqual([
    ['0', '0']
  ]);
});

test('large numbers', () => {
  expect(
    solve([
      [1000000, 2000000],
      [999999, 1000000]
    ])
  ).toEqual([
    ['1000000', '2000000'],
    ['-1', '-1']
  ]);
});

test('empty input', () => {
  expect(solve([])).toEqual([]);
});

test('negative l and/or r', () => {
  expect(
    solve([
      [-2, -1],
      [-2, -3],
      [-2, 0]
    ])
  ).toEqual([
    ['-2', '-4'],
    ['-1', '-1'],
    ['-2', '-4']
  ]);
});