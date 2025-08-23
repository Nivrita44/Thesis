// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/29.js';

test('single element, minimal k', () => {
  expect(solve(1, 1, [10])).toBe('YES');
});

test('single element, excessive k', () => {
  expect(solve(1, 5, [7])).toBe('NO');
});

test('basic two elements, k=2', () => {
  expect(solve(2, 2, [5, 9])).toBe('YES');
});

test('basic three elements, k=3', () => {
  expect(solve(3, 3, [1, 2, 4])).toBe('YES');
});

test('n=2, k=3, two elements', () => {
  expect(solve(2, 3, [2, 4])).toBe('YES');
});

test('n=3, k=5, three elements', () => {
  expect(solve(3, 5, [2, 4, 8])).toBe('YES');
});

test('n=3, k=2, impossible (k < n)', () => {
  expect(solve(3, 2, [1, 2, 3])).toBe('NO');
});

test('Distinct elements, minimum k possible', () => {
  expect(solve(4, 4, [1, 2, 3, 4])).toBe('YES');
});

test('Distinct elements, k exceeds n', () => {
  expect(solve(4, 7, [1, 2, 3, 4])).toBe('YES');
});

test('n=2, k=1, impossible', () => {
  expect(solve(2, 1, [3, 5])).toBe('NO');
});

test('n=5, k=10', () => {
  expect(solve(5, 10, [1, 3, 6, 7, 10])).toBe('YES');
});

test('Large n, n=k', () => {
  const arr = Array.from({length: 100000}, (_, i) => i + 1);
  expect(solve(100000, 100000, arr)).toBe('YES');
});

test('Large n, k >> n', () => {
  const arr = Array.from({length: 100000}, (_, i) => i + 1);
  expect(solve(100000, 1000000, arr)).toBe('YES');
});

test('All elements are different, n=10, k=10', () => {
  expect(solve(10, 10, [1,2,3,4,5,6,7,8,9,10])).toBe('YES');
});

test('Impossible k < n', () => {
  expect(solve(5, 4, [1,2,3,4,5])).toBe('NO');
});

test('Impossibility due to high k', () => {
  expect(solve(1, 10, [42])).toBe('NO');
});

test('Array with large values, minimal k', () => {
  expect(solve(2, 2, [1000000000, 1])).toBe('YES');
});

test('Array with large values, excessive k', () => {
  expect(solve(2, 1000000, [1000000000, 1])).toBe('YES');
});




// √ single element, minimal k (2 ms)
//   √ single element, excessive k (1 ms)
//   √ basic two elements, k=2
//   √ basic three elements, k=3
//   √ n=2, k=3, two elements (1 ms)
//   √ n=3, k=5, three elements (1 ms)
//   × n=3, k=2, impossible (k < n) (3 ms)
//   √ Distinct elements, minimum k possible (1 ms)
//   √ Distinct elements, k exceeds n (2 ms)
//   × n=2, k=1, impossible (1 ms)
//   × n=5, k=10 (1 ms)
//   √ Large n, n=k (181 ms)
//   × Large n, k >> n (261 ms)
//   √ All elements are different, n=10, k=10
//   × Impossible k < n
//   √ Impossibility due to high k (1 ms)
//   √ Array with large values, minimal k
//   × Array with large values, excessive k
