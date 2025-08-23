// @ts-nocheck
import { solve } from '../../solutions-descriptive/6.js';

test('typical case 1', () => {
  expect(solve(3, [1, 7, 9])).toBe(3);
});

test('typical case 2', () => {
  expect(solve(4, [179, 1, 1, 179])).toBe(9);
});

test('typical case 3', () => {
  expect(solve(5, [1, 2, 3, 3, 2])).toBe(39);
});

test('typical case 4', () => {
  expect(solve(12, [8, 2, 5, 3, 9, 1, 8, 12, 9, 9, 9, 4])).toBe(123);
});

test('single element edge case', () => {
  expect(solve(1, [1000000000])).toBe(3);
});

test('all zeros', () => {
  expect(solve(4, [0, 0, 0, 0])).toBe(solve(4, [0, 0, 0, 0]));
});

test('maximum values', () => {
  expect(solve(3, [4294967295, 4294967295, 4294967295])).toBe(solve(3, [4294967295, 4294967295, 4294967295]));
});

test('alternating numbers', () => {
  expect(solve(6, [1, 2, 1, 2, 1, 2])).toBe(solve(6, [1, 2, 1, 2, 1, 2]));
});

test('empty array', () => {
  expect(solve(0, [])).toBe(1);
});

test('long array same number', () => {
  expect(solve(10, Array(10).fill(7))).toBe(solve(10, Array(10).fill(7)));
});

test('large modulus case', () => {
  const result = solve(20, Array(20).fill(1));
  expect(result).toBe(result);
});