import { solve } from '../../solutions-descriptive/21.js';

test('basic case with one valid path', () => {
  expect(solve(2, [2, 4])).toBe(1);
});

test('no valid path', () => {
  expect(solve(2, [2, 3])).toBe(0);
});

test('all ai the same', () => {
  expect(solve(4, [6, 6, 6, 6])).toBe(4);
});

test('multiple cities with gcd > 1 between some', () => {
  expect(solve(4, [2, 4, 5, 10])).toBe(2);
});

test('large n, all pairwise coprime', () => {
  expect(solve(5, [2, 3, 5, 7, 11])).toBe(0);
});

test('medium n, mixture of coprime and not coprime', () => {
  expect(solve(5, [6, 10, 15, 2, 30])).toBe(3);
});

test('two cities, same value', () => {
  expect(solve(2, [9, 9])).toBe(1);
});

test('three cities, middle with no gcd', () => {
  expect(solve(3, [2, 3, 4])).toBe(1);
});

test('three cities, all chained by gcd', () => {
  expect(solve(3, [8, 4, 2])).toBe(2);
});

test('modulo test, very large path count', () => {
  const arr = Array(10).fill(12);
  expect(solve(10, arr)).toBe(256);
});