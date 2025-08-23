// @ts-nocheck
import { solve } from '../../../solutions-descriptive/28.js'

test('example from description', () => {
  expect(solve(8n, 3n)).toBe(10n);
});

test('edge case: both numbers are zero', () => {
  expect(solve(0n, 0n)).toBe(0n);
});


test('corner case: both numbers are equal and large', () => {
  expect(solve(123456789123456789n, 123456789123456789n)).toBe(0n);
});



test('random valid case, one is double the other', () => {
  expect(solve(16n, 8n)).toBe(2n);
});




