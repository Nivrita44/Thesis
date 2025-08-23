// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/13.js';

test('returns the correct number of ordered pairs for n=2', () => {
  expect(solve([2])).toEqual([1]);
});

test('returns the correct number of ordered pairs for n=4', () => {
  expect(solve([4])).toEqual([3]);
});

test('returns the correct number of ordered pairs for n=6', () => {
  expect(solve([6])).toEqual([5]);
});

test('returns the correct number of ordered pairs for multiple ns', () => {
  expect(solve([2, 4, 6, 10])).toEqual([1, 3, 5, 9]);
});

test('returns the correct number of ordered pairs for minimal n=2', () => {
  expect(solve([2])).toEqual([1]);
});

test('returns the correct number of ordered pairs for maximal n=100', () => {
  expect(solve([100])).toEqual([99]);
});

test('returns the correct number of ordered pairs for a range of n', () => {
  const ns = Array.from({ length: 10 }, (_, i) => i + 2);
  const expected = ns.map(n => n - 1);
  expect(solve(ns)).toEqual(expected);
});

test('returns an empty array for empty input', () => {
  expect(solve([])).toEqual([]);
});
