// @ts-nocheck
import { solve } from '../../../solutions-algorithm/13.js';

test('typical case: [2, 4, 6]', () => {
  expect(solve([2, 4, 6])).toEqual([1, 3, 5]);
});

test('case with negative numbers: [-1, 0, 1]', () => {
  expect(solve([-1, 0, 1])).toEqual([-2, -1, 0]);
});

test('empty array', () => {
  expect(solve([])).toEqual([]);
});

test('single value array', () => {
  expect(solve([100])).toEqual([99]);
});

test('array with large numbers', () => {
  expect(solve([999999, 0, -1000000])).toEqual([999998, -1, -1000001]);
});

test('array with all zeros', () => {
  expect(solve([0, 0, 0])).toEqual([-1, -1, -1]);
});
