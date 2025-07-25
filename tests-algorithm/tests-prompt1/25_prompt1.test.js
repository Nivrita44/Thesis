import { solve } from '../../solutions-algorithm/25.js';

test('Example 1: n=2 [1,1]', () => {
  expect(solve(2, [1, 1])).toBe(1);
});

test('Example 2: n=2 [2,2]', () => {
  expect(solve(2, [2, 2])).toBe(1);
});

test('Example 3: n=3 [1,2,2]', () => {
  expect(solve(3, [1, 2, 2])).toBe(-1);
});

test('n=4, [2,2,2,2]', () => {
  expect(solve(4, [2, 2, 2, 2])).toBe(2);
});

test('n=4, [1,2,1,2]', () => {
  expect(solve(4, [1, 2, 1, 2])).toBe(2);
});

test('n=5, [1,1,2,2,2]', () => {
  expect(solve(5, [1, 1, 2, 2, 2])).toBe(-1);
});

test('n=5, [2,1,1,2,2]', () => {
  expect(solve(5, [2, 1, 1, 2, 2])).toBe(-1);
});

test('n=6, [2,2,2,1,1,2]', () => {
  expect(solve(6, [2, 2, 2, 1, 1, 2])).toBe(3);
});

test('n=3, [2,1,2]', () => {
  expect(solve(3, [2, 1, 2])).toBe(1);
});

test('n=3, [1,2,1]', () => {
  expect(solve(3, [1, 2, 1])).toBe(-1);
});

test('All 1s: n=10, [1,...]', () => {
  expect(solve(10, Array(10).fill(1))).toBe(1);
});

test('All 2s: n=6, [2,2,2,2,2,2]', () => {
  expect(solve(6, [2,2,2,2,2,2])).toBe(3);
});

test('Alternating 1 and 2', () => {
  expect(solve(4, [1,2,1,2])).toBe(2);
});

test('No valid k', () => {
  expect(solve(4, [1,1,1,2])).toBe(-1);
});

test('Largest case for all 1s n=1000', () => {
  expect(solve(1000, Array(1000).fill(1))).toBe(1);
});

test('Largest case for all 2s n=1000', () => {
  expect(solve(1000, Array(1000).fill(2))).toBe(500);
});

test('Edge n=2 [1,2]', () => {
  expect(solve(2, [1,2])).toBe(-1);
});