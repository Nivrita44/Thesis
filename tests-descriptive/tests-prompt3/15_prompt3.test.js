import { solve } from '../../solutions-descriptive/15.js';

test('basic example with middle untouched', () => {
  expect(
    solve(5, 3, 3, [1, 5, 2])
  ).toBe('3 3 3');
});

test('move joker itself as first operation', () => {
  expect(
    solve(5, 2, 3, [2, 3, 4])
  ).toBe('5 5 5');
});

test('move positions before and after joker', () => {
  expect(
    solve(7, 4, 4, [2, 6, 1, 7])
  ).toBe('4 4 4 5');
});

test('minimal size deck', () => {
  expect(
    solve(2, 1, 2, [2, 1])
  ).toBe('2 2');
});

test('move all different positions without hitting joker', () => {
  expect(
    solve(6, 3, 3, [1, 2, 6])
  ).toBe('3 3 3');
});

test('all operations pick the joker', () => {
  expect(
    solve(8, 5, 3, [5, 5, 5])
  ).toBe('8 8 8');
});

test('large n, move not touching joker', () => {
  expect(
    solve(1000000000, 100, 2, [1, 1000000000])
  ).toBe('1 1');
});

test('move ranges left then right of the joker', () => {
  expect(
    solve(10, 5, 6, [1, 2, 3, 7, 8, 10])
  ).toBe('5 5 5 5 5 6');
});

test('move covers joker range exactly', () => {
  expect(
    solve(5, 3, 3, [2, 3, 4])
  ).toBe('3 5 5');
});

test('move ascending then descending position', () => {
  expect(
    solve(6, 4, 4, [1, 2, 5, 4])
  ).toBe('4 4 4 6');
});

test('edge case: pick lowest and highest positions repeatedly', () => {
  expect(
    solve(5, 3, 4, [1, 5, 1, 5])
  ).toBe('3 3 3 4');
});

test('joker at bottom', () => {
  expect(
    solve(10, 10, 3, [2, 7, 10])
  ).toBe('1 1 10');
});

test('joker at top', () => {
  expect(
    solve(10, 1, 3, [8, 1, 2])
  ).toBe('1 10 10');
});