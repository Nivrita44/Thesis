import { solve } from '../../solutions-descriptive/12.js'

test('example from description', () => {
  expect(solve([3, 1, 5], [[2, 4]])).toEqual([1n, 1n]);
});

test('minimal input case', () => {
  expect(solve([1], [])).toEqual([0n]);
});

test('edge case with all same values', () => {
  expect(solve([5, 5, 5, 5], [[1, 5], [2, 5]])).toEqual([0n, 0n, 0n]);
});

test('upper bound case', () => {
  expect(solve([1000000000, 1, 999999999], [[1, 1]])).toEqual([999999997n, 999999997n]);
});

test('tricky case with multiple changes', () => {
  expect(solve([4, 2, 6, 3], [[1, 5], [2, 1], [4, 7]])).toEqual([2n, 2n, 3n, 4n]);
});

test('generic case 1', () => {
  expect(solve([10, 20, 30], [[2, 15]])).toEqual([18n, 18n]);
});

test('generic case 2', () => {
  expect(solve([7, 3, 9, 5], [[3, 4], [1, 8]])).toEqual([4n, 3n, 3n]);
});

test('corner case with single element updates', () => {
  expect(solve([5], [[1, 10], [1, 1], [1, 100]])).toEqual([0n, 0n, 0n, 0n]);
});