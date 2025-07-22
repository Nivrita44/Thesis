import { solve } from '../../solutions-descriptive/46.js';

test('single node graph', () => {
  expect(solve(1, [42])).toBe(42);
});

test('identical values', () => {
  expect(solve(3, [5, 5, 5])).toBe(7);
});

test('distinct small values', () => {
  expect(solve(4, [1, 2, 3, 4])).toBe(7);
});

test('mix of small and large values', () => {
  expect(solve(3, [7, 8, 1])).toBe(15);
});

test('all powers of two', () => {
  expect(solve(5, [1, 2, 4, 8, 16])).toBe(31);
});

test('one very large among small', () => {
  expect(solve(3, [1, 2, 1048576])).toBe(1048579);
});

test('all large close numbers', () => {
  expect(solve(4, [1_000_000_007, 1_000_000_008, 1_000_000_009, 1_000_000_010])).toBe(1_000_000_015);
});

test('sorted ascending', () => {
  expect(solve(4, [1, 6, 9, 13])).toBe(15);
});

test('sorted descending', () => {
  expect(solve(4, [13, 9, 6, 1])).toBe(15);
});

test('max bit coverage', () => {
  expect(solve(20, [
    1, 2, 4, 8, 16, 32, 64, 128, 256, 512,
    1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288
  ])).toBe(1048575);
});

test('insufficient to cover bits', () => {
  expect(solve(2, [1, 1])).toBe(3);
});

test('maximum input size, all ones', () => {
  const n = 2000;
  expect(solve(n, Array(n).fill(1))).toBe((1 << Math.min(20, n)) - 1);
});

test('maximum input size, sequential', () => {
  const n = 2000;
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  expect(solve(n, arr)).toBe((1 << Math.min(20, n)) - 1);
});

test('maximum possible numbers at boundary', () => {
  expect(solve(2, [1_000_000_000, 999_999_999])).toBe(1_999_999_999);
});