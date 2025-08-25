import { solve } from '../../../solutions-algorithm/48.js';

test('basic test 1', () => {
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

test('basic test 2', () => {
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

test('edge case: minimum tree', () => {
  expect(
    solve(
      2,
      0,
      0,
      [
        [1,2]
      ]
    )
  ).toBe(1);
});

test('edge case: k=0', () => {
  expect(
    solve(
      4,
      0,
      10,
      [
        [1,2],
        [1,3],
        [3,4]
      ]
    )
  ).toBe(1);
});

test('star tree', () => {
  expect(
    solve(
      5,
      5,
      100,
      [
        [1,2],
        [1,3],
        [1,4],
        [1,5]
      ]
    )
  ).toBe(4);
});

test('chain tree', () => {
  expect(
    solve(
      5,
      2,
      1,
      [
        [1,2],
        [2,3],
        [3,4],
        [4,5]
      ]
    )
  ).toBe(2);
});





test('one water, sufficient p', () => {
  expect(
    solve(
      7,
      1,
      100000,
      [
        [1,2],
        [1,3],
        [2,4],
        [2,5],
        [3,6],
        [3,7]
      ]
    )
  ).toBe(1);
});

test('large k and p zero, wide tree', () => {
  expect(
    solve(
      8,
      1000,
      0,
      [
        [1,2],
        [1,3],
        [1,4],
        [1,5],
        [1,6],
        [1,7],
        [1,8]
      ]
    )
  ).toBe(7);
});

test('deep tree, limited k', () => {
  expect(
    solve(
      10,
      2,
      50,
      [
        [1,2],
        [2,3],
        [3,4],
        [4,5],
        [5,6],
        [6,7],
        [7,8],
        [8,9],
        [9,10]
      ]
    )
  ).toBe(2);
});

test('k=1, generic tree', () => {
  expect(
    solve(
      6,
      1,
      0,
      [
        [1,2],
        [1,3],
        [2,4],
        [2,5],
        [3,6]
      ]
    )
  ).toBe(1);
});
