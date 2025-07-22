import { solve } from '../../solutions-descriptive/32.js';

test('single element simple', () => {
  expect(solve(1, [6])).toBe(6);
});

test('two elements, answer exists', () => {
  const out = solve(2, [3, 8]);
  expect(out === 3 || out === 8).toBe(true);
});

test('generator all even', () => {
  expect(solve(3, [4, 6, 8])).toBe(4);
});

test('generator no solution', () => {
  expect(solve(2, [5, 6])).toBe(-1);
});

test('larger array, solution exists', () => {
  expect(solve(4, [8, 12, 20, 32])).toBe(8);
});

test('pair of coprime numbers, no solution', () => {
  expect(solve(2, [7, 10])).toBe(-1);
});

test('n = 1, minimal value', () => {
  expect(solve(1, [2])).toBe(2);
});

test('n = 3, spread values', () => {
  const result = solve(3, [6, 10, 14]);
  expect(result === 6 || result === 10 || result === 14).toBe(true);
});

test('maximal ai', () => {
  expect(solve(1, [400000])).toBe(400000);
});

test('two adjacent values, not generators', () => {
  expect(solve(2, [8, 9])).toBe(-1);
});