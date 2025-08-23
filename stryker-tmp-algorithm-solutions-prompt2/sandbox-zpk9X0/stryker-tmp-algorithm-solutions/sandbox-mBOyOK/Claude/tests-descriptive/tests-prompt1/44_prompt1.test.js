// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/44.js'

test('Example case from description - single pile with non-prime stones', () => {
  expect(solve(1, [4])).toBe('Alice');
});

test('Edge case - single pile with prime number', () => {
  expect(solve(1, [7])).toBe('Alice');
});

test('Large input case - multiple large piles', () => {
  expect(solve(3, [1000000, 2000000, 3000000])).toBe('Alice');
});

test('Minimal case - single pile with 1 stone', () => {
  expect(solve(1, [1])).toBe('Bob');
});

test('Corner case - all piles have 1 stone', () => {
  expect(solve(4, [1, 1, 1, 1])).toBe('Bob');
});

test('Generic case 1 - mixed pile sizes', () => {
  expect(solve(3, [2, 3, 4])).toBe('Alice');
});

test('Generic case 2 - all even numbers', () => {
  expect(solve(4, [2, 4, 6, 8])).toBe('Alice');
});

test('Generic case 3 - mixed prime and composite', () => {
  expect(solve(5, [2, 3, 4, 5, 6])).toBe('Alice');
});
