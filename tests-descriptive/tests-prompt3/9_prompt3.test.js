import { solve } from '../../solutions-descriptive/9.js';

test('single node tree', () => {
  expect(solve(1, [1], [])).toBe(1);
});

test('simple two-node tree, increasing values', () => {
  expect(solve(2, [1,2], [[0,1]])).toBe(2);
});

test('simple two-node tree, decreasing values', () => {
  expect(solve(2, [2,1], [[0,1]])).toBe(1);
});

test('linear 3-node, strictly increasing values', () => {
  expect(solve(3, [1,2,3], [[0,1],[1,2]])).toBe(3);
});

test('linear 3-node, root has maximal value', () => {
  expect(solve(3, [3,2,1], [[0,1],[1,2]])).toBe(1);
});

test('star tree with center node highest value', () => {
  expect(solve(4, [4,2,3,1], [[0,1],[0,2],[0,3]])).toBe(1);
});

test('star tree, leaf has highest value', () => {
  expect(solve(4, [1,2,3,4], [[0,1],[0,2],[0,3]])).toBe(4);
});

test('disjoint values, different subtrees', () => {
  expect(solve(5, [1,3,2,4,5], [[0,1],[0,2],[1,3],[1,4]])).toBe(5);
});

test('all nodes have value 1', () => {
  expect(solve(3, [1,1,1], [[0,1],[1,2]])).toBe(0);
});

test('root and all children have maximum value', () => {
  expect(solve(3, [3,3,3], [[0,1],[0,2]])).toBe(0);
});

test('unbalanced tree, highest value deep leaf', () => {
  expect(solve(6, [1,2,3,4,5,6], [[0,1],[1,2],[2,3],[3,4],[4,5]])).toBe(6);
});

test('medium tree, two max nodes in different subtrees', () => {
  const result = solve(6, [1,6,2,6,3,4], [[0,1],[0,2],[1,3],[2,4],[2,5]]);
  expect([2,4]).toContain(result);
});

test('multiple nodes with max value, sibling case', () => {
  const result = solve(5, [2,5,5,2,2], [[0,1],[0,2],[1,3],[2,4]]);
  expect([2,3]).toContain(result);
});

test('edge case: all values different, max at root', () => {
  expect(solve(5, [5,1,2,3,4], [[0,1],[0,2],[1,3],[1,4]])).toBe(1);
});

test('edge case: all values different, max at leaf', () => {
  expect(solve(5, [1,2,3,4,5], [[0,1],[1,2],[2,3],[3,4]])).toBe(5);
});

test('chain of same values', () => {
  expect(solve(4, [2,2,2,2], [[0,1],[1,2],[2,3]])).toBe(0);
});

test('tree with duplicate largest values not ancestors', () => {
  const result = solve(6, [3,5,2,5,3,1], [[0,1],[0,2],[1,3],[2,4],[2,5]]);
  expect([2,4]).toContain(result);
});

test('minimal values at leaves', () => {
  expect(solve(4, [4,2,2,2], [[0,1],[0,2],[0,3]])).toBe(1);
});