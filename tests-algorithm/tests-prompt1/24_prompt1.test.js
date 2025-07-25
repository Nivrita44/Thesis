import { solve } from '../../solutions-algorithm/24.js';

test('n=2', () => {
  expect(solve(2)).toBe(1);
});

test('n=3', () => {
  expect(solve(3)).toBe(1);
});

test('n=4', () => {
  expect(solve(4)).toBe(2);
});

test('n=5', () => {
  expect(solve(5)).toBe(2);
});

test('n=6', () => {
  expect(solve(6)).toBe(3);
});

test('n=7', () => {
  expect(solve(7)).toBe(3);
});

test('n=8', () => {
  expect(solve(8)).toBe(4);
});

test('n=9', () => {
  expect(solve(9)).toBe(4);
});

test('n=10', () => {
  expect(solve(10)).toBe(5);
});

test('n=100', () => {
  expect(solve(100)).toBe(50);
});

test('n=15', () => {
  expect(solve(15)).toBe(7);
});

test('n=99', () => {
  expect(solve(99)).toBe(49);
});

test('n=1000', () => {
  expect(solve(1000)).toBe(500);
});

test('n=999999', () => {
  expect(solve(999999)).toBe(499999);
});

test('n=1000000', () => {
  expect(solve(1000000)).toBe(500000);
});