import { solve } from '../../../solutions-descriptive/19.js'

test('example case - n=2, a=2, b=2', () => {
  expect(solve(2n, 2n, 2n)).toBe(6n);
});

test('minimal case - n=2, a=1, b=1', () => {
  expect(solve(2n, 1n, 1n)).toBe(6n);
});

test('edge case - n=2, large a,b', () => {
  expect(solve(2n, 1000000n, 1000000n)).toBe(6n);
});

test('large n case', () => {
  expect(solve(1000000n, 5n, 5n)).toBe(4000000n);
});

test('coprime numbers case', () => {
  expect(solve(3n, 7n, 13n)).toBe(10n);
});

test('different a,b values', () => {
  expect(solve(4n, 6n, 9n)).toBe(16n);
});

test('n equals a,b case', () => {
  expect(solve(5n, 5n, 5n)).toBe(25n);
});

test('power of 2 values', () => {
  expect(solve(8n, 4n, 8n)).toBe(40n);
});

test('mixed values case', () => {
  expect(solve(10n, 15n, 20n)).toBe(55n);
});
