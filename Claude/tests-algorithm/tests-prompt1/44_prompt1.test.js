import { solve } from '../../../solutions-algorithm/44.js'

test('example with n=4 k=1 should return sorted array', () => {
  expect(solve(4n, 1n)).toEqual([1n, 2n, 3n, 4n]);
});

test('example with n=3 k=3 should return [2,1,3]', () => {
  expect(solve(3n, 3n)).toEqual([2n, 1n, 3n]);
});

test('edge case with n=1 k=1', () => {
  expect(solve(1n, 1n)).toEqual([1n]);
});

test('impossible case should return [-1]', () => {
  expect(solve(4n, 2n)).toEqual([-1n]);
});

test('large input case n=5 k=7', () => {
  expect(solve(5n, 7n)).toEqual([3n, 1n, 5n, 2n, 4n]);
});

test('minimum valid k for n=4', () => {
  expect(solve(4n, 4n)).toEqual([2n, 1n, 4n, 3n]);
});

test('maximum valid k for n=3', () => {
  expect(solve(3n, 5n)).toEqual([-1n]);
});

test('generic case n=6 k=9', () => {
  expect(solve(6n, 9n)).toEqual([3n, 1n, 5n, 2n, 6n, 4n]);
});

test('generic case n=7 k=11', () => {
  expect(solve(7n, 11n)).toEqual([4n, 1n, 6n, 2n, 7n, 3n, 5n]);
});