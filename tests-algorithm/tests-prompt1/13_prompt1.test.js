import { solve } from '../../solutions-algorithm/13.js';

test('solve returns 1 for n=2', () => {
  expect(solve(2)).toBe(1);
});

test('solve returns 2 for n=3', () => {
  expect(solve(3)).toBe(2);
});

test('solve returns 3 for n=4', () => {
  expect(solve(4)).toBe(3);
});

test('solve returns 4 for n=5', () => {
  expect(solve(5)).toBe(4);
});

test('solve returns 10 for n=11', () => {
  expect(solve(11)).toBe(10);
});

test('solve returns 99 for n=100', () => {
  expect(solve(100)).toBe(99);
});

test('solve returns 25 for n=26', () => {
  expect(solve(26)).toBe(25);
});

test('solve returns 50 for n=51', () => {
  expect(solve(51)).toBe(50);
});

test('solve returns 48 for n=49', () => {
  expect(solve(49)).toBe(48);
});