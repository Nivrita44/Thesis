// @ts-nocheck
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

test('edge case: p=0', () => {
  expect(
    solve(
      5,
      3,
      0,
      [
        [1,2],
        [1,3],
        [3,4],
        [4,5]
      ]
    )
  ).toBe(4);
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

test('all p too high for any selection', () => {
  expect(
    solve(
      6,
      6,
      100000,
      [
        [1,2],
        [2,3],
        [3,4],
        [4,5],
        [5,6]
      ]
    )
  ).toBe(1);
});

test('k exceeds number of non-root tanks', () => {
  expect(
    solve(
      4,
      20,
      0,
      [
        [1,2],
        [2,3],
        [3,4]
      ]
    )
  ).toBe(3);
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

test('all tanks fillable, unlimited p', () => {
  expect(
    solve(
      5,
      10,
      1000000,
      [
        [1,2],
        [2,3],
        [2,4],
        [2,5]
      ]
    )
  ).toBe(1);
});



// ● edge case: p=0

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 4
//     Received: 2

//       72 |       ]
//       73 |     )
//     > 74 |   ).toBe(4);
//          |     ^
//       75 | });
//       76 |
//       77 | test('star tree', () => {

//       at Object.toBe (tests-algorithm/tests-prompt3/48_prompt3.test.js:74:5)

//   ● all p too high for any selection

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: 5

//       121 |       ]
//       122 |     )
//     > 123 |   ).toBe(1);
//           |     ^
//       124 | });
//       125 |
//       126 | test('k exceeds number of non-root tanks', () => {

//       at Object.toBe (tests-algorithm/tests-prompt3/48_prompt3.test.js:123:5)

//   ● k exceeds number of non-root tanks

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 3
//     Received: 1

//       136 |       ]
//       137 |     )
//     > 138 |   ).toBe(3);
//           |     ^
//       139 | });
//       140 |
//       141 | test('one water, sufficient p', () => {

//       at Object.toBe (tests-algorithm/tests-prompt3/48_prompt3.test.js:138:5)

//   ● all tanks fillable, unlimited p

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: 4

//       227 |       ]
//       228 |     )
//     > 229 |   ).toBe(1);
//           |     ^
//       230 | });

//       at Object.toBe (tests-algorithm/tests-prompt3/48_prompt3.test.js:229:5)
