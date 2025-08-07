import { solve } from '../../solutions-descriptive/24.js';

test('typical case 1', () => {
  expect(solve(2, 10, 20, 3)).toBe(36);
});

test('unit cost zero', () => {
  expect(solve(0, 10, 20, 3)).toBe(80);
});

test('overhead cost zero', () => {
  expect(solve(5, 0, 25, 4)).toBe(25);
});

test('total work less than max group size', () => {
  expect(solve(1, 5, 2, 10)).toBe(2);
});

test('total work exactly divisible by group size', () => {
  expect(solve(3, 6, 12, 4)).toBe(24);
});

test('all zeros', () => {
  expect(solve(0, 0, 0, 0)).toBe(0);
});

test('single unit of work', () => {
  expect(solve(7, 8, 1, 1)).toBe(7);
});

test('large numbers', () => {
  expect(solve(10, 20, 1000, 20)).toBe(560);
});

test('max group size is 1', () => {
  expect(solve(2, 3, 5, 1)).toBe(13);
});

test('overhead much higher than unit cost', () => {
  expect(solve(1, 100, 10, 3)).toBe(104);
});

test('unit cost much higher than overhead', () => {
  expect(solve(100, 1, 10, 5)).toBe(105);
});

test('total work is zero', () => {
  expect(solve(10, 25, 0, 8)).toBe(0);
});

test('max group and total work both are 1', () => {
  expect(solve(5, 12, 1, 1)).toBe(5);
});


// typical case 1

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 36
//     Received: 52

//       2 |
//       3 | test('typical case 1', () => {
//     > 4 |   expect(solve(2, 10, 20, 3)).toBe(36);
//         |                               ^
//       5 | });
//       6 |
//       7 | test('unit cost zero', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/24_prompt2.test.js:4:31)

//   ● unit cost zero

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 80
//     Received: 40

//        6 |
//        7 | test('unit cost zero', () => {
//     >  8 |   expect(solve(0, 10, 20, 3)).toBe(80);
//          |                               ^
//        9 | });
//       10 |
//       11 | test('overhead cost zero', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/24_prompt2.test.js:8:31)

//   ● overhead cost zero

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 25
//     Received: 5

//       10 |
//       11 | test('overhead cost zero', () => {
//     > 12 |   expect(solve(5, 0, 25, 4)).toBe(25);
//          |                              ^
//       13 | });
//       14 |
//       15 | test('total work less than max group size', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/24_prompt2.test.js:12:30)

//   ● total work less than max group size

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 7

//       14 |
//       15 | test('total work less than max group size', () => {
//     > 16 |   expect(solve(1, 5, 2, 10)).toBe(2);
//          |                              ^
//       17 | });
//       18 |
//       19 | test('total work exactly divisible by group size', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/24_prompt2.test.js:16:30)

//   ● total work exactly divisible by group size

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 24
//     Received: 30

//       18 |
//       19 | test('total work exactly divisible by group size', () => {
//     > 20 |   expect(solve(3, 6, 12, 4)).toBe(24);
//          |                              ^
//       21 | });
//       22 |
//       23 | test('all zeros', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/24_prompt2.test.js:20:30)

//   ● single unit of work

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 7
//     Received: 15

//       26 |
//       27 | test('single unit of work', () => {
//     > 28 |   expect(solve(7, 8, 1, 1)).toBe(7);
//          |                             ^
//       29 | });
//       30 |
//       31 | test('large numbers', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/24_prompt2.test.js:28:29)

//   ● large numbers

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 560
//     Received: 910

//       30 |
//       31 | test('large numbers', () => {
//     > 32 |   expect(solve(10, 20, 1000, 20)).toBe(560);
//          |                                   ^
//       33 | });
//       34 |
//       35 | test('max group size is 1', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/24_prompt2.test.js:32:35)

//   ● overhead much higher than unit cost

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 104
//     Received: 304

//       38 |
//       39 | test('overhead much higher than unit cost', () => {
//     > 40 |   expect(solve(1, 100, 10, 3)).toBe(104);
//          |                                ^
//       41 | });
//       42 |
//       43 | test('unit cost much higher than overhead', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/24_prompt2.test.js:40:32)

//   ● unit cost much higher than overhead

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 105
//     Received: 110

//       42 |
//       43 | test('unit cost much higher than overhead', () => {
//     > 44 |   expect(solve(100, 1, 10, 5)).toBe(105);
//          |                                ^
//       45 | });
//       46 |
//       47 | test('total work is zero', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/24_prompt2.test.js:44:32)

//   ● max group and total work both are 1

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 5
//     Received: 17

//       50 |
//       51 | test('max group and total work both are 1', () => {
//     > 52 |   expect(solve(5, 12, 1, 1)).toBe(5);
//          |                              ^
//       53 | });

//       at Object.toBe (tests-descriptive/tests-prompt2/24_prompt2.test.js:52:30)
