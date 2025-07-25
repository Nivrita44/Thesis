import { solve } from '../../solutions-algorithm/9.js';

test('case 1: simple, unique numbers', () => {
  const original = [1, 5, 8, 123, 7];
  const firstRemoved = [123, 7, 5, 1];
  const secondRemoved = [5, 1, 7];
  expect(solve(original, firstRemoved, secondRemoved)).toEqual([8, 123]);
});

test('case 2: consecutive integers', () => {
  const original = [1, 2, 3, 4, 5];
  const firstRemoved = [1, 2, 4, 5];
  const secondRemoved = [1, 4, 5];
  expect(solve(original, firstRemoved, secondRemoved)).toEqual([3, 2]);
});

test('case 3: repeated numbers', () => {
  const original = [10, 20, 20, 30, 40];
  const firstRemoved = [20, 30, 10, 20];
  const secondRemoved = [20, 20, 10];
  expect(solve(original, firstRemoved, secondRemoved)).toEqual([40, 30]);
});

test('case 4: more repeated numbers', () => {
  const original = [1, 1, 2, 2, 3, 3];
  const firstRemoved = [1, 2, 2, 3, 3];
  const secondRemoved = [1, 2, 3, 3];
  expect(solve(original, firstRemoved, secondRemoved)).toEqual([1, 2]);
});

test('case 5: large numbers', () => {
  const original = [1000000000, 999999999, 888888888, 777777777, 1000000000];
  const firstRemoved = [999999999, 888888888, 777777777, 1000000000];
  const secondRemoved = [999999999, 888888888, 1000000000];
  expect(solve(original, firstRemoved, secondRemoved)).toEqual([1000000000, 777777777]);
});

test('case 6: minimal input size', () => {
  const original = [1, 2, 3];
  const firstRemoved = [2, 1];
  const secondRemoved = [1];
  expect(solve(original, firstRemoved, secondRemoved)).toEqual([3, 2]);
});

test('case 7: all values the same', () => {
  const original = [7, 7, 7];
  const firstRemoved = [7, 7];
  const secondRemoved = [7];
  expect(solve(original, firstRemoved, secondRemoved)).toEqual([7, 7]);
});

test('case 8: out of order input', () => {
  const original = [4, 10, 19, 2, 7];
  const firstRemoved = [4, 19, 2, 10];
  const secondRemoved = [19, 4, 2];
  expect(solve(original, firstRemoved, secondRemoved)).toEqual([7, 10]);
});

test('case 9: mixed order & repeated values', () => {
  const original = [2, 8, 3, 8, 5, 3];
  const firstRemoved = [3, 2, 8, 8, 5];
  const secondRemoved = [3, 8, 8, 5];
  expect(solve(original, firstRemoved, secondRemoved)).toEqual([3, 2]);
});

test('case 10: errors of 1, 2, 3, 4 with first removal of 4', () => {
  const original = [1, 2, 3, 4];
  const firstRemoved = [4, 2, 1];
  const secondRemoved = [1, 2];
  expect(solve(original, firstRemoved, secondRemoved)).toEqual([3, 4]);
});