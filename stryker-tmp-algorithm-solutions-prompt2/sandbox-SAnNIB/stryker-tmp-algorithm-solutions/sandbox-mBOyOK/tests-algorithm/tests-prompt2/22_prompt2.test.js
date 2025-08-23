// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/22.js';

test('solves typical numbers', () => {
  expect(solve([1, 3, 5, 100, 999, 1000])).toEqual(["First", "Second", "First", "First", "Second", "First"]);
});

test('solves only multiples of 3', () => {
  expect(solve([3, 6, 0, -3, 9999])).toEqual(["Second", "Second", "Second", "Second", "Second"]);
});

test('solves only non-multiples of 3', () => {
  expect(solve([1, 2, 4, 5, 7, 10])).toEqual(["First", "First", "First", "First", "First", "First"]);
});

test('solves mix of negative, zero and positive', () => {
  expect(solve([0, -3, -1, -2, -4])).toEqual(["Second", "Second", "First", "First", "First"]);
});

test('solves empty input', () => {
  expect(solve([])).toEqual([]);
});

test('solves large numbers', () => {
  expect(solve([1000000, 999999, 3000003])).toEqual(["First", "Second", "Second"]);
});

test('solves single element input', () => {
  expect(solve([2])).toEqual(["First"]);
  expect(solve([3])).toEqual(["Second"]);
  expect(solve([0])).toEqual(["Second"]);
});
