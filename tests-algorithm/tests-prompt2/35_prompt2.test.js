import { solve } from '../../solutions-algorithm/35.js';

test('typical cases', () => {
  expect(solve([[5, 2]])).toEqual([2]);
  expect(solve([[3, 5]])).toEqual([3]);
  expect(solve([[16, 4]])).toEqual([1]);
  expect(solve([[100, 3]])).toEqual([4]);
  expect(solve([[6492, 10]])).toEqual([21]);
  expect(solve([[10, 1]])).toEqual([10]);
});

test('multiple cases in a single call', () => {
  expect(solve([
    [5, 2],
    [3, 5],
    [16, 4],
    [100, 3],
    [6492, 10],
    [10, 1]
  ])).toEqual([2, 3, 1, 4, 21, 10]);
});

test('edge case: num is 0', () => {
  expect(solve([[0, 2]])).toEqual([0]);
  expect(solve([[0, 1]])).toEqual([0]);
  expect(solve([[0, 100]])).toEqual([0]);
});

test('edge case: smallest k=1', () => {
  expect(solve([[7, 1]])).toEqual([7]);
  expect(solve([[1000, 1]])).toEqual([1000]);
});

test('edge case: k is greater than num', () => {
  expect(solve([[3, 10]])).toEqual([3]);
  expect(solve([[1, 2]])).toEqual([1]);
  expect(solve([[5, 100]])).toEqual([5]);
});

test('large num with k=2 (binary)', () => {
  expect(solve([[1023, 2]])).toEqual([10]);
  expect(solve([[1024, 2]])).toEqual([1]);
  expect(solve([[255, 2]])).toEqual([8]);
});

test('very large values', () => {
  expect(solve([[1000000, 10]])).toEqual([1]);
  expect(solve([[999999, 3]])).toEqual([8]);
});

test('all zero input', () => {
  expect(solve([[0, 1], [0, 2], [0, 1000]])).toEqual([0, 0, 0]);
});

test('invalid (negative) num', () => {
  expect(solve([[-1, 2]])).toEqual([0]);
  expect(solve([[-10, 3]])).toEqual([0]);
});

test('k equals num', () => {
  expect(solve([[5, 5]])).toEqual([1]);
  expect(solve([[10, 10]])).toEqual([1]);
});