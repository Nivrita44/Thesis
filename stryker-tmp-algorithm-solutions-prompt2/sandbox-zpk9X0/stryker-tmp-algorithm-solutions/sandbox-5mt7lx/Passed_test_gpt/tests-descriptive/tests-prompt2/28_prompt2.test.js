// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/28.js';

test('x and y are equal and small', () => {
  expect(solve(3n, 3n)).toBe(0n);
});

test('x is less than y, simple case', () => {
  expect(solve(0n, 1n)).toBe(2n);
});

test('x is greater than y, simple case', () => {
  expect(solve(6n, 2n)).toBe(6n);
});

test('both x and y are zero', () => {
  expect(solve(0n, 0n)).toBe(0n);
});

test('mid-sized numbers', () => {
  expect(solve(13n, 37n)).toBe(26n);
});

test('large numbers within 53 bits', () => {
  expect(solve(4238659325782394n, 12983091057341925n)).toBe(32764n);
});