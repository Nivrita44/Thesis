import { solve } from '../../../solutions-algorithm/17.js'

test('returns 3 for 3, 2 otherwise (example case)', () => {
  expect(solve([3, 15])).toEqual([3, 2]);
});

test('returns 3 only for 3, 2 for others in mixed array', () => {
  expect(solve([1, 2, 3, 4, 5])).toEqual([2, 2, 3, 2, 2]);
});

test('all threes', () => {
  expect(solve([3, 3, 3])).toEqual([3, 3, 3]);
});

test('no threes', () => {
  expect(solve([0, 1, 2, 4, 5, 100, -3])).toEqual([2, 2, 2, 2, 2, 2, 2]);
});

test('empty array', () => {
  expect(solve([])).toEqual([]);
});

test('large negative and large positive numbers', () => {
  expect(solve([-1000, 3, 1000])).toEqual([2, 3, 2]);
});

test('0 and 3', () => {
  expect(solve([0, 3])).toEqual([2, 3]);
});
