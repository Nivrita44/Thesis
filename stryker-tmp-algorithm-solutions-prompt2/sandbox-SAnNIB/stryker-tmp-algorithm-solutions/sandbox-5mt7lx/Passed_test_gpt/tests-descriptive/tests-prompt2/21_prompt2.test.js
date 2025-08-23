// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/21.js';

test('typical case 1', () => {
  expect(solve([2, 6, 3, 4, 6])).toBe(5);
});

test('typical case 2', () => {
  expect(solve([4, 196, 2662, 2197, 121])).toBe(2);
});

test('minimal input 1', () => {
  expect(solve([2, 3])).toBe(0);
});

test('all same composite', () => {
  expect(solve([6, 6, 6, 6])).toBe(4);
});

test('large diverse numbers', () => {
  expect(solve([30, 42, 60, 66, 70])).toBe(8);
});