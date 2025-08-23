// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/49.js';

test('returns YES for (1, 1, 0)', () => {
  expect(solve(1, 1, 0)).toBe('YES');
});

test('returns NO for (1, 5, 5)', () => {
  expect(solve(1, 5, 5)).toBe('NO');
});

test('returns YES for (2, 2, 3)', () => {
  expect(solve(2, 2, 3)).toBe('YES');
});

test('returns NO for (2, 2, 4)', () => {
  expect(solve(2, 2, 4)).toBe('NO');
});

test('returns YES for (1, 4, 3)', () => {
  expect(solve(1, 4, 3)).toBe('YES');
});

test('returns NO for (100, 100, 10000)', () => {
  expect(solve(100, 100, 10000)).toBe('NO');
});

test('returns YES for (3, 3, 8)', () => {
  expect(solve(3, 3, 8)).toBe('YES');
});

test('returns NO for (3, 3, 7)', () => {
  expect(solve(3, 3, 7)).toBe('NO');
});

test('returns YES for (2, 5, 9)', () => {
  expect(solve(2, 5, 9)).toBe('YES');
});

test('returns NO for (2, 5, 10)', () => {
  expect(solve(2, 5, 10)).toBe('NO');
});

test('returns YES for (5, 1, 4)', () => {
  expect(solve(5, 1, 4)).toBe('YES');
});

test('returns YES for (1, 1000, 999)', () => {
  expect(solve(1, 1000, 999)).toBe('YES');
});

test('returns NO for (1, 1000, 1000)', () => {
  expect(solve(1, 1000, 1000)).toBe('NO');
});

test('returns NO for (0, 0, 0)', () => {
  expect(solve(0, 0, 0)).toBe('NO');
});

test('returns NO for negative numbers (-1, 1, 0)', () => {
  expect(solve(-1, 1, 0)).toBe('NO');
});

test('returns YES for large input (100000, 1, 99999)', () => {
  expect(solve(100000, 1, 99999)).toBe('YES');
});
