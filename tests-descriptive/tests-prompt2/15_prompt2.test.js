import { solve } from '../../solutions-descriptive/15.js';

test('Typical case with current in middle and varied selections', () => {
  expect(solve(10, 5, 4, [2, 8, 5, 9])).toBe('1 1 10 10');
});

test('All selections to the left', () => {
  expect(solve(6, 3, 3, [1, 2, 1])).toBe('1 1 6');
});

test('All selections to the right', () => {
  expect(solve(7, 4, 3, [6, 7, 6])).toBe('1 1 7');
});

test('Always select the current position', () => {
  expect(solve(5, 3, 3, [3, 3, 3])).toBe('5 5 5');
});

test('No selections at boundary', () => {
  expect(solve(5, 3, 2, [2, 4])).toBe('1 1');
});

test('Single element array', () => {
  expect(solve(1, 1, 1, [1])).toBe('1');
});

test('Large array, single selection, left edge', () => {
  expect(solve(1000, 500, 1, [1])).toBe('1');
});

test('Large array, single selection, right edge', () => {
  expect(solve(1000, 500, 1, [1000])).toBe('1');
});

test('Edge case: select both edges sequentially', () => {
  expect(solve(4, 2, 2, [1, 4])).toBe('1 1');
});

test('Select all points around initial point then to boundary', () => {
  expect(solve(5, 3, 5, [2, 4, 1, 5, 3])).toBe('1 1 5 5 5');
});

test('Minimum values', () => {
  expect(solve(1, 1, 1, [1])).toBe('1');
});

test('Maximum visible before skipping middle', () => {
  expect(solve(7, 4, 2, [2, 6])).toBe('1 1');
});

test('Middle is not selected until last', () => {
  expect(solve(3, 2, 3, [1, 3, 2])).toBe('1 1 3');
});

test('Selection oscillates but never on middle', () => {
  expect(solve(5, 3, 4, [2, 4, 2, 4])).toBe('1 1 1 1');
});

test('Long sequence, always on center', () => {
  expect(solve(10, 5, 7, [5,5,5,5,5,5,5])).toBe('10 10 10 10 10 10 10');
});