import { solve } from '../../solutions-algorithm/47.js'

test('example case with k=2', () => {
  expect(solve(5n, 2n, [2n, 5n, 1n, 3n, 4n])).toBe(3n);
});

test('already sorted permutation', () => {
  expect(solve(4n, 2n, [1n, 2n, 3n, 4n])).toBe(0n);
});

test('maximum size case', () => {
  const arr = Array.from({length: 100000}, (_, i) => BigInt(100000 - i));
  expect(solve(100000n, 1n, arr)).toBe(99999n);
});

test('minimum size case', () => {
  expect(solve(2n, 2n, [2n, 1n])).toBe(1n);
});

test('k equals array length', () => {
  expect(solve(5n, 5n, [5n, 4n, 3n, 2n, 1n])).toBe(1n);
});

test('reverse sorted array with k=2', () => {
  expect(solve(6n, 2n, [6n, 5n, 4n, 3n, 2n, 1n])).toBe(5n);
});

test('random permutation case 1', () => {
  expect(solve(4n, 3n, [3n, 1n, 4n, 2n])).toBe(2n);
});

test('random permutation case 2', () => {
  expect(solve(7n, 4n, [4n, 2n, 7n, 1n, 6n, 3n, 5n])).toBe(2n);
});