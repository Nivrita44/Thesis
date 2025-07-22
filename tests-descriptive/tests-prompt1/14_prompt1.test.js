import { solve } from '../../solutions-descriptive/14.js';

test('example 1', () => {
  expect(solve(1, 2, 10, [0])).toBe(20);
});

test('k equals to l', () => {
  expect(solve(2, 5, 5, [0, 2])).toBe(10);
});

test('scarecrows backward', () => {
  expect(solve(3, 3, 7, [0, 1, 2])).toBe(14);
});

test('scarecrow at l', () => {
  expect(solve(2, 2, 8, [0, 8])).toBe(16);
});

test('many scarecrows at start', () => {
  expect(solve(4, 1, 5, [0, 0, 0, 0])).toBe(10);
});

test('scarecrows at every second', () => {
  expect(solve(5, 2, 10, [0, 2, 4, 6, 8])).toBe(20);
});

test('single large step', () => {
  expect(solve(1, 100, 100, [0])).toBe(200);
});

test('scarecrow far behind', () => {
  expect(solve(1, 5, 20, [0])).toBe(40);
});

test('scarecrow just at the end', () => {
  expect(solve(2, 3, 10, [0, 10])).toBe(20);
});

test('sparse scarecrows', () => {
  expect(solve(3, 4, 15, [0, 5, 10])).toBe(30);
});

test('crow already at scarecrow', () => {
  expect(solve(1, 1, 1, [0])).toBe(2);
});

test('biggest constraint', () => {
  expect(solve(2, 100000000, 100000000, [0, 100000000])).toBe(200000000);
});