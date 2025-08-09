import { solve } from '../../solutions-descriptive/33.js'

test('example case from problem description', () => {
  expect(solve(0n, 2n, 0n, 2n)).toBe(1n);
});

test('edge case with minimal width and height', () => {
  expect(solve(0n, 1n, 0n, 1n)).toBe(1n);
});

test('large rectangle covering multiple powers of 2', () => {
  expect(solve(0n, 8n, 0n, 8n)).toBe(1n);
});

test('asymmetric rectangle spanning different quadrants', () => {
  expect(solve(1n, 3n, 1n, 4n)).toBe(4n);
});

test('rectangle with odd coordinates', () => {
  expect(solve(3n, 7n, 2n, 6n)).toBe(8n);
});

test('rectangle crossing power of 2 boundary', () => {
  expect(solve(2n, 5n, 2n, 5n)).toBe(9n);
});

test('small rectangle not aligned with power of 2', () => {
  expect(solve(1n, 2n, 1n, 2n)).toBe(1n);
});

test('rectangle requiring multiple splits', () => {
  expect(solve(1n, 6n, 1n, 6n)).toBe(12n);
});

test('maximum size rectangle', () => {
  expect(solve(0n, 1000000n, 0n, 1000000n)).toBe(1n);
});