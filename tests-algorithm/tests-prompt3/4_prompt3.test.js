import { solve } from '../../solutions-algorithm/4.js';

test('example case 1', () => {
  expect(solve([4, 7, 3, 5])).toEqual([-3, 2, -4, -2]);
});

test('two participants', () => {
  expect(solve([1, 2])).toEqual([-1, 1]);
});

test('increasing strengths', () => {
  expect(solve([1, 2, 3, 4, 5])).toEqual([-4, -3, -2, -1, 1]);
});

test('duplicate strengths with one max', () => {
  expect(solve([4, 9, 4])).toEqual([-5, 5, -5]);
});

test('all equal strengths', () => {
  expect(solve([4, 4, 4, 4])).toEqual([0, 0, 0, 0]);
});

test('maximum value at the beginning', () => {
  expect(solve([10, 2, 3, 4, 5])).toEqual([8, -8, -7, -6, -5]);
});

test('maximum value at the end', () => {
  expect(solve([2, 3, 4, 5, 10])).toEqual([-8, -7, -6, -5, 5]);
});

test('all minimum strengths', () => {
  expect(solve([1, 1, 1, 1, 1])).toEqual([0, 0, 0, 0, 0]);
});

test('second place negative vs max', () => {
  expect(solve([2, 9, 9, 3])).toEqual([-7, 0, 0, -6]);
});

test('large values', () => {
  expect(solve([1000000000, 999999999, 1, 1000000000])).toEqual([1, -1, -999999999, 1]);
});

test('minimum possible values', () => {
  expect(solve([1, 1])).toEqual([0, 0]);
});

test('negative result when others stronger', () => {
  expect(solve([1, 4, 6])).toEqual([-6, -2, 5]);
});

test('single very strong participant', () => {
  expect(solve([1, 1, 1, 100])).toEqual([-99, -99, -99, 99]);
});