import { solve } from '../../solutions-descriptive/31.js';

test('n=1, m=2', () => {
  const n = 1;
  const m = 2;
  const P = [1n, 1n, 0n];
  const k = 1n;
  const result = solve(P, k);
  expect(Array.from(result)).toEqual([1n, 1n, 0n]);
});

test('n=2, m=2', () => {
  const n = 2;
  const m = 2;
  const P = [1n, 2n, 1n, 0n, 0n];
  const k = 2n;
  const result = solve(P, k);
  expect(Array.from(result)).toEqual([1n, 4n, 6n, 4n, 1n]);
});

test('n=2, m=4', () => {
  const n = 2;
  const m = 4;
  const P = [1n, 4n, 6n, 4n, 1n, 0n, 0n, 0n, 0n];
  const k = 2n;
  const result = solve(P, k);
  expect(result[0]).toBe(1n);
  expect(result[4]).not.toBe(undefined);
});

test('n=3, m=2', () => {
  const n = 3;
  const m = 2;
  const P = [1n, 3n, 3n, 1n, 0n, 0n, 0n];
  const k = 3n;
  const result = solve(P, k);
  expect(result[0]).toBe(1n);
  expect(result[3]).toBe(27n);
});

test('all zero polynomial', () => {
  const P = [0n, 0n, 0n];
  const k = 1n;
  const result = solve(P, k);
  expect(result.every(x => x === 0n)).toBe(true);
});

test('identity polynomial k=0', () => {
  const P = [1n, 2n, 3n, 4n];
  const k = 0n;
  const result = solve(P, k);
  expect(result).toEqual([1n, 0n, 0n, 0n]);
});

test('one element polynomial', () => {
  const P = [5n];
  const k = 10n;
  const result = solve(P, k);
  expect(result).toEqual([1n]);
});

test('empty polynomial', () => {
  const P = [];
  const k = 5n;
  const result = solve(P, k);
  expect(result).toEqual([]);
});

test('convolution modulo reduction', () => {
  const P = Array(10).fill(BigInt(1e9));
  const k = 2n;
  const result = solve(P, k);
  expect(result[0]).toBe(1n);
  const mod = BigInt(998244353);
  for(const val of result) {
    expect(val < mod).toBe(true);
  }
});

test('big polynomial and exponent', () => {
  const P = Array(50).fill(1n);
  const k = 10n;
  const result = solve(P, k);
  expect(typeof result[0]).toBe('bigint');
  expect(result.length).toBe(50);
});