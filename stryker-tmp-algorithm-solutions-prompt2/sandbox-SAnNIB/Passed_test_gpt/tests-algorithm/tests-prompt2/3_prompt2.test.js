// @ts-nocheck
import { solve } from '../../../solutions-algorithm/3.js';

test('all elements identical', () => {
  expect(solve(4, [5, 5, 5, 5])).toBe('YES');
});

test('consecutive numbers with duplicate', () => {
  expect(solve(3, [1, 2, 2])).toBe('YES');
});

test('one gap', () => {
  expect(solve(3, [1, 2, 4])).toBe('NO');
});

test('multiple elements non-consecutive', () => {
  expect(solve(4, [1, 3, 4, 4])).toBe('NO');
});

test('single element', () => {
  expect(solve(1, [100])).toBe('YES');
});

test('unsorted but consecutive numbers', () => {
  expect(solve(5, [3, 1, 2, 4, 5])).toBe('YES');
});

test('numbers with a large gap', () => {
  expect(solve(2, [100, 1])).toBe('NO');
});

test('two elements consecutive', () => {
  expect(solve(2, [7, 8])).toBe('YES');
});

test('two elements, not consecutive', () => {
  expect(solve(2, [7, 9])).toBe('NO');
});

test('negative numbers consecutive', () => {
  expect(solve(3, [-2, -3, -1])).toBe('YES');
});

test('negative numbers with gap', () => {
  expect(solve(3, [-2, -3, 0])).toBe('NO');
});

test('long sequence without gap', () => {
  expect(solve(6, [4, 8, 5, 7, 6, 9])).toBe('YES');
});

test('long sequence with gap', () => {
  expect(solve(6, [4, 8, 5, 7, 6, 10])).toBe('NO');
});

test('repeating non-consecutive numbers', () => {
  expect(solve(4, [1, 1, 3, 3])).toBe('NO');
});

test('all zeros', () => {
  expect(solve(3, [0, 0, 0])).toBe('YES');
});