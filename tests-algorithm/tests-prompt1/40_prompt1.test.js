import { solve } from '../../../solutions-algorithm/40.js';

test('Test case 1', () => {
  expect(solve(2, 4)).toBe(8);
});

test('Test case 2', () => {
  expect(solve(3, 6)).toBe(12);
});

test('Test case 3', () => {
  expect(solve(5, 10)).toBe(20);
});

test('Test case 4', () => {
  expect(solve(7, 14)).toBe(28);
});

test('Test case 5', () => {
  expect(solve(9, 18)).toBe(36);
});

test('Test case 6', () => {
  expect(solve(1, 2)).toBe(4);
});

test('Test case 7', () => {
  expect(solve(10, 20)).toBe(40);
});

test('Test case 8', () => {
  expect(solve(25, 50)).toBe(100);
});

test('Test case 9', () => {
  expect(solve(16, 32)).toBe(64);
});

test('Test case 10', () => {
  expect(solve(33, 66)).toBe(132);
});
