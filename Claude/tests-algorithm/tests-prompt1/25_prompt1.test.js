import { solve } from '../../solutions-algorithm/25.js'

test('example case with k=2 where product of first 2 equals product of last 2', () => {
  expect(solve(4, [1, 2, 1, 2])).toBe(2n);
});

test('minimal case with 2 elements that cannot be split equally', () => {
  expect(solve(2, [1, 2])).toBe(-1n);
});

test('edge case where all elements are 1', () => {
  expect(solve(5, [1, 1, 1, 1, 1])).toBe(1n);
});

test('large case with alternating 1s and 2s', () => {
  expect(solve(8, [2, 1, 2, 1, 2, 1, 2, 1])).toBe(4n);
});

test('case where only last position works', () => {
  expect(solve(6, [2, 2, 2, 1, 1, 1])).toBe(3n);
});

test('case with multiple valid k values should return smallest', () => {
  expect(solve(6, [1, 1, 1, 1, 1, 1])).toBe(1n);
});

test('case where no split point exists', () => {
  expect(solve(5, [2, 2, 2, 1, 1])).toBe(-1n);
});

test('tricky case with 2s followed by 1s', () => {
  expect(solve(7, [2, 2, 2, 1, 1, 1, 1])).toBe(-1n);
});