import { solve } from '../../../solutions-algorithm/42.js';

test('example from description with [2,3,1]', () => {
  expect(solve([2n, 3n, 1n])).toBe(2n);
});

test('minimal case with 2 elements in order', () => {
  expect(solve([1n, 2n])).toBe(2n);
});

test('minimal case with 2 elements out of order', () => {
  expect(solve([2n, 1n])).toBe(1n);
});

test('large case with 10 elements', () => {
  expect(solve([10n, 9n, 8n, 7n, 6n, 5n, 4n, 3n, 2n, 1n])).toBe(5n);
});

test('already sorted sequence', () => {
  expect(solve([1n, 2n, 3n, 4n, 5n])).toBe(5n);
});

test('alternating sequence', () => {
  expect(solve([2n, 1n, 4n, 3n, 6n, 5n])).toBe(3n);
});

test('middle heavy sequence', () => {
  expect(solve([1n, 5n, 4n, 3n, 2n])).toBe(2n);
});

test('single swap needed', () => {
  expect(solve([1n, 3n, 2n, 4n])).toBe(3n);
});