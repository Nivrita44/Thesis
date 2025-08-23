// @ts-nocheck
import {solve} from '../../solutions-algorithm/48.js';

test('sample test 1', () => {
  const m = 3, k = 2, p = 1;
  const edges = [[1,2],[1,3]];
  expect(solve(m, k, p, edges)).toBe(2);
});

test('minimal tree no water', () => {
  const m = 2, k = 0, p = 5;
  const edges = [[1,2]];
  expect(solve(m, k, p, edges)).toBe(0);
});

test('single water, no cost', () => {
  const m = 2, k = 1, p = 0;
  const edges = [[1,2]];
  expect(solve(m, k, p, edges)).toBe(1);
});

test('linear tree, more water than length', () => {
  const m = 4, k = 5, p = 2;
  const edges = [[1,2],[2,3],[3,4]];
  expect(solve(m, k, p, edges)).toBe(2);
});

test('star tree, all leaves with water', () => {
  const m = 5, k = 4, p = 0;
  const edges = [[1,2],[1,3],[1,4],[1,5]];
  expect(solve(m, k, p, edges)).toBe(4);
});

test('no coins for closing', () => {
  const m = 3, k = 2, p = 0;
  const edges = [[1,2],[2,3]];
  expect(solve(m, k, p, edges)).toBe(2);
});

test('large cost disables closing', () => {
  const m = 3, k = 2, p = 1000000000;
  const edges = [[1,2],[2,3]];
  expect(solve(m, k, p, edges)).toBe(2);
});

test('long chain, small k', () => {
  const m = 10, k = 3, p = 2;
  const edges = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]];
  expect(solve(m, k, p, edges)).toBe(3);
});

test('star tree, little water', () => {
  const m = 6, k = 2, p = 1;
  const edges = [[1,2],[1,3],[1,4],[1,5],[1,6]];
  expect(solve(m, k, p, edges)).toBe(2);
});

test('complex tree structure', () => {
  const m = 7, k = 4, p = 2;
  const edges = [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7]];
  expect(solve(m, k, p, edges)).toBe(2);
});



// ● minimal tree no water

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 0
//     Received: 1

//       10 |   const m = 2, k = 0, p = 5;
//       11 |   const edges = [[1,2]];
//     > 12 |   expect(solve(m, k, p, edges)).toBe(0);
//          |                                 ^
//       13 | });
//       14 |
//       15 | test('single water, no cost', () => {

//       at Object.toBe (tests-algorithm/tests-prompt1/48_prompt1.test.js:12:33)

//   ● no coins for closing

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 1

//       34 |   const m = 3, k = 2, p = 0;
//       35 |   const edges = [[1,2],[2,3]];
//     > 36 |   expect(solve(m, k, p, edges)).toBe(2);
//          |                                 ^
//       37 | });
//       38 |
//       39 | test('large cost disables closing', () => {

//       at Object.toBe (tests-algorithm/tests-prompt1/48_prompt1.test.js:36:33)

//   ● long chain, small k

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 3
//     Received: 2

//       46 |   const m = 10, k = 3, p = 2;
//       47 |   const edges = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]];
//     > 48 |   expect(solve(m, k, p, edges)).toBe(3);
//          |                                 ^
//       49 | });
//       50 |
//       51 | test('star tree, little water', () => {

//       at Object.toBe (tests-algorithm/tests-prompt1/48_prompt1.test.js:48:33)

//   ● complex tree structure

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 4

//       58 |   const m = 7, k = 4, p = 2;
//       59 |   const edges = [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7]];
//     > 60 |   expect(solve(m, k, p, edges)).toBe(2);
//          |                                 ^
//       61 | });

//       at Object.toBe (tests-algorithm/tests-prompt1/48_prompt1.test.js:60:33)
