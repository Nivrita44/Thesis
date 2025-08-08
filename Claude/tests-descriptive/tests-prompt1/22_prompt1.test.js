import { solve } from '../../solutions-descriptive/22.js'

test('example case from description', () => {
  expect(solve(3n, 3n, 2n, [7n, 3n, 6n], [2n, 4n, 5n])).toBe(3n);
});

test('edge case - single enemy', () => {
  expect(solve(1n, 5n, 1n, [10n], [3n])).toBe(2n);
});

test('upper bound case - large number of enemies', () => {
  expect(solve(5n, 2n, 3n, [10n, 10n, 10n, 10n, 10n], [1n, 3n, 5n, 7n, 9n])).toBe(-1n);
});

test('minimal case - k=1 with minimum damage', () => {
  expect(solve(2n, 1n, 1n, [1n, 1n], [1n, 2n])).toBe(1n);
});

test('impossible case - damage too small', () => {
  expect(solve(3n, 1n, 3n, [10n, 10n, 10n], [1n, 2n, 3n])).toBe(-1n);
});

test('all enemies in same position', () => {
  expect(solve(3n, 4n, 2n, [5n, 5n, 5n], [2n, 3n, 4n])).toBe(2n);
});

test('enemies spread far apart', () => {
  expect(solve(4n, 3n, 2n, [5n, 5n, 5n, 5n], [1n, 10n, 20n, 30n])).toBe(2n);
});

test('exact damage needed', () => {
  expect(solve(2n, 5n, 2n, [10n, 10n], [1n, 2n])).toBe(2n);
});