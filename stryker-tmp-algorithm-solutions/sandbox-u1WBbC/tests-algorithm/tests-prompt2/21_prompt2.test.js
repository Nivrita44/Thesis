// @ts-nocheck
import { solve } from '../../../solutions-algorithm/21.js';

test('typical cases', () => {
  expect(
    solve([
      [1, 4, 3],
      [2, 5, 8],
      [9, 11, 20],
      [0, 0, 0],
      [20, 20, 20],
      [4, 12, 3],
      [15, 7, 8]
    ])
  ).toEqual([
    "YES",
    "NO",
    "YES",
    "YES",
    "NO",
    "NO",
    "YES"
  ]);
});

test('single positive case', () => {
  expect(solve([[1, 2, 3]])).toEqual(["YES"]);
});

test('single negative case', () => {
  expect(solve([[2, 2, 5]])).toEqual(["NO"]);
});

test('all zeroes', () => {
  expect(solve([[0, 0, 0]])).toEqual(["YES"]);
});

test('negative numbers: possible sum', () => {
  expect(solve([[-1, -2, -3]])).toEqual(["YES"]);
});

test('negative numbers: impossible sum', () => {
  expect(solve([[-5, 3, 0]])).toEqual(["NO"]);
});

test('mixed negative and positive sum', () => {
  expect(solve([[7, -7, 0]])).toEqual(["YES"]);
});

test('edge: all same large values', () => {
  expect(solve([[1e9, 1e9, 1e9]])).toEqual(["NO"]);
});

test('edge: large positive sum', () => {
  expect(solve([[1e9, 1e9, 2e9]])).toEqual(["YES"]);
});

test('edge: large negative sum', () => {
  expect(solve([[-1e9, -1e9, -2e9]])).toEqual(["YES"]);
});

test('duplicate pairs', () => {
  expect(solve([[3, 3, 6], [3, 6, 3], [6, 3, 3]])).toEqual(["YES", "YES", "YES"]);
});

test('single input', () => {
  expect(solve([[0, 5, 5]])).toEqual(["YES"]);
});

test('empty input', () => {
  expect(solve([])).toEqual([]);
});
