// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/28.js';

test('x=0n, y=1n (description case)', () => {
  expect(solve(0n, 1n)).toBe(2n);
});

test('x=6n, y=2n', () => {
  expect(solve(6n, 2n)).toBe(6n);
});

test('x=3n, y=3n (already equal)', () => {
  expect(solve(3n, 3n)).toBe(0n);
});

test('x=13n, y=37n', () => {
  expect(solve(13n, 37n)).toBe(26n);
});

test('x=4238659325782394n, y=12983091057341925n (large random values)', () => {
  expect(solve(4238659325782394n, 12983091057341925n)).toBe(32764n);
});

test('x=0n, y=0n (both zero)', () => {
  expect(solve(0n, 0n)).toBe(0n);
});

test('x=1n, y=2n (small consecutive numbers)', () => {
  expect(solve(1n, 2n)).toBe(2n);
});