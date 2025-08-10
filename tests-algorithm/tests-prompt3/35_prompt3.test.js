import { solve } from '../../../solutions-algorithm/35.js';

test('Sample and boundary test cases', () => {
  expect(solve([[5, 2]])).toEqual([2]);
  expect(solve([[3, 5]])).toEqual([3]);
  expect(solve([[16, 4]])).toEqual([1]);
  expect(solve([[100, 3]])).toEqual([4]);
  expect(solve([[6492, 10]])).toEqual([21]);
  expect(solve([[10, 1]])).toEqual([10]);
});

test('Edge cases: n=1, k=1 and k large', () => {
  expect(solve([[1, 1]])).toEqual([1]);
  expect(solve([[1, 1e9]])).toEqual([1]);
  expect(solve([[1e9, 1]])).toEqual([1e9]);
});

test('k greater than n', () => {
  expect(solve([[3, 5]])).toEqual([3]);
  expect(solve([[4, 10]])).toEqual([4]);
  expect(solve([[7, 100]])).toEqual([7]);
  expect(solve([[1e6, 2e6]])).toEqual([1e6]);
});

test('n exactly a power of k', () => {
  expect(solve([[8, 2]])).toEqual([1]);
  expect(solve([[27, 3]])).toEqual([1]);
  expect(solve([[625, 5]])).toEqual([1]);
});

test('k=2 binary representation sum', () => {
  expect(solve([[7, 2]])).toEqual([3]);
  expect(solve([[15, 2]])).toEqual([4]);
  expect(solve([[1023, 2]])).toEqual([10]);
  expect(solve([[1024, 2]])).toEqual([1]);
});

test('Large n and k', () => {
  expect(solve([[1e9, 1e9]])).toEqual([1]);
  expect(solve([[1e9 - 1, 1e9]])).toEqual([999999999]);
  expect(solve([[1e9, 999999937]])).toEqual([2]);
});

test('Multiple test cases in one call', () => {
  const input = [
    [5, 2],
    [3, 5],
    [16, 4],
    [100, 3],
    [6492, 10],
    [10, 1],
    [27, 3],
    [1, 1e9]
  ];
  expect(solve(input)).toEqual([2, 3, 1, 4, 21, 10, 1, 1]);
});

// Large n and k

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//     -   2,
//     +   64,
//       ]

//       39 |   expect(solve([[1e9, 1e9]])).toEqual([1]);
//       40 |   expect(solve([[1e9 - 1, 1e9]])).toEqual([999999999]);
//     > 41 |   expect(solve([[1e9, 999999937]])).toEqual([2]);
//          |                                     ^
//       42 | });
//       43 |
//       44 | test('Multiple test cases in one call', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt3/35_prompt3.test.js:41:3
