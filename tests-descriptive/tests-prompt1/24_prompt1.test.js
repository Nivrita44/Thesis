import { solve } from '../../solutions-descriptive/24.js';

test('case 1', () => {
  expect(solve(1, 1, 1, 1)).toBe(1);
});

test('case 2', () => {
  expect(solve(2, 3, 10, 2)).toBe(12);
});

test('case 3', () => {
  expect(solve(1, 100, 100, 50)).toBe(100);
});

test('case 4', () => {
  expect(solve(3, 6, 14, 1)).toBe(24);
});

test('case 5', () => {
  expect(solve(10, 1, 100, 10)).toBe(22);
});

test('case 6', () => {
  expect(solve(10000000, 1, 10000000, 100)).toBe(2698);
});

test('minimal k', () => {
  expect(solve(2, 1, 9, 1)).toBe(9);
});

test('max x', () => {
  expect(solve(1e8, 1, 20, 20)).toBe(20);
});

test('attack-only optimal', () => {
  expect(solve(10, 1, 10, 1)).toBe(10);
});

test('increase-optimal', () => {
  expect(solve(1, 100, 10, 10)).toBe(10);
});