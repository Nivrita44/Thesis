import { solve } from '../../../solutions-descriptive/36.js';

test('3x3 grid with 6 queries and all border cells colored', () => {
  expect(solve(3, 3, 6, [
    [1, 1, 0], [1, 2, 1], [1, 3, 0],
    [3, 1, 1], [3, 2, 0], [3, 3, 1]
  ])).toBe(4);
});

test('3x4 grid with all cells colored', () => {
  expect(solve(3, 4, 12, [
    [1, 1, 0], [1, 2, 1], [1, 3, 0], [1, 4, 1],
    [2, 1, 1], [2, 2, 0], [2, 3, 1], [2, 4, 0], 
    [3, 1, 0], [3, 2, 1], [3, 3, 0], [3, 4, 1]
  ])).toBe(0);
});

test('2x2 grid with only corner cells colored', () => {
  expect(solve(2, 2, 4, [
    [1, 1, 1], [1, 2, 1],
    [2, 1, 1], [2, 2, 1]
  ])).toBe(1);
});

test('4x4 grid with no colored cells', () => {
  expect(solve(4, 4, 0, [])).toBe(pow(2, BigInt(16) - 1n));
});

test('5x5 grid with only border cells colored alternately', () => {
  const queries = [];
  for(let i = 1; i <= 5; i++) {
    queries.push([1, i, i%2]);
    queries.push([5, i, i%2]);
    if(i > 1 && i < 5) {
      queries.push([i, 1, i%2]);
      queries.push([i, 5, i%2]); 
    }
  }
  expect(solve(5, 5, 16, queries)).toBe(pow(2, BigInt(25) - BigInt(16) - 1n));
});

test('3x3 grid with single cell colored', () => {
  expect(solve(3, 3, 1, [[2, 2, 1]])).toBe(pow(2, BigInt(9) - 2n));
});

test('10x10 grid with some border cells colored', () => {
  const queries = [
    [1, 5, 1], [10, 5, 0],
    [5, 1, 1], [5, 10, 0]
  ];
  expect(solve(10, 10, 4, queries)).toBe(pow(2, BigInt(100) - 5n));
});
