import { solve } from '../../solutions-descriptive/26.js';

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

test('typical alternating pattern, 0101', () => {
  expect(solve(4, '0101')).toBe(2);
});

test('typical alternating pattern, 1010', () => {
  expect(solve(4, '1010')).toBe(2);
});

test('edge case, single 1 in middle', () => {
  expect(solve(5, '00100')).toBe(5);
});

test('edge case, single 1 at start', () => {
  expect(solve(5, '10000')).toBe(5);
});

test('edge case, single 1 at end', () => {
  expect(solve(5, '00001')).toBe(5);
});

test('1-filled clusters', () => {
  expect(solve(7, '0111011')).toBe(4);
});

test('clusters of 1s separated by 0s', () => {
  expect(solve(8, '00111001')).toBe(4);
});

test('input includes both edge and middle 1s', () => {
  expect(solve(7, '1001001')).toBe(6);
});

test('long zeros then one 1', () => {
  expect(solve(8, '00000001')).toBe(8);
});

test('long zeros with one 1 at front', () => {
  expect(solve(8, '10000000')).toBe(8);
});

test('dense ones in middle', () => {
  expect(solve(9, '001111100')).toBe(5);
});

test('no 1s at all', () => {
  expect(solve(5, '00000')).toBe(10);
});

test('alternating with longer run of ones', () => {
  expect(solve(7, '0101110')).toBe(3);
});

test('long run of ones', () => {
  expect(solve(8, '11111111')).toBe(1);
});

test('run of zeros then alternating', () => {
  expect(solve(8, '00001101')).toBe(5);
});

test('run of ones then zeros', () => {
  expect(solve(6, '111100')).toBe(2);
});