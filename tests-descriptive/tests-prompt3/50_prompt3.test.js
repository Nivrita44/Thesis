import { solve } from '../../solutions-descriptive/50.js';

test('Single element not present in LCM', () => {
  expect(solve([1])).toBe(1);
});

test('Two distinct elements, LCM not in array', () => {
  expect(solve([2, 3])).toBe(2);
});

test('Two same elements', () => {
  expect(solve([2, 2])).toBe(2);
});

test('Full array is its LCM', () => {
  expect(solve([2, 4, 8])).toBe(2);
});

test('Full array LCM is not in array', () => {
  expect(solve([2, 3, 5])).toBe(3);
});

test('Array with multiple copies', () => {
  expect(solve([2, 2, 2, 2])).toBe(4);
});

test('Array with one element large', () => {
  expect(solve([999999937])).toBe(1);
});

test('LCM exceeds 1e9', () => {
  expect(solve([1000000000, 999999999, 999999998])).toBe(3);
});

test('LCM exactly equals 1e9', () => {
  expect(solve([2, 5, 5, 5, 2, 2, 2, 5])).toBe(8);
});

test('Array with 1 and large composite', () => {
  expect(solve([1, 10])).toBe(2);
});

test('Array with 1 and 2', () => {
  expect(solve([1, 2])).toBe(2);
});

test('Prime numbers', () => {
  expect(solve([2, 3, 5, 7, 11])).toBe(5);
});

test('Array with LCM included', () => {
  expect(solve([2, 4, 6, 12])).toBe(3);
});

test('Only one element, zero edge', () => {
  expect(solve([10])).toBe(1);
});

test('Maximum edge, LCM large and not present', () => {
  const arr = Array.from({length: 2000}, (_, i) => i + 1);
  expect(solve(arr)).toBe(2000);
});

test('All elements the same', () => {
  expect(solve([7, 7, 7])).toBe(3);
});

test('Sparse array, potential for LCM to be absent', () => {
  expect(solve([4, 9, 25])).toBe(3);
});

test('Dense small values', () => {
  expect(solve([2, 4, 8, 16])).toBe(3);
});



// Single element not present in LCM

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: 0

//       2 |
//       3 | test('Single element not present in LCM', () => {
//     > 4 |   expect(solve([1])).toBe(1);
//         |                      ^
//       5 | });
//       6 |
//       7 | test('Two distinct elements, LCM not in array', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/50_prompt3.test.js:4:22)

//   ● Two same elements

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 0

//       10 |
//       11 | test('Two same elements', () => {
//     > 12 |   expect(solve([2, 2])).toBe(2);
//          |                         ^
//       13 | });
//       14 |
//       15 | test('Full array is its LCM', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/50_prompt3.test.js:12:25)

//   ● Full array is its LCM

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 0

//       14 |
//       15 | test('Full array is its LCM', () => {
//     > 16 |   expect(solve([2, 4, 8])).toBe(2);
//          |                            ^
//       17 | });
//       18 |
//       19 | test('Full array LCM is not in array', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/50_prompt3.test.js:16:28)

//   ● Array with multiple copies

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 4
//     Received: 0

//       22 |
//       23 | test('Array with multiple copies', () => {
//     > 24 |   expect(solve([2, 2, 2, 2])).toBe(4);
//          |                               ^
//       25 | });
//       26 |
//       27 | test('Array with one element large', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/50_prompt3.test.js:24:31)

//   ● Array with one element large

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: 0

//       26 |
//       27 | test('Array with one element large', () => {
//     > 28 |   expect(solve([999999937])).toBe(1);
//          |                              ^
//       29 | });
//       30 |
//       31 | test('LCM exceeds 1e9', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/50_prompt3.test.js:28:30)

//   ● Array with 1 and large composite

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 0

//       38 |
//       39 | test('Array with 1 and large composite', () => {
//     > 40 |   expect(solve([1, 10])).toBe(2);
//          |                          ^
//       41 | });
//       42 |
//       43 | test('Array with 1 and 2', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/50_prompt3.test.js:40:26)

//   ● Array with 1 and 2

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 0

//       42 |
//       43 | test('Array with 1 and 2', () => {
//     > 44 |   expect(solve([1, 2])).toBe(2);
//          |                         ^
//       45 | });
//       46 |
//       47 | test('Prime numbers', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/50_prompt3.test.js:44:25)

//   ● Array with LCM included

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 3
//     Received: 0

//       50 |
//       51 | test('Array with LCM included', () => {
//     > 52 |   expect(solve([2, 4, 6, 12])).toBe(3);
//          |                                ^
//       53 | });
//       54 |
//       55 | test('Only one element, zero edge', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/50_prompt3.test.js:52:32)

//   ● Only one element, zero edge

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: 0

//       54 |
//       55 | test('Only one element, zero edge', () => {
//     > 56 |   expect(solve([10])).toBe(1);
//          |                       ^
//       57 | });
//       58 |
//       59 | test('Maximum edge, LCM large and not present', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/50_prompt3.test.js:56:23)

//   ● All elements the same

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 3
//     Received: 0

//       63 |
//       64 | test('All elements the same', () => {
//     > 65 |   expect(solve([7, 7, 7])).toBe(3);
//          |                            ^
//       66 | });
//       67 |
//       68 | test('Sparse array, potential for LCM to be absent', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/50_prompt3.test.js:65:28)

//   ● Dense small values

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 3
//     Received: 0

//       71 |
//       72 | test('Dense small values', () => {
//     > 73 |   expect(solve([2, 4, 8, 16])).toBe(3);
//          |                                ^
//       74 | });

//       at Object.toBe (tests-descriptive/tests-prompt3/50_prompt3.test.js:73:32)