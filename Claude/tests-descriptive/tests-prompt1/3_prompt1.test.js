import { solve } from '../../solutions-descriptive/3.js'

test('example case from description - 2x2 square', () => {
  expect(solve(0n, 2n, 0n, 2n)).toBe(4n);
});

test('minimal 1x1 square', () => {
  expect(solve(0n, 1n, 0n, 1n)).toBe(1n);
});

test('edge case - maximal 1M x 1M square', () => {
  expect(solve(0n, 1000000n, 0n, 1000000n)).toBe(4n);
});

test('rectangular region - 1x2', () => {
  expect(solve(0n, 1n, 0n, 2n)).toBe(2n);
});

test('offset square region', () => {
  expect(solve(1n, 3n, 1n, 3n)).toBe(4n);
});

test('large non-power-of-2 region', () => {
  expect(solve(0n, 3n, 0n, 3n)).toBe(9n);
});

test('asymmetric region', () => {
  expect(solve(1n, 4n, 2n, 6n)).toBe(12n);
});

test('misaligned region requiring many nodes', () => {
  expect(solve(3n, 7n, 3n, 7n)).toBe(16n);
});

test('rectangular region with odd dimensions', () => {
  expect(solve(2n, 5n, 3n, 8n)).toBe(15n);
});