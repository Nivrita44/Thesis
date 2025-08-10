import { solve } from '../../../solutions-descriptive/13.js'

test('example case from description with [1, 2, 2]', () => {
  expect(solve([1, 2, 2])).toBe(4n);
});

test('minimal single element array', () => {
  expect(solve([5])).toBe(1n);
});

test('edge case with all same elements', () => {
  expect(solve([3, 3, 3, 3])).toBe(10n);
});

test('large array with alternating values', () => {
  expect(solve([1, 2, 1, 2, 1, 2, 1, 2])).toBe(20n);
});

test('tricky case with mixed medians', () => {
  expect(solve([1, 3, 2, 3, 1])).toBe(9n);
});

test('random valid case with even length', () => {
  expect(solve([4, 4, 5, 5])).toBe(7n);
});

test('random valid case with ascending values', () => {
  expect(solve([1, 2, 3, 4, 5])).toBe(9n);
});

test('maximum length case with repeating pattern', () => {
  expect(solve([1, 2, 1, 2, 1, 2, 1, 2, 1, 2])).toBe(35n);
});
