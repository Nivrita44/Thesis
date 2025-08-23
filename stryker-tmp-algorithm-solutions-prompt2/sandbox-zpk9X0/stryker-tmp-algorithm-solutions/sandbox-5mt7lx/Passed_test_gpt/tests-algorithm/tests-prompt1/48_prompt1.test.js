// @ts-nocheck
// 
import {solve} from '../../../solutions-algorithm/48.js';

test('sample test 1', () => {
  const m = 3, k = 2, p = 1;
  const edges = [[1,2],[1,3]];
  expect(solve(m, k, p, edges)).toBe(2);
});


test('single water, no cost', () => {
  const m = 2, k = 1, p = 0;
  const edges = [[1,2]];
  expect(solve(m, k, p, edges)).toBe(1);
});

test('linear tree, more water than length', () => {
  const m = 4, k = 5, p = 2;
  const edges = [[1,2],[2,3],[3,4]];
  expect(solve(m, k, p, edges)).toBe(2);
});

test('star tree, all leaves with water', () => {
  const m = 5, k = 4, p = 0;
  const edges = [[1,2],[1,3],[1,4],[1,5]];
  expect(solve(m, k, p, edges)).toBe(4);
});


test('large cost disables closing', () => {
  const m = 3, k = 2, p = 1000000000;
  const edges = [[1,2],[2,3]];
  expect(solve(m, k, p, edges)).toBe(2);
});


test('star tree, little water', () => {
  const m = 6, k = 2, p = 1;
  const edges = [[1,2],[1,3],[1,4],[1,5],[1,6]];
  expect(solve(m, k, p, edges)).toBe(2);
});
