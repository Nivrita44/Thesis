import { solve } from '../../solutions-algorithm/33.js';

test('example case from description', () => {
  expect(solve(3n, [3n, 2n, 1n])).toBe(3n);
});

test('minimum input case', () => {
  expect(solve(1n, [1n])).toBe(1n);
});

test('case where operation can be performed once', () => {
  expect(solve(4n, [4n, 3n, 2n, 1n])).toBe(6n);
});

test('case where multiple operations are possible', () => {
  expect(solve(5n, [5n, 4n, 3n, 2n, 1n])).toBe(10n);
});

test('case with non-sequential numbers', () => {
  expect(solve(4n, [2n, 4n, 1n, 3n])).toBe(4n);
});

test('large input case', () => {
  expect(solve(6n, [6n, 5n, 4n, 3n, 2n, 1n])).toBe(15n);
});

test('case with repeated numbers', () => {
  expect(solve(4n, [2n, 2n, 2n, 2n])).toBe(4n);
});

test('edge case with maximum single value', () => {
  expect(solve(2n, [1000000000000n, 1n])).toBe(2n);
});

test('case where no operations are possible', () => {
  expect(solve(3n, [1n, 1n, 1n])).toBe(3n);
});