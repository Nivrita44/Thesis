import { solve } from '../../../solutions-descriptive/39.js'

test('example case from description', () => {
  expect(solve([1, 0, 2, 0, 3])).toBe(3n);
});

test('minimal length sequence', () => {
  expect(solve([5])).toBe(1n);
});

test('sequence with all zeros', () => {
  expect(solve([0, 0, 0, 0])).toBe(1n);
});

test('sequence with strictly increasing values', () => {
  expect(solve([1, 2, 3, 4, 5])).toBe(5n);
});

test('sequence with repeated values', () => {
  expect(solve([2, 2, 2, 2])).toBe(4n);
});

test('large values in sequence', () => {
  expect(solve([1000000000, 999999999, 999999998])).toBe(3n);
});

test('mixed values with zero', () => {
  expect(solve([3, 0, 4, 0, 5, 1])).toBe(3n);
});

test('alternating high and low values', () => {
  expect(solve([5, 0, 4, 1, 3, 2])).toBe(2n);
});

test('sequence requiring careful mex calculation', () => {
  expect(solve([0, 1, 0, 2, 1, 3])).toBe(4n);
});
