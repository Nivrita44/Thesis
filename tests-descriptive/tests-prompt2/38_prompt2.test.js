import { solve } from '../../solutions-descriptive/38.js';

test('all zeros', () => {
  expect(solve('00000')).toBe(0);
});

test('all ones', () => {
  expect(solve('11111')).toBe(0);
});

test('alternating 01', () => {
  expect(solve('01010')).toBe(2);
});

test('alternating 10', () => {
  expect(solve('10101')).toBe(2);
});

test('single 0', () => {
  expect(solve('0')).toBe(0);
});

test('single 1', () => {
  expect(solve('1')).toBe(0);
});

test('empty string', () => {
  expect(solve('')).toBe(0);
});

test('two zeros', () => {
  expect(solve('00')).toBe(0);
});

test('two ones', () => {
  expect(solve('11')).toBe(0);
});

test('two 01', () => {
  expect(solve('01')).toBe(0);
});

test('11110000', () => {
  expect(solve('11110000')).toBe(0);
});

test('00001111', () => {
  expect(solve('00001111')).toBe(0);
});

test('0011', () => {
  expect(solve('0011')).toBe(0);
});

test('0100101', () => {
  expect(solve('0100101')).toBe(4);
});

test('long alternating pattern', () => {
  expect(solve('0101010101')).toBe(6);
});

test('mixed random', () => {
  expect(solve('0010100111100')).toBe(7);
});

test('three zeros', () => {
  expect(solve('000')).toBe(0);
});

test('one zero at the end', () => {
  expect(solve('11110')).toBe(0);
});

test('one one at the end', () => {
  expect(solve('00001')).toBe(0);
});