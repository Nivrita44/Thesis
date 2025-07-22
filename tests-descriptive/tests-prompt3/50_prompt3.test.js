import { solve } from '../../solutions-descriptive/50.js';

test('Single element not present in LCM', () => {
  expect(solve([1])).toBe(1);
});

test('Two distinct elements, LCM not in array', () => {
  expect(solve([2, 3])).toBe(2);
});

test('Two same elements', () => {
  expect(solve([2, 2])).toBe(2);
});

test('Full array is its LCM', () => {
  expect(solve([2, 4, 8])).toBe(2);
});

test('Full array LCM is not in array', () => {
  expect(solve([2, 3, 5])).toBe(3);
});

test('Array with multiple copies', () => {
  expect(solve([2, 2, 2, 2])).toBe(4);
});

test('Array with one element large', () => {
  expect(solve([999999937])).toBe(1);
});

test('LCM exceeds 1e9', () => {
  expect(solve([1000000000, 999999999, 999999998])).toBe(3);
});

test('LCM exactly equals 1e9', () => {
  expect(solve([2, 5, 5, 5, 2, 2, 2, 5])).toBe(8);
});

test('Array with 1 and large composite', () => {
  expect(solve([1, 10])).toBe(2);
});

test('Array with 1 and 2', () => {
  expect(solve([1, 2])).toBe(2);
});

test('Prime numbers', () => {
  expect(solve([2, 3, 5, 7, 11])).toBe(5);
});

test('Array with LCM included', () => {
  expect(solve([2, 4, 6, 12])).toBe(3);
});

test('Only one element, zero edge', () => {
  expect(solve([10])).toBe(1);
});

test('Maximum edge, LCM large and not present', () => {
  const arr = Array.from({length: 2000}, (_, i) => i + 1);
  expect(solve(arr)).toBe(2000);
});

test('All elements the same', () => {
  expect(solve([7, 7, 7])).toBe(3);
});

test('Sparse array, potential for LCM to be absent', () => {
  expect(solve([4, 9, 25])).toBe(3);
});

test('Dense small values', () => {
  expect(solve([2, 4, 8, 16])).toBe(3);
});