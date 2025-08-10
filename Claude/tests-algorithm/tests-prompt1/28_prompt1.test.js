import { solve } from '../../../solutions-algorithm/28.js'

test('example case', () => {
  expect(solve(2, 2, 4, 2, 3, 2)).toBe(4n);
});

test('edge case with blocked path', () => {
  expect(solve(1, 1, 3, 1, 2, 1)).toBe(4n);
});

test('large coordinates', () => {
  expect(solve(1, 1, 1000, 1000, 500, 500)).toBe(1998n);
});

test('minimal distance case', () => {
  expect(solve(1, 1, 1, 2, 3, 3)).toBe(1n);
});

test('forbidden cell not affecting path', () => {
  expect(solve(1, 1, 5, 1, 1, 5)).toBe(4n);
});

test('diagonal path blocked', () => {
  expect(solve(1, 1, 3, 3, 2, 2)).toBe(4n);
});

test('same row different columns', () => {
  expect(solve(1, 5, 5, 5, 3, 4)).toBe(4n);
});

test('same column different rows', () => {
  expect(solve(3, 1, 3, 5, 4, 3)).toBe(4n);
});

test('points forming right angle', () => {
  expect(solve(1, 1, 5, 3, 3, 2)).toBe(6n);
});