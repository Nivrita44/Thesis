import { solve } from '../../solutions-descriptive/26.js';

test('n = 1, s = "0"', () => {
  expect(solve(1, "0")).toBe(0);
});

test('n = 1, s = "1"', () => {
  expect(solve(1, "1")).toBe(1);
});

test('All zero string', () => {
  expect(solve(5, "00000")).toBe(10);
});

test('All one string', () => {
  expect(solve(4, "1111")).toBe(1);
});

test('Alternating start with 1', () => {
  expect(solve(6, "101010")).toBe(3);
});

test('Alternating start with 0', () => {
  expect(solve(6, "010101")).toBe(5);
});

test('Single one in middle', () => {
  expect(solve(5, "00100")).toBe(3);
});

test('Single zero in middle', () => {
  expect(solve(5, "11101")).toBe(2);
});

test('Two segments only', () => {
  expect(solve(4, "1100")).toBe(4);
});

test('Ends in 1', () => {
  expect(solve(5, "00001")).toBe(4);
});

test('Ends in 0', () => {
  expect(solve(5, "11110")).toBe(1);
});

test('Edge: only one 0 at start', () => {
  expect(solve(4, "0111")).toBe(2);
});

test('Edge: only one 0 at end', () => {
  expect(solve(4, "1110")).toBe(2);
});

test('Alternating 0s and 1s odd length', () => {
  expect(solve(5, "10101")).toBe(3);
});

test('Multiple segments', () => {
  expect(solve(8, "11100111")).toBe(4);
});

test('Long string, all zeros', () => {
  expect(solve(6, "000000")).toBe(15);
});

test('Long string, all ones', () => {
  expect(solve(6, "111111")).toBe(1);
});

test('Edge: n = 2, both zeros', () => {
  expect(solve(2, "00")).toBe(1);
});

test('Edge: n = 2, one 0, one 1', () => {
  expect(solve(2, "01")).toBe(2);
});

test('Random pattern', () => {
  expect(solve(7, "1100110")).toBe(4);
});


// Alternating start with 1

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 3
//     Received: 8

//       18 |
//       19 | test('Alternating start with 1', () => {
//     > 20 |   expect(solve(6, "101010")).toBe(3);
//          |                              ^
//       21 | });
//       22 |
//       23 | test('Alternating start with 0', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/26_prompt3.test.js:20:30)

//   ● Alternating start with 0

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 5
//     Received: 8

//       22 |
//       23 | test('Alternating start with 0', () => {
//     > 24 |   expect(solve(6, "010101")).toBe(5);
//          |                              ^
//       25 | });
//       26 |
//       27 | test('Single one in middle', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/26_prompt3.test.js:24:30)

//   ● Single one in middle

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 3
//     Received: 15

//       26 |
//       27 | test('Single one in middle', () => {
//     > 28 |   expect(solve(5, "00100")).toBe(3);
//          |                             ^
//       29 | });
//       30 |
//       31 | test('Single zero in middle', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/26_prompt3.test.js:28:29)

//   ● Single zero in middle

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 4

//       30 |
//       31 | test('Single zero in middle', () => {
//     > 32 |   expect(solve(5, "11101")).toBe(2);
//          |                             ^
//       33 | });
//       34 |
//       35 | test('Two segments only', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/26_prompt3.test.js:32:29)

//   ● Two segments only

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 4
//     Received: 6

//       34 |
//       35 | test('Two segments only', () => {
//     > 36 |   expect(solve(4, "1100")).toBe(4);
//          |                            ^
//       37 | });
//       38 |
//       39 | test('Ends in 1', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/26_prompt3.test.js:36:28)

//   ● Ends in 1

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 4
//     Received: 11

//       38 |
//       39 | test('Ends in 1', () => {
//     > 40 |   expect(solve(5, "00001")).toBe(4);
//          |                             ^
//       41 | });
//       42 |
//       43 | test('Ends in 0', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/26_prompt3.test.js:40:29)

//   ● Ends in 0

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: 5

//       42 |
//       43 | test('Ends in 0', () => {
//     > 44 |   expect(solve(5, "11110")).toBe(1);
//          |                             ^
//       45 | });
//       46 |
//       47 | test('Edge: only one 0 at start', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/26_prompt3.test.js:44:29)

//   ● Edge: only one 0 at start

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 4

//       46 |
//       47 | test('Edge: only one 0 at start', () => {
//     > 48 |   expect(solve(4, "0111")).toBe(2);
//          |                            ^
//       49 | });
//       50 |
//       51 | test('Edge: only one 0 at end', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/26_prompt3.test.js:48:28)

//   ● Edge: only one 0 at end

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 4

//       50 |
//       51 | test('Edge: only one 0 at end', () => {
//     > 52 |   expect(solve(4, "1110")).toBe(2);
//          |                            ^
//       53 | });
//       54 |
//       55 | test('Alternating 0s and 1s odd length', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/26_prompt3.test.js:52:28)

//   ● Alternating 0s and 1s odd length

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 3
//     Received: 7

//       54 |
//       55 | test('Alternating 0s and 1s odd length', () => {
//     > 56 |   expect(solve(5, "10101")).toBe(3);
//          |                             ^
//       57 | });
//       58 |
//       59 | test('Multiple segments', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/26_prompt3.test.js:56:29)

//   ● Multiple segments

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 4
//     Received: 8

//       58 |
//       59 | test('Multiple segments', () => {
//     > 60 |   expect(solve(8, "11100111")).toBe(4);
//          |                                ^
//       61 | });
//       62 |
//       63 | test('Long string, all zeros', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/26_prompt3.test.js:60:32)

//   ● Random pattern

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 4
//     Received: 8

//       78 |
//       79 | test('Random pattern', () => {
//     > 80 |   expect(solve(7, "1100110")).toBe(4);
//          |                               ^
//       81 | });

//       at Object.toBe (tests-descriptive/tests-prompt3/26_prompt3.test.js:80:31)
