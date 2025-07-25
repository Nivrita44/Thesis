import { solve } from '../../solutions-algorithm/9.js';

test('typical case', () => {
  expect(solve([1, 5, 8, 123, 7], [123, 7, 5, 1], [5, 1, 7])).toEqual([8, 123]);
});

test('all numbers in order', () => {
  expect(solve([1, 2, 3, 4], [2, 3, 1], [3, 1])).toEqual([4, 2]);
});

test('with duplicate numbers', () => {
  expect(solve([2, 2, 3], [2, 2], [2])).toEqual([3, 2]);
});

test('original with negative numbers', () => {
  expect(solve([-1, -2, 3], [-2, -1], [-1])).toEqual([3, -2]);
});

test('consecutive removals', () => {
  expect(solve([10, 20], [10], [])).toEqual([20, 10]);
});

test('single element', () => {
  expect(solve([7], [], [])).toEqual([7, 7]);
});

test('removing in different order', () => {
  expect(solve([4, 5, 6], [6, 4], [6])).toEqual([5, 4]);
});

test('large numbers', () => {
  expect(solve([1000000, 999999], [999999], [])).toEqual([1000000, 999999]);
});

test('zero in array', () => {
  expect(solve([0, 1, 1], [1, 1], [1])).toEqual([0, 1]);
});

test('empty input arrays', () => {
  expect(solve([], [], [])).toEqual([undefined, undefined]);
});