// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/24.js';

test('all zeros', () => {
  expect(solve(0, 0, 0, 0)).toBe(0);
});

test('max group size is 1', () => {
  expect(solve(2, 3, 5, 1)).toBe(13);
});

test('total work is zero', () => {
  expect(solve(10, 25, 0, 8)).toBe(0);
});