import { solve } from '../../../solutions-descriptive/45.js'

test('example case with 3 intersections', () => {
  expect(solve(3, 3, 10n, 3n, 5n, [[1, 2, 1n, 3n], [2, 3, 2n, 4n], [1, 3, 5n, 7n]])).toBe(2n);
});

test('minimal case with 2 intersections', () => {
  expect(solve(2, 1, 5n, 1n, 2n, [[1, 2, 1n, 2n]])).toBe(3n);
});

test('large time values case', () => {
  expect(solve(2, 1, 1000000000n, 500000000n, 750000000n, [[1, 2, 100n, 200n]])).toBe(999999900n);
});

test('phone call immediately before destination', () => {
  expect(solve(3, 2, 10n, 7n, 9n, [[1, 2, 2n, 4n], [2, 3, 1n, 2n]])).toBe(4n);
});

test('phone call right after start', () => {
  expect(solve(2, 1, 10n, 1n, 3n, [[1, 2, 2n, 4n]])).toBe(7n);
});

test('impossible to reach on time case', () => {
  expect(solve(3, 2, 5n, 2n, 4n, [[1, 2, 3n, 4n], [2, 3, 2n, 3n]])).toBe(-1n);
});

test('multiple possible paths case', () => {
  expect(solve(4, 4, 15n, 5n, 8n, [[1, 2, 2n, 4n], [2, 4, 3n, 5n], [1, 3, 3n, 6n], [3, 4, 2n, 4n]])).toBe(7n);
});

test('exactly enough time case', () => {
  expect(solve(3, 3, 8n, 3n, 5n, [[1, 2, 1n, 2n], [2, 3, 1n, 2n], [1, 3, 3n, 5n]])).toBe(2n);
});
