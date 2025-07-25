import { solve } from '../../solutions-algorithm/6.js';

test('All elements same', () => {
  expect(solve([3, 3, 3, 3])).toBe(0);
});

test('Example with distinct and repeated elements', () => {
  expect(solve([1, 2, 2, 3, 1, 5, 6, 1])).toBe(9);
});

test('Sorted input, large gaps', () => {
  expect(solve([1, 2, 3, 100, 200])).toBe(297);
});

test('Unordered with duplicates at ends', () => {
  expect(solve([7, 8, 3, 1, 1, 8])).toBe(14);
});

test('All minimums except two high maximums', () => {
  expect(solve([1, 1, 1, 1000000000, 999999999, 1])).toBe(1999999997);
});

test('Two lowest and two highest at the edges', () => {
  expect(solve([100000, 100000, 1, 2, 700, 999999999, 1000000000])).toBe(1999998997);
});

test('Minimum length array', () => {
  expect(solve([4, 5, 1, 8])).toBe(11);
});

test('Small array no repetition', () => {
  expect(solve([4, 10, 2, 9])).toBe(13);
});

test('Input with negative values replaced by minimum valid', () => {
  expect(solve([1, 1, 1, 2])).toBe(1);
});

test('Array with maximum constraints', () => {
  const arr = [1, 1, 1, 1, 1000000000, 999999999];
  expect(solve(arr)).toBe(1999999997);
});

test('Increasing order large array', () => {
  const arr = [];
  for (let i = 1; i <= 10; i++) arr.push(i);
  expect(solve(arr)).toBe(19);
});

test('Decreasing order large array', () => {
  const arr = [];
  for (let i = 10; i >= 1; i--) arr.push(i);
  expect(solve(arr)).toBe(19);
});

test('All values are the maximum', () => {
  expect(solve([100, 100, 100, 100, 100, 100])).toBe(0);
});

test('Array with minimum and maximum alternated', () => {
  expect(solve([1, 100, 1, 100, 1, 100, 1, 100])).toBe(198);
});

test('Edge case: second max and min are also at the ends', () => {
  expect(solve([100, 1, 99, 2])).toBe(196);
});