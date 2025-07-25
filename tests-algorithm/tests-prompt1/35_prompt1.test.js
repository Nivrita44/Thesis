import { solve } from '../../solutions-algorithm/35.js';

test('Example 1: n=10, k=2', () => {
  expect(solve(10, 2)).toBe(2);
});

test('Example 2: n=15, k=3', () => {
  expect(solve(15, 3)).toBe(3);
});

test('Edge Case: n=1, k=1', () => {
  expect(solve(1, 1)).toBe(1);
});

test('Edge Case: n=1, k=10^9', () => {
  expect(solve(1, 1000000000)).toBe(1);
});

test('Edge Case: n=10^9, k=1', () => {
  expect(solve(1000000000, 1)).toBe(1000000000);
});

test('Large: n=100, k=10', () => {
  expect(solve(100, 10)).toBe(2);
});

test('Large: n=1000000, k=2', () => {
  expect(solve(1000000, 2)).toBe(7);
});

test('n=k', () => {
  expect(solve(7, 7)).toBe(1);
});

test('n=k+1', () => {
  expect(solve(8, 7)).toBe(2);
});

test('n=0, k=5', () => {
  expect(solve(0, 5)).toBe(0);
});