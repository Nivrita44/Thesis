import { solve } from '../../solutions-descriptive/41.js'

test('matches example case from description', () => {
  expect(solve([1n, 2n, 5n, 10n], 1n, 10n)).toBe(86n);
});

test('handles minimal input case', () => {
  expect(solve([1n], 1n, 1n)).toBe(1n);
});

test('handles negative numbers', () => {
  expect(solve([-5n, -3n, -1n], 1n, 6n)).toBe(-14n);
});

test('handles sequence with zeroes', () => {
  expect(solve([0n, 0n, 0n, 0n], 1n, 10n)).toBe(0n);
});

test('handles large range query', () => {
  expect(solve([10n, 10n, 10n, 10n, 10n], 1n, 15n)).toBe(450n);
});

test('handles partial range query', () => {
  expect(solve([1n, 2n, 3n, 4n], 3n, 7n)).toBe(24n);
});

test('handles single element range query', () => {
  expect(solve([5n, 5n, 5n], 4n, 4n)).toBe(5n);
});

test('handles mixed positive and negative numbers', () => {
  expect(solve([2n, -3n, 4n, -5n], 2n, 8n)).toBe(-4n);
});

test('handles maximum allowed input values', () => {
  expect(solve([10n, 10n, 10n, 10n, 10n], 10n, 15n)).toBe(150n);
});