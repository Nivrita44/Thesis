// @ts-nocheck
import { solve } from '../../solutions-descriptive/2.js';

test('Common scenario 1: n=9, k=3n', () => {
  expect(solve(9, 3n)).toBe(10);
});

test('Common scenario 2: n=19, k=84n', () => {
  expect(solve(19, 84n)).toBe(2006);
});

test('Large n and large k (k >> n): n=100000, k=1000000007n', () => {
  expect(solve(100000, 1000000007n)).toBe(584502117);
});

test('n smaller than k but both very large: n=777, k=1000000000000000000n', () => {
  expect(solve(777, 1000000000000000000n)).toBe(46058362);
});

test('Edge case: n=1, k=1n', () => {
  expect(solve(1, 1n)).toBe(1);
});

test('Edge case: n=1, k=1000000007n (k much greater than n)', () => {
  expect(solve(1, 1000000007n)).toBe(0);
});

test('Edge scenario: n=17, k=30n', () => {
  expect(solve(17, 30n)).toBe(775);
});

test('Performance: n=9982, k=44353n', () => {
  expect(solve(9982, 44353n)).toBe(120792461);
});

test('Boundary case: n=300000, k=300000n', () => {
  expect(typeof solve(300000, 300000n)).toBe('number');
});

test('Invalid input: n=0, k=5n', () => {
  expect(solve(0, 5n)).toBe(0);
});