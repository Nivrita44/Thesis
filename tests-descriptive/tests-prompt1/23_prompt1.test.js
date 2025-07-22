import { solve } from '../../solutions-descriptive/23.js';

test('handles basic single query', () => {
  expect(solve([
    [1, 4, 1, 0]
  ])).toEqual([7]);
});

test('excludes k mod 2^i elements', () => {
  expect(solve([
    [1, 8, 2, 2]
  ])).toEqual([1 ^ 2 ^ 3 ^ 4 ^ 5 ^ 7 ^ 8]);
});

test('handles l equals r and single excluded', () => {
  expect(solve([
    [7, 7, 3, 7]
  ])).toEqual([0]);
});

test('handles l equals r with non-excluded', () => {
  expect(solve([
    [5, 5, 1, 0]
  ])).toEqual([5]);
});

test('handles full period mod', () => {
  expect(solve([
    [1, 16, 4, 0]
  ])).toEqual([1 ^ 2 ^ 3 ^ 4 ^ 5 ^ 6 ^ 7 ^ 8 ^ 9 ^ 10 ^ 11 ^ 12 ^ 13 ^ 14 ^ 15 ^ 16 ^ 0]);
});

test('handles k greater than 0', () => {
  expect(solve([
    [1, 10, 1, 1]
  ])).toEqual([1 ^ 2 ^ 3 ^ 4 ^ 6 ^ 7 ^ 8 ^ 9 ^ 10]);
});

test('handles large l and r', () => {
  expect(solve([
    [1000000000000000, 1000000000000005, 2, 1]
  ])).toEqual([
    1000000000000000 ^ 1000000000000002 ^ 1000000000000003 ^ 1000000000000004 ^ 1000000000000005
  ]);
});

test('handles full mod mask skip', () => {
  expect(solve([
    [15, 19, 2, 3]
  ])).toEqual([15 ^ 16 ^ 17 ^ 18 ^ 19 ^ 0]);
});

test('handles all numbers excluded', () => {
  expect(solve([
    [8, 8, 3, 0]
  ])).toEqual([0]);
});

test('handles largest i and k', () => {
  expect(solve([
    [1, 1000, 30, Math.pow(2, 30) - 1]
  ])).toEqual([
    Array.from({length: 1000}, (_, i) => i+1).reduce((a,b)=>a^b,0)
  ]);
});