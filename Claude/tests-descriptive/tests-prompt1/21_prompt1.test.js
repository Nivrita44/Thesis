import { solve } from '../../../solutions-descriptive/21.js'

test('example case with 4 cities', () => {
  expect(solve(4n, [2n, 4n, 6n, 8n])).toBe(4n);
});

test('minimal case with 2 cities', () => {
  expect(solve(2n, [2n, 4n])).toBe(1n);
});

test('large case with many cities', () => {
  expect(solve(6n, [2n, 4n, 6n, 8n, 10n, 12n])).toBe(32n);
});

test('prime numbers case with few paths', () => {
  expect(solve(5n, [2n, 3n, 5n, 7n, 11n])).toBe(0n);
});

test('all numbers coprime', () => {
  expect(solve(4n, [2n, 9n, 25n, 49n])).toBe(0n);
});

test('mixed GCD relationships', () => {
  expect(solve(5n, [6n, 8n, 12n, 15n, 18n])).toBe(8n);
});

test('consecutive multiples', () => {
  expect(solve(4n, [3n, 6n, 9n, 12n])).toBe(4n);
});

test('powers of same number', () => {
  expect(solve(5n, [2n, 4n, 8n, 16n, 32n])).toBe(16n);
});
