import { solve } from '../../../solutions-algorithm/10.js'

test('example case 5009', () => {
  expect(solve(5009)).toEqual([3, 5000, 8, 1]);
});

test('single digit case', () => {
  expect(solve(7)).toEqual([1, 7]);
});

test('maximum input 10000', () => {
  expect(solve(10000)).toEqual([1, 10000]);
});

test('minimum input 1', () => {
  expect(solve(1)).toEqual([1, 1]);
});

test('number requiring multiple round numbers 999', () => {
  expect(solve(999)).toEqual([3, 900, 90, 9]);
});

test('number with all different digits 2475', () => {
  expect(solve(2475)).toEqual([4, 2000, 400, 70, 5]);
});

test('number ending in zero 1200', () => {
  expect(solve(1200)).toEqual([2, 1000, 200]);
});

test('number requiring max digits 9999', () => {
  expect(solve(9999)).toEqual([4, 9000, 900, 90, 9]);
});

test('tricky case 1001', () => {
  expect(solve(1001)).toEqual([2, 1000, 1]);
});