// @ts-nocheck
import { solve } from '../../../solutions-descriptive/26.js';

test('n = 1, s = "0"', () => {
  expect(solve(1, "0")).toBe(0);
});

test('n = 1, s = "1"', () => {
  expect(solve(1, "1")).toBe(1);
});

test('All zero string', () => {
  expect(solve(5, "00000")).toBe(10);
});

test('All one string', () => {
  expect(solve(4, "1111")).toBe(1);
});

test('Long string, all zeros', () => {
  expect(solve(6, "000000")).toBe(15);
});

test('Long string, all ones', () => {
  expect(solve(6, "111111")).toBe(1);
});

test('Edge: n = 2, both zeros', () => {
  expect(solve(2, "00")).toBe(1);
});

test('Edge: n = 2, one 0, one 1', () => {
  expect(solve(2, "01")).toBe(2);
});