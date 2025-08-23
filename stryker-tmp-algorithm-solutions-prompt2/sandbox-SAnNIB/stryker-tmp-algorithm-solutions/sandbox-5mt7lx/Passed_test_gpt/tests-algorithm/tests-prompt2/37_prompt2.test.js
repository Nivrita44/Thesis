// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/37.js';

test('solve with n=3 returns [1,3,5]', () => {
  expect(solve(3)).toEqual([1, 3, 5]);
});

test('solve with n=6 returns [1,3,5,7,9,11]', () => {
  expect(solve(6)).toEqual([1, 3, 5, 7, 9, 11]);
});

test('solve with n=1 returns [1]', () => {
  expect(solve(1)).toEqual([1]);
});

test('solve with n=5 returns [1,3,5,7,9]', () => {
  expect(solve(5)).toEqual([1, 3, 5, 7, 9]);
});

test('solve with n=0 returns []', () => {
  expect(solve(0)).toEqual([]);
});

test('solve with large n=100 returns array of 100 odd numbers', () => {
  const expected = Array.from({length:100}, (_,i) => 1 + 2*i);
  expect(solve(100)).toEqual(expected);
});

test('solve with negative n returns []', () => {
  expect(solve(-5)).toEqual([]);
});

test('solve with n=2 returns [1,3]', () => {
  expect(solve(2)).toEqual([1, 3]);
});

//all pass
