import { solve } from '../../solutions-descriptive/20.js';

test('Single element zero', () => {
  expect(solve([0])).toBe(0);
});

test('Single positive element', () => {
  expect(solve([5])).toBe(0);
});

test('Single negative element', () => {
  expect(solve([-5])).toBe(0);
});

test('Two zeros', () => {
  expect(solve([0, 0])).toBe(0);
});

test('Positive numbers', () => {
  expect(solve([1, 2, 3])).toBe(2);
});

test('All same number', () => {
  expect(solve([4, 4, 4, 4])).toBe(8);
});

test('Increasing sequence', () => {
  expect(solve([1, 2, 4, 8])).toBe(4);
});

test('Decreasing sequence', () => {
  expect(solve([8, 4, 2, 1])).toBe(8);
});

test('Mixed positive and negative', () => {
  expect(solve([2, -1, 3])).toBe(1);
});

test('Negative numbers', () => {
  expect(solve([-3, -2, -1])).toBe(0);
});

test('Upper bound element', () => {
  expect(solve([1000000000, 1000000000, 1000000000])).toBe(999999998);
});

test('Lower bound element', () => {
  expect(solve([-1000000000, -1000000000, -1000000000])).toBe(0);
});

test('Impossible case', () => {
  expect(solve([1000000000, -1000000000, 1000000000, -1000000000, 1000000000, -1000000000])).toBe(-1);
});

test('Edge case: maximum values', () => {
  expect(solve(new Array(100).fill(1000000000))).toBe(999999900);
});

test('Edge case: minimum values', () => {
  expect(solve(new Array(100).fill(-1000000000))).toBe(0);
});

test('Alternating high and low', () => {
  expect(solve([1000, -1000, 1000, -1000])).toBe(0);
});

test('Empty array', () => {
  expect(solve([])).toBe(0);
});

test('All ones', () => {
  expect(solve([1, 1, 1, 1, 1])).toBe(3);
});

test('All minus ones', () => {
  expect(solve([-1, -1, -1, -1, -1])).toBe(0);
});