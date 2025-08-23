import { solve } from '../../../solutions-descriptive/25.js';

test('n=1, k=1 returns [[\'1\']]', () => {
  expect(solve(1, 1)).toEqual([['1']]);
});

test('n=1, k=2 returns null', () => {
  expect(solve(1, 2)).toBe(null);
});

test('n=2, k=2 returns [[\'1 2\', \'2 1\']]', () => {
  expect(solve(2, 2)).toEqual([['1 2', '2 1']]);
});

test('n=2, k=1 returns null', () => {
  expect(solve(2, 1)).toBe(null);
});

test('n=3, k=1 returns null', () => {
  expect(solve(3, 1)).toBe(null);
});

test('n=4, k=3 (n even, k odd) returns null', () => {
  expect(solve(4, 3)).toBe(null);
});

test('n=3, k=2 returns array', () => {
  expect(Array.isArray(solve(3, 2))).toBe(true);
});

test('n=3, k=3 returns array of length 3', () => {
  const result = solve(3, 3);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBe(3);
});

test('n=4, k=4 returns array of length 4', () => {
  const result = solve(4, 4);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBe(4);
});

test('n=5, k=10 returns array', () => {
  const result = solve(5, 10);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBe(10);
});

test('n=8, k=factorial(8)+1 returns null', () => {
  const factorial = n => Array.from({length: n}, (_, i) => i+1).reduce((a, b) => a * b, 1);
  expect(solve(8, factorial(8) + 1)).toBe(null);
});

test('n=8, k=factorial(8)-1 returns null', () => {
  const factorial = n => Array.from({length: n}, (_, i) => i+1).reduce((a, b) => a * b, 1);
  expect(solve(8, factorial(8) - 1)).toBe(null);
});

test('n=8, k=factorial(8) returns array', () => {
  const factorial = n => Array.from({length: n}, (_, i) => i+1).reduce((a, b) => a * b, 1);
  const result = solve(8, factorial(8));
  expect(Array.isArray(result)).toBe(true);
});

test('n=9, k=2 returns array of length 2', () => {
  const result = solve(9, 2);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBe(2);
});

test('n=5, k=6 (odd k, odd n) returns array', () => {
  const result = solve(5, 6);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBe(6);
});

test('n=4, k=6 (even k, even n) returns array', () => {
  const result = solve(4, 6);
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBe(6);
});