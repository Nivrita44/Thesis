// @ts-nocheck
import { solve } from '../../../solutions-algorithm/22.js';

test('solve returns correct winner for n=1', () => {
  expect(solve([1])).toEqual(['First']);
});

test('solve returns correct winner for n=3', () => {
  expect(solve([3])).toEqual(['Second']);
});

test('solve returns correct winners for typical cases', () => {
  expect(solve([1,3,5,100,999,1000])).toEqual(['First','Second','First','First','Second','First']);
});

test('solve handles smallest n=1', () => {
  expect(solve([1])).toEqual(['First']);
});

test('solve handles n=2 (not divisible by 3)', () => {
  expect(solve([2])).toEqual(['First']);
});

test('solve handles n divisible by 3', () => {
  expect(solve([6,9,12])).toEqual(['Second','Second','Second']);
});

test('solve handles n just over a multiple of 3', () => {
  expect(solve([4,7,10])).toEqual(['First','First','First']);
});

test('solve handles n just under a multiple of 3', () => {
  expect(solve([2,5,8])).toEqual(['First','First','First']);
});

test('solve handles largest n=1000', () => {
  expect(solve([1000])).toEqual(['First']);
});

test('solve handles n=999 (divisible by 3)', () => {
  expect(solve([999])).toEqual(['Second']);
});

test('solve handles consecutive numbers', () => {
  expect(solve([1,2,3,4,5,6])).toEqual(['First','First','Second','First','First','Second']);
});

test('solve handles batch with only multiples of 3', () => {
  expect(solve([3,6,9,12,15])).toEqual(['Second','Second','Second','Second','Second']);
});

test('solve handles batch with only non-multiples of 3', () => {
  expect(solve([1,2,4,5,7,8])).toEqual(['First','First','First','First','First','First']);
});

test('solve handles empty input', () => {
  expect(solve([])).toEqual([]);
});
