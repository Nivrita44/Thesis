// @ts-nocheck
import { solve } from '../../../solutions-descriptive/16.js';

test('Typical: Possible to transform', () => {
  expect(solve('ABBA\n1 1 1 1')).toBe('YES');
});

test('Edge: Minimum input string', () => {
  expect(solve('A\n1 0 0 0')).toBe('YES');
});

test('Edge: All same character, all zeros', () => {
  expect(solve('BBBBB\n0 5 0 0')).toBe('YES');
});

test('Boundary: Large string, basic feasibility', () => {
  const s = 'A'.repeat(50000) + 'B'.repeat(50000);
  expect(solve(`${s}\n50000 50000 0 0`)).toBe('YES');
});

test('Boundary: Large string, impossible configuration', () => {
  const s = 'A'.repeat(50000) + 'B'.repeat(50000);
  expect(solve(`${s}\n49999 50001 0 0`)).toBe('NO');
});

test('Edge: Odd-length alternating pattern', () => {
  expect(solve('ABABA\n2 2 1 0')).toBe('YES');
});

test('Invalid: Empty string', () => {
  expect(solve('\n0 0 0 0')).toBe('YES');
});

test('Edge: High ab, low ba', () => {
  expect(solve('ABAB\n0 0 2 0')).toBe('YES');
});