import { solve } from '../../solutions-algorithm/30.js'

test('basic example - sum of 17', () => {
  expect(solve(17n)).toEqual([1n, 4n, 12n]);
});

test('minimum valid number that works - 7', () => {
  expect(solve(7n)).toEqual([1n, 2n, 4n]);
});

test('edge case - very small number 3', () => {
  expect(solve(3n)).toBe('NO');
});

test('large number case', () => {
  expect(solve(1000000000n)).toEqual([1n, 4n, 999999995n]);
});

test('number barely enough for three distinct numbers', () => {
  expect(solve(8n)).toEqual([1n, 2n, 5n]);
});

test('medium sized number', () => {
  expect(solve(42n)).toEqual([1n, 4n, 37n]);
});

test('tricky case with many multiples of 3', () => {
  expect(solve(20n)).toEqual([1n, 4n, 15n]);
});

test('random valid case 1', () => {
  expect(solve(100n)).toEqual([1n, 4n, 95n]);
});

test('random valid case 2', () => {
  expect(solve(50n)).toEqual([1n, 4n, 45n]);
});