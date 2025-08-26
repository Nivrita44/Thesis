import { solve } from '../../../solutions-algorithm/43.js';

test('example 1', () => {
  expect(solve(5, [4, 0, 3, 1, 2])).toEqual([3, 2]);
});

test('example 2', () => {
  expect(solve(5, [1, 2, 3, 4, 0])).toEqual([3, 4]);
});

test('example 3', () => {
  expect(solve(5, [1, 3, 4, 0, 2])).toEqual([4, 5]);
});

test('sorted ascending, minimum n', () => {
  expect(solve(2, [0, 1])).toEqual([0, 1]);
});

test('reverse sorted, minimum n', () => {
  expect(solve(2, [1, 0])).toEqual([0, 1]);
});

test('sorted ascending, n=4', () => {
  expect(solve(4, [0, 1, 2, 3])).toEqual([0, 3]);
});

test('reverse sorted, n=4', () => {
  expect(solve(4, [3, 2, 1, 0])).toEqual([2, 1]);
});

test('single inversion, n=3', () => {
  expect(solve(3, [0, 2, 1])).toEqual([0, 2]);
});

test('single inversion different place, n=3', () => {
  expect(solve(3, [1, 0, 2])).toEqual([0, 2]);
});

test('random permutation, n=6', () => {
  expect(solve(6, [3, 0, 5, 2, 1, 4])).toEqual([7, 2]);
});

test('random with large n', () => {
  const arr = Array.from({length: 100}, (v, i) => i);
  const shuffled = arr.slice().reverse();
  const result = solve(100, shuffled);
  expect(result[0]).toBeLessThan(4950);
  expect(result[1]).toBeGreaterThanOrEqual(1);
});

test('almost sorted except last 2 swapped', () => {
  expect(solve(6, [0, 1, 2, 3, 5, 4])).toEqual([0, 5]);
});

test('cyclic shift', () => {
  expect(solve(4, [1, 2, 3, 0])).toEqual([2, 2]);
});

test('edge case: all possible swaps, n=3', () => {
  expect(solve(3, [2, 1, 0])).toEqual([1, 1]);
});



// reverse sorted, n=4

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//     -   2,
//     +   1,
//         1,
//       ]

//       26 |
//       27 | test('reverse sorted, n=4', () => {
//     > 28 |   expect(solve(4, [3, 2, 1, 0])).toEqual([2, 1]);
//          |                                  ^
//       29 | });
//       30 |
//       31 | test('single inversion, n=3', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt3/43_prompt3.test.js:28:34)

//   ● single inversion, n=3

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//         0,
//     -   2,
//     +   1,
//       ]

//       30 |
//       31 | test('single inversion, n=3', () => {
//     > 32 |   expect(solve(3, [0, 2, 1])).toEqual([0, 2]);
//          |                               ^
//       33 | });
//       34 |
//       35 | test('single inversion different place, n=3', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt3/43_prompt3.test.js:32:31)

//   ● single inversion different place, n=3

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//         0,
//     -   2,
//     +   1,
//       ]

//       34 |
//       35 | test('single inversion different place, n=3', () => {
//     > 36 |   expect(solve(3, [1, 0, 2])).toEqual([0, 2]);
//          |                               ^
//       37 | });
//       38 |
//       39 | test('random permutation, n=6', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt3/43_prompt3.test.js:36:31)

//   ● random permutation, n=6

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//     -   7,
//     +   4,
//         2,
//       ]

//       38 |
//       39 | test('random permutation, n=6', () => {
//     > 40 |   expect(solve(6, [3, 0, 5, 2, 1, 4])).toEqual([7, 2]);
//          |                                        ^
//       41 | });
//       42 |
//       43 | test('random with large n', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt3/43_prompt3.test.js:40:40)

//   ● almost sorted except last 2 swapped

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//         0,
//     -   5,
//     +   1,
//       ]

//       50 |
//       51 | test('almost sorted except last 2 swapped', () => {
//     > 52 |   expect(solve(6, [0, 1, 2, 3, 5, 4])).toEqual([0, 5]);
//          |                                        ^
//       53 | });
//       54 |
//       55 | test('cyclic shift', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt3/43_prompt3.test.js:52:40)

//   ● cyclic shift

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//         2,
//     -   2,
//     +   3,
//       ]

//       54 |
//       55 | test('cyclic shift', () => {
//     > 56 |   expect(solve(4, [1, 2, 3, 0])).toEqual([2, 2]);
//          |                                  ^
//       57 | });
//       58 |
//       59 | test('edge case: all possible swaps, n=3', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt3/43_prompt3.test.js:56:34)

//   ● edge case: all possible swaps, n=3

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//     -   1,
//     +   0,
//         1,
//       ]

//       58 |
//       59 | test('edge case: all possible swaps, n=3', () => {
//     > 60 |   expect(solve(3, [2, 1, 0])).toEqual([1, 1]);
//          |                               ^
//       61 | });

//       at Object.toEqual (tests-algorithm/tests-prompt3/43_prompt3.test.js:60:31)
