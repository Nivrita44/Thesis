import { solve } from '../../../solutions-algorithm/24.js';

test('typical positive integers', () => {
  expect(solve([3, 5, 8, 11])).toEqual([1, 2, 4, 5]);
});

test('zero values', () => {
  expect(solve([0, 0, 0])).toEqual([0, 0, 0]);
});

test('single negative integer', () => {
  expect(solve([-1])).toEqual([-1]);
});

test('negative integers', () => {
  expect(solve([-1, -3, -4, -7])).toEqual([-1, -2, -2, -4]);
});

test('even integers', () => {
  expect(solve([2, 4, 6, 10])).toEqual([1, 2, 3, 5]);
});

test('odd integers', () => {
  expect(solve([1, 3, 5, 7, 9])).toEqual([0, 1, 2, 3, 4]);
});

test('floats in input', () => {
  expect(solve([3.7, 5.9, -2.1, -3.5])).toEqual([1, 2, -2, -2]);
});

test('large numbers', () => {
  expect(solve([1e6, -1e6])).toEqual([500000, -500000]);
});

test('empty array', () => {
  expect(solve([])).toEqual([]);
});

test('single element array', () => {
  expect(solve([15])).toEqual([7]);
});