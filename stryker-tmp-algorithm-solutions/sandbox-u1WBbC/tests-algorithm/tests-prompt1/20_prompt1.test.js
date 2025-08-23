// @ts-nocheck
import { solve } from '../../../solutions-algorithm/20.js';

test('single drink 100%', () => {
  expect(solve(1, [100])).toBe(100);
});

test('single drink 0%', () => {
  expect(solve(1, [0])).toBe(0);
});

test('two drinks 50% and 100%', () => {
  expect(solve(2, [50, 100])).toBe(75);
});

test('two drinks 0% and 0%', () => {
  expect(solve(2, [0, 0])).toBe(0);
});

test('three drinks 50%, 50%, 50%', () => {
  expect(solve(3, [50, 50, 50])).toBe(50);
});

test('three drinks 15%, 25%, 35%', () => {
  expect(solve(3, [15, 25, 35])).toBeCloseTo(25, 5);
});

test('four drinks 0%, 25%, 50%, 75%', () => {
  expect(solve(4, [0, 25, 50, 75])).toBeCloseTo(37.5, 5);
});

test('all drinks 0%', () => {
  expect(solve(5, [0, 0, 0, 0, 0])).toBe(0);
});

test('all drinks 100%', () => {
  expect(solve(5, [100, 100, 100, 100, 100])).toBe(100);
});

test('random values', () => {
  expect(solve(5, [5, 10, 15, 20, 25])).toBeCloseTo(15, 5);
});

test('minimum n, minimum pi', () => {
  expect(solve(1, [0])).toBe(0);
});

test('minimum n, maximum pi', () => {
  expect(solve(1, [100])).toBe(100);
});

test('maximum n, all minimum pi', () => {
  expect(solve(100, Array(100).fill(0))).toBe(0);
});

test('maximum n, all maximum pi', () => {
  expect(solve(100, Array(100).fill(100))).toBe(100);
});

test('alternating 0 and 100', () => {
  expect(solve(4, [0, 100, 0, 100])).toBeCloseTo(50, 5);
});

test('precise error check', () => {
  expect(solve(3, [33, 33, 34])).toBeCloseTo(33.3333, 4);
});
