// @ts-nocheck
import { solve } from '../../solutions-descriptive/36.js';

test('single 3x3 cell all green', () => {
  expect(solve(3, 3, 0, [])).toBe(2);
});

test('single 3x3 cell, one white', () => {
  expect(solve(3, 3, 1, [[1, 1, 0]])).toBe(1);
});

test('single 3x3 cell, one black', () => {
  expect(solve(3, 3, 1, [[1, 1, 1]])).toBe(1);
});

test('4x4, 0 preset cells', () => {
  expect(solve(4, 4, 0, [])).toBe(2);
});

test('5x5, one cell fixed black', () => {
  expect(solve(5, 5, 1, [[1, 1, 1]])).toBe(1);
});

test('3x4, two fixed cells different colors', () => {
  expect(solve(3, 4, 2, [[1, 2, 0], [2, 3, 1]])).toBe(0);
});

test('3x3, two adjacent cells with same color', () => {
  expect(solve(3, 3, 2, [[2, 2, 0], [2, 3, 0]])).toBe(1);
});

test('3x3, two adjacent cells with different colors', () => {
  expect(solve(3, 3, 2, [[2, 2, 0], [2, 3, 1]])).toBe(0);
});

test('4x3, k=2, same parity cells different colors', () => {
  expect(solve(4, 3, 2, [[2, 2, 0], [4, 2, 1]])).toBe(0);
});

test('4x4, k=4, checkerboard preset', () => {
  expect(solve(4, 4, 4, [[1,1,0], [1,2,1], [2,1,1], [2,2,0]])).toBe(1);
});

test('n and m large, but only two preset', () => {
  expect(solve(1000000000, 1000000000, 2, [[1,1,0],[2,2,0]])).toBe(2);
});

test('conflict makes impossible', () => {
  expect(solve(10, 11, 2, [[1,1,0],[1,2,0]])).toBe(1);
});

test('conflicting colors, must be impossible', () => {
  expect(solve(10, 10, 2, [[1,1,0],[1,2,1]])).toBe(0);
});




// × single 3x3 cell all green (2 ms)
//   × single 3x3 cell, one white
//   × single 3x3 cell, one black
//   × 4x4, 0 preset cells
//   × 5x5, one cell fixed black (1 ms)
//   × 3x4, two fixed cells different colors (1 ms)
//   × 3x3, two adjacent cells with same color (1 ms)
//   × 3x3, two adjacent cells with different colors (1 ms)
//   × 4x3, k=2, same parity cells different colors (1 ms)
//   × 4x4, k=4, checkerboard preset (1 ms)
//   × n and m large, but only two preset
//   × conflict makes impossible
//   × conflicting colors, must be impossible