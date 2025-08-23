// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/8.js';

test('example test from solution code', () => {
    const n = 10;
    const arr = [1, 2, 3, 4, 1, 2, 3, 4, 100000, 99999];
    const queries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = [6, 6, 6, 6, 6, 5, 4, 3, 2, 1];
    expect(solve(n, arr, queries)).toEqual(expected);
});

test('single element array', () => {
    const n = 1;
    const arr = [42];
    const queries = [1];
    const expected = [1];
    expect(solve(n, arr, queries)).toEqual(expected);
});

test('all elements are the same', () => {
    const n = 5;
    const arr = [7, 7, 7, 7, 7];
    const queries = [1, 2, 3, 4, 5];
    const expected = [1, 1, 1, 1, 1];
    expect(solve(n, arr, queries)).toEqual(expected);
});

test('all elements are distinct', () => {
    const n = 5;
    const arr = [1, 2, 3, 4, 5];
    const queries = [1, 2, 3, 4, 5];
    const expected = [5, 4, 3, 2, 1];
    expect(solve(n, arr, queries)).toEqual(expected);
});

test('queries in reverse order', () => {
    const n = 5;
    const arr = [1, 2, 1, 2, 3];
    const queries = [5, 4, 3, 2, 1];
    const expected = [1, 2, 2, 2, 3];
    expect(solve(n, arr, queries)).toEqual(expected);
});

test('edge case with n=2, mixed', () => {
    const n = 2;
    const arr = [9, 9];
    const queries = [1, 2];
    const expected = [1, 1];
    expect(solve(n, arr, queries)).toEqual(expected);
});

test('edge case with n=2, different', () => {
    const n = 2;
    const arr = [10, 11];
    const queries = [1, 2];
    const expected = [2, 1];
    expect(solve(n, arr, queries)).toEqual(expected);
});

test('query only the last element', () => {
    const n = 7;
    const arr = [2, 3, 4, 2, 5, 6, 2];
    const queries = [7];
    const expected = [1];
    expect(solve(n, arr, queries)).toEqual(expected);
});

test('large n, only check first and last query', () => {
    const n = 100000;
    const arr = Array(99999).fill(1).concat([2]);
    const queries = [1, 100000];
    const expected = [2, 1];
    expect(solve(n, arr, queries)).toEqual(expected);
});

test('queries repeat and non-increasing order', () => {
    const n = 6;
    const arr = [1, 3, 1, 5, 3, 1];
    const queries = [3, 3, 2, 6, 1, 4];
    const expected = [2, 2, 3, 1, 3, 2];
    expect(solve(n, arr, queries)).toEqual(expected);
});


// expect(received).toEqual(expected) // deep equality

// -
// Expected - 2 +
//     Received + 2

// Array[
//     1,
//     2, -2, -2, +3, +3,
//     3,
// ]

// 38 |
//     const queries = [5, 4, 3, 2, 1];
// 39 |
//     const expected = [1, 2, 2, 2, 3]; >
// 40 | expect(solve(n, arr, queries)).toEqual(expected); |
// ^
// 41 |
// });
// 42 |
//     43 | test('edge case with n=2, mixed', () => {

//         at Object.toEqual(tests - algorithm / tests - prompt3 / 8 _prompt3.test.js: 40: 34)

//         ● queries repeat and non - increasing order

//         expect(received).toEqual(expected) // deep equality

//         -
//         Expected - 3 +
//             Received + 3

//         Array[-2, -2, +3, +3,
//             3,
//             1,
//             3, -2, +3,
//         ]

//         78 |
//             const queries = [3, 3, 2, 6, 1, 4];
//         79 |
//             const expected = [2, 2, 3, 1, 3, 2]; >
//         80 | expect(solve(n, arr, queries)).toEqual(expected); |
//         ^
//         81 |
//     });
