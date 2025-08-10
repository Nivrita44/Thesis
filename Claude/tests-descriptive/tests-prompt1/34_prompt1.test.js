import { solve } from '../../../solutions-descriptive/34.js';

test('example case from description with simple array', () => {
  expect(solve(3, [1, 2, 3], [1, 2, 0])).toBe(3);
});

test('minimal case with single element', () => {
  expect(solve(1, [5], [2])).toBe(3);
});

test('edge case where k equals 1', () => {
  expect(solve(2, [7, 7], [0, 0])).toBe(1);
});

test('large array with no valid k should return -1', () => {
  expect(solve(4, [1000000, 999999, 999998, 999997], [0, 1, 2, 4])).toBe(-1);
});

test('case where all numbers are same in array a', () => {
  expect(solve(3, [5, 5, 5], [2, 2, 2])).toBe(3);
});

test('case with zeros in array a', () => {
  expect(solve(4, [0, 0, 0, 0], [0, 0, 0, 0])).toBe(1);
});

test('case with large k required', () => {
  expect(solve(2, [1000000, 999999], [1, 0])).toBe(999999);
});

test('case where multiple k values are possible', () => {
  expect(solve(2, [4, 8], [0, 0])).toBe(4);
});
