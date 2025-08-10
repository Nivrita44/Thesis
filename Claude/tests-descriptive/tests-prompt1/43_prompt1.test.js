import { solve } from '../../../solutions-descriptive/43.js'

test('example case from description', () => {
  expect(solve(4, 2, [1, 2, 3, 4], [[1, 2], [2, 3], [3, 4]])).toBe(5n);
});

test('minimal case with two camps', () => {
  expect(solve(2, 1, [10, 10], [[1, 2]])).toBe(10n);
});

test('linear chain of camps', () => {
  expect(solve(5, 3, [5, 5, 5, 5, 5], [[1, 2], [2, 3], [3, 4], [4, 5]])).toBe(10n);
});

test('star configuration with central camp', () => {
  expect(solve(4, 1, [1, 1, 1, 1], [[1, 2], [1, 3], [1, 4]])).toBe(1n);
});

test('negative gold values', () => {
  expect(solve(3, 2, [-1, -2, -3], [[1, 2], [2, 3]])).toBe(-1n);
});

test('large values within constraints', () => {
  expect(solve(3, 1000000000, [999999999, 999999999, 999999999], [[1, 2], [2, 3]])).toBe(999999999n);
});

test('alternating high-low values', () => {
  expect(solve(5, 5, [10, 2, 10, 2, 10], [[1, 2], [2, 3], [3, 4], [4, 5]])).toBe(20n);
});

test('all zero values', () => {
  expect(solve(4, 1, [0, 0, 0, 0], [[1, 2], [2, 3], [3, 4]])).toBe(0n);
});

test('mixed positive and negative values', () => {
  expect(solve(4, 3, [5, -2, 7, -4], [[1, 2], [2, 3], [3, 4]])).toBe(8n);
});
