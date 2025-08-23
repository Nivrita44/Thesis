// @ts-nocheck
import { solve } from '../../../solutions-algorithm/24.js';

test('solve with small samples', () => {
  expect(solve([2])).toEqual([1]);
  expect(solve([3])).toEqual([1]);
  expect(solve([4])).toEqual([2]);
  expect(solve([5])).toEqual([2]);
  expect(solve([6])).toEqual([3]);
  expect(solve([7])).toEqual([3]);
  expect(solve([8])).toEqual([4]);
  expect(solve([9])).toEqual([4]);
  expect(solve([10])).toEqual([5]);
});

test('solve with multiple inputs', () => {
  expect(solve([3, 5])).toEqual([1, 2]);
  expect(solve([2, 4, 6, 8, 10])).toEqual([1, 2, 3, 4, 5]);
});

test('solve with minimal and boundary values', () => {
  expect(solve([2])).toEqual([1]);
  expect(solve([1000000])).toEqual([500000]);
  expect(solve([999999])).toEqual([499999]);
});

test('solve with consecutive numbers', () => {
  expect(solve([11, 12, 13, 14, 15])).toEqual([5, 6, 6, 7, 7]);
});

test('solve with large batch', () => {
  const input = Array.from({length: 10}, (_, i) => 1000000 - i);
  const expected = input.map(n => Math.floor(n/2));
  expect(solve(input)).toEqual(expected);
});