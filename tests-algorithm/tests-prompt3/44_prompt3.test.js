import { solve } from '../../../solutions-algorithm/44.js';

test('n=3 k=3, should return a valid permutation with 3 mergesort calls', () => {
  const result = solve(3, 3);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBe(3);
  expect(result.sort((a, b) => a - b)).toEqual([1, 2, 3]);
});

test('n=4 k=1, should return sorted permutation', () => {
  const result = solve(4, 1);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBe(4);
  expect(result).toEqual([1, 2, 3, 4]);
});

test('n=5 k=6, should return -1 (impossible)', () => {
  expect(solve(5, 6)).toBe(-1);
});

test('n=1 k=1, single element edge case', () => {
  expect(solve(1, 1)).toEqual([1]);
});

test('n=2 k=2, should return -1 (k even)', () => {
  expect(solve(2, 2)).toBe(-1);
});

test('n=2 k=3, should return the reversed permutation', () => {
  const result = solve(2, 3);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBe(2);
  expect(result.sort((a, b) => a - b)).toEqual([1, 2]);
});

test('n=10 k=1, should return sorted array', () => {
  const result = solve(10, 1);
  expect(result).toEqual([1,2,3,4,5,6,7,8,9,10]);
});

test('n=10 k=19, maximal call count', () => {
  const result = solve(10, 19);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBe(10);
  expect(result.slice().sort((a, b) => a - b)).toEqual([1,2,3,4,5,6,7,8,9,10]);
});

test('n=10 k=21, exceeds maximal allowed mergesort call, should return -1', () => {
  expect(solve(10, 21)).toBe(-1);
});

test('n=100000 k=199999, maximal allowed size and mergesort calls', () => {
  const result = solve(100000, 199999);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBe(100000);
  expect(new Set(result).size).toBe(100000);
  expect(Math.min(...result)).toBe(1);
  expect(Math.max(...result)).toBe(100000);
});

test('n=100000 k=200000, k even and over bound, should return -1', () => {
  expect(solve(100000, 200000)).toBe(-1);
});

test('n=5 k=5, valid sequence', () => {
  const result = solve(5, 5);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBe(5);
  expect(result.slice().sort((a, b) => a - b)).toEqual([1,2,3,4,5]);
});
