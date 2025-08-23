// @ts-nocheck
import { solve } from '../../../solutions-algorithm/20.js';

test('average of [50, 50, 100] over 3 types', () => {
  expect(solve(3, [50, 50, 100])).toBe(66.66666666666667);
});

test('average of [0, 25, 50, 75] over 4 types', () => {
  expect(solve(4, [0, 25, 50, 75])).toBe(37.5);
});

test('average of [0, 1, 8] over 3 types', () => {
  expect(solve(3, [0, 1, 8])).toBe(3);
});

test('average of [100] over 1 type', () => {
  expect(solve(1, [100])).toBe(100);
});

test('average of [0, 0, 0, 0] over 4 types', () => {
  expect(solve(4, [0, 0, 0, 0])).toBe(0);
});

test('average of [100, 100, 100, 100] over 4 types', () => {
  expect(solve(4, [100, 100, 100, 100])).toBe(100);
});

test('average of [33.3, 66.6] over 2 types', () => {
  expect(solve(2, [33.3, 66.6])).toBe(49.95);
});

test('edge case: types = 0 should be NaN', () => {
  expect(solve(0, [])).toBeNaN();
});

test('edge case: percents has more items than types, only first N used', () => {
  expect(solve(2, [50, 50, 100])).toBe(50);
});

test('edge case: percents shorter than types, missing values treated as 0', () => {
  expect(solve(3, [20])).toBeCloseTo(6.666666666666667);
});