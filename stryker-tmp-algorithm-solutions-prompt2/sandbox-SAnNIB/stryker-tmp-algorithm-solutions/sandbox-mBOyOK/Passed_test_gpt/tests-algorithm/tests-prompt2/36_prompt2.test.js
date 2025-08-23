// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/36.js';

test('typical 5-digit number', () => {
  expect(solve('75619')).toEqual(['9', '7', '561']);
});

test('2-digit number', () => {
  expect(solve('89')).toEqual(['9', '8']);
});

test('3-digit number', () => {
  expect(solve('123')).toEqual(['3', '1', '2']);
});

test('single-digit number', () => {
  expect(solve('5')).toEqual(['5', '5']);
});

test('number with zeroes', () => {
  expect(solve('30507')).toEqual(['7', '3', '050']);
});

test('leading/trailing spaces in input', () => {
  expect(solve('   42   ')).toEqual(['2', '4']);
});

test('very large number', () => {
  expect(solve('12345678901234567890')).toEqual(['0', '1', '234567890123456789']);
});

test('multiple lines (should only use first line)', () => {
  expect(solve('9999\n8888')).toEqual(['9', '9', '99']);
});
