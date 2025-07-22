import { solve } from '../../solutions-descriptive/28.js';

test('x and y are equal (simple case)', () => {
  expect(solve(5n, 5n)).toBe(0n);
  expect(solve(123456789123456789n, 123456789123456789n)).toBe(0n);
  expect(solve(0n, 0n)).toBe(0n);
});

test('one value is zero', () => {
  expect(solve(0n, 1n)).toBe(1n);
  expect(solve(1n, 0n)).toBe(1n);
  expect(solve(0n, 7n)).toBe(1n);
  expect(solve(15n, 0n)).toBe(1n);
});

test('simple small numbers', () => {
  expect(solve(4n, 2n)).toBe(2n);
  expect(solve(8n, 1n)).toBe(7n);
  expect(solve(16n, 2n)).toBe(6n);
  expect(solve(5n, 1n)).toBe(3n);
});

test('small difference', () => {
  expect(solve(6n, 7n)).toBe(1n);
  expect(solve(15n, 14n)).toBe(1n);
});

test('large difference, large numbers', () => {
  expect(solve(100000000000000000n, 1n)).toBe(17n);
  expect(solve(99999999999999999n, 8n)).toBe(16n);
});

test('power of two numbers', () => {
  expect(solve(16n, 8n)).toBe(2n);
  expect(solve(32n, 8n)).toBe(6n);
});

test('x is much greater than y', () => {
  expect(solve(100000000000000000n, 2n)).toBe(17n);
  expect(solve(99999999999999999n, 7n)).toBe(16n);
});

test('y is much greater than x', () => {
  expect(solve(1n, 100000000000000000n)).toBe(17n);
  expect(solve(7n, 99999999999999999n)).toBe(16n);
});

test('both numbers are very large and equal', () => {
  expect(solve(100000000000000000n, 100000000000000000n)).toBe(0n);
});

test('edge cases on MAX_BITS', () => {
  expect(solve(1n << 60n, 0n)).toBe(1n);
  expect(solve(0n, 1n << 60n)).toBe(1n);
  expect(solve(1n << 59n, 1n)).toBe(60n);
});

test('Just 1 apart', () => {
  expect(solve(11n, 10n)).toBe(1n);
  expect(solve(1024n, 1023n)).toBe(1n);
});

test('Case where greedy is not enough', () => {
  expect(solve(100n, 33n)).toBe(5n);
  expect(solve(10000n, 125n)).toBe(7n);
});