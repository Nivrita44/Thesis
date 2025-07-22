import { solve } from '../../solutions-descriptive/37.js';

test('xorLimit is 0, should return "1"', () => {
  expect(solve(3, 0, [1, 2, 3])).toBe('1');
  expect(solve(1, 0, [42])).toBe('1');
});

test('diversePrefixFound, should return "2"', () => {
  expect(solve(3, 2, [8, 16, 8])).toBe('2');
  expect(solve(4, 5, [24, 56, 45, 24])).toBe('2');
});

test('all prefix groups same, no solution, returns "-1"', () => {
  expect(solve(4, 1, [8, 9, 8, 8])).toBe('-1');
  expect(solve(2, 3, [4, 4])).toBe('-1');
});

test('all prefix groups same, has solution', () => {
  expect(solve(3, 1, [2, 3, 2])).toBe('2');
  expect(solve(5, 1, [2, 2, 3, 2, 2])).toBe('2');
});

test('minimal array, length 1', () => {
  expect(solve(1, 1, [100])).toBe('-1');
});

test('edge case xorLimit one bit', () => {
  expect(solve(3, 1, [4, 5, 4])).toBe('2');
  expect(solve(2, 1, [5, 5])).toBe('-1');
});

test('negative case, long array no solution', () => {
  const arr = Array(10).fill(32);
  expect(solve(arr.length, 7, arr)).toBe('-1');
});

test('xorLimit is power of two', () => {
  expect(solve(3, 8, [8, 16, 24])).toBe('2');
  expect(solve(3, 8, [9, 9, 9])).toBe('-1');
});

test('all values same, diverse prefix not found, no solution', () => {
  expect(solve(5, 2, [4, 4, 4, 4, 4])).toBe('-1');
  expect(solve(2, 2, [7, 7])).toBe('-1');
});

test('diverse lower bits solution, smallest valid segment', () => {
  expect(solve(6, 1, [4, 4, 4, 5, 4, 4])).toBe('2');
});

test('minimumLength > 2, correct minimal segment found', () => {
  expect(solve(5, 1, [1, 1, 3, 1, 1])).toBe('2');
  expect(solve(6, 1, [2, 3, 2, 3, 2, 3])).toBe('2');
});

test('xorLimit bigger than all array elements, diverse prefix', () => {
  expect(solve(3, 1024, [2, 3, 5])).toBe('2');
});

test('single bit difference creates valid segment', () => {
  expect(solve(4, 2, [2, 2, 0, 2])).toBe('2');
});

test('large input with identical elements, no solution', () => {
  const arr = Array(1000).fill(59);
  expect(solve(arr.length, 31, arr)).toBe('-1');
});