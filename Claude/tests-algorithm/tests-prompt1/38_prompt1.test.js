import { solve } from '../../solutions-algorithm/38.js'

test('example case where a=3, b=5 should return 1', () => {
  expect(solve(3n, 5n)).toBe(1n);
});

test('minimal case where a=b=1', () => {
  expect(solve(1n, 1n)).toBe(1n);
});

test('consecutive numbers a=10, b=11 should return 1', () => {
  expect(solve(10n, 11n)).toBe(1n);
});

test('same numbers a=12, b=12 should return 12', () => {
  expect(solve(12n, 12n)).toBe(12n);
});

test('large gap case a=100, b=200 should return 1', () => {
  expect(solve(100n, 200n)).toBe(1n);
});

test('numbers with common factors a=24, b=28 should return 4', () => {
  expect(solve(24n, 28n)).toBe(4n);
});

test('large numbers case', () => {
  expect(solve(1000000000n, 1000000100n)).toBe(1n);
});

test('power of 2 range', () => {
  expect(solve(16n, 32n)).toBe(1n);
});