import { solve } from '../../solutions-descriptive/18.js';

test('Example 1 - 1x1 matrix, same', () => {
  expect(solve(
    1, 1,
    [[5]],
    [[5]]
  )).toBe('Yes');
});

test('Example 2 - 1x1 matrix, different', () => {
  expect(solve(
    1, 1,
    [[8]],
    [[10]]
  )).toBe('No');
});

test('Example 3 - Bitwise AND to zero', () => {
  expect(solve(
    2, 2,
    [
      [3, 7],
      [1, 0]
    ],
    [
      [0, 0],
      [0, 0]
    ]
  )).toBe('Yes');
});

test('Example 4 - Bitwise OR to make all ones', () => {
  expect(solve(
    2, 2,
    [
      [0, 0],
      [0, 0]
    ],
    [
      [1, 1],
      [1, 1]
    ]
  )).toBe('Yes');
});

test('Example 5 - Mixed operations required', () => {
  expect(solve(
    2, 3,
    [
      [4, 5, 6],
      [7, 8, 9]
    ],
    [
      [4, 5, 7],
      [7, 8, 11]
    ]
  )).toBe('No');
});

test('Example 6 - Impossible, trying to set bits not present in original', () => {
  expect(solve(
    2, 2,
    [
      [1, 1],
      [2, 2]
    ],
    [
      [3, 1],
      [2, 6]
    ]
  )).toBe('No');
});

test('Example 7 - Large matrix, all become zero', () => {
  expect(solve(
    3, 3,
    [
      [5, 6, 7],
      [8, 9, 10],
      [11, 12, 13]
    ],
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  )).toBe('Yes');
});

test('Example 8 - Large matrix, matching', () => {
  expect(solve(
    3, 3,
    [
      [1, 2, 4],
      [8, 16, 32],
      [64, 128, 256]
    ],
    [
      [1, 2, 4],
      [8, 16, 32],
      [64, 128, 256]
    ]
  )).toBe('Yes');
});

test('Example 9 - Single row, OR operation only', () => {
  expect(solve(
    1, 3,
    [
      [0, 1, 2]
    ],
    [
      [1, 1, 3]
    ]
  )).toBe('Yes');
});

test('Example 10 - Single column, AND operation only', () => {
  expect(solve(
    3, 1,
    [
      [7],
      [7],
      [7]
    ],
    [
      [5],
      [7],
      [1]
    ]
  )).toBe('Yes');
});




// × Example 1 - 1x1 matrix, same (5 ms)
//   × Example 2 - 1x1 matrix, different (2 ms)
//   × Example 3 - Bitwise AND to zero
//   × Example 4 - Bitwise OR to make all ones
//   × Example 5 - Mixed operations required (1 ms)
//   × Example 6 - Impossible, trying to set bits not present in original (1 ms)
//   × Example 7 - Large matrix, all become zero (1 ms)
//   × Example 8 - Large matrix, matching
//   × Example 9 - Single row, OR operation only (1 ms)
//   × Example 10 - Single column, AND operation only (1 ms)  

//   ● Example 1 - 1x1 matrix, same

//     expect(received).toBe(expected) // Object.is equality

//     - Expected  - 0
//     + Received  + 1

//       Yes
//     +

//        6 |     [[5]],
//        7 |     [[5]]
//     >  8 |   )).toBe('Yes');
//          |      ^
//        9 | });
//       10 |
//       11 | test('Example 2 - 1x1 matrix, different', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/18_prompt1.test.js:8:6)

//   ● Example 2 - 1x1 matrix, different

//     expect(received).toBe(expected) // Object.is equality

//     - Expected  - 1
//     + Received  + 2

//     - No
//     + Yes
//     +

//       14 |     [[8]],
//       15 |     [[10]]
//     > 16 |   )).toBe('No');
//          |      ^
//       17 | });
//       18 |
//       19 | test('Example 3 - Bitwise AND to zero', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/18_prompt1.test.js:16:6)

//   ● Example 3 - Bitwise AND to zero

//     expect(received).toBe(expected) // Object.is equality

//     - Expected  - 0
//     + Received  + 1

//       Yes
//     +

//       28 |       [0, 0]
//       29 |     ]
//     > 30 |   )).toBe('Yes');
//          |      ^
//       31 | });
//       32 |
//       33 | test('Example 4 - Bitwise OR to make all ones', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/18_prompt1.test.js:30:6)

//   ● Example 4 - Bitwise OR to make all ones

//     expect(received).toBe(expected) // Object.is equality

//     - Expected  - 0
//     + Received  + 1

//       Yes
//     +

//       42 |       [1, 1]
//       43 |     ]
//     > 44 |   )).toBe('Yes');
//          |      ^
//       45 | });
//       46 |
//       47 | test('Example 5 - Mixed operations required', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/18_prompt1.test.js:44:6)

//   ● Example 5 - Mixed operations required

//     expect(received).toBe(expected) // Object.is equality

//     - Expected  - 1
//     + Received  + 2

//     - No
//     + Yes
//     +

//       56 |       [7, 8, 11]
//       57 |     ]
//     > 58 |   )).toBe('No');
//          |      ^
//       59 | });
//       60 |
//       61 | test('Example 6 - Impossible, trying to set bits not present in original', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/18_prompt1.test.js:58:6)

//   ● Example 6 - Impossible, trying to set bits not present in original

//     expect(received).toBe(expected) // Object.is equality

//     - Expected  - 1
//     + Received  + 2

//     - No
//     + Yes
//     +

//       70 |       [2, 6]
//       71 |     ]
//     > 72 |   )).toBe('No');
//          |      ^
//       73 | });
//       74 |
//       75 | test('Example 7 - Large matrix, all become zero', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/18_prompt1.test.js:72:6)

//   ● Example 7 - Large matrix, all become zero

//     expect(received).toBe(expected) // Object.is equality

//     - Expected  - 0
//     + Received  + 1

//       Yes
//     +

//       86 |       [0, 0, 0]
//       87 |     ]
//     > 88 |   )).toBe('Yes');
//          |      ^
//       89 | });
//       90 |
//       91 | test('Example 8 - Large matrix, matching', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/18_prompt1.test.js:88:6)

//   ● Example 8 - Large matrix, matching

//     expect(received).toBe(expected) // Object.is equality

//     - Expected  - 0
//     + Received  + 1

//       Yes
//     +

//       102 |       [64, 128, 256]
//       103 |     ]
//     > 104 |   )).toBe('Yes');
//           |      ^
//       105 | });
//       106 |
//       107 | test('Example 9 - Single row, OR operation only', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/18_prompt1.test.js:104:6)

//   ● Example 9 - Single row, OR operation only

//     expect(received).toBe(expected) // Object.is equality

//     - Expected  - 0
//     + Received  + 1

//       Yes
//     +

//       114 |       [1, 1, 3]
//       115 |     ]
//     > 116 |   )).toBe('Yes');
//           |      ^
//       117 | });
//       118 |
//       119 | test('Example 10 - Single column, AND operation only', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/18_prompt1.test.js:116:6)

//   ● Example 10 - Single column, AND operation only

//     expect(received).toBe(expected) // Object.is equality

//     - Expected  - 0
//     + Received  + 1

//       Yes
//     +

//       130 |       [1]
//       131 |     ]
//     > 132 |   )).toBe('Yes');
//           |      ^
//       133 | });

//       at Object.toBe (tests-descriptive/tests-prompt1/18_prompt1.test.js:132:6)