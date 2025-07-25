import { solve } from '../../solutions-algorithm/42.js';

test('single element', () => {
  expect(solve(1, [42])).toBe(1);
});

test('all increasing', () => {
  expect(solve(5, [1, 2, 3, 4, 5])).toBe(5);
});

test('all decreasing', () => {
  expect(solve(5, [5, 4, 3, 2, 1])).toBe(1);
});

test('alternating up and down', () => {
  expect(solve(4, [1, 3, 2, 4])).toBe(3);
});

test('random small', () => {
  expect(solve(3, [3, 1, 2])).toBe(2);
});

test('example input 2', () => {
  expect(solve(5, [4, 2, 1, 3, 5])).toBe(3);
});

test('example input 4', () => {
  expect(solve(10, [1, 9, 8, 10, 2, 3, 4, 6, 5, 7])).toBe(6);
});

test('duplicates', () => {
  expect(solve(6, [2, 2, 2, 2, 2, 2])).toBe(1);
});

test('empty array', () => {
  expect(solve(0, [])).toBe(0);
});

test('two elements increasing', () => {
  expect(solve(2, [1, 2])).toBe(2);
});

test('two elements decreasing', () => {
  expect(solve(2, [2, 1])).toBe(1);
});

test('multi-plateau', () => {
  expect(solve(7, [3, 1, 2, 2, 1, 5, 3])).toBe(3);
});

test('long increasing tail', () => {
  expect(solve(8, [5, 4, 3, 2, 1, 6, 7, 8])).toBe(5);
});