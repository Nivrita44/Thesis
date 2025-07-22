import { solve } from '../../solutions-descriptive/19.js';

test('n=2, a=1, b=1', () => {
  expect(solve(2, 1, 1)).toBe(6);
});

test('n=2, a=2, b=2', () => {
  expect(solve(2, 2, 2)).toBe(8);
});

test('n=3, a=2, b=3', () => {
  expect(solve(3, 2, 3)).toBe(14);
});

test('n=3, a=1, b=2', () => {
  expect(solve(3, 1, 2)).toBe(12);
});

test('n=4, a=3, b=2', () => {
  expect(solve(4, 3, 2)).toBe(22);
});

test('n=5, a=2, b=3', () => {
  expect(solve(5, 2, 3)).toBe(38);
});

test('n=10, a=5, b=2', () => {
  expect(solve(10, 5, 2)).toBe(160);
});

test('n=2, a=1000000, b=1000000', () => {
  expect(solve(2, 1000000, 1000000)).toBe(8);
});

test('n=3, a=1000000, b=1', () => {
  expect(solve(3, 1000000, 1)).toBe(12);
});

test('n=1000000, a=1, b=1', () => {
  expect(solve(1000000, 1, 1)).toBe(2000000);
});