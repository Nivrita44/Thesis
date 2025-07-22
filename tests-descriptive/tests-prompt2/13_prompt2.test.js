import { solve } from '../../solutions-descriptive/13.js';

test('Typical cases', () => {
  expect(solve([[1, 2, 3, 4, 5]])).toEqual([15]);
  expect(solve([[5, 4, 3, 2, 1]])).toEqual([15]);
  expect(solve([[1, 1, 1, 1, 1]])).toEqual([15]);
  expect(solve([[10, 10, 10, 10, 10]])).toEqual([15]);
});

test('Empty array', () => {
  expect(solve([[]])).toEqual([0]);
});

test('Single element arrays', () => {
  expect(solve([[1]])).toEqual([1]);
  expect(solve([[5]])).toEqual([1]);
  expect(solve([[10]])).toEqual([1]);
});

test('Multiple test cases', () => {
  expect(solve([[1, 2, 1], [2, 2, 2], [3, 2, 1]])).toEqual([6, 6, 6]);
});

test('Edge threshold values', () => {
  expect(solve([[0, 0, 0, 0, 0]])).toEqual([15]);
  expect(solve([[11, 11, 11, 11, 11]])).toEqual([15]);
});

test('Repetitive types', () => {
  expect(solve([[2, 2, 2, 3, 3, 3]])).toEqual([21]);
});

test('Descending and ascending', () => {
  expect(solve([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]])).toEqual([55]);
  expect(solve([[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]])).toEqual([55]);
});

test('All elements are threshold boundary', () => {
  expect(solve([[1, 10, 1, 10, 1, 10]])).toEqual([21]);
});

test('Large array of 100 random 1-10 elements', () => {
  const arr = Array(100).fill(1);
  expect(solve([arr])).toEqual([5050]);
});