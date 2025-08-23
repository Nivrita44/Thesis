// @ts-nocheck
import { solve } from '../../../solutions-algorithm/34.js';

test('solves: typical positive numbers', () => {
  expect(solve([10, 7, 21, 100, 2, 1000, 6])).toEqual([9, 6, 20, 99, 1, 999, 5]);
});

test('solves: single zero', () => {
  expect(solve([0])).toEqual([-1]);
});

test('solves: single negative number', () => {
  expect(solve([-5])).toEqual([-6]);
});

test('solves: mix positive and negative numbers', () => {
  expect(solve([3, -1, 0, 7, -10])).toEqual([2, -2, -1, 6, -11]);
});

test('solves: all zeros', () => {
  expect(solve([0, 0, 0])).toEqual([-1, -1, -1]);
});

test('solves: empty input', () => {
  expect(solve([])).toEqual([]);
});

test('solves: large numbers', () => {
  expect(solve([999999, -999999])).toEqual([999998, -1000000]);
});

test('solves: minimal values', () => {
  expect(solve([1])).toEqual([0]);
  expect(solve([-1])).toEqual([-2]);
});