import { solve } from '../../solutions-algorithm/23.js'

test('example case', () => {
  expect(solve(7n, 5n, 12345n)).toBe(12339n);
});

test('minimal possible values', () => {
  expect(solve(2n, 0n, 2n)).toBe(2n);
});

test('y equals x-1', () => {
  expect(solve(5n, 4n, 100n)).toBe(99n);
});

test('y equals 0', () => {
  expect(solve(4n, 0n, 16n)).toBe(16n);
});

test('n equals y', () => {
  expect(solve(10n, 5n, 5n)).toBe(5n);
});

test('large numbers', () => {
  expect(solve(1000000000n, 999999999n, 1000000000n)).toBe(999999999n);
});

test('n much larger than x', () => {
  expect(solve(3n, 2n, 1000n)).toBe(998n);
});

test('x equals n', () => {
  expect(solve(100n, 50n, 100n)).toBe(50n);
});