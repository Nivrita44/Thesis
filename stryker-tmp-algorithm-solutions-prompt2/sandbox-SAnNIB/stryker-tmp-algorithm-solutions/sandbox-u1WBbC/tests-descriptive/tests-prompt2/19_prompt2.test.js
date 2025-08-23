// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/19.js';

test('solve returns GCD for positive integers', () => {
  expect(solve(12, 18)).toBe(6);
  expect(solve(100, 10)).toBe(10);
  expect(solve(81, 27)).toBe(27);
});

test('solve returns GCD when a equals b', () => {
  expect(solve(7, 7)).toBe(7);
  expect(solve(42, 42)).toBe(42);
});

test('solve returns b when a is 0', () => {
  expect(solve(0, 5)).toBe(5);
  expect(solve(0, 100)).toBe(100);
});

test('solve returns a when b is 0', () => {
  expect(solve(13, 0)).toBe(13);
  expect(solve(99, 0)).toBe(99);
});

test('solve works for coprime pairs', () => {
  expect(solve(35, 64)).toBe(1);
  expect(solve(17, 31)).toBe(1);
});

test('solve works when first parameter is smaller than second', () => {
  expect(solve(4, 10)).toBe(2);
  expect(solve(9, 12)).toBe(3);
});

test('solve works for swapped parameters (commutativity)', () => {
  expect(solve(10, 4)).toBe(2);
  expect(solve(12, 9)).toBe(3);
});

test('solve works for a or b being 1', () => {
  expect(solve(1, 999)).toBe(1);
  expect(solve(1000, 1)).toBe(1);
});

test('solve works when both are zero', () => {
  expect(solve(0, 0)).toBe(0);
});