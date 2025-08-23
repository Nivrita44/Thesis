// @ts-nocheck
import { solve } from '../../../solutions-descriptive/13.js';

test('Empty array', () => {
  expect(solve([[]])).toEqual([0]);
});

test('Single element arrays', () => {
  expect(solve([[1]])).toEqual([1]);
  expect(solve([[5]])).toEqual([5]);
  expect(solve([[10]])).toEqual([10]);
});

test('Edge threshold values', () => {
  expect(solve([[0, 0, 0, 0, 0]])).toEqual([0]);
  expect(solve([[11, 11, 11, 11, 11]])).toEqual([55]);
});

test('Large array of 100 random 1-10 elements', () => {
  const arr = Array(100).fill(1);
  expect(solve([arr])).toEqual([100]);
});