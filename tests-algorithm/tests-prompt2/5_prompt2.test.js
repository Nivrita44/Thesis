import { solve } from '../../solutions-algorithm/5.js';

test('typical case with one duplicate near end', () => {
  expect(solve([3, 1, 4, 3])).toBe(1);
});

test('all elements the same', () => {
  expect(solve([1, 1, 1, 1, 1])).toBe(4);
});

test('single element, no duplicates', () => {
  expect(solve([1])).toBe(0);
});

test('all unique elements', () => {
  expect(solve([6, 5, 4, 3, 2, 1])).toBe(0);
});

test('multiple duplicates, non-adjacent', () => {
  expect(solve([1, 2, 1, 7, 1, 2, 1])).toBe(5);
});

test('last two elements are duplicate', () => {
  expect(solve([2, 3, 5, 6, 3])).toBe(1);
});

test('no elements', () => {
  expect(solve([])).toBe(0);
});

test('duplicate at start and end', () => {
  expect(solve([7, 2, 9, 7])).toBe(1);
});

test('two elements, both same', () => {
  expect(solve([10, 10])).toBe(1);
});

test('three elements, no duplicates', () => {
  expect(solve([1, 2, 3])).toBe(0);
});

test('large array with all unique numbers', () => {
  const arr = Array.from({length: 10000}, (_, i) => i);
  expect(solve(arr)).toBe(0);
});

test('large array, duplicate at the end', () => {
  const arr = Array.from({length: 9999}, (_, i) => i).concat([1]);
  expect(solve(arr)).toBe(9999);
});