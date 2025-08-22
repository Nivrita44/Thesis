import { solve } from '../../solutions-descriptive/46.js';

test('typical case 1', () => {
  expect(solve(2, [5, 6, 7])).toBe(7);
});

test('typical case 2', () => {
  expect(solve(3, [1, 2, 4, 7])).toBe(7);
});

test('size less than k', () => {
  expect(solve(4, [2, 4])).toBe(6);
});

test('all sizes are the same', () => {
  expect(solve(3, [3, 3, 3])).toBe(3);
});

test('k is 1', () => {
  expect(solve(1, [15, 3, 5])).toBe(15);
});

test('all zero sizes', () => {
  expect(solve(3, [0, 0, 0])).toBe(0);
});

test('sizes array length less than k', () => {
  expect(solve(5, [1,2,3])).toBe(3);
});

test('sizes is single element', () => {
  expect(solve(1, [17])).toBe(17);
});