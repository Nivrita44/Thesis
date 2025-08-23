// @ts-nocheck
import { solve } from '../../../solutions-algorithm/39.js';

test('n=2 (smallest case)', () => {
  expect(solve(2)).toBe('NO');
});

test('n=3 (odd >1)', () => {
  expect(solve(3)).toBe('YES');
});

test('n=4 (power of 2)', () => {
  expect(solve(4)).toBe('NO');
});

test('n=5 (odd >1)', () => {
  expect(solve(5)).toBe('YES');
});

test('n=6 (even, but divisible by 3)', () => {
  expect(solve(6)).toBe('YES');
});

test('n=8 (2^3)', () => {
  expect(solve(8)).toBe('NO');
});

test('n=9 (odd >1)', () => {
  expect(solve(9)).toBe('YES');
});

test('n=15 (odd >1)', () => {
  expect(solve(15)).toBe('YES');
});

test('n=16 (2^4)', () => {
  expect(solve(16)).toBe('NO');
});

test('n=18 (even, divisible by 9)', () => {
  expect(solve(18)).toBe('YES');
});

test('n=27 (odd >1)', () => {
  expect(solve(27)).toBe('YES');
});

test('n=32 (2^5)', () => {
  expect(solve(32)).toBe('NO');
});

test('n=998244353 (large odd)', () => {
  expect(solve(998244353)).toBe('YES');
});

test('n=1099511627776 (large power of 2, 2^40)', () => {
  expect(solve(1099511627776)).toBe('NO');
});

test('n=100000000000000 (even, not power of 2)', () => {
  expect(solve(100000000000000)).toBe('YES');
});

test('n=100000000000001 (large odd)', () => {
  expect(solve(100000000000001)).toBe('YES');
});

test('n=1 (edge, but restricted by constraints to n>=2)', () => {
  expect(solve(1)).toBe('NO');
});

test('n=1024 (2^10)', () => {
  expect(solve(1024)).toBe('NO');
});

test('n=1025 (even, divisible by 5, has odd divisor)', () => {
  expect(solve(1025)).toBe('YES');
});


//all pass
