import { solve } from '../../solutions-descriptive/6.js'

test('example case from description', () => {
  expect(solve([1, 2, 3])).toBe(21n);
});

test('single element array', () => {
  expect(solve([5])).toBe(3n);
});

test('array with identical elements', () => {
  expect(solve([7, 7, 7, 7])).toBe(81n);
});

test('array with powers of 2', () => {
  expect(solve([1, 2, 4, 8, 16])).toBe(243n);
});

test('large array with maximum values', () => {
  expect(solve([1000000000, 999999999, 999999998])).toBe(21n);
});

test('array with alternating values', () => {
  expect(solve([1, 3, 1, 3])).toBe(81n);
});

test('array with sequential numbers', () => {
  expect(solve([1, 2, 3, 4, 5])).toBe(243n);
});

test('array with binary values', () => {
  expect(solve([1, 0, 1, 0])).toBe(81n);
});