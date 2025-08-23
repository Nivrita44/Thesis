// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/47.js';

test('already sorted, k = 1', () => {
  expect(solve(5, 1, [1, 2, 3, 4, 5])).toBe(0);
});

test('already sorted, k = n', () => {
  expect(solve(4, 4, [1, 2, 3, 4])).toBe(0);
});

test('reverse order, k = 2', () => {
  expect(solve(5, 2, [5, 4, 3, 2, 1])).toBe(2);
});

test('reverse order, k = n', () => {
  expect(solve(6, 6, [6, 5, 4, 3, 2, 1])).toBe(1);
});


test('minimal swap needed, k = 3', () => {
  expect(solve(6, 3, [2, 1, 4, 3, 6, 5])).toBe(2);
});

test('all elements need to be picked, k = n', () => {
  expect(solve(3, 3, [2, 3, 1])).toBe(1);
});

test('one operation required, k = n-1', () => {
  expect(solve(4, 3, [1, 4, 2, 3])).toBe(1);
});

test('each element out of place, k = 1', () => {
  expect(solve(3, 1, [3, 2, 1])).toBe(2);
});

test('single element, k = 1', () => {
  expect(solve(1, 1, [1])).toBe(0);
});

test('adjacent swap needed, k = 2', () => {
  expect(solve(4, 2, [1, 3, 2, 4])).toBe(1);
});

test('large n, already sorted', () => {
  expect(solve(100000, 5, Array.from({length: 100000}, (_, i) => i + 1))).toBe(0);
});

test('large n, reversed', () => {
  expect(solve(10, 2, [10,9,8,7,6,5,4,3,2,1])).toBe(5);
});


