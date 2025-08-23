// @ts-nocheck
import { solve } from '../../../solutions-algorithm/49.js';

test('minimum grid, zero cost', () => {
  expect(solve(1, 1, 0)).toBe('YES');
});

test('minimum grid, nonzero cost', () => {
  expect(solve(1, 1, 1)).toBe('NO');
});

test('single row, correct cost', () => {
  expect(solve(1, 5, 4)).toBe('YES');
});

test('single row, exceeding cost', () => {
  expect(solve(1, 5, 5)).toBe('NO');
});

test('single column, correct cost', () => {
  expect(solve(5, 1, 4)).toBe('YES');
});

test('single column, too small', () => {
  expect(solve(5, 1, 3)).toBe('NO');
});

test('square (2x2), correct cost', () => {
  expect(solve(2, 2, 3)).toBe('YES');
});

test('square (2x2), wrong cost', () => {
  expect(solve(2, 2, 4)).toBe('NO');
});

test('rectangular 3x4, correct cost', () => {
  expect(solve(3, 4, 11)).toBe('YES');
});

test('rectangular 4x3, correct cost', () => {
  expect(solve(4, 3, 11)).toBe('YES');
});

test('rectangular, one less than needed', () => {
  expect(solve(4, 3, 10)).toBe('NO');
});

test('large grid, correct cost', () => {
  expect(solve(100, 1, 99)).toBe('YES');
});

test('large grid, correct cost', () => {
  expect(solve(1, 100, 99)).toBe('YES');
});

test('large square not matching', () => {
  expect(solve(100, 100, 10000)).toBe('NO');
});

test('large square, correct k', () => {
  expect(solve(100, 100, 9999)).toBe('YES');
});

test('typical case', () => {
  expect(solve(3, 7, 20)).toBe('YES');
});

test('off-by-one error', () => {
  expect(solve(3, 7, 21)).toBe('NO');
});

test('off-by-one error low', () => {
  expect(solve(3, 7, 19)).toBe('NO');
});
