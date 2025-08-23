// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/16.js';

test('example case - ABAB can be split as [AB, AB]', () => {
  expect(solve('ABAB', 0, 0, 2, 0)).toBe('YES');
});

test('single character case - A with no A allowed', () => {
  expect(solve('A', 0, 0, 0, 0)).toBe('NO');
});

test('minimum valid case - single character with allowance', () => {
  expect(solve('A', 1, 0, 0, 0)).toBe('YES');
});

test('maximum valid case - alternating long string', () => {
  expect(solve('ABABABABAB', 0, 0, 5, 0)).toBe('YES');
});

test('prohibited adjacent pairs case', () => {
  expect(solve('AA', 2, 2, 2, 2)).toBe('NO');
});

test('needs both AB and BA splits', () => {
  expect(solve('ABBA', 0, 0, 1, 1)).toBe('YES');
});

test('insufficient allowances case', () => {
  expect(solve('ABAB', 0, 0, 1, 0)).toBe('NO');
});

test('complex mixed case', () => {
  expect(solve('ABABABBA', 1, 1, 2, 1)).toBe('YES');
});
