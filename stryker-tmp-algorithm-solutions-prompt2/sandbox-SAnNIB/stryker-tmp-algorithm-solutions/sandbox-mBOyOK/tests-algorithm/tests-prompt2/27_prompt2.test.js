// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/27.js';

test('example case 1', () => {
    expect(solve([1, 9, 10, 34, 880055535])).toEqual([0, 1, 1, 3, 88005553]);
});

test('example case 2', () => {
    expect(solve([0, 8, 19, 29, 99])).toEqual([0, 0, 2, 3, 10]);
});

test('input contains only 0', () => {
    expect(solve([0])).toEqual([0]);
});

test('single digit numbers below and above 9', () => {
    expect(solve([5, 9])).toEqual([0, 1]);
});

test('number ending with 8', () => {
    expect(solve([18, 28, 38])).toEqual([1, 2, 4]);
});

test('number ending with 9', () => {
    expect(solve([19, 29, 99])).toEqual([2, 3, 10]);
});

test('number ending with 0', () => {
    expect(solve([10, 20, 30])).toEqual([1, 2, 3]);
});

test('large even and odd numbers', () => {
    expect(solve([100000009, 100000000, 999999999])).toEqual([10000001, 10000000, 100000000]);
});

test('input is an empty array', () => {
    expect(solve([])).toEqual([]);
});

test('negative numbers', () => {
    expect(solve([-1, -10, -11, -19, -20, -29, -99])).toEqual([-1, -1, -2, -1, -2, -1, -8]);
});



// FAIL tests - algorithm / tests - prompt2 / 27 _prompt2.test.js√ example
// case 1(3 ms)√ example
// case 2√ input contains only 0(1 ms)√ single digit numbers below and above 9(1 ms)× number ending with 8(4 ms)√ number ending with 9(1 ms)√ number ending with 0(1 ms)√ large even and odd numbers(1 ms)√ input is an empty array× negative numbers(2 ms)

// ● number ending with 8

// expect(received).toEqual(expected) // deep equality

// -
// Expected - 1 +
// Received + 1

// Array[
//     1,
//     2, -4, +3,
// ]

// 18 |
// 19 | test('number ending with 8', () => { >
//     20 | expect(solve([18, 28, 38])).toEqual([1, 2, 4]); |
//     ^
//     21 |
// });
// 22 |
// 23 | test('number ending with 9', () => {

//         at Object.toEqual(tests - algorithm / tests - prompt2 / 27 _prompt2.test.js: 20: 31)

//         ● negative numbers

//         expect(received).toEqual(expected) // deep equality

//         -
//         Expected - 3 +
//             Received + 3

//         Array[-1, -1, -2, - -1, -2, - -1, - -8, + -2, + -3, + -10, ]

//         38 |
//             39 | test('negative numbers', () => { >
//                 40 | expect(solve([-1, -10, -11, -19, -20, -29, -99])).toEqual([-1, -1, -2, -1, -2, -1, -8]); |
//                 ^
//                 41 |
//             });
