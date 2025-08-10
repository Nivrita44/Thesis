import { solve } from '../../../solutions-descriptive/40.js';

test('example case with n=5', () => {
  expect(solve(5, [2, 1, 1, -1, 1])).toEqual([3, 5, 2, 1, 4]);
});

test('minimum case with n=2', () => {
  expect(solve(2, [1, -1])).toEqual([2, 1]);
});

test('case where all elements except one are removed in first iteration', () => {
  expect(solve(4, [1, 1, -1, 1])).toEqual([2, 4, 1, 3]);
});

test('case with alternating removals', () => {
  expect(solve(6, [1, 2, 1, 2, -1, 1])).toEqual([3, 5, 2, 6, 1, 4]);
});

test('case where most elements survive first round', () => {
  expect(solve(7, [2, 1, 2, 1, -1, 2, 1])).toEqual([4, 7, 2, 5, 1, 6, 3]);
});

test('large case with sequential removals', () => {
  expect(solve(8, [1, 2, 1, 2, 3, -1, 1, 2])).toEqual([3, 6, 2, 7, 5, 1, 4, 8]);
});

test('case with multiple local maxima and minima', () => {
  expect(solve(9, [1, 2, 1, -1, 2, 1, 2, 1, 2])).toEqual([3, 7, 2, 1, 8, 4, 9, 5, 6]);
});
