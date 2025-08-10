import { solve } from '../../../solutions-algorithm/37.js'

test('example from description with n=2', () => {
  expect(solve(2n)).toEqual([1n, 2n]);
});

test('minimal case with n=2', () => {
  expect(solve(2n)).toEqual([1n, 2n]);
});

test('edge case with n=3', () => {
  expect(solve(3n)).toEqual([1n, 2n, 4n]);
});

test('medium case with n=5', () => {
  expect(solve(5n)).toEqual([1n, 2n, 4n, 7n, 11n]);
});

test('larger case with n=10', () => {
  expect(solve(10n)).toEqual([1n, 2n, 4n, 7n, 11n, 16n, 22n, 29n, 37n, 46n]);
});

test('tricky case with n=7', () => {
  expect(solve(7n)).toEqual([1n, 2n, 4n, 7n, 11n, 16n, 22n]);
});

test('upper bound case with n=50', () => {
  const result = solve(50n);
  expect(result.length).toBe(50);
  expect(result[0]).toBe(1n);
  expect(result[49]).toBeLessThanOrEqual(100n);
});

test('verify increasing sequence property', () => {
  const result = solve(15n);
  for (let i = 1; i < result.length; i++) {
    expect(result[i]).toBeGreaterThan(result[i-1]);
  }
});