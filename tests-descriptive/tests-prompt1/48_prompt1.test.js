import { solve } from '../../solutions-descriptive/48.js';

test('Simple case with 2 vertices and 1 edge', () => {
  expect(
    solve(2, 1, [
      [1, 2]
    ])
  ).toBe("Alice");
});

test('Triangle graph (3 vertices, 3 edges)', () => {
  expect(
    solve(3, 3, [
      [1,2],[2,3],[3,1]
    ])
  ).toBe("Alice");
});

test('Line graph of 3 vertices', () => {
  expect(
    solve(3, 2, [
      [1,2],[2,3]
    ])
  ).toBe("Bob");
});

test('Star graph, 4 vertices', () => {
  expect(
    solve(4, 3, [
      [1,2],[1,3],[1,4]
    ])
  ).toBe("Bob");
});

test('Complete graph of 4 vertices', () => {
  expect(
    solve(4, 6, [
      [1,2],
      [1,3],
      [1,4],
      [2,3],
      [2,4],
      [3,4]
    ])
  ).toBe("Alice");
});

test('Line with 4 vertices', () => {
  expect(
    solve(4, 3, [
      [1,2],
      [2,3],
      [3,4]
    ])
  ).toBe("Bob");
});

test('Cycle with 4 vertices', () => {
  expect(
    solve(4, 4, [
      [1,2],
      [2,3],
      [3,4],
      [4,1]
    ])
  ).toBe("Alice");
});

test('Single node', () => {
  expect(
    solve(1, 0, [
    ])
  ).toBe("Bob");
});

test('Full bipartite K2,3', () => {
  expect(
    solve(5, 6, [
      [1,3],[1,4],[1,5],
      [2,3],[2,4],[2,5]
    ])
  ).toBe("Bob");
});

test('Disconnected case not possible but check min edges', () => {
  expect(
    solve(2, 1, [
      [1,2]
    ])
  ).toBe("Alice");
});