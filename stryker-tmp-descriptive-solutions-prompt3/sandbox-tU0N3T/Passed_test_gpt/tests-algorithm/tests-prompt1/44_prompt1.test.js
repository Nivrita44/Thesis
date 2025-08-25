import { solve } from '../../../solutions-algorithm/44.js';

test('n=1, k=1', () => {
  expect(solve(1, 1)).toEqual([1]);
});


test('n=4, k=1', () => {
  expect(solve(4, 1)).toEqual([1, 2, 3, 4]);
});


test('n=3, k=3', () => {
  expect(solve(3, 3)).toEqual([2, 1, 3]);
});



test('n=3, k=2 (impossible)', () => {
  expect(solve(3, 2)).toBe(-1);
});

test('n=7, k=1 (sorted array)', () => {
  expect(solve(7, 1)).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test('n=2, k=1', () => {
  expect(solve(2, 1)).toEqual([1, 2]);
});

test('n=5, k=1', () => {
  expect(solve(5, 1)).toEqual([1, 2, 3, 4, 5]);
});

test('n=5, impossible k=16', () => {
  expect(solve(5, 16)).toBe(-1);
});

test('n=6, k=1', () => {
  expect(solve(6, 1)).toEqual([1, 2, 3, 4, 5, 6]);
});

test('n=10, large impossible k', () => {
  expect(solve(10, 10000)).toBe(-1);
});

test('n=1, impossible k=2', () => {
  expect(solve(1, 2)).toBe(-1);
});
