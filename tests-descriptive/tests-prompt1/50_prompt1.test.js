import { solve } from '../../solutions-descriptive/50.js';

test('single element, LCM present', () => {
  expect(solve(1, [1])).toBe(0);
});

test('two different elements, LCM absent', () => {
  expect(solve(2, [2, 3])).toBe(2);
});

test('two same elements', () => {
  expect(solve(2, [2, 2])).toBe(0);
});

test('three elements, LCM present', () => {
  expect(solve(3, [2, 3, 6])).toBe(1);
});

test('three elements, all coprime, LCM absent', () => {
  expect(solve(3, [2, 3, 5])).toBe(3);
});

test('array with repeated values', () => {
  expect(solve(4, [4, 8, 8, 2])).toBe(3);
});

test('array with LCM always present', () => {
  expect(solve(3, [2, 4, 8])).toBe(0);
});

test('array with one missing value', () => {
  expect(solve(4, [2, 5, 7, 11])).toBe(4);
});

test('large values, LCM absent', () => {
  expect(solve(3, [1000000000, 999999999, 999999998])).toBe(3);
});

test('subsequence with missing LCM', () => {
  expect(solve(5, [2, 4, 8, 16, 9])).toBe(2);
});