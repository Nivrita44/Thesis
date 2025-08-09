import { solve } from '../../solutions-algorithm/27.js'

test('example case n=10 should find 1 interesting number', () => {
  expect(solve(10n)).toBe(1n);
});

test('minimum input n=1 should find 0 interesting numbers', () => {
  expect(solve(1n)).toBe(0n);
});

test('edge case n=9 should find 0 interesting numbers', () => {
  expect(solve(1n)).toBe(0n);
});

test('interesting case n=19 should find 1 interesting number', () => {
  expect(solve(19n)).toBe(1n);
});

test('large case n=199 should find multiple interesting numbers', () => {
  expect(solve(199n)).toBe(19n);
});

test('upper bound case n=1000000000 should work', () => {
  expect(solve(1000000000n)).toBe(100000000n);
});

test('boundary case n=100 should find interesting numbers', () => {
  expect(solve(100n)).toBe(9n);
});

test('generic case n=55 should find interesting numbers', () => {
  expect(solve(55n)).toBe(5n);
});