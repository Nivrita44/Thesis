// @ts-nocheck
import { solve } from '../../../solutions-algorithm/11.js';

test('solve with typical two-digit numbers', () => {
  expect(solve([77, 21, 40, 34, 19, 84, 10, 99])).toEqual([14, 3, 4, 7, 10, 12, 1, 18]);
});

test('solve with identical digits', () => {
  expect(solve([11, 22, 33, 44, 55, 66, 88])).toEqual([2, 4, 6, 8, 10, 12, 16]);
});

test('solve with numbers ending with zero', () => {
  expect(solve([10, 20, 30, 40, 90])).toEqual([1, 2, 3, 4, 9]);
});

test('solve with numbers starting with zero is not possible, but with lowest 10', () => {
  expect(solve([10])).toEqual([1]);
});

test('solve with highest two-digit number', () => {
  expect(solve([99])).toEqual([18]);
});

test('solve with lowest two-digit number', () => {
  expect(solve([10])).toEqual([1]);
});

test('solve with all teens', () => {
  expect(solve([11, 12, 13, 14, 15, 16, 17, 18, 19])).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('solve with repeated numbers', () => {
  expect(solve([55, 55, 55])).toEqual([10, 10, 10]);
});

test('solve with mixed numbers', () => {
  expect(solve([10, 32, 47, 58, 64, 73])).toEqual([1, 5, 11, 13, 10, 10]);
});

test('solve with empty array', () => {
  expect(solve([])).toEqual([]);
});
