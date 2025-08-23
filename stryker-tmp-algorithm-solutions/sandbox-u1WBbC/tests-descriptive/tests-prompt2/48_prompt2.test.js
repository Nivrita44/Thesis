// @ts-nocheck
import { solve } from '../../solutions-descriptive/48.js';

test('Typical case with partial matches [6,3,3,3,5,5]', () => {
  expect(solve(6, [6, 3, 3, 3, 5, 5])).toBe(3);
});

test('Typical case with no valid range [5,6,4,1,4,5]', () => {
  expect(solve(6, [5, 6, 4, 1, 4, 5])).toBe(0);
});

test('Nontrivial mix with one valid range [8,6,4,2,1,3,5,7,9]', () => {
  expect(solve(9, [8,6,4,2,1,3,5,7,9])).toBe(1);
});

test('All elements large, expect full range', () => {
  expect(solve(5, [10,10,10,10,10])).toBe(5);
});

test('All elements too small, expect zero', () => {
  expect(solve(4, [0,0,0,0])).toBe(0);
});

test('Boundary n=1, element is sufficient', () => {
  expect(solve(1, [1])).toBe(1);
});

test('Boundary n=1, element is not sufficient', () => {
  expect(solve(1, [0])).toBe(0);
});

test('Edge n=2, both elements large', () => {
  expect(solve(2, [3,3])).toBe(2);
});

test('Edge n=2, one large one small', () => {
  expect(solve(2, [2,0])).toBe(1);
});

test('Large n for performance', () => {
  const n = 10000;
  const a = Array(n).fill(n + 5);
  expect(solve(n, a)).toBe(n);
});



// √ Typical case with partial matches [6,3,3,3,5,5] (2 ms)
//   √ Typical case with no valid range [5,6,4,1,4,5]
//   √ Nontrivial mix with one valid range [8,6,4,2,1,3,5,7,9] (1 ms)
//   √ All elements large, expect full range (1 ms)
//   √ All elements too small, expect zero
//   √ Boundary n=1, element is sufficient (1 ms)
//   × Boundary n=1, element is not sufficient (3 ms)
//   √ Edge n=2, both elements large
//   √ Edge n=2, one large one small
//   √ Large n for performance (3 ms) 