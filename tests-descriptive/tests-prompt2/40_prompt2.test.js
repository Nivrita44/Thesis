import { solve } from '../../solutions-descriptive/40.js';

test('single node', () => {
  expect(solve(1, [1])).toEqual([1]);
});

test('two nodes, increasing pattern', () => {
  expect(solve(2, [1, 2])).toEqual([1, 2]);
});

test('two nodes, decreasing pattern', () => {
  expect(solve(2, [2, 1])).toEqual([2, 1]);
});

test('three nodes, all same label', () => {
  expect(solve(3, [2, 2, 2])).toEqual([1, 2, 3]);
});

test('pattern with -1', () => {
  expect(solve(3, [1, -1, 2])).toEqual([1, 2, 3]);
});

test('pattern with multiple -1s', () => {
  expect(solve(5, [1, -1, 2, -1, 3])).toEqual([1, 2, 3, 4, 5]);
});

test('all different labels', () => {
  expect(solve(4, [4, 3, 2, 1])).toEqual([4, 3, 2, 1]);
});

test('mix of positive and -1, -1 at beginning', () => {
  expect(solve(4, [-1, 2, 2, 2])).toEqual([1, 2, 3, 4]);
});

test('negOneGroup at the end', () => {
  expect(solve(4, [2, 2, 2, -1])).toEqual([1, 2, 3, 4]);
});

test('pattern with label out of order', () => {
  expect(solve(5, [3, 1, 2, 3, 1])).toEqual([3, 1, 2, 4, 5]);
});

test('larger input with labels', () => {
  expect(solve(6, [1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3, 4, 5, 6]);
});

test('negOneGroup only', () => {
  expect(solve(1, [-1])).toEqual([1]);
});

test('negOneGroup and unique positive labels', () => {
  expect(solve(3, [-1, 2, 3])).toEqual([1, 2, 3]);
});

test('multiple negOneGroups', () => {
  expect(solve(4, [-1, -1, 2, 2])).toEqual([1, 2, 3, 4]);
});

test('all -1 pattern', () => {
  expect(solve(3, [-1, -1, -1])).toEqual([1, undefined, undefined]);
});