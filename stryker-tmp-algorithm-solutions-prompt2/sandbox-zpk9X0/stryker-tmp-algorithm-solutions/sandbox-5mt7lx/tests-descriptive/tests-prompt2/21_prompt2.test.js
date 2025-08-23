// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/21.js';

test('typical case 1', () => {
  expect(solve([2, 6, 3, 4, 6])).toBe(5);
});

test('typical case 2', () => {
  expect(solve([4, 196, 2662, 2197, 121])).toBe(2);
});

test('minimal input 1', () => {
  expect(solve([2, 3])).toBe(0);
});

test('all ones', () => {
  expect(solve([1, 1, 1, 1, 1])).toBe(1);
});

test('all distinct primes', () => {
  expect(solve([2, 3, 5, 7, 11])).toBe(1);
});

test('all same composite', () => {
  expect(solve([6, 6, 6, 6])).toBe(4);
});

test('case with large primes', () => {
  expect(solve([999983, 999979, 999961])).toBe(1);
});

test('repeated primes and composites', () => {
  expect(solve([2, 4, 8, 16, 32])).toBe(1);
});

test('array length 1', () => {
  expect(solve([7])).toBe(1);
});

test('large diverse numbers', () => {
  expect(solve([30, 42, 60, 66, 70])).toBe(8);
});

// ● all ones

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: 0

//       14 |
//       15 | test('all ones', () => {
//     > 16 |   expect(solve([1, 1, 1, 1, 1])).toBe(1);
//          |                                  ^
//       17 | });
//       18 |
//       19 | test('all distinct primes', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/21_prompt2.test.js:16:34)

//   ● all distinct primes

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: 0

//       18 |
//       19 | test('all distinct primes', () => {
//     > 20 |   expect(solve([2, 3, 5, 7, 11])).toBe(1);
//          |                                   ^
//       21 | });
//       22 |
//       23 | test('all same composite', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/21_prompt2.test.js:20:35)

//   ● case with large primes

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: 0

//       26 |
//       27 | test('case with large primes', () => {
//     > 28 |   expect(solve([999983, 999979, 999961])).toBe(1);
//          |                                           ^
//       29 | });
//       30 |
//       31 | test('repeated primes and composites', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/21_prompt2.test.js:28:43)

//   ● repeated primes and composites

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: 8

//       30 |
//       31 | test('repeated primes and composites', () => {
//     > 32 |   expect(solve([2, 4, 8, 16, 32])).toBe(1);
//          |                                    ^
//       33 | });
//       34 |
//       35 | test('array length 1', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/21_prompt2.test.js:32:36)

//   ● array length 1

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: undefined

//       34 |
//       35 | test('array length 1', () => {
//     > 36 |   expect(solve([7])).toBe(1);
//          |                      ^
//       37 | });
//       38 |
//       39 | test('large diverse numbers', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/21_prompt2.test.js:36:22)
