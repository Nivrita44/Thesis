// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/36.js';

test('all border non-corner cells queried, odd black', () => {
  let n = 4, m = 4;
  let queries = [
    [1, 2, 1], [1, 3, 0],
    [2, 1, 0], [3, 1, 0],
    [4, 2, 0], [4, 3, 0],
    [2, 4, 0], [3, 4, 0]
  ];
  expect(solve(n, m, queries.length, queries)).toBe(0);
});