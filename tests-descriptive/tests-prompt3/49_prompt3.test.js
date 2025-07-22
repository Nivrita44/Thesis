import { solve } from '../../solutions-descriptive/49.js';

test('single test case, tree 2 nodes', () => {
  expect(
    solve(`1
2 1
1 2`)
  ).toEqual([0]);
});

test('single test case, tree 3 nodes (line)', () => {
  expect(
    solve(`1
3 2
1 2
2 3`)
  ).toEqual([1]);
});

test('single test case, tree 4 nodes (star, remove edge separates 1 and one other)', () => {
  expect(
    solve(`1
4 3
1 2
1 3
1 4`)
  ).toEqual([3]);
});

test('single test case, triangle (3-cycle, remove any edge leaves it connected)', () => {
  expect(
    solve(`1
3 3
1 2
2 3
3 1`)
  ).toEqual([3]);
});

test('single test case, 4 nodes cycle (removing any edge leaves a path)', () => {
  expect(
    solve(`1
4 4
1 2
2 3
3 4
4 1`)
  ).toEqual([6]);
});

test('single test case, 4 nodes with one extra edge in a tree (leaves a cycle)', () => {
  expect(
    solve(`1
4 4
1 2
2 3
3 4
2 4`)
  ).toEqual([6]);
});

test('multiple test cases', () => {
  expect(
    solve(`2
2 1
1 2
3 3
1 2
2 3
3 1`)
  ).toEqual([0, 3]);
});

test('tree with 5 nodes, line', () => {
  expect(
    solve(`1
5 4
1 2
2 3
3 4
4 5`)
  ).toEqual([6]);
});

test('star graph with 5 nodes', () => {
  expect(
    solve(`1
5 4
1 2
1 3
1 4
1 5`)
  ).toEqual([10]);
});

test('test case: larger cycle, 6 nodes', () => {
  expect(
    solve(`1
6 6
1 2
2 3
3 4
4 5
5 6
6 1`)
  ).toEqual([15]);
});

test('test case: big complete graph with 4 nodes', () => {
  expect(
    solve(`1
4 6
1 2
1 3
1 4
2 3
2 4
3 4`)
  ).toEqual([6]);
});

test('test case, bridge rmv splits graph', () => {
  expect(
    solve(`1
4 3
1 2
2 3
2 4`)
  ).toEqual([2]);
});

test('test case, multiple components only by bridge', () => {
  expect(
    solve(`1
6 5
1 2
2 3
3 4
4 5
5 6`)
  ).toEqual([10]);
});

test('smallest with two components after removing a bridge', () => {
  expect(
    solve(`1
5 4
1 2
2 3
3 4
3 5`)
  ).toEqual([6]);
});

test('input with several test cases, various forms', () => {
  expect(
    solve(`3
3 2
1 2
2 3
4 3
1 2
1 3
1 4
4 4
1 2
2 3
3 4
1 4`)
  ).toEqual([1, 3, 6]);
});