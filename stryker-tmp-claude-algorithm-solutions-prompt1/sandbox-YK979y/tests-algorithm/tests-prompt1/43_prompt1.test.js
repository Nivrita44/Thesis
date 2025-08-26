import {solve} from '../../solutions-algorithm/43.js';

test('Example 1: n=3, permutation [2,1,0]', () => {
  expect(solve(3, [2, 1, 0])).toEqual([1, 2]);
});

test('Already sorted: n=4, permutation [0,1,2,3]', () => {
  expect(solve(4, [0, 1, 2, 3])).toEqual([0, 6]);
});

test('n=2, reversed permutation [1,0]', () => {
  expect(solve(2, [1, 0])).toEqual([0, 1]);
});

test('n=5, permutation [4,3,2,1,0]', () => {
  expect(solve(5, [4, 3, 2, 1, 0])).toEqual([6, 2]);
});

test('n=4, permutation [3,2,1,0]', () => {
  expect(solve(4, [3, 2, 1, 0])).toEqual([2, 2]);
});

test('n=3, permutation [1,2,0]', () => {
  expect(solve(3, [1, 2, 0])).toEqual([1, 2]);
});

test('n=5, permutation [0,4,1,3,2]', () => {
  expect(solve(5, [0, 4, 1, 3, 2])).toEqual([2, 2]);
});

test('n=2, sorted permutation [0,1]', () => {
  expect(solve(2, [0, 1])).toEqual([0, 1]);
});


// Example 1: n=3, permutation [2,1,0]

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//     +   0,
//         1,
//     -   2,
//       ]

//       2 |
//       3 | test('Example 1: n=3, permutation [2,1,0]', () => {
//     > 4 |   expect(solve(3, [2, 1, 0])).toEqual([1, 2]);
//         |                               ^
//       5 | });
//       6 |
//       7 | test('Already sorted: n=4, permutation [0,1,2,3]', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt1/43_prompt1.test.js:4:31)

//   ● Already sorted: n=4, permutation [0,1,2,3]

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//         0,
//     -   6,
//     +   3,
//       ]

//        6 |
//        7 | test('Already sorted: n=4, permutation [0,1,2,3]', () => {
//     >  8 |   expect(solve(4, [0, 1, 2, 3])).toEqual([0, 6]);
//          |                                  ^
//        9 | });
//       10 |
//       11 | test('n=2, reversed permutation [1,0]', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt1/43_prompt1.test.js:8:34)

//   ● n=5, permutation [4,3,2,1,0]

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 2
//     + Received  + 2

//       Array [
//     -   6,
//     -   2,
//     +   3,
//     +   1,
//       ]

//       14 |
//       15 | test('n=5, permutation [4,3,2,1,0]', () => {
//     > 16 |   expect(solve(5, [4, 3, 2, 1, 0])).toEqual([6, 2]);
//          |                                     ^
//       17 | });
//       18 |
//       19 | test('n=4, permutation [3,2,1,0]', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt1/43_prompt1.test.js:16:37)

//   ● n=4, permutation [3,2,1,0]

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 2
//     + Received  + 2

//       Array [
//     -   2,
//     -   2,
//     +   1,
//     +   1,
//       ]

//       18 |
//       19 | test('n=4, permutation [3,2,1,0]', () => {
//     > 20 |   expect(solve(4, [3, 2, 1, 0])).toEqual([2, 2]);
//          |                                  ^
//       21 | });
//       22 |
//       23 | test('n=3, permutation [1,2,0]', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt1/43_prompt1.test.js:20:34)

//   ● n=5, permutation [0,4,1,3,2]

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 2
//     + Received  + 2

//       Array [
//     -   2,
//     -   2,
//     +   1,
//     +   1,
//       ]

//       26 |
//       27 | test('n=5, permutation [0,4,1,3,2]', () => {
//     > 28 |   expect(solve(5, [0, 4, 1, 3, 2])).toEqual([2, 2]);
//          |                                     ^
//       29 | });
//       30 |
//       31 | test('n=2, sorted permutation [0,1]', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt1/43_prompt1.test.js:28:37)
