import { solve } from '../../solutions-descriptive/18.js';

test('1x1 same matrix', () => {
  expect(solve(1,1,[[42]],[[42]])).toBe("Yes\n");
});

test('1x1 impossible different value', () => {
  expect(solve(1,1,[[7]],[[8]])).toBe("No\n");
});

test('2x2 simple possible', () => {
  expect(solve(2,2,[[1,2],[3,4]],[[1,2],[3,4]])).toBe("Yes\n");
});

test('2x2 impossible, higher bit', () => {
  expect(solve(2,2,[[1,2],[3,4]],[[1,2],[3,5]])).toBe("No\n");
});

test('2x2 possible with column OR', () => {
  expect(solve(2,2,[[0,2],[0,4]],[[1,2],[1,4]])).toBe("Yes\n");
});

test('2x2 possible with row AND', () => {
  expect(solve(2,2,[[7,6],[3,2]],[[6,6],[2,2]])).toBe("Yes\n");
});

test('3x3 already matches', () => {
  expect(solve(3,3,[[1,2,3],[4,5,6],[7,8,9]],[[1,2,3],[4,5,6],[7,8,9]])).toBe("Yes\n");
});

test('3x3 requiring alternating operations', () => {
  expect(solve(3,3,[[1,2,3],[4,5,6],[7,8,9]],[[1,3,3],[6,7,6],[7,9,9]])).toBe("Yes\n");
});

test('3x3 impossible (increase unknown bit)', () => {
  expect(solve(3,3,[[1,2,3],[4,5,6],[7,8,9]],[[1,2,4],[4,5,7],[7,8,10]])).toBe("No\n");
});

test('maximum bit values possible', () => {
  expect(solve(2,2,[[0,2147483647],[2147483647,0]],[[0,2147483647],[2147483647,0]])).toBe("Yes\n");
});

test('minimum and maximum value with impossible transformation', () => {
  expect(solve(2,2,[[0,0],[0,0]],[[2147483647,0],[0,0]])).toBe("No\n");
});

test('n*m=1', () => {
  expect(solve(1,1,[[0]],[[1]])).toBe("Yes\n");
});

test('Impossible due to bit flip needed', () => {
  expect(solve(2,2,[[2,1],[2,1]],[[1,2],[1,2]])).toBe("No\n");
});

test('Unique bits on diagonal - transformation possible', () => {
  expect(solve(3,3,[[1,0,0],[0,2,0],[0,0,4]],[[1,0,0],[0,2,0],[0,0,4]])).toBe("Yes\n");
});

test('All ones to all zeros impossible', () => {
  expect(solve(2,2,[[1,1],[1,1]],[[0,0],[0,0]])).toBe("No\n");
});

test('Edge: 1x1000 with possible operation', () => {
  const a = Array(1000).fill(0);
  const b = Array(1000).fill(1);
  expect(solve(1,1000,[a],[b])).toBe("Yes\n");
});

test('Edge: 1x1000 impossible', () => {
  const a = Array(1000).fill(1);
  const b = Array(1000).fill(2);
  expect(solve(1,1000,[a],[b])).toBe("No\n");
});

test('Edge: nx1 possible', () => {
  const a = Array(500).fill([0]);
  const b = Array(500).fill([1]);
  expect(solve(500,1,a,b)).toBe("Yes\n");
});

test('Edge: nx1 impossible', () => {
  const a = Array(1000).fill([2]);
  const b = Array(1000).fill([3]);
  expect(solve(1000,1,a,b)).toBe("No\n");
});