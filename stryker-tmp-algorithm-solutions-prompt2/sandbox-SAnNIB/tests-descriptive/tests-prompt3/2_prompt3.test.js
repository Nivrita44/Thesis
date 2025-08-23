// @ts-nocheck
import { solve } from '../../solutions-descriptive/2.js';

test('Example from description: n=9, k=3n', () => {
  expect(solve(9, 3n)).toBe(10);
});

test('Sample test: n=19, k=84n', () => {
  expect(solve(19, 84n)).toBe(2006);
});

test('Sample test: n=9982, k=44353n', () => {
  expect(solve(9982, 44353n)).toBe(120792461);
});

test('Large k: n=100000, k=1000000007n', () => {
  expect(solve(100000, 1000000007n)).toBe(584502117);
});

test('Small values: n=1, k=2n', () => {
  expect(solve(1, 2n)).toBe(1);
});

test('Edge case: n=2, k=2n', () => {
  expect(solve(2, 2n)).toBe(2);
});

test('Edge case: n=3, k=2n', () => {
  expect(solve(3, 2n)).toBe(3);
});

test('Upper bound n: n=300000, k=300000n', () => {
  expect(typeof solve(300000, 300000n)).toBe('number');
});

test('Huge k: n=777, k=1000000000000000000n', () => {
  expect(solve(777, 1000000000000000000n)).toBe(46058362);
});

test('Random values: n=17, k=30n', () => {
  expect(solve(17, 30n)).toBe(775);
});
