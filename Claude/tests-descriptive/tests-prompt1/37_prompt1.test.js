import { solve } from '../../../solutions-descriptive/37.js'

test('example case from description', () => {
  expect(solve(4n, 4n, [1n, 2n, 3n, 2n])).toBe(2n);
});

test('minimal array case with single element', () => {
  expect(solve(1n, 0n, [5n])).toBe(1n);
});

test('case where no beautiful subarray exists', () => {
  expect(solve(3n, 10n, [1n, 2n, 3n])).toBe(-1n);
});

test('case where full array is needed', () => {
  expect(solve(5n, 7n, [1n, 2n, 3n, 4n, 5n])).toBe(3n);
});

test('case with all zeros', () => {
  expect(solve(4n, 1n, [0n, 0n, 0n, 0n])).toBe(-1n);
});

test('large values case', () => {
  expect(solve(6n, 1000000000n, [1000000000n, 999999999n, 999999998n, 1000000000n, 999999999n, 1000000000n])).toBe(2n);
});

test('case with repeating numbers', () => {
  expect(solve(5n, 3n, [2n, 2n, 2n, 2n, 2n])).toBe(-1n);
});

test('case with power of 2 values', () => {
  expect(solve(4n, 8n, [4n, 8n, 16n, 32n])).toBe(2n);
});
