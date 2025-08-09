import { solve } from '../../solutions-algorithm/48.js'

test('example case', () => {
  expect(solve(4n, 2n, 3n, [[1,2], [1,3], [2,4]])).toBe(2n);
});

test('minimum tree size with minimum water and coins', () => {
  expect(solve(2n, 0n, 0n, [[1,2]])).toBe(0n);
});

test('large tree with max water and coins', () => {
  expect(solve(100000n, 1000000000n, 1000000000n, Array.from({length:99999}, (_, i) => [1,i+2]))).toBe(1000000000n); 
});

test('no water available', () => {
  expect(solve(5n, 0n, 100n, [[1,2], [2,3], [3,4], [4,5]])).toBe(0n);
});

test('no coins available', () => {
  expect(solve(4n, 5n, 0n, [[1,2], [1,3], [2,4]])).toBe(5n);
});

test('balanced tree with limited coins', () => {
  expect(solve(7n, 6n, 4n, [[1,2], [1,3], [2,4], [2,5], [3,6], [3,7]])).toBe(4n);
});

test('linear tree with sufficient resources', () => {
  expect(solve(5n, 4n, 10n, [[1,2], [2,3], [3,4], [4,5]])).toBe(4n);
});

test('star shaped tree', () => {
  expect(solve(6n, 5n, 8n, [[1,2], [1,3], [1,4], [1,5], [1,6]])).toBe(5n);
});