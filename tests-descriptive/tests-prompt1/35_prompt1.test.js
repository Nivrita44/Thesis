import { solve } from '../../solutions-descriptive/35.js';

test('example 1', () => {
  expect(solve(5, 2, [1, 2, 3, 4, 5])).toBe(12);
});

test('example 2', () => {
  expect(solve(3, 2, [1, 2, 3])).toBe(5);
});

test('all plates same deliciousness', () => {
  expect(solve(4, 2, [7, 7, 7, 7])).toBe(14);
});

test('large k', () => {
  expect(solve(6, 5, [9, 10, 3, 8, 15, 1])).toBe(25);
});

test('minimum input values', () => {
  expect(solve(2, 1, [1, 1])).toBe(1);
});

test('taking every other plate', () => {
  expect(solve(6, 2, [10, 1, 9, 2, 8, 3])).toBe(27);
});

test('maximum deliciousness only later plates', () => {
  expect(solve(5, 2, [1, 1, 1, 10, 10])).toBe(20);
});

test('plate count just one less than minutes', () => {
  expect(solve(7, 6, [3, 5, 5, 13, 8, 10, 2])).toBe(13);
});

test('pick non-adjacent large values', () => {
  expect(solve(5, 3, [10, 2, 7, 8, 11])).toBe(18);
});

test('max constraints', () => {
  const n = 200000;
  const k = 100000;
  const d = Array.from({length: n}, (_, i) => i + 1);
  const expected = (n - k + 1 + n) * k / 2; // pick the k largest, sum
  expect(solve(n, k, d)).toBe(expected);
});