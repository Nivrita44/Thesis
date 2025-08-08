import { solve } from '../../solutions-descriptive/50.js';

test('single element array', () => {
  expect(solve([5])).toBe(1);
});

test('two coprime numbers', () => {
  expect(solve([3, 5])).toBe(2);
});

test('two equal numbers', () => {
  expect(solve([4, 4])).toBe(1);
});

test('numbers with same LCM as element', () => {
  expect(solve([4, 6, 12])).toBe(2);
});

test('numbers with no element equal to LCM', () => {
  expect(solve([2, 3, 5])).toBe(3);
});

test('two numbers, one divides the other', () => {
  expect(solve([6, 12])).toBe(1);
});

test('LCM greater than 1e9', () => {
  expect(solve([1e6, 1e6+1, 1e6+2, 1e6+3, 1e6+4, 1e6+5, 1e6+6, 1e6+7, 1e6+8])).toBe(9);
});

test('all ones', () => {
  expect(solve([1, 1, 1])).toBe(1);
});

test('includes one, which does not change LCM', () => {
  expect(solve([1, 2, 3])).toBe(3);
});

test('three numbers, LCM is present', () => {
  expect(solve([2, 4, 8])).toBe(1);
});

test('three numbers, LCM not present', () => {
  expect(solve([2, 6, 8])).toBe(3);
});

test('array containing 1 and large coprime', () => {
  expect(solve([1, 999983])).toBe(2);
});

test('mixed multiples', () => {
  expect(solve([4, 6, 9])).toBe(3);
});

test('array with repeated elements, LCM present', () => {
  expect(solve([2, 2, 4])).toBe(1);
});

test('array with repeated elements, LCM not present', () => {
  expect(solve([2, 2, 3])).toBe(3);
});

test('edge case all same, not 1', () => {
  expect(solve([7, 7, 7, 7])).toBe(1);
});

test('edge case, array includes its LCM', () => {
  expect(solve([2, 3, 6])).toBe(2);
});

test('edge case, array includes 1 and LCM', () => {
  expect(solve([1, 2, 6])).toBe(3);
});




// single element array

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: 0

//       2 |
//       3 | test('single element array', () => {
//     > 4 |   expect(solve([5])).toBe(1);
//         |                      ^
//       5 | });
//       6 |
//       7 | test('two coprime numbers', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/50_prompt2.test.js:4:22)

//   ● two equal numbers

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: 0

//       10 |
//       11 | test('two equal numbers', () => {
//     > 12 |   expect(solve([4, 4])).toBe(1);
//          |                         ^
//       13 | });
//       14 |
//       15 | test('numbers with same LCM as element', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/50_prompt2.test.js:12:25)

//   ● numbers with same LCM as element

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 0

//       14 |
//       15 | test('numbers with same LCM as element', () => {
//     > 16 |   expect(solve([4, 6, 12])).toBe(2);
//          |                             ^
//       17 | });
//       18 |
//       19 | test('numbers with no element equal to LCM', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/50_prompt2.test.js:16:29)

//   ● two numbers, one divides the other

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: 0

//       22 |
//       23 | test('two numbers, one divides the other', () => {
//     > 24 |   expect(solve([6, 12])).toBe(1);
//          |                          ^
//       25 | });
//       26 |
//       27 | test('LCM greater than 1e9', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/50_prompt2.test.js:24:26)

//   ● all ones

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: 0

//       30 |
//       31 | test('all ones', () => {
//     > 32 |   expect(solve([1, 1, 1])).toBe(1);
//          |                            ^
//       33 | });
//       34 |
//       35 | test('includes one, which does not change LCM', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/50_prompt2.test.js:32:28)

//   ● three numbers, LCM is present

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: 0

//       38 |
//       39 | test('three numbers, LCM is present', () => {
//     > 40 |   expect(solve([2, 4, 8])).toBe(1);
//          |                            ^
//       41 | });
//       42 |
//       43 | test('three numbers, LCM not present', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/50_prompt2.test.js:40:28)

//   ● array containing 1 and large coprime

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 0

//       46 |
//       47 | test('array containing 1 and large coprime', () => {
//     > 48 |   expect(solve([1, 999983])).toBe(2);
//          |                              ^
//       49 | });
//       50 |
//       51 | test('mixed multiples', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/50_prompt2.test.js:48:30)

//   ● array with repeated elements, LCM present

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: 0

//       54 |
//       55 | test('array with repeated elements, LCM present', () => {
//     > 56 |   expect(solve([2, 2, 4])).toBe(1);
//          |                            ^
//       57 | });
//       58 |
//       59 | test('array with repeated elements, LCM not present', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/50_prompt2.test.js:56:28)

//   ● edge case all same, not 1

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: 0

//       62 |
//       63 | test('edge case all same, not 1', () => {
//     > 64 |   expect(solve([7, 7, 7, 7])).toBe(1);
//          |                               ^
//       65 | });
//       66 |
//       67 | test('edge case, array includes its LCM', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/50_prompt2.test.js:64:31)

//   ● edge case, array includes its LCM

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 0

//       66 |
//       67 | test('edge case, array includes its LCM', () => {
//     > 68 |   expect(solve([2, 3, 6])).toBe(2);
//          |                            ^
//       69 | });
//       70 |
//       71 | test('edge case, array includes 1 and LCM', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/50_prompt2.test.js:68:28)

//   ● edge case, array includes 1 and LCM

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 3
//     Received: 0

//       70 |
//       71 | test('edge case, array includes 1 and LCM', () => {
//     > 72 |   expect(solve([1, 2, 6])).toBe(3);
//          |                            ^
//       73 | });

//       at Object.toBe (tests-descriptive/tests-prompt2/50_prompt2.test.js:72:28)