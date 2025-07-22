import { solve } from '../../solutions-descriptive/46.js';

test('solve returns 0 when k is 0', () => {
  expect(solve(0, [5, 2, 7])).toBe(0);
});

test('solve returns the largest possible value for k = 1', () => {
  expect(solve(1, [15, 7, 9])).toBe(15);
  expect(solve(1, [1, 2, 4])).toBe(4);
  expect(solve(1, [31])).toBe(31);
  expect(solve(1, [0])).toBe(0);
});

test('solve fills bits greedily from largest sizes', () => {
  expect(solve(2, [5, 2, 8])).toBe(13);
  expect(solve(2, [4, 4])).toBe(6);
});

test('solve handles all equal sizes', () => {
  expect(solve(3, [5, 5, 5])).toBe(7);
  expect(solve(2, [8, 8, 8])).toBe(12);
});

test('solve handles k larger than array length', () => {
  expect(solve(5, [1, 2])).toBe(3);
  expect(solve(3, [3])).toBe(3);
  expect(solve(10, [0, 0, 0])).toBe(0);
});

test('solve handles large input sizes and high bits', () => {
  expect(solve(3, [1048575, 1048575, 1048575])).toBe(7);
  expect(solve(3, [1024, 512, 256])).toBe(1792);
});

test('solve returns 0 on all zeroes', () => {
  expect(solve(3, [0, 0, 0])).toBe(0);
});

test('solve returns the correct or operation on maximal possible k', () => {
  expect(solve(5, [1,2,4,8,16])).toBe(31);
});

test('solve prioritizes setting bits from higher sizes', () => {
  expect(solve(2, [7, 8, 1])).toBe(15);
  expect(solve(2, [9, 6])).toBe(15);
});

test('solve handles edge bits', () => {
  expect(solve(2, [524288, 262144])).toBe(786432);
});