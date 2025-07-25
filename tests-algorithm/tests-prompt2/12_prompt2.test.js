import { solve } from '../../solutions-algorithm/12.js';

test('even input', () => {
  expect(solve(10)).toEqual([8, 2]);
});

test('odd input', () => {
  expect(solve(11)).toEqual([9, 2]);
});

test('n equal to result', () => {
  expect(solve(8)).toEqual([8, 0]);
});

test('n less than result (even)', () => {
  expect(solve(6)).toEqual([8, -2]);
});

test('n less than result (odd)', () => {
  expect(solve(7)).toEqual([9, -2]);
});

test('n is zero', () => {
  expect(solve(0)).toEqual([8, -8]);
});

test('n is negative even', () => {
  expect(solve(-4)).toEqual([8, -12]);
});

test('n is negative odd', () => {
  expect(solve(-3)).toEqual([9, -12]);
});

test('large even n', () => {
  expect(solve(100000)).toEqual([8, 99992]);
});

test('large odd n', () => {
  expect(solve(100001)).toEqual([9, 99992]);
});