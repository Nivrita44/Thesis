import { solve } from '../../solutions-algorithm/28.js';

test('A and B not aligned, F not on path', () => {
  expect(solve([1, 2], [3, 4], [5, 5])).toBe(4);
});

test('A and B are vertically aligned, F not between', () => {
  expect(solve([2, 3], [2, 8], [1, 5])).toBe(5);
});

test('A and B are vertically aligned, F between', () => {
  expect(solve([3, 2], [3, 6], [3, 4])).toBe(6);
});

test('A and B are horizontally aligned, F not between', () => {
  expect(solve([4, 7], [8, 7], [4, 8])).toBe(4);
});

test('A and B are horizontally aligned, F between', () => {
  expect(solve([6, 5], [2, 5], [4, 5])).toBe(6);
});

test('A and B aligned, F at one end but not between', () => {
  expect(solve([7, 2], [7, 5], [7, 2])).toBe(3);
  expect(solve([7, 2], [7, 5], [7, 5])).toBe(3);
});

test('A and B diagonal, F on non-path cell', () => {
  expect(solve([1, 1], [4, 4], [2, 5])).toBe(6);
});

test('All coordinates are at maximum, F not interfering', () => {
  expect(solve([1000, 1000], [999, 1000], [998, 998])).toBe(1);
});

test('A and B are horizontally aligned, F not exactly between but on line', () => {
  expect(solve([10, 10], [13, 10], [12, 10])).toBe(5);
});