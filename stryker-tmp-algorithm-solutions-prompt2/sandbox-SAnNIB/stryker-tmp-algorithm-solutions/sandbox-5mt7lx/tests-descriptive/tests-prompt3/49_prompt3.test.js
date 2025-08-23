// @ts-nocheck
// 
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




// single test case, tree 2 nodes

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 0
//     + Received  + 1

//       Array [
//         0,
//     +   0,
//       ]

//        6 | 2 1
//        7 | 1 2`)
//     >  8 |   ).toEqual([0]);
//          |     ^
//        9 | });
//       10 |
//       11 | test('single test case, tree 3 nodes (line)', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/49_prompt3.test.js:8:5)

//   ● single test case, tree 3 nodes (line)

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 0
//     + Received  + 1

//       Array [
//     +   0,
//         1,
//       ]

//       15 | 1 2
//       16 | 2 3`)
//     > 17 |   ).toEqual([1]);
//          |     ^
//       18 | });
//       19 |
//       20 | test('single test case, tree 4 nodes (star, remove edge separates 1 and one other)', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/49_prompt3.test.js:17:5)

//   ● single test case, tree 4 nodes (star, remove edge separates 1 and one other)

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 0
//     + Received  + 1

//       Array [
//     +   0,
//         3,
//       ]

//       25 | 1 3
//       26 | 1 4`)
//     > 27 |   ).toEqual([3]);
//          |     ^
//       28 | });
//       29 |
//       30 | test('single test case, triangle (3-cycle, remove any edge leaves it connected)', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/49_prompt3.test.js:27:5)

//   ● single test case, triangle (3-cycle, remove any edge leaves it connected)

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 0
//     + Received  + 1

//       Array [
//     +   0,
//         3,
//       ]

//       35 | 2 3
//       36 | 3 1`)
//     > 37 |   ).toEqual([3]);
//          |     ^
//       38 | });
//       39 |
//       40 | test('single test case, 4 nodes cycle (removing any edge leaves a path)', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/49_prompt3.test.js:37:5)

//   ● single test case, 4 nodes cycle (removing any edge leaves a path)

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 0
//     + Received  + 1

//       Array [
//     +   0,
//         6,
//       ]

//       46 | 3 4
//       47 | 4 1`)
//     > 48 |   ).toEqual([6]);
//          |     ^
//       49 | });
//       50 |
//       51 | test('single test case, 4 nodes with one extra edge in a tree (leaves a cycle)', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/49_prompt3.test.js:48:5)

//   ● single test case, 4 nodes with one extra edge in a tree (leaves a cycle)

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 2

//       Array [
//     -   6,
//     +   0,
//     +   3,
//       ]

//       57 | 3 4
//       58 | 2 4`)
//     > 59 |   ).toEqual([6]);
//          |     ^
//       60 | });
//       61 |
//       62 | test('multiple test cases', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/49_prompt3.test.js:59:5)

//   ● multiple test cases

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 0
//     + Received  + 1

//       Array [
//     +   1,
//         0,
//         3,
//       ]

//       69 | 2 3
//       70 | 3 1`)
//     > 71 |   ).toEqual([0, 3]);
//          |     ^
//       72 | });
//       73 |
//       74 | test('tree with 5 nodes, line', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/49_prompt3.test.js:71:5)

//   ● tree with 5 nodes, line

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 2

//       Array [
//     -   6,
//     +   0,
//     +   4,
//       ]

//       80 | 3 4
//       81 | 4 5`)
//     > 82 |   ).toEqual([6]);
//          |     ^
//       83 | });
//       84 |
//       85 | test('star graph with 5 nodes', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/49_prompt3.test.js:82:5)

//   ● star graph with 5 nodes

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 2

//       Array [
//     -   10,
//     +   0,
//     +   6,
//       ]

//       91 | 1 4
//       92 | 1 5`)
//     > 93 |   ).toEqual([10]);
//          |     ^
//       94 | });
//       95 |
//       96 | test('test case: larger cycle, 6 nodes', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/49_prompt3.test.js:93:5)

//   ● test case: larger cycle, 6 nodes

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 0
//     + Received  + 1

//       Array [
//     +   0,
//         15,
//       ]

//       104 | 5 6
//       105 | 6 1`)
//     > 106 |   ).toEqual([15]);
//           |     ^
//       107 | });
//       108 |
//       109 | test('test case: big complete graph with 4 nodes', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/49_prompt3.test.js:106:5)

//   ● test case: big complete graph with 4 nodes

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 0
//     + Received  + 1

//       Array [
//     +   0,
//         6,
//       ]

//       117 | 2 4
//       118 | 3 4`)
//     > 119 |   ).toEqual([6]);
//           |     ^
//       120 | });
//       121 |
//       122 | test('test case, bridge rmv splits graph', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/49_prompt3.test.js:119:5)

//   ● test case, bridge rmv splits graph

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 2

//       Array [
//     -   2,
//     +   0,
//     +   3,
//       ]

//       127 | 2 3
//       128 | 2 4`)
//     > 129 |   ).toEqual([2]);
//           |     ^
//       130 | });
//       131 |
//       132 | test('test case, multiple components only by bridge', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/49_prompt3.test.js:129:5)

//   ● test case, multiple components only by bridge

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 2

//       Array [
//     -   10,
//     +   0,
//     +   6,
//       ]

//       139 | 4 5
//       140 | 5 6`)
//     > 141 |   ).toEqual([10]);
//           |     ^
//       142 | });
//       143 |
//       144 | test('smallest with two components after removing a bridge', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/49_prompt3.test.js:141:5)

//   ● smallest with two components after removing a bridge

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 2

//       Array [
//     -   6,
//     +   0,
//     +   4,
//       ]

//       150 | 3 4
//       151 | 3 5`)
//     > 152 |   ).toEqual([6]);
//           |     ^
//       153 | });
//       154 |
//       155 | test('input with several test cases, various forms', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/49_prompt3.test.js:152:5)

//   ● input with several test cases, various forms

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 0
//     + Received  + 1

//       Array [
//     +   3,
//         1,
//         3,
//         6,
//       ]

//       168 | 3 4
//       169 | 1 4`)
//     > 170 |   ).toEqual([1, 3, 6]);
//           |     ^
//       171 | });

//       at Object.toEqual (tests-descriptive/tests-prompt3/49_prompt3.test.js:170:5)
