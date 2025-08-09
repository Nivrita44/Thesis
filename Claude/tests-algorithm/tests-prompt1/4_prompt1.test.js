import { solve } from '../../solutions-algorithm/4.js'

test('example case with 4 participants', () => {
  expect(solve(4n, [3n, 7n, 5n, 6n])).toEqual(['-4', '-1', '-2', '-1']);
});

test('minimum case with 2 participants', () => {
  expect(solve(2n, [1n, 2n])).toEqual(['-1', '1']);
});

test('all equal strengths', () => {
  expect(solve(3n, [5n, 5n, 5n])).toEqual(['0', '0', '0']);
});

test('large ascending strengths', () => {
  expect(solve(5n, [1n, 2n, 3n, 4n, 5n])).toEqual(['-4', '-3', '-2', '-1', '4']);
});

test('maximum strength at start', () => {
  expect(solve(4n, [9n, 1n, 4n, 3n])).toEqual(['5', '-8', '-5', '-6']);
});

test('maximum strength in middle', () => {
  expect(solve(5n, [4n, 8n, 10n, 3n, 5n])).toEqual(['-6', '-2', '2', '-7', '-5']);
});

test('large numbers near upper bound', () => {
  expect(solve(3n, [1000000000n, 999999999n, 999999998n])).toEqual(['1', '-1', '-2']);
});

test('alternating high-low values', () => {
  expect(solve(6n, [8n, 2n, 7n, 3n, 9n, 1n])).toEqual(['-1', '-7', '-2', '-6', '1', '-8']);
});