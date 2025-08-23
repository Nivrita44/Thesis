// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/26.js';

test('all zeros, minimal', () => {
  expect(solve(1, '0')).toBe(0);
});

test('all zeros, length > 1', () => {
  expect(solve(4, '0000')).toBe(6);
});

test('all ones, minimal', () => {
  expect(solve(1, '1')).toBe(1);
});

test('all ones, regular', () => {
  expect(solve(5, '11111')).toBe(1);
});

test('typical alternating pattern, 0101', () => {
  expect(solve(4, '0101')).toBe(2);
});

test('typical alternating pattern, 1010', () => {
  expect(solve(4, '1010')).toBe(2);
});

test('edge case, single 1 in middle', () => {
  expect(solve(5, '00100')).toBe(5);
});

test('edge case, single 1 at start', () => {
  expect(solve(5, '10000')).toBe(5);
});

test('edge case, single 1 at end', () => {
  expect(solve(5, '00001')).toBe(5);
});

test('1-filled clusters', () => {
  expect(solve(7, '0111011')).toBe(4);
});

test('clusters of 1s separated by 0s', () => {
  expect(solve(8, '00111001')).toBe(4);
});

test('input includes both edge and middle 1s', () => {
  expect(solve(7, '1001001')).toBe(6);
});

test('long zeros then one 1', () => {
  expect(solve(8, '00000001')).toBe(8);
});

test('long zeros with one 1 at front', () => {
  expect(solve(8, '10000000')).toBe(8);
});

test('dense ones in middle', () => {
  expect(solve(9, '001111100')).toBe(5);
});

test('no 1s at all', () => {
  expect(solve(5, '00000')).toBe(10);
});

test('alternating with longer run of ones', () => {
  expect(solve(7, '0101110')).toBe(3);
});

test('long run of ones', () => {
  expect(solve(8, '11111111')).toBe(1);
});

test('run of zeros then alternating', () => {
  expect(solve(8, '00001101')).toBe(5);
});

test('run of ones then zeros', () => {
  expect(solve(6, '111100')).toBe(2);
});


// typical alternating pattern, 0101

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 6

//       18 |
//       19 | test('typical alternating pattern, 0101', () => {
//     > 20 |   expect(solve(4, '0101')).toBe(2);
//          |                            ^
//       21 | });
//       22 |
//       23 | test('typical alternating pattern, 1010', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/26_prompt2.test.js:20:28)

//   ● typical alternating pattern, 1010

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 6

//       22 |
//       23 | test('typical alternating pattern, 1010', () => {
//     > 24 |   expect(solve(4, '1010')).toBe(2);
//          |                            ^
//       25 | });
//       26 |
//       27 | test('edge case, single 1 in middle', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/26_prompt2.test.js:24:28)

//   ● edge case, single 1 in middle

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 5
//     Received: 15

//       26 |
//       27 | test('edge case, single 1 in middle', () => {
//     > 28 |   expect(solve(5, '00100')).toBe(5);
//          |                             ^
//       29 | });
//       30 |
//       31 | test('edge case, single 1 at start', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/26_prompt2.test.js:28:29)

//   ● edge case, single 1 at start

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 5
//     Received: 11

//       30 |
//       31 | test('edge case, single 1 at start', () => {
//     > 32 |   expect(solve(5, '10000')).toBe(5);
//          |                             ^
//       33 | });
//       34 |
//       35 | test('edge case, single 1 at end', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/26_prompt2.test.js:32:29)

//   ● edge case, single 1 at end

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 5
//     Received: 11

//       34 |
//       35 | test('edge case, single 1 at end', () => {
//     > 36 |   expect(solve(5, '00001')).toBe(5);
//          |                             ^
//       37 | });
//       38 |
//       39 | test('1-filled clusters', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/26_prompt2.test.js:36:29)

//   ● 1-filled clusters

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 4
//     Received: 7

//       38 |
//       39 | test('1-filled clusters', () => {
//     > 40 |   expect(solve(7, '0111011')).toBe(4);
//          |                               ^
//       41 | });
//       42 |
//       43 | test('clusters of 1s separated by 0s', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/26_prompt2.test.js:40:31)

//   ● clusters of 1s separated by 0s

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 4
//     Received: 14

//       42 |
//       43 | test('clusters of 1s separated by 0s', () => {
//     > 44 |   expect(solve(8, '00111001')).toBe(4);
//          |                                ^
//       45 | });
//       46 |
//       47 | test('input includes both edge and middle 1s', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/26_prompt2.test.js:44:32)

//   ● input includes both edge and middle 1s

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 6
//     Received: 19

//       46 |
//       47 | test('input includes both edge and middle 1s', () => {
//     > 48 |   expect(solve(7, '1001001')).toBe(6);
//          |                               ^
//       49 | });
//       50 |
//       51 | test('long zeros then one 1', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/26_prompt2.test.js:48:31)

//   ● long zeros then one 1

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 8
//     Received: 29

//       50 |
//       51 | test('long zeros then one 1', () => {
//     > 52 |   expect(solve(8, '00000001')).toBe(8);
//          |                                ^
//       53 | });
//       54 |
//       55 | test('long zeros with one 1 at front', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/26_prompt2.test.js:52:32)

//   ● long zeros with one 1 at front

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 8
//     Received: 29

//       54 |
//       55 | test('long zeros with one 1 at front', () => {
//     > 56 |   expect(solve(8, '10000000')).toBe(8);
//          |                                ^
//       57 | });
//       58 |
//       59 | test('dense ones in middle', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/26_prompt2.test.js:56:32)

//   ● dense ones in middle

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 5
//     Received: 16

//       58 |
//       59 | test('dense ones in middle', () => {
//     > 60 |   expect(solve(9, '001111100')).toBe(5);
//          |                                 ^
//       61 | });
//       62 |
//       63 | test('no 1s at all', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/26_prompt2.test.js:60:33)

//   ● alternating with longer run of ones

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 3
//     Received: 9

//       66 |
//       67 | test('alternating with longer run of ones', () => {
//     > 68 |   expect(solve(7, '0101110')).toBe(3);
//          |                               ^
//       69 | });
//       70 |
//       71 | test('long run of ones', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/26_prompt2.test.js:68:31)

//   ● run of zeros then alternating

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 5
//     Received: 23

//       74 |
//       75 | test('run of zeros then alternating', () => {
//     > 76 |   expect(solve(8, '00001101')).toBe(5);
//          |                                ^
//       77 | });
//       78 |
//       79 | test('run of ones then zeros', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/26_prompt2.test.js:76:32)

//   ● run of ones then zeros

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 10

//       78 |
//       79 | test('run of ones then zeros', () => {
//     > 80 |   expect(solve(6, '111100')).toBe(2);
//          |                              ^
//       81 | });

//       at Object.toBe (tests-descriptive/tests-prompt2/26_prompt2.test.js:80:30)