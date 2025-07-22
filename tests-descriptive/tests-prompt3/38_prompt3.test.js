import { solve } from '../../solutions-descriptive/38.js';

test('single 0, length 1', () => {
  expect(solve('0')).toBe(1);
});

test('single 1, length 1', () => {
  expect(solve('1')).toBe(1);
});

test('00 string', () => {
  expect(solve('00')).toBe(2);
});

test('01 string', () => {
  expect(solve('01')).toBe(1);
});

test('10 string', () => {
  expect(solve('10')).toBe(1);
});

test('11 string', () => {
  expect(solve('11')).toBe(1);
});

test('000 string', () => {
  expect(solve('000')).toBe(4);
});

test('111 string', () => {
  expect(solve('111')).toBe(1);
});

test('010 string', () => {
  expect(solve('010')).toBe(2);
});

test('101 string', () => {
  expect(solve('101')).toBe(1);
});

test('110 string', () => {
  expect(solve('110')).toBe(1);
});

test('011 string', () => {
  expect(solve('011')).toBe(1);
});

test('edge case: all zeros (length 5)', () => {
  expect(solve('00000')).toBe(9);
});

test('edge case: all ones (length 4)', () => {
  expect(solve('1111')).toBe(1);
});

test('mixed 0011', () => {
  expect(solve('0011')).toBe(2);
});

test('mixed 0101', () => {
  expect(solve('0101')).toBe(2);
});

test('alternating 010101', () => {
  expect(solve('010101')).toBe(3);
});

test('alternating 101010', () => {
  expect(solve('101010')).toBe(2);
});

test('complex 00100', () => {
  expect(solve('00100')).toBe(5);
});

test('complex 10001', () => {
  expect(solve('10001')).toBe(2);
});

test('longer random string', () => {
  expect(solve('1100101')).toBe(3);
});

test('edge case: empty string', () => {
  expect(solve('')).toBe(0);
});

test('all zeros, length 20', () => {
  expect(solve('0'.repeat(20))).toBe(110);
});