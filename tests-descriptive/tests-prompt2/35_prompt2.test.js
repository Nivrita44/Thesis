import { solve } from '../../solutions-descriptive/35.js';

test('n=1, k=0, single element', () => {
  expect(solve(1, 0, [42])).toBe(42);
});

test('n=2, k=0, increasing elements', () => {
  expect(solve(2, 0, [1, 2])).toBe(3);
});

test('n=2, k=1, elements are equal', () => {
  expect(solve(2, 1, [3, 3])).toBe(6);
});

test('n=5, k=1, mixed elements', () => {
  expect(solve(5, 1, [2, 4, 1, 5, 3])).toBe(15);
});

test('n=4, k=2, ordered elements', () => {
  expect(solve(4, 2, [1, 2, 3, 4])).toBe(10);
});

test('n=6, k=2, all elements are zero', () => {
  expect(solve(6, 2, [0, 0, 0, 0, 0, 0])).toBe(0);
});

test('n=3, k=1, sorted descending', () => {
  expect(solve(3, 1, [7, 4, 1])).toBe(12);
});

test('n=3, k=0, sorted descending', () => {
  expect(solve(3, 0, [7, 6, 5])).toBe(18);
});

test('n=5, k=2, all negative', () => {
  expect(solve(5, 2, [-1, -2, -3, -4, -5])).toBe(-15);
});

test('n=7, k=2, with duplicates', () => {
  expect(solve(7, 2, [2, 3, 3, 2, 1, 3, 2])).toBe(16);
});

test('n=1, k=1, single negative', () => {
  expect(solve(1, 1, [-8])).toBe(-8);
});

test('n=3, k=2, last element dominates heap', () => {
  expect(solve(3, 2, [1, 1, 100])).toBe(102);
});

test('n=10, k=3, sequence', () => {
  expect(solve(10, 3, [1,2,3,4,5,6,7,8,9,10])).toBe(55);
});