import { solve } from '../../solutions-descriptive/43.js';

test('single camp', () => {
  expect(
    solve(1, 100, [50], [])
  ).toBe(50);
});

test('simple chain 2 camps, high c', () => {
  expect(
    solve(2, 100, [10, 20], [[1, 2]])
  ).toBe(20);
});

test('simple chain 2 camps, c = 1', () => {
  expect(
    solve(2, 1, [10, 20], [[1, 2]])
  ).toBe(20);
});

test('small tree', () => {
  expect(
    solve(3, 5, [1, 10, 100], [[1, 2], [2, 3]])
  ).toBe(105);
});

test('star with center rich', () => {
  expect(
    solve(5, 2, [5, 1, 1, 1, 1], [[1,2],[1,3],[1,4],[1,5]])
  ).toBe(5);
});

test('star with leaves rich', () => {
  expect(
    solve(5, 2, [1, 5, 5, 5, 5], [[1,2],[1,3],[1,4],[1,5]])
  ).toBe(20);
});

test('star with c exceeding neighbors', () => {
  expect(
    solve(3, 1000, [1, 100, 100], [[1,2],[1,3]])
  ).toBe(200);
});

test('line of camps', () => {
  expect(
    solve(4, 5, [5, 10, 20, 15], [[1,2],[2,3],[3,4]])
  ).toBe(30);
});

test('negative initial gold', () => {
  expect(
    solve(3, 2, [-5, 0, 10], [[1,2],[2,3]])
  ).toBe(10);
});

test('all negative gold', () => {
  expect(
    solve(3, 1, [-10, -5, -8], [[1,2],[2,3]])
  ).toBe(-5);
});

test('two camps both negative', () => {
  expect(
    solve(2, 10, [-1, -4], [[1, 2]])
  ).toBe(-1);
});

test('bush with multiple equal best', () => {
  expect(
    solve(4, 10, [40, 10, 10, 10], [[1,2],[1,3],[1,4]])
  ).toBe(40);
});

test('isolated positive outlier', () => {
  expect(
    solve(6, 5, [1, 1, 1, 1, 1, 100], [[1,2],[2,3],[3,4],[4,5],[5,6]])
  ).toBe(100);
});

test('all zeros', () => {
  expect(
    solve(5, 2, [0, 0, 0, 0, 0], [[1,2],[1,3],[1,4],[1,5]])
  ).toBe(0);
});