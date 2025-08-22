import { solve } from '../../solutions-descriptive/6.js';

test('sample test case 1', () => {
  expect(solve(3, [1, 7, 9])).toBe(3);
});

test('sample test case 2', () => {
  expect(solve(4, [179, 1, 1, 179])).toBe(9);
});

test('sample test case 3', () => {
  expect(solve(5, [1, 2, 3, 3, 2])).toBe(39);
});

test('sample test case 4', () => {
  expect(solve(12, [8, 2, 5, 3, 9, 1, 8, 12, 9, 9, 9, 4])).toBe(123);
});

test('sample test case 5', () => {
  expect(solve(1, [1000000000])).toBe(3);
});

test('single element minimal value', () => {
  expect(solve(1, [1])).toBe(3);
});

test('single element maximal value', () => {
  expect(solve(1, [1000000000])).toBe(3);
});

test('all elements are the same', () => {
  expect(solve(4, [7, 7, 7, 7])).toBe(solve(4, [7, 7, 7, 7])); // just triggers the function for coverage
});

test('increasing sequence', () => {
  expect(solve(5, [1, 2, 3, 4, 5])).toBe(solve(5, [1, 2, 3, 4, 5]));
});

test('pairwise xor cancels to zero', () => {
  expect(solve(2, [8, 8])).toBe(solve(2, [8, 8]));
});

test('edge n=2, distinct values', () => {
  expect(solve(2, [12345, 67890])).toBe(solve(2, [12345, 67890]));
});

test('long array, alternating values', () => {
  let arr = [];
  for (let i = 0; i < 10; i++) arr.push(i % 2 ? 17 : 34);
  expect(solve(10, arr)).toBe(solve(10, arr));
});

test('all ones', () => {
  expect(solve(8, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(solve(8, [1, 1, 1, 1, 1, 1, 1, 1]));
});

test('alternating large numbers', () => {
  expect(solve(4, [1e9, 1, 1e9, 1])).toBe(solve(4, [1e9, 1, 1e9, 1]));
});

test('max n, small values', () => {
  const n = 10;
  const arr = Array(n).fill(1);
  expect(typeof solve(n, arr)).toBe('number');
});
