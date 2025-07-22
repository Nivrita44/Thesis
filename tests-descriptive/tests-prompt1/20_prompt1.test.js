import solve from '../../solutions-descriptive/20.js';

test('example 1', () => {
  expect(solve(3, [2, 2, 2])).toBe(0);
});

test('simple possible 1', () => {
  expect(solve(2, [5, 1])).toBe(2);
});

test('simple possible 2', () => {
  expect(solve(4, [10, 10, 10, 10])).toBe(0);
});

test('impossible 1', () => {
  expect(solve(2, [1, 1])).toBe(-1);
});

test('impossible 2', () => {
  expect(solve(3, [2, 2, 3])).toBe(-1);
});

test('even distribution, large', () => {
  expect(solve(5, [6, 6, 6, 6, 6])).toBe(0);
});

test('simple redistribution', () => {
  expect(solve(3, [4, 2, 2])).toBe(1);
});

test('high/low pairing impossible', () => {
  expect(solve(3, [1, 5, 2])).toBe(-1);
});

test('all ones impossible', () => {
  expect(solve(4, [1, 1, 1, 1])).toBe(-1);
});

test('one high, rest minimal', () => {
  expect(solve(3, [10, 1, 1])).toBe(6);
});

test('edge large value', () => {
  expect(solve(2, [1000000000, 1000000000])).toBe(0);
});

test('n = 2, impossible', () => {
  expect(solve(2, [3, 1])).toBe(-1);
});

test('n = 3, possible', () => {
  expect(solve(3, [8, 2, 4])).toBe(2);
});

test('n = 4, redistribution', () => {
  expect(solve(4, [6, 4, 2, 6])).toBe(2);
});