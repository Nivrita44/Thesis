// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/21.js';

test('example and basic functionality cases', () => {
  expect(
    solve([
      [1, 4, 3],
      [2, 5, 8],
      [9, 11, 20],
      [0, 0, 0],
      [20, 20, 20],
      [4, 12, 3],
      [15, 7, 8]
    ])
  ).toEqual([
    "YES",
    "NO",
    "YES",
    "YES",
    "NO",
    "NO",
    "YES"
  ]);
});

test('all zeros', () => {
  expect(solve([[0,0,0]])).toEqual(["YES"]);
});

test('a is the sum', () => {
  expect(solve([[2,3,5]])).toEqual(["YES"]);
  expect(solve([[1,2,3]])).toEqual(["YES"]);
});

test('b is the sum', () => {
  expect(solve([[10, 15, 5]])).toEqual(["YES"]);
  expect(solve([[7, 17, 10]])).toEqual(["YES"]);
});

test('c is the sum', () => {
  expect(solve([[2, 18, 20]])).toEqual(["YES"]);
  expect(solve([[0, 20, 20]])).toEqual(["YES"]);
});

test('no sum possible', () => {
  expect(solve([[1,2,4]])).toEqual(["NO"]);
  expect(solve([[5,7,13]])).toEqual(["NO"]);
  expect(solve([[10,10,1]])).toEqual(["NO"]);
});

test('all the same numbers', () => {
  expect(solve([[5,5,5]])).toEqual(["NO"]);
  expect(solve([[20,20,20]])).toEqual(["NO"]);
});

test('mix of YES and NO', () => {
  expect(
    solve([
      [10, 10, 20],
      [20, 0, 20],
      [7, 13, 20],
      [8, 8, 8],
      [3, 4, 7],
      [0, 20, 1]
    ])
  ).toEqual([
    "YES",
    "YES",
    "YES",
    "NO",
    "YES",
    "NO"
  ]);
});

test('lower and upper bounds', () => {
  expect(solve([[0,0,0]])).toEqual(["YES"]);
  expect(solve([[0,20,20]])).toEqual(["YES"]);
  expect(solve([[20,0,20]])).toEqual(["YES"]);
  expect(solve([[20,20,0]])).toEqual(["YES"]);
  expect(solve([[20,19,1]])).toEqual(["YES"]);
  expect(solve([[0,1,1]])).toEqual(["YES"]);
  expect(solve([[0,20,19]])).toEqual(["NO"]);
});

test('single and multiple queries', () => {
  expect(solve([[3,5,8]])).toEqual(["YES"]);
  expect(solve([[2,2,5], [1, 1, 2], [20, 0, 15]])).toEqual(["NO", "YES", "NO"]);
});
