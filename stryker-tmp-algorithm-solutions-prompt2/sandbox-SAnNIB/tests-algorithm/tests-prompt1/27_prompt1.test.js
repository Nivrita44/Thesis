// @ts-nocheck
import { solve } from '../../../solutions-algorithm/27.js';

test('n=1', () => {
    expect(solve([1])).toEqual([0]);
});

test('n=9', () => {
    expect(solve([9])).toEqual([0]);
});

test('n=10', () => {
    expect(solve([10])).toEqual([1]);
});

test('n=20', () => {
    expect(solve([20])).toEqual([2]);
});

test('n=19', () => {
    expect(solve([19])).toEqual([1]);
});

test('n=99', () => {
    expect(solve([99])).toEqual([9]);
});

test('n=100', () => {
    expect(solve([100])).toEqual([10]);
});

test('n=55', () => {
    expect(solve([55])).toEqual([5]);
});

test('n=123', () => {
    expect(solve([123])).toEqual([12]);
});

test('n=999', () => {
    expect(solve([999])).toEqual([99]);
});

test('n=1000', () => {
    expect(solve([1000])).toEqual([100]);
});

test('large n=1000000000', () => {
    expect(solve([1000000000])).toEqual([100000000]);
});


// FAIL tests - algorithm / tests - prompt1 / 27 _prompt1.test.js√ n = 1(2 ms)× n = 9(3 ms)√ n = 10(1 ms)√ n = 20× n = 19(1 ms)× n = 99√ n = 100√ n = 55√ n = 123× n = 999√ n = 1000√ large n = 1000000000

// ● n = 9

// expect(received).toEqual(expected) // deep equality

// -
// Expected - 1 +
//     Received + 1

// Array[-0, +1, ]

// 6 |
//     7 | test('n=9', () => { >
//         8 | expect(solve([9])).toEqual([0]); |
//         ^
//         9 |
//     });
// 10 |
//     11 | test('n=10', () => {

//             at Object.toEqual(tests - algorithm / tests - prompt1 / 27 _prompt1.test.js: 8: 24)

//             ● n = 19

//             expect(received).toEqual(expected) // deep equality

//             -
//             Expected - 1 +
//                 Received + 1

//             Array[-1, +2, ]

//             18 |
//                 19 | test('n=19', () => { >
//                     20 | expect(solve([19])).toEqual([1]); |
//                     ^
//                     21 |
//                 });
//             22 |
//                 23 | test('n=99', () => {

//                         at Object.toEqual(tests - algorithm / tests - prompt1 / 27 _prompt1.test.js: 20: 25)

//                         ● n = 99

//                         expect(received).toEqual(expected) // deep equality

//                         -
//                         Expected - 1 +
//                             Received + 1

//                         Array[-9, +10, ]

//                         22 |
//                             23 | test('n=99', () => { >
//                                 24 | expect(solve([99])).toEqual([9]); |
//                                 ^
//                                 25 |
//                             });
//                         26 |
//                             27 | test('n=100', () => {

//                                     at Object.toEqual(tests - algorithm / tests - prompt1 / 27 _prompt1.test.js: 24: 25)

//                                     ● n = 999

//                                     expect(received).toEqual(expected) // deep equality

//                                     -
//                                     Expected - 1 +
//                                         Received + 1

//                                     Array[-99, +100, ]

//                                     38 |
//                                         39 | test('n=999', () => { >
//                                             40 | expect(solve([999])).toEqual([99]); |
//                                             ^
//                                             41 |
//                                         });
//                                     42 |
//                                         43 | test('n=1000', () => {
