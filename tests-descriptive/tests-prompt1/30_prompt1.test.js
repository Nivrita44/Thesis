import { solve } from '../../solutions-descriptive/30.js';

test('example 1', () => {
  expect(solve(3, [2, 3, 1])).toBe(3);
});

test('example 2', () => {
  expect(solve(5, [2, 3, 4, 5, 1])).toBe(5);
});

test('two cycles', () => {
  expect(solve(4, [2, 1, 4, 3])).toBe(2);
});

test('selfish ring', () => {
  expect(solve(6, [2, 3, 1, 5, 6, 4])).toBe(3);
});

test('cycle lengths LCM', () => {
  expect(solve(6, [2, 3, 1, 5, 6, 4])).toBe(3);
  expect(solve(4, [2, 3, 4, 1])).toBe(4);
});

test('disjoint cycles lcm', () => {
  expect(solve(6, [2, 1, 4, 3, 6, 5])).toBe(2);
});

test('cycle of 2 and 3', () => {
  expect(solve(5, [2, 1, 4, 5, 3])).toBe(6);
});

test('long chain single cycle', () => {
  expect(solve(7, [2, 3, 4, 5, 6, 7, 1])).toBe(7);
});

test('all send to one', () => {
  expect(solve(4, [2, 2, 2, 2])).toBe(2);
});

test('n=2 path', () => {
  expect(solve(2, [2, 1])).toBe(2);
});

test('simple large even n with single cycle', () => {
  let n = 10;
  let arr = [];
  for (let i = 0; i < n - 1; ++i) arr.push(i + 2);
  arr.push(1);
  expect(solve(n, arr)).toBe(10);
});

test('two cycles with different lengths', () => {
  expect(solve(8, [2, 3, 1, 5, 6, 4, 8, 7])).toBe(6);
});




// example 1

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 3
//     Received: 1

//       2 |
//       3 | test('example 1', () => {
//     > 4 |   expect(solve(3, [2, 3, 1])).toBe(3);
//         |                               ^
//       5 | });
//       6 |
//       7 | test('example 2', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/30_prompt1.test.js:4:31)

//   ● example 2

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 5
//     Received: 1

//        6 |
//        7 | test('example 2', () => {
//     >  8 |   expect(solve(5, [2, 3, 4, 5, 1])).toBe(5);
//          |                                     ^
//        9 | });
//       10 |
//       11 | test('two cycles', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/30_prompt1.test.js:8:37)

//   ● selfish ring

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 3
//     Received: 2

//       14 |
//       15 | test('selfish ring', () => {
//     > 16 |   expect(solve(6, [2, 3, 1, 5, 6, 4])).toBe(3);
//          |                                        ^
//       17 | });
//       18 |
//       19 | test('cycle lengths LCM', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/30_prompt1.test.js:16:40)

//   ● cycle lengths LCM

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 3
//     Received: 2

//       18 |
//       19 | test('cycle lengths LCM', () => {
//     > 20 |   expect(solve(6, [2, 3, 1, 5, 6, 4])).toBe(3);
//          |                                        ^
//       21 |   expect(solve(4, [2, 3, 4, 1])).toBe(4);
//       22 | });
//       23 |

//       at Object.toBe (tests-descriptive/tests-prompt1/30_prompt1.test.js:20:40)

//   ● disjoint cycles lcm

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 3

//       23 |
//       24 | test('disjoint cycles lcm', () => {
//     > 25 |   expect(solve(6, [2, 1, 4, 3, 6, 5])).toBe(2);
//          |                                        ^
//       26 | });
//       27 |
//       28 | test('cycle of 2 and 3', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/30_prompt1.test.js:25:40)

//   ● cycle of 2 and 3

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 6
//     Received: 2

//       27 |
//       28 | test('cycle of 2 and 3', () => {
//     > 29 |   expect(solve(5, [2, 1, 4, 5, 3])).toBe(6);
//          |                                     ^
//       30 | });
//       31 |
//       32 | test('long chain single cycle', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/30_prompt1.test.js:29:37)

//   ● long chain single cycle

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 7
//     Received: 1

//       31 |
//       32 | test('long chain single cycle', () => {
//     > 33 |   expect(solve(7, [2, 3, 4, 5, 6, 7, 1])).toBe(7);
//          |                                           ^
//       34 | });
//       35 |
//       36 | test('all send to one', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/30_prompt1.test.js:33:43)

//   ● all send to one

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 3

//       35 |
//       36 | test('all send to one', () => {
//     > 37 |   expect(solve(4, [2, 2, 2, 2])).toBe(2);
//          |                                  ^
//       38 | });
//       39 |
//       40 | test('n=2 path', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/30_prompt1.test.js:37:34)

//   ● n=2 path

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 1

//       39 |
//       40 | test('n=2 path', () => {
//     > 41 |   expect(solve(2, [2, 1])).toBe(2);
//          |                            ^
//       42 | });
//       43 |
//       44 | test('simple large even n with single cycle', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/30_prompt1.test.js:41:28)

//   ● simple large even n with single cycle

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 10
//     Received: 1

//       47 |   for (let i = 0; i < n - 1; ++i) arr.push(i + 2);
//       48 |   arr.push(1);
//     > 49 |   expect(solve(n, arr)).toBe(10);
//          |                         ^
//       50 | });
//       51 |
//       52 | test('two cycles with different lengths', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/30_prompt1.test.js:49:25)

//   ● two cycles with different lengths

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 6
//     Received: 3

//       51 |
//       52 | test('two cycles with different lengths', () => {
//     > 53 |   expect(solve(8, [2, 3, 1, 5, 6, 4, 8, 7])).toBe(6);
//          |                                              ^
//       54 | });

//       at Object.toBe (tests-descriptive/tests-prompt1/30_prompt1.test.js:53:46)