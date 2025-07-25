import { solve } from '../../solutions-algorithm/23.js';

test('example 1', () => {
  expect(solve(7, 5, 123)).toBe(120);
});

test('example 2', () => {
  expect(solve(5, 0, 4)).toBe(0);
});

test('example 3', () => {
  expect(solve(10, 5, 15)).toBe(15);
});

test('y equals 0, small n', () => {
  expect(solve(4, 0, 3)).toBe(0);
});

test('n equals y', () => {
  expect(solve(8, 3, 3)).toBe(3);
});

test('large x and n, y is small', () => {
  expect(solve(1000000000, 3, 1000000000)).toBe(1000000003 - 1000000000);
});

test('x just above n', () => {
  expect(solve(100, 7, 20)).toBe(7);
});

test('multiple possible k, pick max', () => {
  expect(solve(6, 4, 20)).toBe(16);
});

test('y is 0', () => {
  expect(solve(13, 0, 100)).toBe(91);
});

test('y almost x, n is barely enough', () => {
  expect(solve(9, 8, 17)).toBe(17);
});

test('n is much bigger than x and y', () => {
  expect(solve(3, 1, 100)).toBe(100 - (100 % 3) + 1 - ((100 - (100 % 3) + 1 > 100) ? 3 : 0));
});

test('single possible k', () => {
  expect(solve(2, 1, 1)).toBe(1);
});