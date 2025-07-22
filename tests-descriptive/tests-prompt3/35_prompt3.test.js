import { solve } from '../../solutions-descriptive/35.js';

test('Basic test: n=5, k=2, simple increasing', () => {
  expect(solve(5, 2, [1, 2, 3, 4, 5])).toBe(9);
});

test('Single optimal, n=4, k=2, pick highest two', () => {
  expect(solve(4, 2, [10, 2, 3, 4])).toBe(14);
});

test('Descending values', () => {
  expect(solve(5, 2, [9, 8, 7, 6, 5])).toBe(24);
});

test('All equal values', () => {
  expect(solve(6, 2, [7, 7, 7, 7, 7, 7])).toBe(21);
});

test('Minimum plate size, n=2, k=1', () => {
  expect(solve(2, 1, [100, 200])).toBe(200);
});

test('All values 1', () => {
  expect(solve(5, 2, [1, 1, 1, 1, 1])).toBe(3);
});

test('n just above k', () => {
  expect(solve(5, 4, [1, 9, 2, 8, 3])).toBe(17);
});

test('High k (nearly n)', () => {
  expect(solve(10, 9, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29])).toBe(29);
});

test('Edge: n=3, k=2, non-trivial', () => {
  expect(solve(3, 2, [6, 8, 7])).toBe(8);
});

test('Edge: n=2, k=1, low', () => {
  expect(solve(2, 1, [1, 2])).toBe(2);
});

test('Larger n, k=1, only one plate can be chosen', () => {
  expect(solve(5, 1, [8, 7, 12, 6, 9])).toBe(12);
});

test('Second plate best skipped', () => {
  expect(solve(3, 2, [1, 100, 1])).toBe(100);
});

test('Large deliciousness values', () => {
  expect(solve(4, 2, [1000000000, 999999999, 1, 1])).toBe(1999999999);
});

test('Edge: max n (stress)', () => {
  const n = 2e5;
  const k = 2;
  let d = Array(n).fill(1e9);
  expect(solve(n, k, d)).toBe(((n + k) / (k + 1)) * 1e9);
});

test('Alternate big/small', () => {
  expect(solve(7, 3, [1, 100, 1, 100, 1, 100, 1])).toBe(201);
});