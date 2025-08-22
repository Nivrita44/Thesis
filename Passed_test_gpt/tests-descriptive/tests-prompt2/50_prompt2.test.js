import { solve } from '../../solutions-descriptive/50.js';

test('two coprime numbers', () => {
  expect(solve([3, 5])).toBe(2);
});

test('numbers with no element equal to LCM', () => {
  expect(solve([2, 3, 5])).toBe(3);
});

test('three numbers, LCM not present', () => {
  expect(solve([2, 6, 8])).toBe(3);
});

test('mixed multiples', () => {
  expect(solve([4, 6, 9])).toBe(3);
});

test('array with repeated elements, LCM not present', () => {
  expect(solve([2, 2, 3])).toBe(3);
});