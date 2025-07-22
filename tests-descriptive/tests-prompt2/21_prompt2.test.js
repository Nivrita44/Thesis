import { solve } from '../../solutions-descriptive/21.js';

test('single element array', () => {
  expect(solve([2])).toBe(0);
  expect(solve([3])).toBe(0);
  expect(solve([1000000])).toBe(0);
  expect(solve([1])).toBe(0);
});

test('two elements, small coprime', () => {
  expect(solve([2, 3])).toBe(1);
  expect(solve([5, 7])).toBe(1);
  expect(solve([11, 13])).toBe(1);
  expect(solve([17, 19])).toBe(1);
});

test('two elements, not coprime', () => {
  expect(solve([2, 4])).toBe(0);
  expect(solve([3, 9])).toBe(0);
  expect(solve([10, 25])).toBe(0);
});

test('three elements, all coprime', () => {
  expect(solve([2, 3, 5])).toBe(2);
  expect(solve([3, 5, 7])).toBe(2);
});

test('three elements, some not coprime', () => {
  expect(solve([2, 4, 3])).toBe(1);
  expect(solve([2, 3, 6])).toBe(1);
  expect(solve([5, 10, 3])).toBe(1);
});

test('array with all elements equal', () => {
  expect(solve([2, 2])).toBe(0);
  expect(solve([7, 7, 7])).toBe(0);
  expect(solve([13, 13, 13, 13])).toBe(0);
});

test('array with one as element', () => {
  expect(solve([1, 2])).toBe(1);
  expect(solve([1, 3, 5])).toBe(2);
  expect(solve([1, 4, 5])).toBe(1);
});

test('includes 0s and large numbers', () => {
  expect(solve([999983, 1000000])).toBe(1);
  expect(solve([1000000, 1])).toBe(1);
});

test('edge: consecutive numbers', () => {
  expect(solve([14, 15, 16])).toBe(2);
  expect(solve([8, 9, 10])).toBe(2);
});

test('edge: primes and composites', () => {
  expect(solve([2, 6, 5])).toBe(1);
  expect(solve([3, 6, 7])).toBe(1);
  expect(solve([7, 14, 21])).toBe(0);
});