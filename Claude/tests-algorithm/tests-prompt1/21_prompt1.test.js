import { solve } from '../../../solutions-algorithm/21.js'

test('basic example where sum exists', () => {
  expect(solve(1n, 2n, 3n)).toBe('YES');
});

test('edge case with all zeros', () => {
  expect(solve(0n, 0n, 0n)).toBe('NO');
});

test('large numbers within bounds', () => {
  expect(solve(20n, 20n, 20n)).toBe('NO');
});

test('minimal case with small numbers', () => {
  expect(solve(1n, 1n, 2n)).toBe('YES');
});

test('tricky case with same numbers', () => {
  expect(solve(5n, 5n, 10n)).toBe('YES');
});

test('random valid case 1', () => {
  expect(solve(7n, 3n, 4n)).toBe('YES');
});

test('random valid case 2', () => {
  expect(solve(8n, 15n, 7n)).toBe('YES');
});

test('random case where sum does not exist', () => {
  expect(solve(5n, 8n, 14n)).toBe('NO');
});