import { solve } from '../../solutions-descriptive/46.js';

test('example from description - small valid case', () => {
  expect(solve(4, [1, 2, 3, 4])).toBe('NO');
});

test('minimal case - single vertex', () => {
  expect(solve(1, [5])).toBe('YES');
});

test('edge case - two vertices with same value', () => {
  expect(solve(2, [7, 7])).toBe('YES');
});

test('large valid case', () => {
  const n = 2000;
  const arr = Array(n).fill(1);
  expect(solve(n, arr)).toBe('YES'); 
});

test('tricky case - prime numbers', () => {
  expect(solve(3, [2, 3, 5])).toBe('NO');
});

test('random valid case 1', () => {
  expect(solve(3, [2, 4, 6])).toBe('YES');
});

test('random valid case 2', () => {
  expect(solve(4, [10, 20, 30, 40])).toBe('YES');
});

test('corner case - all different numbers', () => {
  expect(solve(5, [1, 3, 5, 7, 9])).toBe('NO');
});

test('edge case - alternating even/odd', () => {
  expect(solve(4, [2, 3, 4, 5])).toBe('NO');
});