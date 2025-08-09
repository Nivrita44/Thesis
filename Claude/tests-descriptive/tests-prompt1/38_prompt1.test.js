import { solve } from '../../solutions-descriptive/38.js';

test('example from description - 00101', () => {
  expect(solve("00101")).toBe(4n);
});

test('minimal string - single character', () => {
  expect(solve("0")).toBe(0n);
});

test('edge case - all zeros', () => {
  expect(solve("0000")).toBe(6n);
});

test('edge case - all ones', () => {
  expect(solve("1111")).toBe(0n);
});

test('tricky case - alternating bits', () => {
  expect(solve("01010")).toBe(0n);
});

test('upper bound case - long string', () => {
  expect(solve("0".repeat(100))).toBe(5050n);
});

test('generic case - mixed pattern', () => {
  expect(solve("001100")).toBe(9n);
});

test('generic case - complex pattern', () => {
  expect(solve("11000110")).toBe(10n);
});

test('corner case - two characters', () => {
  expect(solve("00")).toBe(1n);
});