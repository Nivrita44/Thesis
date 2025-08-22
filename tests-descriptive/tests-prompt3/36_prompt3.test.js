import { solve } from '../../solutions-descriptive/36.js';

test('all cells uncolored, 3x3', () => {
  expect(solve(3, 3, 0, [])).toBe(256);
});

test('single colored cell, center position, white, 3x3', () => {
  expect(solve(3, 3, 1, [[2, 2, 0]])).toBe(128);
});

test('single colored cell, corner, black, 3x3', () => {
  expect(solve(3, 3, 1, [[1, 1, 1]])).toBe(128);
});

test('single colored cell, border but not corner, white, 3x3', () => {
  expect(solve(3, 3, 1, [[1, 2, 0]])).toBe(128);
});

test('two border (not corner) cells, both black, 4x4', () => {
  expect(solve(4, 4, 2, [[1, 2, 1], [4, 3, 1]])).toBe(32768);
});

test('all border (not corner) cells filled (even black count), 3x3', () => {
  const colors = [
    [1,2,0],[2,1,0],[2,3,0],[3,2,0]
  ];
  expect(solve(3, 3, 4, colors)).toBe(16);
});

test('all border (not corner) cells filled (odd black count), 3x3', () => {
  const colors = [
    [1,2,1],[2,1,0],[2,3,0],[3,2,0]
  ];
  expect(solve(3, 3, 4, colors)).toBe(0);
});

test('cells on border, but not all border cells filled, 5x5', () => {
  const colors = [
    [1,2,1], [2,1,1]
  ];
  expect(solve(5, 5, 2, colors)).toBe(2199023255552);
});

test('one colored cell, top left corner white, 1000x1000', () => {
  expect(solve(1000,1000,1,[[1,1,0]])).toBe(269513066);
});

test('one colored cell, border, 10^9x10^9, should work for big n,m', () => {
  expect(solve(1000000000,1000000000,1,[[1,2,1]])).toBe(909090909);
});

test('all border (not corner) cells filled, zero border cells, even black, 3x4', () => {
  const colors = [
    [1,2,0],[1,3,0],[2,1,0],[3,2,0],[2,4,0],[3,3,0]
  ];
  expect(solve(3,4,6,colors)).toBe(64);
});

test('all border (not corner) cells filled, zero border cells, odd black, 3x4', () => {
  const colors = [
    [1,2,0],[1,3,0],[2,1,0],[3,2,1],[2,4,0],[3,3,0]
  ];
  expect(solve(3,4,6,colors)).toBe(0);
});

test('center constraints, all corners colored, 100x100', () => {
  const colors = [[1,1,0],[1,100,1],[100,1,1],[100,100,0]];
  expect(solve(100,100,4,colors)).toBe(158456325028528675187087900672);
});

test('k=2*10^5 (large k) edge', () => {
  const queries = [];
  for (let i = 1; i <= 200000; ++i) queries.push([2, i, 0]);
  expect(typeof solve(200001, 200001, 200000, queries)).toBe("number");
});


// × all cells uncolored, 3x3 (1 ms)
//   × single colored cell, center position, white, 3x3
//   × single colored cell, corner, black, 3x3 (1 ms)
//   × single colored cell, border but not corner, white, 3x3
//   × two border (not corner) cells, both black, 4x4
//   × all border (not corner) cells filled (even black count), 3x3 (3 ms)
//   √ all border (not corner) cells filled (odd black count), 3x3 (1 ms)
//   × cells on border, but not all border cells filled, 5x5 (1 ms)
//   × one colored cell, top left corner white, 1000x1000 (1 ms)
//   × one colored cell, border, 10^9x10^9, should work for big n,m (1 ms)
//   √ all border (not corner) cells filled, zero border cells, even black, 3x4 (1 ms)
//   √ all border (not corner) cells filled, zero border cells, odd black, 3x4
//   × center constraints, all corners colored, 100x100
//   × k=2*10^5 (large k) edge (120 ms)
