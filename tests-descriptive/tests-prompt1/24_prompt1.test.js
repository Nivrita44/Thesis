import { solve } from '../../solutions-descriptive/24.js';

test('case 1', () => {
  expect(solve(1, 1, 1, 1)).toBe(1);
});

test('case 2', () => {
  expect(solve(2, 3, 10, 2)).toBe(12);
});

test('case 3', () => {
  expect(solve(1, 100, 100, 50)).toBe(100);
});

test('case 4', () => {
  expect(solve(3, 6, 14, 1)).toBe(24);
});

test('case 5', () => {
  expect(solve(10, 1, 100, 10)).toBe(22);
});

test('case 6', () => {
  expect(solve(10000000, 1, 10000000, 100)).toBe(2698);
});

test('minimal k', () => {
  expect(solve(2, 1, 9, 1)).toBe(9);
});

test('max x', () => {
  expect(solve(1e8, 1, 20, 20)).toBe(20);
});

test('attack-only optimal', () => {
  expect(solve(10, 1, 10, 1)).toBe(10);
});

test('increase-optimal', () => {
  expect(solve(1, 100, 10, 10)).toBe(10);
});

// case 1

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: 2

//       2 |
//       3 | test('case 1', () => {
//     > 4 |   expect(solve(1, 1, 1, 1)).toBe(1);
//         |                             ^
//       5 | });
//       6 |
//       7 | test('case 2', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/24_prompt1.test.js:4:29)

//   ● case 2

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 12
//     Received: 17

//        6 |
//        7 | test('case 2', () => {
//     >  8 |   expect(solve(2, 3, 10, 2)).toBe(12);
//          |                              ^
//        9 | });
//       10 |
//       11 | test('case 3', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/24_prompt1.test.js:8:30)

//   ● case 3

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 100
//     Received: 250

//       10 |
//       11 | test('case 3', () => {
//     > 12 |   expect(solve(1, 100, 100, 50)).toBe(100);
//          |                                  ^
//       13 | });
//       14 |
//       15 | test('case 4', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/24_prompt1.test.js:12:34)

//   ● case 4

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 24
//     Received: 42

//       14 |
//       15 | test('case 4', () => {
//     > 16 |   expect(solve(3, 6, 14, 1)).toBe(24);
//          |                              ^
//       17 | });
//       18 |
//       19 | test('case 5', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/24_prompt1.test.js:16:30)

//   ● case 5

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 22
//     Received: 64

//       18 |
//       19 | test('case 5', () => {
//     > 20 |   expect(solve(10, 1, 100, 10)).toBe(22);
//          |                                 ^
//       21 | });
//       22 |
//       23 | test('case 6', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/24_prompt1.test.js:20:33)

//   ● case 6

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2698
//     Received: 20000000

//       22 |
//       23 | test('case 6', () => {
//     > 24 |   expect(solve(10000000, 1, 10000000, 100)).toBe(2698);
//          |                                             ^
//       25 | });
//       26 |
//       27 | test('minimal k', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/24_prompt1.test.js:24:45)

//   ● max x

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 20
//     Received: 100000020

//       30 |
//       31 | test('max x', () => {
//     > 32 |   expect(solve(1e8, 1, 20, 20)).toBe(20);
//          |                                 ^
//       33 | });
//       34 |
//       35 | test('attack-only optimal', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/24_prompt1.test.js:32:33)

//   ● attack-only optimal

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 10
//     Received: 20

//       34 |
//       35 | test('attack-only optimal', () => {
//     > 36 |   expect(solve(10, 1, 10, 1)).toBe(10);
//          |                               ^
//       37 | });
//       38 |
//       39 | test('increase-optimal', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/24_prompt1.test.js:36:31)

//   ● increase-optimal

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 10
//     Received: 110

//       38 |
//       39 | test('increase-optimal', () => {
//     > 40 |   expect(solve(1, 100, 10, 10)).toBe(10);
//          |                                 ^
//       41 | });

//       at Object.toBe (tests-descriptive/tests-prompt1/24_prompt1.test.js:40:33)