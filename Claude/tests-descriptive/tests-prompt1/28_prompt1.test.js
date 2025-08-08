import { solve } from '../../solutions-descriptive/28.js'

test('example case with x = 9, y = 12', () => {
  expect(solve(9n, 12n)).toBe(4n);
});

test('equal numbers require no operations', () => {
  expect(solve(5n, 5n)).toBe(0n);
});

test('large numbers near upper bound', () => {
  expect(solve(999999999999999999n, 1000000000000000000n)).toBe(2n);
});

test('minimal case with zeros', () => {
  expect(solve(0n, 0n)).toBe(0n);
});

test('one number zero other non-zero', () => {
  expect(solve(16n, 0n)).toBe(4n);
});

test('numbers requiring multiple operations', () => {
  expect(solve(24n, 36n)).toBe(6n);
});

test('power of 2 difference', () => {
  expect(solve(8n, 32n)).toBe(4n);
});

test('numbers requiring different k values', () => {
  expect(solve(48n, 72n)).toBe(6n);
});