import { solve } from '../../../solutions-algorithm/39.js';

test('returns NO for n = 1', () => {
  expect(solve(1)).toBe('NO');
});

test('returns NO for n = 2', () => {
  expect(solve(2)).toBe('NO');
});

test('returns YES for n = 3', () => {
  expect(solve(3)).toBe('YES');
});

test('returns NO for n = 4', () => {
  expect(solve(4)).toBe('NO');
});

test('returns YES for n = 5', () => {
  expect(solve(5)).toBe('YES');
});

test('returns YES for a large odd n (998244353)', () => {
  expect(solve(998244353)).toBe('YES');
});

test('returns NO for a large power of two (1099511627776)', () => {
  expect(solve(1099511627776)).toBe('NO');
});

test('returns YES for largest odd less than 2^32', () => {
  expect(solve(4294967295)).toBe('YES');
});


test('returns YES for odd n = 7', () => {
  expect(solve(7)).toBe('YES');
});

test('returns NO for n = 16 (power of two)', () => {
  expect(solve(16)).toBe('NO');
});

test('returns YES for n = 15 (odd and not 1)', () => {
  expect(solve(15)).toBe('YES');
});

test('returns NO for n = 8 (power of two)', () => {
  expect(solve(8)).toBe('NO');
});

test('returns YES for n = 9 (odd and not 1)', () => {
  expect(solve(9)).toBe('YES');
});
