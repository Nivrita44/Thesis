import { solve } from '../../../solutions-algorithm/18.js'

test('example with l=1, r=4', () => {
  expect(solve(1n, 4n)).toEqual([2n, 4n]);
});

test('minimal case with l=1, r=2', () => {
  expect(solve(1n, 2n)).toEqual([1n, 2n]);
});

test('edge case when LCM exceeds r', () => {
  expect(solve(10n, 12n)).toEqual([-1n, -1n]);
});

test('large numbers case', () => {
  expect(solve(998n, 1000n)).toEqual([998n, 999n]);
});

test('consecutive numbers case', () => {
  expect(solve(5n, 8n)).toEqual([6n, 8n]);
});

test('case when numbers are powers of 2', () => {
  expect(solve(4n, 16n)).toEqual([4n, 8n]);
});

test('case with prime numbers range', () => {
  expect(solve(11n, 15n)).toEqual([12n, 15n]);
});

test('corner case with small gap', () => {
  expect(solve(999999998n, 1000000000n)).toEqual([999999998n, 999999999n]);
});