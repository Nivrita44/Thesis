// @ts-nocheck
import { solve } from '../../../solutions-descriptive/31.js';

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

test('solve with all ones P, k = 3n', () => {
  expect(solve([1n, 1n, 1n], 3n)).toEqual([1n, 3n, 6n]);
});

test('solve with larger P and k', () => {
  expect(solve([1n, 1n, 1n, 1n], 2n)).toEqual([1n, 2n, 3n, 4n]);
});

test('solve with P = [1n, 0n, 0n, 0n], k = 3n', () => {
  expect(solve([1n, 0n, 0n, 0n], 3n)).toEqual([1n, 0n, 0n, 0n]);
});

test('solve with very large k', () => {
  expect(solve([1n, 1n], 1000000n)[0]).toEqual(1n);
});