import { solve } from '../../solutions-descriptive/20.js';

test('Example 1: Possible equalization', () => {
  expect(solve([3, 3])).toBe(1);
});

test('Example 2: All same already', () => {
  expect(solve([5, 5, 5, 5])).toBe(0);
});

test('Example 3: Impossible, single odd among evens', () => {
  expect(solve([2, 2, 3, 2])).toBe(-1);
});

test('Edge 1: Only two elements, operation required', () => {
  expect(solve([2, 4])).toBe(1);
});

test('Edge 2: Only two elements, impossible', () => {
  expect(solve([2, 3])).toBe(-1);
});

test('Edge 3: Large values, already equal', () => {
  expect(solve([1000000000, 1000000000, 1000000000])).toBe(0);
});

test('Edge 4: Large but equalizable', () => {
  expect(solve([1000000002, 1000000002, 1000000002])).toBe(3);
});

test('Modulo wrap around', () => {
  expect(solve([3, 1, 2])).toBe(1);
});

test('Possible with operations', () => {
  expect(solve([4, 1, 1])).toBe(2);
});

test('All odd, not always possible', () => {
  expect(solve([3, 3, 3])).toBe(0);
});

test('Impossible: negative would result', () => {
  expect(solve([1, 1, 10])).toBe(-1);
});

test('Array of length 2, both very large equal', () => {
  expect(solve([1000000000, 1000000000])).toBe(0);
});

test('Array of length 2, high difference', () => {
  expect(solve([1000000000, 1])).toBe(-1);
});

test('All elements need operation', () => {
  expect(solve([4, 2, 2])).toBe(2);
});

test('Max n: all same', () => {
  const arr = Array(2e5).fill(1);
  expect(solve(arr)).toBe(0);
});

test('Max n: alternating big/small impossible', () => {
  const arr = [];
  for (let i = 0; i < 2e5; i++) arr.push(i % 2 ? 1000000000 : 1);
  expect(solve(arr)).toBe(-1);
});

test('n=3, possible', () => {
  expect(solve([4, 2, 2])).toBe(2);
});

test('n=3, impossible', () => {
  expect(solve([1, 2, 3])).toBe(-1);
});

test('n=6, mix, possible', () => {
  expect(solve([6, 4, 4, 4, 4, 4])).toBe(3);
});

test('All zeros', () => {
  expect(solve([0, 0, 0, 0])).toBe(0);
});

test('Zeros and positive', () => {
  expect(solve([0, 2, 2, 2])).toBe(2);
});

test('Big numbers, possible', () => {
  expect(solve([999999998, 999999998, 1000000002])).toBe(2);
});