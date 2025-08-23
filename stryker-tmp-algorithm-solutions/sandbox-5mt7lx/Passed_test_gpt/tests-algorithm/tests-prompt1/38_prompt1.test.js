// @ts-nocheck
import {solve} from '../../../solutions-algorithm/38.js';

test('GCD of range where a == b', () => {
  expect(solve('1', '1')).toBe('1');
  expect(solve('15', '15')).toBe('15');
  expect(solve('1234567890987654321', '1234567890987654321')).toBe('1234567890987654321');
});

test('GCD of two consecutive integers', () => {
  expect(solve('5', '6')).toBe('1');
  expect(solve('99999999999999999999999999999', '100000000000000000000000000000')).toBe('1');
});

test('GCD of small range', () => {
  expect(solve('3', '5')).toBe('1');
  expect(solve('6', '8')).toBe('1');
});

test('GCD of range with a = 2, b = 4', () => {
  expect(solve('2', '4')).toBe('1');
});

test('GCD of a and large b', () => {
  expect(solve('10000000000000000000000000000000000000000000000000', '10000000000000000000000000000000000000000000000001')).toBe('1');
});

test('GCD for large (a == b)', () => {
  expect(solve('9999999999999999999999999999999999999999999', '9999999999999999999999999999999999999999999')).toBe('9999999999999999999999999999999999999999999');
});

test('GCD for wide range', () => {
  expect(solve('10', '20')).toBe('1');
  expect(solve('72', '84')).toBe('1');
});

test('GCD for range 2-3', () => {
  expect(solve('2', '3')).toBe('1');
});

test('GCD for two large equal numbers', () => {
  expect(solve('1010101010101010101010', '1010101010101010101010')).toBe('1010101010101010101010');
});

test('GCD for range starting at 1', () => {
  expect(solve('1', '100')).toBe('1');
});