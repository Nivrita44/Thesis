import { solve } from '../../solutions-descriptive/34.js';

test('Case 1: Simple possible k', () => {
  expect(solve(3, [4, 7, 13], [1, 4, 0])).toBe(7);
});

test('Case 2: impossible case', () => {
  expect(solve(2, [5, 7], [2, 5])).toBe(-1);
});

test('Case 3: all a and b are zero', () => {
  expect(solve(4, [0, 0, 0, 0], [0, 0, 0, 0])).toBe(1);
});

test('Case 4: all b are the same, possible k', () => {
  expect(solve(3, [5, 10, 15], [0, 0, 0])).toBe(5);
});

test('Case 5: shuffled b, unique solution', () => {
  expect(solve(3, [8, 11, 17], [2, 5, 1])).toBe(6);
});

test('Case 6: n=1, equal elements', () => {
  expect(solve(1, [7], [7])).toBe(1);
});

test('Case 7: n=1, impossible', () => {
  expect(solve(1, [6], [2])).toBe(-1);
});

test('Case 8: Example with larger k', () => {
  expect(solve(4, [9, 27, 6, 24], [3, 0, 0, 0])).toBe(6);
});

test('Case 9: Large elements within bounds, possible', () => {
  expect(solve(2, [1_000_000, 500_000], [0, 0])).toBe(500_000);
});

test('Case 10: Unsorted a and b, valid', () => {
  expect(solve(5, [13, 21, 8, 5, 3], [0, 0, 3, 3, 5])).toBe(8);
});