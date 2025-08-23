// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/43.js';

test('typical case 1', () => {
    expect(solve(5, [4, 0, 3, 1, 2])).toEqual([3, 2]);
});

test('typical case 2', () => {
    expect(solve(5, [1, 2, 3, 4, 0])).toEqual([3, 4]);
});

test('typical case 3', () => {
    expect(solve(5, [1, 3, 4, 0, 2])).toEqual([4, 5]);
});

test('ascending array (already sorted)', () => {
    expect(solve(4, [1, 2, 3, 4])).toEqual([0, 6]);
});

test('descending array', () => {
    expect(solve(4, [4, 3, 2, 1])).toEqual([2, 3]);
});

test('single element', () => {
    expect(solve(1, [7])).toEqual([Number.MAX_SAFE_INTEGER, 0]);
});

test('two elements increasing', () => {
    expect(solve(2, [1, 2])).toEqual([0, 1]);
});

test('two elements decreasing', () => {
    expect(solve(2, [2, 1])).toEqual([0, 1]);
});

test('all elements equal', () => {
    expect(solve(3, [5, 5, 5])).toEqual([0, 3]);
});

test('array with negative numbers', () => {
    expect(solve(4, [3, -1, 2, -2])).toEqual([2, 3]);
});

test('array with large numbers', () => {
    expect(solve(3, [100000, 300000, 200000])).toEqual([0, 3]);
});

test('n = 0, empty array', () => {
    expect(solve(0, [])).toEqual([Number.MAX_SAFE_INTEGER, 0]);
});

test('minimum allowed input (n=1)', () => {
    expect(solve(1, [0])).toEqual([Number.MAX_SAFE_INTEGER, 0]);
});


// ascending array (already sorted)

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//         0,
//     -   6,
//     +   3,
//       ]

//       14 |
//       15 | test('ascending array (already sorted)', () => {
//     > 16 |     expect(solve(4, [1, 2, 3, 4])).toEqual([0, 6]);
//          |                                    ^
//       17 | });
//       18 |
//       19 | test('descending array', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt2/43_prompt2.test.js:16:36)

//   ● descending array

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 2
//     + Received  + 2

//       Array [
//     -   2,
//     -   3,
//     +   1,
//     +   1,
//       ]

//       18 |
//       19 | test('descending array', () => {
//     > 20 |     expect(solve(4, [4, 3, 2, 1])).toEqual([2, 3]);
//          |                                    ^
//       21 | });
//       22 |
//       23 | test('single element', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt2/43_prompt2.test.js:20:36)

//   ● all elements equal

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//     -   0,
//     +   -1,
//         3,
//       ]

//       34 |
//       35 | test('all elements equal', () => {
//     > 36 |     expect(solve(3, [5, 5, 5])).toEqual([0, 3]);
//          |                                 ^
//       37 | });
//       38 |
//       39 | test('array with negative numbers', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt2/43_prompt2.test.js:36:33)

//   ● array with negative numbers

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 2
//     + Received  + 2

//       Array [
//     -   2,
//     -   3,
//     +   0,
//     +   1,
//       ]

//       38 |
//       39 | test('array with negative numbers', () => {
//     > 40 |     expect(solve(4, [3, -1, 2, -2])).toEqual([2, 3]);
//          |                                      ^
//       41 | });
//       42 |
//       43 | test('array with large numbers', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt2/43_prompt2.test.js:40:38)

//   ● array with large numbers

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//         0,
//     -   3,
//     +   1,
//       ]

//       42 |
//       43 | test('array with large numbers', () => {
//     > 44 |     expect(solve(3, [100000, 300000, 200000])).toEqual([0, 3]);
//          |                                                ^
//       45 | });
//       46 |
//       47 | test('n = 0, empty array', () => {

//       at Object.toEqual (tests-algorithm/tests-prompt2/43_prompt2.test.js:44:48)
