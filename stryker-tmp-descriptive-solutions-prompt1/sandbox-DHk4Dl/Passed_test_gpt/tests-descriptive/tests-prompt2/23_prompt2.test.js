import { solve } from '../../../solutions-descriptive/23.js';

test('simple case, all zeros', () => {
  expect(solve(0n, 0n, 0n, 0n)).toBe(0n);
});

test('single value range, zeros', () => {
  expect(solve(0n, 0n, 1n, 2n)).toBe(0n);
});

test('small range, small bitIndex, xorConstant zero', () => {
  expect(solve(1n, 3n, 0n, 0n)).toBe(1n ^ 2n ^ 3n);
});

test('small range, nonzero xorConstant', () => {
  expect(typeof solve(1n, 3n, 1n, 2n)).toBe('bigint');
});

test('full byte, bitIndex 0, xorConstant 0', () => {
  let expected = 0n;
  for (let i = 0n; i <= 7n; i++) expected ^= i;
  expect(solve(0n, 7n, 0n, 0n)).toBe(expected);
});

test('large values', () => {
  let val = solve(1000000n, 1000010n, 3n, 5n);
  expect(typeof val).toBe('bigint');
});

test('xorConstant larger than left/right', () => {
  expect(typeof solve(1n, 2n, 1n, 10n)).toBe('bigint');
});

test('bitIndex shifting full limb', () => {
  let val = solve(12n, 20n, 4n, 3n);
  expect(typeof val).toBe('bigint');
});

test('edge: negative xorConstant', () => {
  let val = solve(1n, 10n, 2n, -3n);
  expect(typeof val).toBe('bigint');
});