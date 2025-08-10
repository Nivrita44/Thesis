import { solve } from '../../../solutions-algorithm/24.js'

test('should return 2 for n=4 as example case', () => {
  expect(solve(4n)).toBe(2n);
});

test('should return 1 for n=2 as minimal case', () => {
  expect(solve(2n)).toBe(1n);
});

test('should return 500000 for n=1000000 as upper bound case', () => {
  expect(solve(1000000n)).toBe(500000n);
});

test('should return 3 for n=6 as typical case', () => {
  expect(solve(6n)).toBe(3n);
});

test('should return 4 for n=8 as typical case', () => {
  expect(solve(8n)).toBe(4n);
});

test('should return 5 for n=10 as typical case', () => {
  expect(solve(10n)).toBe(5n);
});

test('should return 6 for n=12 as typical case', () => {
  expect(solve(12n)).toBe(6n);
});

test('should return 100 for n=200 as larger case', () => {
  expect(solve(200n)).toBe(100n);
});

test('should return 42 for n=84 as tricky case', () => {
  expect(solve(84n)).toBe(42n);
});