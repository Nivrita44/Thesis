// @ts-nocheck
import { solve } from '../../../solutions-descriptive/29.js';

test('Single element, k = n = 1, trivial case', () => {
  expect(solve(1, 1, [1])).toBe(true);
});

test('Two distinct elements, k = n', () => {
  expect(solve(2, 2, [2, 3])).toBe(true);
});

test('Two distinct elements, k much larger than n', () => {
  expect(solve(2, 5, [2, 3])).toBe(true);
});

test('Impossible case, sum of values too big for k', () => {
  expect(solve(2, 10, [2, 4])).toBe(false);
});

test('Three distinct elements, small n, large k', () => {
  expect(solve(3, 5, [1, 2, 3])).toBe(true);
});

test('Larger numbers, possible', () => {
  expect(solve(2, 2, [4, 8])).toBe(true);
});

test('Large n=5, possible', () => {
  expect(solve(5, 10, [2, 3, 5, 8, 13])).toBe(true);
});

test('Edge case, values are powers of 2', () => {
  expect(solve(3, 6, [2, 4, 8])).toBe(true);
});

test('Edge case, k just enough', () => {
  expect(solve(1, 10, [1024])).toBe(true);
});

test('Values are all odd, n > 1', () => {
  expect(solve(3, 3, [1, 3, 5])).toBe(true);
});

test('Impossible for k less than operations needed', () => {
  expect(solve(3, 2, [2, 4, 8])).toBe(false);
});

test('Large n and k, test upper bound (simple)', () => {
  const arr = Array.from({length: 1e5}, (_, i) => i + 1);
  expect(solve(1e5, 1e5, arr)).toBe(true);
});

test('Two big elements, possible', () => {
  expect(solve(2, 3, [1e9, 2e9])).toBe(true);
});

test('Trivial NO, k too large for this array', () => {
  expect(solve(2, 100, [1, 1e9])).toBe(false);
});

test('n equals k, simple distinct sequence', () => {
  expect(solve(4, 4, [3, 7, 15, 31])).toBe(true);
});

test('Decreasing order', () => {
  expect(solve(3, 5, [8, 4, 2])).toBe(true);
});

test('Impossible for n = 1, k impossible for that value', () => {
  expect(solve(1, 1000, [540])).toBe(false);
});

test('Possible with 0 in prefix calculation', () => {
  expect(solve(4, 8, [1, 2, 2, 4])).toBe(true);
});

test('Long sequence, k barely satisfied', () => {
  expect(solve(3, 4, [6, 12, 24])).toBe(true);
});