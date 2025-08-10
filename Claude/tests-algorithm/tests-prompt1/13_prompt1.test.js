import { solve } from '../../../solutions-algorithm/13.js'

test('example case n=4 should return 3 pairs', () => {
  expect(solve(4n)).toBe(3n);
});

test('minimum valid input n=2 should return 1 pair', () => {
  expect(solve(2n)).toBe(1n);
});

test('maximum valid input n=100 should return 99 pairs', () => {
  expect(solve(100n)).toBe(99n);
});

test('small input n=3 should return 2 pairs', () => {
  expect(solve(3n)).toBe(2n);
});

test('medium input n=10 should return 9 pairs', () => {
  expect(solve(10n)).toBe(9n);
});

test('typical input n=50 should return 49 pairs', () => {
  expect(solve(50n)).toBe(49n);
});

test('large input n=75 should return 74 pairs', () => {
  expect(solve(75n)).toBe(74n);
});

test('random input n=23 should return 22 pairs', () => {
  expect(solve(23n)).toBe(22n);
});