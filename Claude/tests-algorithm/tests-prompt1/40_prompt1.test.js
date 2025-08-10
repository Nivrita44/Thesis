import { solve } from '../../../solutions-algorithm/40.js'

test('example case with a=2, b=4 should return 8', () => {
  expect(solve(2n, 4n)).toBe(8n);
});

test('edge case with a=1, b=2 should return 4', () => {
  expect(solve(1n, 2n)).toBe(4n);
});

test('large input case with a=499999999, b=999999998 should return 999999998', () => {
  expect(solve(499999999n, 999999998n)).toBe(999999998n);
});

test('minimal case with a=1, b=3 should return 6', () => {
  expect(solve(1n, 3n)).toBe(6n);
});

test('when divisors are consecutive numbers a=6, b=7 should return 14', () => {
  expect(solve(6n, 7n)).toBe(14n);
});

test('typical case with a=3, b=6 should return 12', () => {
  expect(solve(3n, 6n)).toBe(12n);
});

test('when divisors are far apart a=5, b=25 should return 50', () => {
  expect(solve(5n, 25n)).toBe(50n);
});

test('medium size case with a=100, b=200 should return 400', () => {
  expect(solve(100n, 200n)).toBe(400n);
});