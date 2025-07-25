import { solve } from '../../solutions-algorithm/29.js';

test('pin code 1234', () => {
  expect(solve('1234')).toBe(8);
});

test('pin code 5555', () => {
  expect(solve('5555')).toBe(8);
});

test('pin code 9876', () => {
  expect(solve('9876')).toBe(16);
});

test('pin code 0000', () => {
  expect(solve('0000')).toBe(16);
});

test('pin code 1900', () => {
  expect(solve('1900')).toBe(14);
});

test('pin code 2468', () => {
  expect(solve('2468')).toBe(12);
});

test('pin code 1357', () => {
  expect(solve('1357')).toBe(12);
});

test('pin code 1098', () => {
  expect(solve('1098')).toBe(18);
});

test('pin code 4321', () => {
  expect(solve('4321')).toBe(14);
});

test('pin code 5678', () => {
  expect(solve('5678')).toBe(10);
});