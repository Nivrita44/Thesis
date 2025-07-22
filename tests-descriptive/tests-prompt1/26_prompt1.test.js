import { solve } from '../../solutions-descriptive/26.js';

test('n=1, s=0', () => {
  expect(solve(1, '0')).toBe(1);
});

test('n=1, s=1', () => {
  expect(solve(1, '1')).toBe(1);
});

test('n=2, s=00', () => {
  expect(solve(2, '00')).toBe(3);
});

test('n=2, s=01', () => {
  expect(solve(2, '01')).toBe(2);
});

test('n=3, s=000', () => {
  expect(solve(3, '000')).toBe(5);
});

test('n=3, s=011', () => {
  expect(solve(3, '011')).toBe(4);
});

test('n=4, s=1010', () => {
  expect(solve(4, '1010')).toBe(4);
});

test('n=5, s=11111', () => {
  expect(solve(5, '11111')).toBe(5);
});

test('n=5, s=00000', () => {
  expect(solve(5, '00000')).toBe(9);
});

test('n=6, s=001100', () => {
  expect(solve(6, '001100')).toBe(8);
});

test('n=10, s=0101010101', () => {
  expect(solve(10, '0101010101')).toBe(10);
});

test('all ones n=7', () => {
  expect(solve(7, '1111111')).toBe(7);
});

test('all zeros n=8', () => {
  expect(solve(8, '00000000')).toBe(15);
});

test('alternating start with 1, n=4', () => {
  expect(solve(4, '1010')).toBe(4);
});

test('random mid case n=6', () => {
  expect(solve(6, '110010')).toBe(7);
});