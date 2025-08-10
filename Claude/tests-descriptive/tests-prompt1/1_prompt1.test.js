import { solve } from '../../../solutions-descriptive/1.js';

test('example case with x=3, y=24, k=3', () => {
  expect(solve(3n, 24n, 3n)).toBe(2n);
});

test('edge case where x equals y', () => {
  expect(solve(5n, 5n, 2n)).toBe(0n);
});

test('large numbers case', () => {
  expect(solve(2n, 1000000n, 5n)).toBe(-1n);
});

test('minimal input case', () => {
  expect(solve(1n, 1n, 1n)).toBe(0n);
});

test('impossible transformation case', () => {
  expect(solve(7n, 11n, 2n)).toBe(-1n);
});

test('single operation multiplication case', () => {
  expect(solve(2n, 6n, 3n)).toBe(1n);
});

test('single operation power case', () => {
  expect(solve(2n, 4n, 2n)).toBe(1n);
});

test('multiple operations required case', () => {
  expect(solve(2n, 16n, 2n)).toBe(2n);
});
