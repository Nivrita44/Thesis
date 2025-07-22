import { solve } from '../../solutions-descriptive/21.js';

test('Base case: n=2, simple attractive, gcd !=1', () => {
  expect(solve([6, 9])).toBe(1);
});

test('Base case: n=2, attractiveness are coprime', () => {
  expect(solve([5, 8])).toBe(0);
});

test('n=3, multiple paths', () => {
  expect(solve([4, 8, 16])).toBe(2);
});

test('n=3, only direct edge', () => {
  expect(solve([6, 35, 10])).toBe(0);
});

test('n=3, one path through all', () => {
  expect(solve([6, 9, 15])).toBe(1);
});

test('n=3, no path possible', () => {
  expect(solve([5, 7, 11])).toBe(0);
});

test('n=4, path through multiple combinations', () => {
  expect(solve([6, 9, 15, 21])).toBe(3);
});

test('n=4, edge only at start and end', () => {
  expect(solve([2, 3, 5, 6])).toBe(1);
});

test('n=5, mixture, skips', () => {
  expect(solve([4, 9, 25, 36, 49])).toBe(3);
});

test('Big n, with many paths', () => {
  expect(solve([2, 4, 8, 16, 32, 64])).toBe(5);
});

test('n=2, both attractive same', () => {
  expect(solve([15, 15])).toBe(1);
});

test('n=6, alternating coprime', () => {
  expect(solve([6, 7, 6, 7, 6, 7])).toBe(0);
});

test('All elements are same', () => {
  expect(solve([12, 12, 12, 12, 12])).toBe(8);
});

test('No edges possible', () => {
  expect(solve([7, 11, 13, 17])).toBe(0);
});

test('First and last share only one factor', () => {
  expect(solve([10, 3, 5, 2])).toBe(1);
});