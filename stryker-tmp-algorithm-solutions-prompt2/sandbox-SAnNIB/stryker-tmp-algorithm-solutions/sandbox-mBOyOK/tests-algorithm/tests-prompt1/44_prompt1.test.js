// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/44.js';

test('n=1, k=1', () => {
  expect(solve(1, 1)).toEqual([1]);
});

test('n=2, k=2', () => {
  expect(solve(2, 2)).toEqual([2, 1]);
});

test('n=4, k=1', () => {
  expect(solve(4, 1)).toEqual([1, 2, 3, 4]);
});

test('n=4, k=5', () => {
  expect(solve(4, 5)).toEqual([3, 4, 1, 2]);
});

test('n=3, k=3', () => {
  expect(solve(3, 3)).toEqual([2, 1, 3]);
});

test('n=5, k=9', () => {
  expect(solve(5, 9)).toEqual([4, 5, 2, 3, 1]);
});

test('n=3, k=2 (impossible)', () => {
  expect(solve(3, 2)).toBe(-1);
});

test('n=7, k=1 (sorted array)', () => {
  expect(solve(7, 1)).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test('n=2, k=1', () => {
  expect(solve(2, 1)).toEqual([1, 2]);
});

test('n=5, k=1', () => {
  expect(solve(5, 1)).toEqual([1, 2, 3, 4, 5]);
});

test('n=5, impossible k=16', () => {
  expect(solve(5, 16)).toBe(-1);
});

test('n=6, k=1', () => {
  expect(solve(6, 1)).toEqual([1, 2, 3, 4, 5, 6]);
});

test('n=6, k=11', () => {
  expect(solve(6, 11)).toEqual([4, 5, 6, 2, 3, 1]);
});

test('n=10, large impossible k', () => {
  expect(solve(10, 10000)).toBe(-1);
});

test('n=1, impossible k=2', () => {
  expect(solve(1, 2)).toBe(-1);
});


// ● n=2, k=2

//     expect(received).toEqual(expected) // deep equality

//     Expected: [2, 1]
//     Received: -1

//        6 |
//        7 | test('n=2, k=2', () => {
//     >  8 |   expect(solve(2, 2)).toEqual([2, 1]);
//          |                       ^
//        9 | });
//       10 |
//       11 | test('n=4, k=1', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt1/44_prompt1.test.js:8:23)

//   ● n=4, k=5

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//         3,
//     -   4,
//         1,
//         2,
//     +   4,
//       ]

//       14 |
//       15 | test('n=4, k=5', () => {
//     > 16 |   expect(solve(4, 5)).toEqual([3, 4, 1, 2]);
//          |                       ^
//       17 | });
//       18 |
//       19 | test('n=3, k=3', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt1/44_prompt1.test.js:16:23)

//   ● n=5, k=9

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 2
//     + Received  + 2

//       Array [
//     +   3,
//     +   1,
//         4,
//         5,
//         2,
//     -   3,
//     -   1,
//       ]

//       22 |
//       23 | test('n=5, k=9', () => {
//     > 24 |   expect(solve(5, 9)).toEqual([4, 5, 2, 3, 1]);
//          |                       ^
//       25 | });
//       26 |
//       27 | test('n=3, k=2 (impossible)', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt1/44_prompt1.test.js:24:23)

//   ● n=6, k=11

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 2
//     + Received  + 2

//       Array [
//     +   2,
//         4,
//     +   1,
//         5,
//         6,
//     -   2,
//         3,
//     -   1,
//       ]

//       50 |
//       51 | test('n=6, k=11', () => {
//     > 52 |   expect(solve(6, 11)).toEqual([4, 5, 6, 2, 3, 1]);
//          |                        ^
//       53 | });
//       54 |
//       55 | test('n=10, large impossible k', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt1/44_prompt1.test.js:52:24)
