import { solve } from '../../solutions-algorithm/6.js';

test('test with strictly increasing array', () => {
  expect(solve(5, [1, 2, 3, 4, 5])).toBe(6);
});

test('test with strictly decreasing array', () => {
  expect(solve(5, [5, 4, 3, 2, 1])).toBe(6);
});

test('test with all equal values', () => {
  expect(solve(6, [7, 7, 7, 7, 7, 7])).toBe(0);
});

test('test with mixed values', () => {
  expect(solve(6, [2, 5, 1, 8, 3, 6])).toBe(12);
});

test('test with minimum allowed n', () => {
  expect(solve(4, [1, 10, 2, 9])).toBe(16);
});

test('test with two maximum values at the ends', () => {
  expect(solve(5, [100, 1, 1, 1, 100])).toBe(198);
});

test('test with large values', () => {
  expect(solve(5, [1000000000, 1, 2, 3, 1000000000])).toBe(1999999998);
});

test('test with alternating high and low', () => {
  expect(solve(6, [1, 100, 1, 100, 1, 100])).toBe(198);
});

test('test with minimum and maximum next to each other', () => {
  expect(solve(5, [1, 100, 1, 100, 1])).toBe(99);
});