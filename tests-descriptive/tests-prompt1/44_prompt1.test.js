import { solve } from '../../solutions-descriptive/44.js';

test('single pile, 1 stone', () => {
  expect(solve(1, [1])).toBe('Alice');
});

test('single pile, 2 stones', () => {
  expect(solve(1, [2])).toBe('Bob');
});

test('two piles [1, 2]', () => {
  expect(solve(2, [1, 2])).toBe('Alice');
});

test('three piles [1, 1, 1]', () => {
  expect(solve(3, [1, 1, 1])).toBe('Alice');
});

test('three piles [2, 2, 2]', () => {
  expect(solve(3, [2, 2, 2])).toBe('Bob');
});

test('three piles, two with 1 stone and one with 2', () => {
  expect(solve(3, [1, 2, 1])).toBe('Alice');
});

test('pile with 3 stones', () => {
  expect(solve(1, [3])).toBe('Alice');
});

test('piles [2, 3]', () => {
  expect(solve(2, [2, 3])).toBe('Bob');
});

test('piles [1, 2, 3, 4]', () => {
  expect(solve(4, [1, 2, 3, 4])).toBe('Alice');
});

test('piles [7, 9, 11]', () => {
  expect(solve(3, [7, 9, 11])).toBe('Alice');
});

test('large pile even', () => {
  expect(solve(1, [10000000])).toBe('Bob');
});

test('large pile odd', () => {
  expect(solve(1, [9999999])).toBe('Alice');
});

test('alternating 1 and 2', () => {
  expect(solve(6, [1,2,1,2,1,2])).toBe('Alice');
});

test('all piles even', () => {
  expect(solve(5, [2,4,6,8,10])).toBe('Bob');
});

test('all piles odd', () => {
  expect(solve(5, [1,3,5,7,9])).toBe('Alice');
});