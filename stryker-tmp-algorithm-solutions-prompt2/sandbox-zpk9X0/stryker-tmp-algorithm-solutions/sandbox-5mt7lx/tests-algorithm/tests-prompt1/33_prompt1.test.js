// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/33.js';

test('simple 1-element array, can\'t expand', () => {
  expect(solve(1, [1])).toBe(1);
});

test('no positions satisfy property, cannot expand', () => {
  expect(solve(3, [3,2,3])).toBe(3);
});

test('all positions satisfy property, can expand repeatedly', () => {
  expect(solve(3, [3,2,1])).toBe(5);
});

test('input: 5 1 12 3 2 5', () => {
  expect(solve(5, [1,12,3,2,5])).toBe(5);
});

test('expansion only possible once', () => {
  expect(solve(4, [4,3,3,1])).toBe(4);
});

test('large input where solution can expand', () => {
  const arr = [5,4,3,2,1];
  expect(solve(5, arr)).toBe(9);
});

test('first value satisfies, can only add zeros once', () => {
  expect(solve(4, [4,2,2,1])).toBe(4);
});

test('value in middle allows only partial expansion', () => {
  expect(solve(3, [1,2,3])).toBe(3);
});

test('complex, two rounds of expansion possible', () => {
  expect(solve(3, [3,1,1])).toBe(4);
});

test('random, no operation possible', () => {
  expect(solve(6, [12,11,7,8,1,5])).toBe(6);
});

test('all elements are same but do not match the condition', () => {
  expect(solve(4, [10,10,10,10])).toBe(4);
});

test('array with alternating values, no position satisfies', () => {
  expect(solve(6, [6,1,5,2,4,3])).toBe(6);
});


// large positive values in a

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//     -   10006,
//     +   3,
//       ]

//       25 |
//       26 | test('large positive values in a', () => {
//     > 27 |   expect(solve([{ n: 3, a: [100, 1000, 10000] }])).toEqual([10006]);
//          |                                                    ^
//       28 | });
//       29 |
//       30 | test('empty testCases array', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt2/33_prompt2.test.js:27:52)

//   ● edge: duplicate reachable values

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//     -   6,
//     +   5,
//       ]

//       33 |
//       34 | test('edge: duplicate reachable values', () => {
//     > 35 |   expect(solve([{ n: 3, a: [0, 2, 1] }])).toEqual([6]);
//          |                                           ^
//       36 | });
//       37 |
//       38 | test('edge: repeatedly reachable value', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt2/33_prompt2.test.js:35:43)

//   ● edge: repeatedly reachable value

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//     -   4,
//     +   3,
//       ]

//       37 |
//       38 | test('edge: repeatedly reachable value', () => {
//     > 39 |   expect(solve([{ n: 2, a: [1, 1] }])).toEqual([4]);
//          |                                        ^
//       40 | });
//       41 |
//       42 | test('n is large but a is only zeros', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt2/33_prompt2.test.js:39:40)

//   ● various n and a

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//     +   2,
//         5,
//     -   6,
//       ]

//       48 |     { n: 2, a: [1, 3] },
//       49 |     { n: 3, a: [2, 0, 1] }
//     > 50 |   ])).toEqual([5, 6]);
//          |       ^
//       51 | });

//       at Object.toEqual (tests-algorithm/tests-prompt2/33_prompt2.test.js:50:7)
