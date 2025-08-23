// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/48.js';

test('sample case 1', () => {
  expect(
    solve(
      5,
      1000,
      1000,
      [
        [1, 2],
        [1, 3],
        [3, 4],
        [3, 5]
      ]
    )
  ).toBe(4);
});

test('sample case 2', () => {
  expect(
    solve(
      3,
      1,
      2,
      [
        [1, 2],
        [1, 3]
      ]
    )
  ).toBe(1);
});

test('single node', () => {
  expect(
    solve(
      1,
      1,
      0,
      []
    )
  ).toBe(1);
});

test('line tree', () => {
  expect(
    solve(
      4,
      2,
      3,
      [
        [1, 2],
        [2, 3],
        [3, 4]
      ]
    )
  ).toBe(2);
});

test('star tree, high p', () => {
  expect(
    solve(
      6,
      6,
      100,
      [
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 5],
        [1, 6]
      ]
    )
  ).toBe(5);
});

test('all to root, k is limit', () => {
  expect(
    solve(
      4,
      2,
      0,
      [
        [1, 2],
        [1, 3],
        [1, 4]
      ]
    )
  ).toBe(2);
});

test('only root can be taken', () => {
  expect(
    solve(
      3,
      1,
      100,
      [
        [1, 2],
        [1, 3]
      ]
    )
  ).toBe(1);
});

test('k is less than depth group', () => {
  expect(
    solve(
      7,
      2,
      3,
      [
        [1, 2],
        [1, 3],
        [2, 4],
        [2, 5],
        [3, 6],
        [3, 7]
      ]
    )
  ).toBe(2);
});

