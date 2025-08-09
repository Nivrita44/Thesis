import { solve } from '../../solutions-descriptive/35.js'

test('example case from description', () => {
  expect(solve(5n, 2n, [1n, 2n, 3n, 4n, 5n])).toBe(9n);
});

test('minimal case', () => {
  expect(solve(2n, 1n, [1n, 2n])).toBe(2n);
});

test('edge case with all same values', () => {
  expect(solve(4n, 2n, [5n, 5n, 5n, 5n])).toBe(10n);
});

test('large case with maximum values', () => {
  expect(solve(6n, 3n, [1000000000n, 1000000000n, 1000000000n, 1000000000n, 1000000000n, 1000000000n])).toBe(2000000000n);
});

test('case with alternating values', () => {
  expect(solve(6n, 2n, [1n, 10n, 2n, 20n, 3n, 30n])).toBe(60n);
});

test('case with decreasing values', () => {
  expect(solve(5n, 2n, [100n, 80n, 60n, 40n, 20n])).toBe(180n);
});

test('tricky case with optimal selection', () => {
  expect(solve(7n, 3n, [5n, 8n, 3n, 10n, 2n, 1n, 4n])).toBe(18n);
});

test('case with prime numbers', () => {
  expect(solve(6n, 2n, [2n, 3n, 5n, 7n, 11n, 13n])).toBe(31n);
});