import {solve} from '../../solutions-descriptive/46.js';

test('single vertex graph', () => {
  expect(solve(1, [100])).toBe('Yes');
});

test('two vertices, same value', () => {
  expect(solve(2, [10, 10])).toBe(`Yes
1 2`);
});

test('two vertices, different values, operation possible', () => {
  expect(solve(2, [5, 8])).toBe(`Yes
1 2`);
});

test('three vertices, all same', () => {
  expect(solve(3, [7, 7, 7])).toBe(`Yes
1 2
1 3`);
});

test('three vertices, all different, impossible', () => {
  expect(solve(3, [1, 2, 4])).toBe('No');
});

test('three vertices, possible', () => {
  expect(solve(3, [1, 3, 5])).toBe(`Yes
1 2
1 3`);
});

test('four vertices, two pairs of equal values', () => {
  expect(solve(4, [2, 2, 3, 3])).toBe(`Yes
1 2
1 3
1 4`);
});

test('four vertices, alternating values', () => {
  expect(solve(4, [1, 2, 1, 2])).toBe(`Yes
1 2
1 3
1 4`);
});

test('impossible with all unique numbers in certain configuration', () => {
  expect(solve(4, [2, 3, 5, 7])).toBe('No');
});

test('larger input all equal', () => {
  expect(solve(5, [9, 9, 9, 9, 9])).toBe(`Yes
1 2
1 3
1 4
1 5`);
});

test('n=5 possible', () => {
  expect(solve(5, [1, 2, 1, 2, 1])).toBe(`Yes
1 2
1 3
1 4
1 5`);
});






// single vertex graph

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "Yes"
//     Received: 100

//       2 |
//       3 | test('single vertex graph', () => {
//     > 4 |   expect(solve(1, [100])).toBe('Yes');
//         |                           ^
//       5 | });
//       6 |
//       7 | test('two vertices, same value', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/46_prompt1.test.js:4:27)

//   ● two vertices, same value

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "Yes
//     1 2"
//     Received: 10

//        6 |
//        7 | test('two vertices, same value', () => {
//     >  8 |   expect(solve(2, [10, 10])).toBe(`Yes
//          |                              ^
//        9 | 1 2`);
//       10 | });
//       11 |

//       at Object.toBe (tests-descriptive/tests-prompt1/46_prompt1.test.js:8:30)

//   ● two vertices, different values, operation possible

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "Yes
//     1 2"
//     Received: 13

//       11 |
//       12 | test('two vertices, different values, operation possible', () => {
//     > 13 |   expect(solve(2, [5, 8])).toBe(`Yes
//          |                            ^
//       14 | 1 2`);
//       15 | });
//       16 |

//       at Object.toBe (tests-descriptive/tests-prompt1/46_prompt1.test.js:13:28)

//   ● three vertices, all same

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "Yes
//     1 2
//     1 3"
//     Received: 7

//       16 |
//       17 | test('three vertices, all same', () => {
//     > 18 |   expect(solve(3, [7, 7, 7])).toBe(`Yes
//          |                               ^
//       19 | 1 2
//       20 | 1 3`);
//       21 | });

//       at Object.toBe (tests-descriptive/tests-prompt1/46_prompt1.test.js:18:31)

//   ● three vertices, all different, impossible

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "No"
//     Received: 7

//       22 |
//       23 | test('three vertices, all different, impossible', () => {
//     > 24 |   expect(solve(3, [1, 2, 4])).toBe('No');
//          |                               ^
//       25 | });
//       26 |
//       27 | test('three vertices, possible', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/46_prompt1.test.js:24:31)

//   ● three vertices, possible

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "Yes
//     1 2
//     1 3"
//     Received: 7

//       26 |
//       27 | test('three vertices, possible', () => {
//     > 28 |   expect(solve(3, [1, 3, 5])).toBe(`Yes
//          |                               ^
//       29 | 1 2
//       30 | 1 3`);
//       31 | });

//       at Object.toBe (tests-descriptive/tests-prompt1/46_prompt1.test.js:28:31)

//   ● four vertices, two pairs of equal values

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "Yes
//     1 2
//     1 3
//     1 4"
//     Received: 3

//       32 |
//       33 | test('four vertices, two pairs of equal values', () => {
//     > 34 |   expect(solve(4, [2, 2, 3, 3])).toBe(`Yes
//          |                                  ^
//       35 | 1 2
//       36 | 1 3
//       37 | 1 4`);

//       at Object.toBe (tests-descriptive/tests-prompt1/46_prompt1.test.js:34:34)

//   ● four vertices, alternating values

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "Yes
//     1 2
//     1 3
//     1 4"
//     Received: 3

//       39 |
//       40 | test('four vertices, alternating values', () => {
//     > 41 |   expect(solve(4, [1, 2, 1, 2])).toBe(`Yes
//          |                                  ^
//       42 | 1 2
//       43 | 1 3
//       44 | 1 4`);

//       at Object.toBe (tests-descriptive/tests-prompt1/46_prompt1.test.js:41:34)

//   ● impossible with all unique numbers in certain configuration

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "No"
//     Received: 7

//       46 |
//       47 | test('impossible with all unique numbers in certain configuration', () => {
//     > 48 |   expect(solve(4, [2, 3, 5, 7])).toBe('No');
//          |                                  ^
//       49 | });
//       50 |
//       51 | test('larger input all equal', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/46_prompt1.test.js:48:34)

//   ● larger input all equal

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "Yes
//     1 2
//     1 3
//     1 4
//     1 5"
//     Received: 9

//       50 |
//       51 | test('larger input all equal', () => {
//     > 52 |   expect(solve(5, [9, 9, 9, 9, 9])).toBe(`Yes
//          |                                     ^
//       53 | 1 2
//       54 | 1 3
//       55 | 1 4

//       at Object.toBe (tests-descriptive/tests-prompt1/46_prompt1.test.js:52:37)

//   ● n=5 possible

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "Yes
//     1 2
//     1 3
//     1 4
//     1 5"
//     Received: 3

//       58 |
//       59 | test('n=5 possible', () => {
//     > 60 |   expect(solve(5, [1, 2, 1, 2, 1])).toBe(`Yes
//          |                                     ^
//       61 | 1 2
//       62 | 1 3
//       63 | 1 4

//       at Object.toBe (tests-descriptive/tests-prompt1/46_prompt1.test.js:60:37)