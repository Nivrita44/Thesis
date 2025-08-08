import { solve } from '../../solutions-descriptive/14.js'

test('example case', () => {
  expect(solve(3n, 2n, 5n, [0n, 2n, 3n])).toBe(6n);
});

test('single scarecrow case', () => {
  expect(solve(1n, 3n, 10n, [0n])).toBe(14n);
});

test('large values case', () => {
  expect(solve(4n, 100000n, 100000n, [0n, 25000n, 50000n, 75000n])).toBe(200000n);
});

test('minimum values case', () => {
  expect(solve(1n, 1n, 1n, [0n])).toBe(2n);
});

test('all scarecrows at start case', () => {
  expect(solve(5n, 2n, 10n, [0n, 0n, 0n, 0n, 0n])).toBe(16n);
});

test('scarecrows spread evenly case', () => {
  expect(solve(4n, 3n, 12n, [0n, 4n, 8n, 12n])).toBe(12n);
});

test('target equals k case', () => {
  expect(solve(2n, 5n, 5n, [0n, 2n])).toBe(6n);
});

test('single gap larger than k case', () => {
  expect(solve(3n, 2n, 8n, [0n, 1n, 7n])).toBe(10n);
});