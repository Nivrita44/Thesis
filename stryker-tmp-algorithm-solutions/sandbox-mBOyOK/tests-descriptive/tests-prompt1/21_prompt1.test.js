// @ts-nocheck
import solve from '../../solutions-descriptive/21.js';

test('example 1', () => {
  expect(solve(2, [2, 4])).toBe(1);
});

test('example 2', () => {
  expect(solve(3, [2, 3, 6])).toBe(2);
});

test('all coprime', () => {
  expect(solve(4, [2, 3, 5, 7])).toBe(0);
});

test('all same', () => {
  expect(solve(3, [4, 4, 4])).toBe(2);
});

test('fully divisible chain', () => {
  expect(solve(5, [2, 4, 8, 16, 32])).toBe(8);
});

test('mix with some coprime', () => {
  expect(solve(5, [2, 4, 7, 8, 14])).toBe(4);
});

test('single possible direct edge', () => {
  expect(solve(2, [3, 5])).toBe(0);
});

test('n=2, no path', () => {
  expect(solve(2, [3, 5])).toBe(0);
});

test('larger possible', () => {
  expect(solve(5, [6, 10, 15, 3, 9])).toBe(8);
});

test('n=2, same a', () => {
  expect(solve(2, [10, 10])).toBe(1);
});


// ● example 1

//     TypeError: solve is not a function

//       2 |
//       3 | test('example 1', () => {
//     > 4 |   expect(solve(2, [2, 4])).toBe(1);
//         |          ^
//       5 | });
//       6 |
//       7 | test('example 2', () => {

//       at Object.solve (tests-descriptive/tests-prompt1/21_prompt1.test.js:4:10)

//   ● example 2

//     TypeError: solve is not a function

//        6 |
//        7 | test('example 2', () => {
//     >  8 |   expect(solve(3, [2, 3, 6])).toBe(2);
//          |          ^
//        9 | });
//       10 |
//       11 | test('all coprime', () => {

//       at Object.solve (tests-descriptive/tests-prompt1/21_prompt1.test.js:8:10)

//   ● all coprime

//     TypeError: solve is not a function

//       10 |
//       11 | test('all coprime', () => {
//     > 12 |   expect(solve(4, [2, 3, 5, 7])).toBe(0);
//          |          ^
//       13 | });
//       14 |
//       15 | test('all same', () => {

//       at Object.solve (tests-descriptive/tests-prompt1/21_prompt1.test.js:12:10)

//   ● all same

//     TypeError: solve is not a function

//       14 |
//       15 | test('all same', () => {
//     > 16 |   expect(solve(3, [4, 4, 4])).toBe(2);
//          |          ^
//       17 | });
//       18 |
//       19 | test('fully divisible chain', () => {

//       at Object.solve (tests-descriptive/tests-prompt1/21_prompt1.test.js:16:10)

//   ● fully divisible chain

//     TypeError: solve is not a function

//       18 |
//       19 | test('fully divisible chain', () => {
//     > 20 |   expect(solve(5, [2, 4, 8, 16, 32])).toBe(8);
//          |          ^
//       21 | });
//       22 |
//       23 | test('mix with some coprime', () => {

//       at Object.solve (tests-descriptive/tests-prompt1/21_prompt1.test.js:20:10)

//   ● mix with some coprime

//     TypeError: solve is not a function

//       22 |
//       23 | test('mix with some coprime', () => {
//     > 24 |   expect(solve(5, [2, 4, 7, 8, 14])).toBe(4);
//          |          ^
//       25 | });
//       26 |
//       27 | test('single possible direct edge', () => {

//       at Object.solve (tests-descriptive/tests-prompt1/21_prompt1.test.js:24:10)

//   ● single possible direct edge

//     TypeError: solve is not a function

//       26 |
//       27 | test('single possible direct edge', () => {
//     > 28 |   expect(solve(2, [3, 5])).toBe(0);
//          |          ^
//       29 | });
//       30 |
//       31 | test('n=2, no path', () => {

//       at Object.solve (tests-descriptive/tests-prompt1/21_prompt1.test.js:28:10)

//   ● n=2, no path

//     TypeError: solve is not a function

//       30 |
//       31 | test('n=2, no path', () => {
//     > 32 |   expect(solve(2, [3, 5])).toBe(0);
//          |          ^
//       33 | });
//       34 |
//       35 | test('larger possible', () => {

//       at Object.solve (tests-descriptive/tests-prompt1/21_prompt1.test.js:32:10)

//   ● larger possible

//     TypeError: solve is not a function

//       34 |
//       35 | test('larger possible', () => {
//     > 36 |   expect(solve(5, [6, 10, 15, 3, 9])).toBe(8);
//          |          ^
//       37 | });
//       38 |
//       39 | test('n=2, same a', () => {

//       at Object.solve (tests-descriptive/tests-prompt1/21_prompt1.test.js:36:10)

//   ● n=2, same a

//     TypeError: solve is not a function

//       38 |
//       39 | test('n=2, same a', () => {
//     > 40 |   expect(solve(2, [10, 10])).toBe(1);
//          |          ^
//       41 | });

//       at Object.solve (tests-descriptive/tests-prompt1/21_prompt1.test.js:40:10)