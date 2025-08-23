// @ts-nocheck
import { solve } from '../../../solutions-descriptive/26.js';

test('all zeros, minimal', () => {
  expect(solve(1, '0')).toBe(0);
});

test('all zeros, length > 1', () => {
  expect(solve(4, '0000')).toBe(6);
});

test('all ones, minimal', () => {
  expect(solve(1, '1')).toBe(1);
});

test('all ones, regular', () => {
  expect(solve(5, '11111')).toBe(1);
});

test('no 1s at all', () => {
  expect(solve(5, '00000')).toBe(10);
});

test('long run of ones', () => {
  expect(solve(8, '11111111')).toBe(1);
});