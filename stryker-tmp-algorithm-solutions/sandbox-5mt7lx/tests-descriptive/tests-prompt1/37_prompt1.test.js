// @ts-nocheck
import { solve } from '../../solutions-descriptive/37.js';

test('Single element, k=0', () => {
  expect(solve(1, 0, [42])).toBe(1);
});

test('Single element, k>0', () => {
  expect(solve(1, 1, [0])).toBe(-1);
});

test('All zeroes, k=0', () => {
  expect(solve(5, 0, [0, 0, 0, 0, 0])).toBe(1);
});

test('All zeroes, k=1', () => {
  expect(solve(5, 1, [0, 0, 0, 0, 0])).toBe(-1);
});

test('Minimum length 2 present', () => {
  expect(solve(3, 2, [1, 3, 1])).toBe(2);
});

test('Full array needed', () => {
  expect(solve(4, 6, [1, 2, 4, 7])).toBe(4);
});

test('Multiple subarrays, smallest picked', () => {
  expect(solve(6, 7, [1, 2, 4, 5, 2, 7])).toBe(2);
});

test('No subarray beautiful', () => {
  expect(solve(3, 100, [1, 2, 3])).toBe(-1);
});

test('Edge case: longest xor', () => {
  expect(solve(2, 15, [15, 0])).toBe(2);
});

test('Edge case: k = maximum possible xor', () => {
  expect(solve(2, 2147483647, [2147483647, 0])).toBe(2);
});

test('Test with repeated pattern', () => {
  expect(solve(4, 5, [5, 10, 5, 10])).toBe(2);
});

test('Test with large k, no answer', () => {
  expect(solve(3, 1000000000, [1, 2, 3])).toBe(-1);
});

test('Test with k=0 and many elements', () => {
  expect(solve(6, 0, [1, 2, 3, 4, 5, 6])).toBe(1);
});

test('All pairs have same xor', () => {
  expect(solve(4, 15, [8, 7, 8, 7])).toBe(2);
});



// × Single element, k=0 (5 ms)
// × Single element, k>0 (4 ms)
// × All zeroes, k=0 (1 ms)
// × All zeroes, k=1 (4 ms)
// × Minimum length 2 present (17 ms)
// × Full array needed (5 ms)
// × Multiple subarrays, smallest picked (8 ms)
// × No subarray beautiful (5 ms)
// × Edge case: longest xor (12 ms)
// × Edge case: k = maximum possible xor (5 ms)
// × Test with repeated pattern (1 ms)
// × Test with large k, no answer (4 ms)
// × Test with k=0 and many elements (1 ms)
// × All pairs have same xor (7 ms)