// @ts-nocheck
import { solve } from '../../../solutions-algorithm/44.js';

test('returns the correct array for n=3, k=3', () => {
  expect(solve(3, 3)).toStrictEqual([2, 1, 3]);
});

test('returns the sorted array for n=4, k=1', () => {
  expect(solve(4, 1)).toStrictEqual([1, 2, 3, 4]);
});

test('returns -1 for impossible case k even: n=5, k=6', () => {
  expect(solve(5, 6)).toBe(-1);
});

test('returns -1 for impossible case k>2n-1: n=3, k=7', () => {
  expect(solve(3, 7)).toBe(-1);
});

test('edge case n=1, k=1: should return [1]', () => {
  expect(solve(1, 1)).toStrictEqual([1]);
});

test('edge case n=1, k=2: should return -1, since k is even', () => {
  expect(solve(1, 2)).toBe(-1);
});

test('n=2, k=1: returns [1,2] (no swaps)', () => {
  expect(solve(2, 1)).toStrictEqual([1, 2]);
});

test('n=2, k=2: returns -1 (k even)', () => {
  expect(solve(2, 2)).toBe(-1);
});

test('n=2, k=3: returns [2,1]', () => {
  expect(solve(2, 3)).toStrictEqual([2, 1]);
});

test('limits: large odd allowed k', () => {
  expect(Array.isArray(solve(10, 19))).toBe(true);
  expect(solve(10, 21)).toBe(-1);
  expect(solve(10, 20)).toBe(-1);
});

test('n=3, k=5', () => {
  expect(solve(3, 5)).toStrictEqual([2, 3, 1]);
});
