import { solve } from '../../solutions-descriptive/13.js';

test('example 1', () => {
  expect(solve(3, [1, 2, 1])).toBe(6);
});

test('all elements equal', () => {
  expect(solve(5, [4, 4, 4, 4, 4])).toBe(15);
});

test('strictly increasing', () => {
  expect(solve(4, [1, 2, 3, 4])).toBe(7);
});

test('strictly decreasing', () => {
  expect(solve(4, [4, 3, 2, 1])).toBe(7);
});

test('two types alternating', () => {
  expect(solve(6, [2, 3, 2, 3, 2, 3])).toBe(12);
});

test('single element', () => {
  expect(solve(1, [8])).toBe(1);
});

test('odd array', () => {
  expect(solve(5, [9, 1, 3, 2, 7])).toBe(15);
});

test('even length, only one good even subarray', () => {
  expect(solve(2, [1, 2])).toBe(2);

  expect(solve(2, [3, 3])).toBe(3);
});

test('maximum allowed values', () => {
  let arr = Array(10).fill(10);
  expect(solve(10, arr)).toBe(55);
});

test('all distinct small size', () => {
  expect(solve(3, [1,2,3])).toBe(4);
});