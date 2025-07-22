import { solve } from '../../solutions-descriptive/23.js';

test('basic example 1 - small i', () => {
  expect(solve(1n, 10n, 1, 1n)).toBe(12n);
});

test('basic example 2 - all excluded k', () => {
  expect(solve(4n, 7n, 2, 4n)).toBe(10n);
});

test('range where k is always excluded', () => {
  expect(solve(0n, 3n, 2, 2n)).toBe(1n);
});

test('single number, included', () => {
  expect(solve(5n, 5n, 1, 0n)).toBe(5n);
});

test('single number, excluded', () => {
  expect(solve(4n, 4n, 2, 0n)).toBe(0n);
});

test('larger range, simple exclusion', () => {
  expect(solve(8n, 15n, 3, 7n)).toBe(56n);
});

test('l = r = 0', () => {
  expect(solve(0n, 0n, 0, 0n)).toBe(0n);
});

test('i = 0, every number except k=0', () => {
  expect(solve(1n, 5n, 0, 0n)).toBe(3n);
});

test('entire possible k values are skipped', () => {
  expect(solve(10n, 20n, 4, 8n)).toBe(33n);
});

test('lower end BigInt', () => {
  expect(solve(0n, 1000000n, 5, 7n)).not.toBeNull();
});

test('upper end BigInt', () => {
  expect(typeof solve(9007199254740990n, 9007199254741000n, 3, 5n)).toBe('bigint');
});

test('i at upper boundary', () => {
  expect(typeof solve(100n, 1000n, 30, 100000n)).toBe('bigint');
});

test('k = 0 middle of range', () => {
  expect(solve(10n, 30n, 2, 0n)).not.toBeNull();
});

test('range with no exclusions (outside k)', () => {
  expect(solve(1n, 3n, 1, 5n)).toBe(0n ^ 1n ^ 2n ^ 3n);
});

test('full 2^i chunk, skip one', () => {
  expect(solve(0n, 7n, 3, 2n)).toBe(53n);
});

test('extremely large range, test performance', () => {
  expect(typeof solve(1n, 1000000000000000000n, 5, 23n)).toBe('bigint');
});