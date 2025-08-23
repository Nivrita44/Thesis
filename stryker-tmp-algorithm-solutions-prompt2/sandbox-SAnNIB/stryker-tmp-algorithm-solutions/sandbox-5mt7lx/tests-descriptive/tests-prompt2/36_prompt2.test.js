// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/36.js';

test('no queries, small grid', () => {
  expect(solve(2, 2, 0, [])).toBe(4);
});

test('single border non-corner query', () => {
  expect(solve(3, 3, 1, [[1, 2, 1]])).toBe(32);
});

test('query at corner', () => {
  expect(solve(3, 3, 1, [[1, 1, 1]])).toBe(32);
});

test('two opposite border non-corner queries', () => {
  expect(solve(3, 3, 2, [[1, 2, 1], [3, 2, 0]])).toBe(16);
});

test('all border non-corner cells queried, even black', () => {
  let n = 4, m = 4;
  let queries = [
    [1, 2, 0], [1, 3, 0],
    [2, 1, 0], [3, 1, 0],
    [4, 2, 0], [4, 3, 0],
    [2, 4, 0], [3, 4, 0]
  ];
  expect(solve(n, m, queries.length, queries)).toBe(4096);
});

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

test('large grid, no queries', () => {
  expect(solve(1000, 1000, 0, [])).toBe(1);
});

test('all border non-corner cells queried, large grid, even blacks', () => {
  let n = 5, m = 5;
  let queries = [];
  for(let i = 2; i <= 4; i++) {
    queries.push([1, i, 0], [5, i, 0], [i, 1, 0], [i, 5, 0]);
  }
  expect(solve(n, m, queries.length, queries)).toBe(16777216);
});

test('empty grid (1x1), no queries', () => {
  expect(solve(1,1,0,[])).toBe(1);
});

test('single border non-corner, grid 3x2', () => {
  expect(solve(3,2,1, [[2,2, 1]])).toBe(4);
});

test('full queries over center cell only', () => {
  expect(solve(5, 5, 1, [[3,3,1]])).toBe(549755813888);
});


// × no queries, small grid (26 ms)
// × single border non-corner query
// × query at corner
// × two opposite border non-corner queries
// × all border non-corner cells queried, even black (1 ms)
// √ all border non-corner cells queried, odd black (1 ms)
// × large grid, no queries
// × all border non-corner cells queried, large grid, even blacks
// × empty grid (1x1), no queries
// × single border non-corner, grid 3x2
// × full queries over center cell only