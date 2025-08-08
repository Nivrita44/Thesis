import { solve } from '../../solutions-descriptive/23.js'

test('Example from description', () => {
  expect(solve(1n, 4n, 2n, 1n)).toBe(6n);
});

test('Minimal valid input', () => {
  expect(solve(1n, 1n, 0n, 0n)).toBe(1n);
});

test('Single number in range', () => {
  expect(solve(42n, 42n, 3n, 2n)).toBe(42n);
});

test('Power of 2 range', () => {
  expect(solve(1n, 8n, 3n, 1n)).toBe(15n);
});

test('Large range numbers', () => {
  expect(solve(1000000000000000000n, 1000000000000000100n, 4n, 3n)).toBe(1267650600228229401496703205276n);
});

test('Maximum i value', () => {
  expect(solve(1n, 100n, 30n, 0n)).toBe(5050n);
});

test('k equals 2^i-1', () => {
  expect(solve(10n, 20n, 4n, 15n)).toBe(30n);
});

test('Generic range test', () => {
  expect(solve(100n, 200n, 5n, 10n)).toBe(15130n);
});

test('All numbers included', () => {
  expect(solve(50n, 60n, 1n, 0n)).toBe(550n);
});