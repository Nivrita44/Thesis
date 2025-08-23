// @ts-nocheck
import { solve } from '../../../solutions-algorithm/17.js';

test('solve with n=3 returns [3]', () => {
  expect(solve([3])).toEqual([3]);
});

test('solve with n=2 returns [2]', () => {
  expect(solve([2])).toEqual([2]);
});

test('solve with n=4 returns [2]', () => {
  expect(solve([4])).toEqual([2]);
});

test('solve with n=10 returns [2]', () => {
  expect(solve([10])).toEqual([2]);
});

test('solve with n=100 returns [2]', () => {
  expect(solve([100])).toEqual([2]);
});

test('solve with [3, 15] returns [3, 2]', () => {
  expect(solve([3, 15])).toEqual([3, 2]);
});

test('solve with [2, 3, 4, 5, 6] returns [2, 3, 2, 2, 2]', () => {
  expect(solve([2, 3, 4, 5, 6])).toEqual([2, 3, 2, 2, 2]);
});

test('solve with all inputs 3 returns all 3', () => {
  expect(solve([3, 3, 3])).toEqual([3, 3, 3]);
});

test('solve with mixed: [3, 2, 4, 3] returns [3, 2, 2, 3]', () => {
  expect(solve([3, 2, 4, 3])).toEqual([3, 2, 2, 3]);
});

test('solve with edge input n=99 returns [2]', () => {
  expect(solve([99])).toEqual([2]);
});

test('solve with input n=100 returns [2]', () => {
  expect(solve([100])).toEqual([2]);
});

test('solve with all values from 2 to 10', () => {
  expect(solve([2,3,4,5,6,7,8,9,10])).toEqual([2,3,2,2,2,2,2,2,2]);
});