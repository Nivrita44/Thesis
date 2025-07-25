import { solve } from '../../solutions-algorithm/27.js';

test('n=1', () => {
  expect(solve(1)).toBe(0);
});

test('n=9', () => {
  expect(solve(9)).toBe(0);
});

test('n=10', () => {
  expect(solve(10)).toBe(1);
});

test('n=20', () => {
  expect(solve(20)).toBe(2);
});

test('n=19', () => {
  expect(solve(19)).toBe(1);
});

test('n=99', () => {
  expect(solve(99)).toBe(9);
});

test('n=100', () => {
  expect(solve(100)).toBe(10);
});

test('n=55', () => {
  expect(solve(55)).toBe(5);
});

test('n=123', () => {
  expect(solve(123)).toBe(12);
});

test('n=999', () => {
  expect(solve(999)).toBe(99);
});

test('n=1000', () => {
  expect(solve(1000)).toBe(100);
});

test('large n=1000000000', () => {
  expect(solve(1000000000)).toBe(100000000);
});