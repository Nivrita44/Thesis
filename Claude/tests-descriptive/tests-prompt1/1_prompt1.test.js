import { solve } from '../../solutions-descriptive/1.js'

test('basic example from description', () => {
  expect(solve(4n, 6n, 2n)).toBe(2n);
});

test('already equal numbers', () => {
  expect(solve(5n, 5n, 3n)).toBe(0n);
});

test('large numbers within bounds', () => {
  expect(solve(1000000n, 1000000n, 1000000n)).toBe(0n);
});

test('minimal numbers', () => {
  expect(solve(1n, 1n, 1n)).toBe(0n);
});

test('impossible transformation', () => {
  expect(solve(2n, 3n, 1n)).toBe(-1n);
});

test('requires multiplication operations', () => {
  expect(solve(2n, 8n, 2n)).toBe(2n);
});

test('requires power operations', () => {
  expect(solve(2n, 16n, 4n)).toBe(2n);
});

test('complex transformation path', () => {
  expect(solve(3n, 27n, 3n)).toBe(2n);
});

test('multiple possible paths but minimum steps', () => {
  expect(solve(2n, 32n, 4n)).toBe(3n);
});