// @ts-nocheck
import { solve } from '../../solutions-descriptive/29.js';

test('Typical case with increasing values', () => {
  expect(solve(4, 5, [8, 4, 2, 1])).toBe(true);
});

test('All values are the same', () => {
  expect(solve(3, 2, [4, 4, 4])).toBe(true);
  expect(solve(3, 10, [4, 4, 4])).toBe(false);
});

test('Decreasing sequence with high k', () => {
  expect(solve(5, 17, [32, 16, 8, 4, 2])).toBe(true);
  expect(solve(5, 18, [32, 16, 8, 4, 2])).toBe(false);
});

test('Edge case: minimal input', () => {
  expect(solve(1, 0, [1])).toBe(true);
  expect(solve(1, 2, [1])).toBe(false);
});

test('Mixed even and odd values', () => {
  expect(solve(3, 3, [6, 9, 2])).toBe(true);
  expect(solve(3, 10, [6, 9, 2])).toBe(false);
});

test('Single large value', () => {
  expect(solve(1, 20, [1048576])).toBe(true);
  expect(solve(1, 30, [1048576])).toBe(false);
});

test('Odd numbers only', () => {
  expect(solve(3, 1, [7, 5, 3])).toBe(true);
  expect(solve(3, 6, [7, 5, 3])).toBe(false);
});

test('Even and odd, non-monotonic', () => {
  expect(solve(5, 6, [2, 5, 8, 3, 6])).toBe(true);
  expect(solve(5, 12, [2, 5, 8, 3, 6])).toBe(false);
});

test('Zero in the values', () => {
  expect(solve(3, 1, [4, 0, 2])).toBe(true);
  expect(solve(3, 3, [4, 0, 2])).toBe(false);
});