import { solve } from '../../../solutions-algorithm/40.js';

test('case 1: a=2, b=3', () => {
  expect(solve(2, 3)).toBe(6);
});

test('case 2: a=1, b=2', () => {
  expect(solve(1, 2)).toBe(4);
});

test('case 3: a=3, b=11', () => {
  expect(solve(3, 11)).toBe(33);
});

test('case 4: a=1, b=5', () => {
  expect(solve(1, 5)).toBe(25);
});

test('case 5: a=5, b=10', () => {
  expect(solve(5, 10)).toBe(20);
});

test('case 6: a=4, b=6', () => {
  expect(solve(4, 6)).toBe(12);
});

test('case 7: a=3, b=9', () => {
  expect(solve(3, 9)).toBe(27);
});

test('case 8: large values a=250000000, b=500000000', () => {
  expect(solve(250000000, 500000000)).toBe(1000000000);
});

test('edge: a=1, b=3', () => {
  expect(solve(1, 3)).toBe(9);
});

test('consecutive values: a=6, b=7', () => {
  expect(solve(6, 7)).toBe(42);
});

test('gcd > 1: a=12, b=18', () => {
  expect(solve(12, 18)).toBe(36);
});

test('gcd = a: a=8, b=16', () => {
  expect(solve(8, 16)).toBe(32);
});

test('a and b large, close to upper bound', () => {
  expect(solve(999999998, 999999999)).toBe(999999998 * 999999999);
});
