import { solve } from '../../solutions-algorithm/17.js'

test('example case n=6', () => {
  expect(solve(6n)).toBe(3n);
});

test('minimum input n=2', () => {
  expect(solve(2n)).toBe(2n);
});

test('maximum input n=100', () => {
  expect(solve(100n)).toBe(4n);
});

test('n=10 should return 4', () => {
  expect(solve(10n)).toBe(4n);
});

test('n=20 should return 4', () => {
  expect(solve(20n)).toBe(4n);
});

test('edge case n=3', () => {
  expect(solve(3n)).toBe(3n);
});

test('n=50 should return 4', () => {
  expect(solve(50n)).toBe(4n);
});

test('n=15 should return 4', () => {
  expect(solve(15n)).toBe(4n);
});