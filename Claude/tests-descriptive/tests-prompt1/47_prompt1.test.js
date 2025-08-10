import { solve } from '../../../solutions-descriptive/47.js';

test('example from description', () => {
  expect(solve([3, 2, 4], [1, 2, 1], 3n)).toBe(9n);
});

test('minimal case', () => {
  expect(solve([1], [1], 1n)).toBe(1n);
});

test('all elements consumed in single operation', () => {
  expect(solve([5, 5, 5], [10, 10, 10], 3n)).toBe(15n);
});

test('repeated operations on same element', () => {
  expect(solve([10], [3], 4n)).toBe(16n);
});

test('large k but limited by array depletion', () => {
  expect(solve([2, 3], [1, 1], 1000n)).toBe(7n);
});

test('optimal selection order matters', () => {
  expect(solve([5, 3, 4], [2, 1, 2], 4n)).toBe(14n);
});

test('large numbers within bounds', () => {
  expect(solve([1000000000, 999999999], [1, 999999999], 2n)).toBe(1999999999n);
});

test('single element multiple operations', () => {
  expect(solve([7], [2], 5n)).toBe(15n);
});

test('alternating between elements', () => {
  expect(solve([6, 6], [2, 3], 4n)).toBe(18n);
});
