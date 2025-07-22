import { solve } from '../../solutions-descriptive/31.js';

test('solve with P = [1n, 2n], k = 1n', () => {
  expect(solve([1n, 2n], 1n)).toEqual([1n, 2n]);
});

test('solve with P = [1n, 2n], k = 2n', () => {
  expect(solve([1n, 2n], 2n)).toEqual([1n, 4n]);
});

test('solve with P = [1n, 2n, 3n], k = 1n', () => {
  expect(solve([1n, 2n, 3n], 1n)).toEqual([1n, 2n, 3n]);
});

test('solve with P = [1n, 2n, 3n], k = 0n', () => {
  expect(solve([1n, 2n, 3n], 0n)).toEqual([1n, 0n, 0n]);
});

test('solve with P = [2n, 0n, 1n], k = 2n', () => {
  expect(solve([2n, 0n, 1n], 2n)).toEqual([1n, 0n, 5n]);
});

test('solve with large k for wrap around modulo', () => {
  const P = [998244352n, 2n, 3n];
  expect(solve(P, 2n)).toEqual([
    1n,
    (2n * 998244352n * 2n) % 998244353n,
    (998244352n * 998244352n + 2n * 2n + 3n * 998244352n) % 998244353n,
  ]);
});

test('solve with all ones P, k = 3n', () => {
  expect(solve([1n, 1n, 1n], 3n)).toEqual([1n, 3n, 6n]);
});

test('solve with P of length 1, k = 5n', () => {
  expect(solve([2n], 5n)).toEqual([1n]);
});

test('solve with larger P and k', () => {
  expect(solve([1n, 1n, 1n, 1n], 2n)).toEqual([1n, 2n, 3n, 4n]);
});

test('solve with P = [1n, 0n, 0n, 0n], k = 3n', () => {
  expect(solve([1n, 0n, 0n, 0n], 3n)).toEqual([1n, 0n, 0n, 0n]);
});

test('solve with zero coefficients in P', () => {
  expect(solve([0n, 2n, 0n, 3n], 2n)).toEqual([1n, 0n, 4n, 0n]);
});

test('solve with k = 0n and empty P', () => {
  expect(solve([], 0n)).toEqual([]);
});

test('solve with k > 0n and empty P', () => {
  expect(solve([], 2n)).toEqual([]);
});

test('solve with very large k', () => {
  expect(solve([1n, 1n], 1000000n)[0]).toEqual(1n);
});