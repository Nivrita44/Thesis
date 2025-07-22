import { solve } from '../../solutions-descriptive/42.js';

test('single element, probability 1', () => {
  expect(solve(1, [5], [10000])).toBe(25);
});

test('single element, probability 0', () => {
  expect(solve(1, [7], [0])).toBe(0);
});

test('two elements, both always inserted', () => {
  expect(solve(2, [3, 5], [10000, 10000])).toBe(64);
});

test('two elements, one never inserted', () => {
  expect(solve(2, [10, 20], [0, 10000])).toBe(400);
});

test('two elements, half probability', () => {
  expect(solve(2, [2, 4], [5000, 5000])).toBe(6000);
});

test('three elements, mix probabilities', () => {
  expect(solve(3, [1, 2, 3], [10000, 5000, 2500])).toBe(324765619);
});

test('multi elements, all never inserted', () => {
  expect(solve(4, [13, 27, 56, 1023], [0, 0, 0, 0])).toBe(0);
});

test('multi elements, all always inserted', () => {
  expect(solve(3, [1, 2, 1023], [10000, 10000, 10000])).toBe(1052676);
});

test('two elements, different probabilities', () => {
  expect(solve(2, [2, 2], [3000, 7000])).toBe(4200);
});

test('edge case, max values', () => {
  const n = 2e5 | 0;
  const a = Array(n).fill(1023);
  const p = Array(n).fill(10000);
  expect(typeof solve(n, a, p)).toBe('number');
});