import { solve } from '../../../solutions-algorithm/16.js';

test('solve returns correct result for n = 2', () => {
  expect(solve(2)).toEqual({ count: 1, parts: [2] });
});

test('solve returns correct result for n = 3', () => {
  expect(solve(3)).toEqual({ count: 1, parts: [3] });
});

test('solve returns correct result for n = 4', () => {
  expect(solve(4)).toEqual({ count: 2, parts: [2, 2] });
});

test('solve returns correct result for n = 5', () => {
  expect(solve(5)).toEqual({ count: 2, parts: [3, 2] });
});

test('solve returns correct result for n = 6', () => {
  expect(solve(6)).toEqual({ count: 3, parts: [2, 2, 2] });
});

test('solve returns correct result for n = 7', () => {
  expect(solve(7)).toEqual({ count: 3, parts: [3, 2, 2] });
});

test('solve returns correct result for n = 8', () => {
  expect(solve(8)).toEqual({ count: 4, parts: [2, 2, 2, 2] });
});

test('solve returns correct result for n = 9', () => {
  expect(solve(9)).toEqual({ count: 4, parts: [3, 2, 2, 2] });
});

test('solve returns correct result for n = 10', () => {
  expect(solve(10)).toEqual({ count: 5, parts: [2, 2, 2, 2, 2] });
});

test('solve returns correct result for larger odd n (n = 21)', () => {
  expect(solve(21)).toEqual({ count: 10, parts: [3, 2, 2, 2, 2, 2, 2, 2, 2, 2] });
});

test('solve returns correct result for larger even n (n = 22)', () => {
  expect(solve(22)).toEqual({ count: 11, parts: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] });
});

test('solve returns correct result for minimum even n = 2', () => {
  expect(solve(2)).toEqual({ count: 1, parts: [2] });
});

test('solve returns correct result for minimum odd n = 3', () => {
  expect(solve(3)).toEqual({ count: 1, parts: [3] });
});
