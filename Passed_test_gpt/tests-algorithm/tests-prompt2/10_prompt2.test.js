import { solve } from '../../solutions-algorithm/10.js';

test('Common input: 5009', () => {
  expect(solve(5009)).toEqual([2, [5000, 9]]);
});

test('Single digit input: 7', () => {
  expect(solve(7)).toEqual([1, [7]]);
});

test('All nonzero digits: 9876', () => {
  expect(solve(9876)).toEqual([4, [9000, 800, 70, 6]]);
});

test('Single nonzero part with zeros: 10000', () => {
  expect(solve(10000)).toEqual([1, [10000]]);
});

test('Power of ten: 10', () => {
  expect(solve(10)).toEqual([1, [10]]);
});

test('Zero input: 0', () => {
  expect(solve(0)).toEqual([0, []]);
});

test('All zeros except in middle: 20002000', () => {
  expect(solve(20002000)).toEqual([2, [20000000, 2000]]);
});

test('Large value with mixed digits', () => {
  expect(solve(1234567890)).toEqual([
    9,
    [
      1000000000,
      200000000,
      30000000,
      4000000,
      500000,
      60000,
      7000,
      800,
      90
    ]
  ]);
});

test('String input should return empty (invalid input)', () => {
  expect(solve('1234')).toEqual([0, []]);
});

test('Negative value should return empty (invalid input)', () => {
  expect(solve(-1234)).toEqual([0, []]);
});
