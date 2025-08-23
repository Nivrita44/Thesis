// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/32.js';

test('solve with various constraints and permutations', () => {
  const input = [
    {
      N: 7,
      A: [1, 2, 3, 4, 5, 6, 7],
      B: [2, 3, 1, 7, 6, 5, 4],
      C: [2, 0, 1, 0, 0, 0, 0],
    },
    {
      N: 1,
      A: [1],
      B: [1],
      C: [0],
    },
    {
      N: 6,
      A: [1, 5, 2, 4, 6, 3],
      B: [6, 5, 3, 1, 4, 2],
      C: [6, 0, 0, 0, 0, 0],
    },
    {
      N: 8,
      A: [1, 6, 4, 7, 2, 3, 8, 5],
      B: [3, 2, 8, 1, 4, 5, 6, 7],
      C: [1, 0, 0, 7, 0, 3, 0, 5],
    },
    {
      N: 10,
      A: [1, 8, 6, 2, 4, 7, 9, 3, 10, 5],
      B: [1, 9, 2, 3, 4, 10, 8, 6, 7, 5],
      C: [1, 9, 2, 3, 4, 10, 8, 6, 7, 5],
    },
    {
      N: 7,
      A: [1, 2, 3, 4, 5, 6, 7],
      B: [2, 3, 1, 7, 6, 5, 4],
      C: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      N: 5,
      A: [1, 2, 3, 4, 5],
      B: [1, 2, 3, 4, 5],
      C: [0, 0, 0, 0, 0],
    },
    {
      N: 5,
      A: [1, 2, 3, 4, 5],
      B: [1, 2, 3, 5, 4],
      C: [0, 0, 0, 0, 0],
    },
    {
      N: 3,
      A: [1, 2, 3],
      B: [3, 1, 2],
      C: [0, 0, 0],
    }
  ];
  const expected = [4, 1, 2, 2, 1, 8, 1, 2, 2];
  expect(solve(input)).toEqual(expected);
});

test('solve returns [1] for only one element with fixed C', () => {
  expect(solve([
    {
      N: 1,
      A: [1],
      B: [1],
      C: [1],
    }
  ])).toEqual([1]);
});

test('solve returns [2] for size 2 swap, no C constraints', () => {
  expect(solve([
    {
      N: 2,
      A: [1,2],
      B: [2,1],
      C: [0,0],
    }
  ])).toEqual([2]);
});

test('solve returns [1] for size 2 swap, with C fixed', () => {
  expect(solve([
    {
      N: 2,
      A: [1,2],
      B: [2,1],
      C: [1,0],
    }
  ])).toEqual([1]);
});

test('solve returns [1] for self-loop permutation (identity)', () => {
  expect(solve([
    {
      N: 4,
      A: [1,2,3,4],
      B: [1,2,3,4],
      C: [0,0,0,0],
    }
  ])).toEqual([1]);
});

test('solve with all C[] nonzero (all fixed)', () => {
  expect(solve([
    {
      N: 3,
      A: [1,2,3],
      B: [2,3,1],
      C: [1,2,3],
    }
  ])).toEqual([1]);
});

test('solve handles edge case: empty input', () => {
  expect(solve([])).toEqual([]);
});