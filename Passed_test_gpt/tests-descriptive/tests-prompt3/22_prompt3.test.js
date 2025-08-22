import { solve } from '../../../solutions-descriptive/22.js';

test('single enemy, exactly match health', () => {
  expect(solve(1, 5, 1, [7], [100])).toBe(2);
});

test('single enemy, more attacks allowed, but high health', () => {
  expect(solve(1, 10, 1, [100], [1])).toBe(10);
});

test('multiple enemies, select center p', () => {
  expect(solve(3, 4, 2, [5, 6, 5], [1, 3, 5])).toBe(2);
});

test('multiple enemies, impossible to kill required', () => {
  expect(solve(3, 2, 3, [100, 100, 100], [1, 100, 200])).toBe(-1);
});

test('n=k=1, minimum', () => {
  expect(solve(1, 1, 1, [1], [1])).toBe(1);
});

test('high m, can one-shot multiple', () => {
  expect(solve(2, 1000, 2, [1, 1], [1, 2])).toBe(1);
});

test('spread enemies, impossible to kill k', () => {
  expect(solve(5, 1, 3, [10, 10, 10, 10, 10], [1, 100, 200, 300, 400])).toBe(-1);
});

test('enemies in consecutive positions, large m', () => {
  expect(solve(5, 3, 5, [1, 1, 1, 1, 1], [10, 11, 12, 13, 14])).toBe(1);
});

test('choose p outside any enemy, high m required', () => {
  expect(solve(2, 10, 1, [50, 50], [1, 1000])).toBe(5);
});

test('no overlap between ranges', () => {
  expect(solve(3, 1, 2, [2,2,2], [1, 10, 20])).toBe(-1);
});

test('large enemy position values', () => {
  expect(solve(2, 2, 2, [2,2], [100000000, 100000002])).toBe(2);
});

test('disjoint enemies, not enough must die', () => {
  expect(solve(4, 2, 3, [10, 10, 10, 10], [1, 1000, 2000, 3000])).toBe(-1);
});

test('large input, all can die in one', () => {
  let n = 1000;
  let h = Array(n).fill(1);
  let x = Array(n).fill(0).map((_,i)=>i+1);
  expect(solve(n, 1000, n, h, x)).toBe(1);
});