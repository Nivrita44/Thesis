import { solve } from '../../solutions-descriptive/38.js';

test('basic case 1', () => {
  expect(solve(1, '0')).toBe(0);
});

test('basic case 2', () => {
  expect(solve(2, '00')).toBe(1);
});

test('basic case 3', () => {
  expect(solve(2, '01')).toBe(0);
});

test('basic case 4', () => {
  expect(solve(2, '10')).toBe(0);
});

test('three chars all zero', () => {
  expect(solve(3, '000')).toBe(3);
});

test('three chars mixed', () => {
  expect(solve(3, '101')).toBe(0);
});

test('three chars with ones and zeros', () => {
  expect(solve(3, '100')).toBe(0);
  expect(solve(3, '001')).toBe(0);
});

test('four chars all zeros', () => {
  expect(solve(4, '0000')).toBe(6);
});

test('all ones', () => {
  expect(solve(4, '1111')).toBe(0);
});

test('alternate 01', () => {
  expect(solve(4, '0101')).toBe(0);
});

test('larger n, edge only zeros', () => {
  expect(solve(5, '00001')).toBe(4);
});

test('mid zeros', () => {
  expect(solve(5, '11000')).toBe(4);
});

test('longer random 1', () => {
  expect(solve(6, '100011')).toBe(3);
});

test('no possible moves', () => {
  expect(solve(5, '11111')).toBe(0);
});

test('mixed zeros and ones', () => {
  expect(solve(5, '00100')).toBe(5);
});

test('possible pair at the end', () => {
  expect(solve(5, '10000')).toBe(4);
});

test('single zero', () => {
  expect(solve(2, '01')).toBe(0);
  expect(solve(2, '10')).toBe(0);
});

test('n=3, all pairs', () => {
  expect(solve(3, '011')).toBe(0);
  expect(solve(3, '110')).toBe(0);
  expect(solve(3, '101')).toBe(0);
});

test('maximal size single zero', () => {
  expect(solve(5, '10001')).toBe(1);
});

test('interleaved zeros example', () => {
  expect(solve(6, '010101')).toBe(0);
});

test('long chain zeros', () => {
  expect(solve(7, '0000000')).toBe(21);
});