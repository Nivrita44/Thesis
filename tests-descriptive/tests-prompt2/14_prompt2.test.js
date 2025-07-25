import { solve } from '../../solutions-descriptive/14.js';

test('Example case 1', () => {
  expect(solve(1, 3, 5, [0])).toBe(4);
});

test('Example case 2', () => {
  expect(solve(3, 2, 5, [2, 5, 5])).toBe(5);
});

test('Example case 3', () => {
  expect(solve(1, 10, 10, [10])).toBe(20);
});

test('Example case 4', () => {
  expect(solve(10, 1, 10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(0);
});

test('Example case 5', () => {
  expect(solve(2, 1, 2, [0, 0])).toBe(2);
});

test('Example case 6', () => {
  expect(solve(2, 1, 2, [0, 2])).toBe(1);
});

test('All stops at zero', () => {
  expect(solve(3, 1, 5, [0, 0, 0])).toBe(3);
});

test('Stops at total length', () => {
  expect(solve(2, 2, 8, [8, 8])).toBe(12);
});

test('No stops', () => {
  expect(solve(0, 4, 7, [])).toBe(7);
});

test('Edge: stepSize is zero', () => {
  expect(solve(3, 0, 4, [1, 2, 3])).toBe(4);
});

test('Edge: totalLength is zero', () => {
  expect(solve(2, 1, 0, [0, 0])).toBe(0);
});

test('Edge: single very large stop', () => {
  expect(solve(1, 100, 10000, [9999])).toBe(18998);
});

test('Edge: stop at negative input', () => {
  expect(solve(2, 2, 5, [-1, 6])).toBe(6);
});

test('Minimal values', () => {
  expect(solve(1, 1, 1, [0])).toBe(1);
});

test('Large n', () => {
  const n = 10000;
  const stops = Array.from({length: n}, (_, i) => i % 100);
  expect(typeof solve(n, 3, 100, stops)).toBe('number');
});