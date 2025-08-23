// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/24.js';

test('basic test case 1', () => {
  expect(solve(1, 1, 1, 1)).toBe(1);
});

test('small costs, small health, k=2', () => {
  expect(solve(2, 3, 2, 2)).toBe(3);
});

test('only attacking is cheapest', () => {
  expect(solve(10, 1, 5, 1)).toBe(5);
});

test('upgrading all the way once is best', () => {
  expect(solve(1, 10, 6, 6)).toBe(7);
});

test('no increases possible, zero damage', () => {
  expect(solve(5, 10, 10, 0)).toBe(Number.MAX_SAFE_INTEGER);
});

test('large health, prefer upgrades', () => {
  expect(solve(1, 10000000, 100, 100)).toBe(101);
});

test('medium health, mid k', () => {
  expect(solve(10, 10, 50, 5)).toBe(60);
});

test('one upgrade allowed', () => {
  expect(solve(2, 3, 5, 1)).toBe(7);
});

test('cost of attacking is massive, must upgrade', () => {
  expect(solve(3, 10000000, 10, 5)).toBe(18);
});

test('attacking is always cheap', () => {
  expect(solve(100, 1, 100000, 100000)).toBe(100000);
});

test('x and y are both high, z = 1', () => {
  expect(solve(100000, 100000, 1, 1000000)).toBe(100000);
});

test('huge k, huge z, low costs', () => {
  expect(solve(1, 1, 100000000, 100000000)).toBe(100000001);
});

test('k = 1', () => {
  expect(solve(5, 6, 20, 1)).toBe(26);
});

test('x high, y low, k large, should upgrade as much as possible', () => {
  expect(solve(1000, 1, 5000, 1000)).toBe(6000);
});

test('z small, x & y varied', () => {
  expect(solve(3, 4, 2, 2)).toBe(4);
});

test('min and max input values', () => {
  expect(solve(1, 1, 1, 1)).toBe(1);
  expect(solve(100000000, 100000000, 100000000, 100000000)).toBe(200000000);
});
