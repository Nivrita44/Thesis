import { solve } from '../../solutions-algorithm/43.js'

test('example from description', () => {
  expect(solve([2, 0, 1])).toBe([1n, 1n]);
});

test('minimal case n=2', () => {
  expect(solve([1, 0])).toBe([0n, 1n]);
});

test('already sorted except two elements', () => {
  expect(solve([0, 2, 1, 3, 4])).toBe([1n, 1n]);
});

test('reverse sorted', () => {
  expect(solve([4, 3, 2, 1, 0])).toBe([6n, 10n]);
});

test('large input case', () => {
  const arr = Array.from({length: 10}, (_, i) => 9 - i);
  expect(solve(arr)).toBe([36n, 45n]);
});

test('single swap needed middle elements', () => {
  expect(solve([0, 2, 1, 3])).toBe([1n, 1n]);
});

test('multiple possible optimal swaps', () => {
  expect(solve([3, 1, 2, 0])).toBe([3n, 2n]);
});

test('almost sorted array', () => {
  expect(solve([0, 1, 3, 2, 4])).toBe([1n, 1n]);
});