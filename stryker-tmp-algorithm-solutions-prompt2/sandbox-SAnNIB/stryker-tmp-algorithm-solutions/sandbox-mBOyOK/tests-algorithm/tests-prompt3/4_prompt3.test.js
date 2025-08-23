// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/4.js';

test('example case 1', () => {
    expect(solve([4, 7, 3, 5])).toEqual([-3, 2, -4, -2]);
});

test('two participants', () => {
    expect(solve([1, 2])).toEqual([-1, 1]);
});

test('increasing strengths', () => {
    expect(solve([1, 2, 3, 4, 5])).toEqual([-4, -3, -2, -1, 1]);
});

test('duplicate strengths with one max', () => {
    expect(solve([4, 9, 4])).toEqual([-5, 5, -5]);
});

test('all equal strengths', () => {
    expect(solve([4, 4, 4, 4])).toEqual([0, 0, 0, 0]);
});

test('maximum value at the beginning', () => {
    expect(solve([10, 2, 3, 4, 5])).toEqual([8, -8, -7, -6, -5]);
});

test('maximum value at the end', () => {
    expect(solve([2, 3, 4, 5, 10])).toEqual([-8, -7, -6, -5, 5]);
});

test('all minimum strengths', () => {
    expect(solve([1, 1, 1, 1, 1])).toEqual([0, 0, 0, 0, 0]);
});

test('second place negative vs max', () => {
    expect(solve([2, 9, 9, 3])).toEqual([-7, 0, 0, -6]);
});

test('large values', () => {
    expect(solve([1000000000, 999999999, 1, 1000000000])).toEqual([1, -1, -999999999, 1]);
});

test('minimum possible values', () => {
    expect(solve([1, 1])).toEqual([0, 0]);
});

test('negative result when others stronger', () => {
    expect(solve([1, 4, 6])).toEqual([-6, -2, 5]);
});

test('single very strong participant', () => {
    expect(solve([1, 1, 1, 100])).toEqual([-99, -99, -99, 99]);
});




// FAIL tests - algorithm / tests - prompt3 / 4 _prompt3.test.js√ example
// case 1(8 ms)√ two participants(2 ms)√ increasing strengths(1 ms)√ duplicate strengths with one max(1 ms)√ all equal strengths(1 ms)× maximum value at the beginning(15 ms)√ maximum value at the end(1 ms)√ all minimum strengths√ second place negative vs max(1 ms)× large values(3 ms)√ minimum possible values(1 ms)× negative result when others stronger(2 ms)√ single very strong participant(1 ms)

// ● maximum value at the beginning

// expect(received).toEqual(expected) // deep equality

// -
// Expected - 1 +
// Received + 1

// Array[-8, +5, -8, -7, -6, -5, ]

// 22 |
// 23 | test('maximum value at the beginning', () => { >
//     24 | expect(solve([10, 2, 3, 4, 5])).toEqual([8, -8, -7, -6, -5]); |
//     ^
//     25 |
// });
// 26 |
// 27 | test('maximum value at the end', () => {

//         at Object.toEqual(tests - algorithm / tests - prompt3 / 4 _prompt3.test.js: 24: 35)

//         ● large values

//         expect(received).toEqual(expected) // deep equality

//         -
//         Expected - 2 +
//             Received + 2

//         Array[-1, +0, -1, -999999999, -1, +0, ]

//         38 |
//             39 | test('large values', () => { >
//                 40 | expect(solve([1000000000, 999999999, 1, 1000000000])).toEqual([1, -1, -999999999, 1]); |
//                 ^
//                 41 |
//             });
//         42 |
//             43 | test('minimum possible values', () => {

//                     at Object.toEqual(tests - algorithm / tests - prompt3 / 4 _prompt3.test.js: 40: 57)

//                     ● negative result when others stronger

//                     expect(received).toEqual(expected) // deep equality

//                     -
//                     Expected - 2 +
//                         Received + 2

//                     Array[- -6, + -5, -2, -5, +2, ]

//                     46 |
//                         47 | test('negative result when others stronger', () => { >
//                             48 | expect(solve([1, 4, 6])).toEqual([-6, -2, 5]); |
//                             ^
//                             49 |
//                         });
//                     50 |
//                         51 | test('single very strong participant', () => {

//                                 at Object.toEqual(tests - algorithm / tests - prompt3 / 4 _prompt3.test.js: 48: 28)
