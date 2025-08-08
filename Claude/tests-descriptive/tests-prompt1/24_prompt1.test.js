import { solve } from '../../solutions-descriptive/24.js'

test('example case with x=2, y=3, z=8, k=2', () => {
  expect(solve(2n, 3n, 8n, 2n)).toBe(13n);
});

test('minimal case with all values 1', () => {
  expect(solve(1n, 1n, 1n, 1n)).toBe(2n);
});

test('edge case with equal values', () => {
  expect(solve(5n, 5n, 5n, 5n)).toBe(15n);
});

test('large case within bounds', () => {
  expect(solve(100000000n, 100000000n, 100000000n, 100000000n)).toBe(500000000n);
});

test('case where attacking immediately is optimal', () => {
  expect(solve(10n, 1n, 1n, 5n)).toBe(1n);
});

test('case requiring maximum k upgrades', () => {
  expect(solve(1n, 2n, 10n, 3n)).toBe(11n);
});

test('case with high health but cheap attacks', () => {
  expect(solve(5n, 1n, 20n, 4n)).toBe(20n);
});

test('balanced case with moderate values', () => {
  expect(solve(3n, 4n, 15n, 3n)).toBe(22n);
});