import { solve } from '../../../solutions-algorithm/36.js'

test('example with n=3 returns valid prime m where sum is not prime', () => {
  expect(solve(3n)).toBe(2n);
});

test('smallest possible input n=2', () => {
  expect(solve(2n)).toBe(3n);
});

test('large prime input near upper bound', () => {
  expect(solve(99991n)).toBe(2n);
});

test('common small prime n=5', () => {
  expect(solve(5n)).toBe(2n);
});

test('prime n=11 returns prime where sum is composite', () => {
  expect(solve(11n)).toBe(2n);
});

test('medium prime n=47', () => {
  expect(solve(47n)).toBe(2n);
});

test('larger prime n=997', () => {
  expect(solve(997n)).toBe(2n);
});

test('prime near 1000: n=1009', () => {
  expect(solve(1009n)).toBe(2n);
});