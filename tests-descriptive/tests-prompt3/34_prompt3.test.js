import { solve } from '../../solutions-descriptive/34.js';

test('a equals b, all zeros', () => {
  expect(solve([0,0,0], [0,0,0])).toBe('1');
});

test('a and b match, single element', () => {
  expect(solve([5], [0])).toBe('6');
});

test('a and b identical, no mod effect', () => {
  expect(solve([2,5,7], [2,5,7])).toBe('8');
});

test('simple k, mod is 3', () => {
  expect(solve([4,7,10], [1,1,1])).toBe('3');
});

test('unordered b, mod 2', () => {
  expect(solve([4,7,9], [1,1,0])).toBe('2');
});

test('b impossible: sum b > sum a', () => {
  expect(solve([1,2,3], [4,5,6])).toBe('-1');
});

test('b impossible: same sum but values dont match', () => {
  expect(solve([5,10,15], [0,2,3])).toBe('-1');
});

test('large input, all mods zero', () => {
  const a = Array(1000).fill(1000);
  const b = Array(1000).fill(0);
  expect(solve(a, b)).toBe('1000');
});

test('single element, b greater than a', () => {
  expect(solve([1], [2])).toBe('-1');
});

test('all ones, b all zeros', () => {
  expect(solve([1,1,1,1], [0,0,0,0])).toBe('1');
});

test('different possible k, picks the lowest valid', () => {
  expect(solve([14, 17, 19], [0,3,5])).toBe('7');
});

test('max values near limit', () => {
  const max = 10**6;
  expect(solve([max, max-1, max-2], [0,1,2])).toBe('1000000');
});

test('b is permuted remainders', () => {
  expect(solve([12,7,14], [2,0,5])).toBe('7');
});

test('impossible because max b >= k', () => {
  expect(solve([6,9,15], [4,3,2])).toBe('-1');
});

test('longer input, all a mod 4', () => {
  const a = [8,11,17,25];
  const b = [1,0,1,0];
  expect(solve(a, b)).toBe('4');
});

test('peakX + 1 exceeds 1e9', () => {
  expect(solve([1e9, 1e9], [1e9, 1e9])).toBe('-1');
});

test('repeat same number', () => {
  expect(solve([3,3,3], [0,0,0])).toBe('3');
});

test('b is zeros, a has range', () => {
  expect(solve([2,4,6,8], [0,0,0,0])).toBe('2');
});

test('minimum length with impossible', () => {
  expect(solve([1], [2])).toBe('-1');
});