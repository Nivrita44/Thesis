// @ts-nocheck
import { solve } from '../../../solutions-algorithm/17.js';

test('n=2', () => {
    expect(solve([2])).toEqual([2]);
});

test('n=3', () => {
    expect(solve([3])).toEqual([2]);
});

test('n=4', () => {
    expect(solve([4])).toEqual([3]);
});

test('n=5', () => {
    expect(solve([5])).toEqual([3]);
});

test('n=6', () => {
    expect(solve([6])).toEqual([4]);
});

test('n=7', () => {
    expect(solve([7])).toEqual([4]);
});

test('n=8', () => {
    expect(solve([8])).toEqual([5]);
});

test('n=10', () => {
    expect(solve([10])).toEqual([6]);
});

test('n=12', () => {
    expect(solve([12])).toEqual([7]);
});

test('n=15', () => {
    expect(solve([15])).toEqual([8]);
});

test('n=20', () => {
    expect(solve([20])).toEqual([11]);
});

test('n=25', () => {
    expect(solve([25])).toEqual([13]);
});

test('n=30', () => {
    expect(solve([30])).toEqual([16]);
});

test('n=50', () => {
    expect(solve([50])).toEqual([26]);
});

test('n=100', () => {
    expect(solve([100])).toEqual([51]);
});


// FAIL tests - algorithm / tests - prompt1 / 17 _prompt1.test.js√ n = 2(2 ms)× n = 3(3 ms)× n = 4(1 ms)× n = 5(2 ms)× n = 6(1 ms)× n = 7(1 ms)× n = 8× n = 10× n = 12(1 ms)× n = 15× n = 20(1 ms)× n = 25(1 ms)× n = 30× n = 50(1 ms)× n = 100(1 ms)

// ● n = 3

// expect(received).toEqual(expected) // deep equality

// -
// Expected - 1 +
//     Received + 1

// Array[-2, +3, ]

// 6 |
//     7 | test('n=3', () => { >
//         8 | expect(solve([3])).toEqual([2]); |
//         ^
//         9 |
//     });
// 10 |
//     11 | test('n=4', () => {

//             at Object.toEqual(tests - algorithm / tests - prompt1 / 17 _prompt1.test.js: 8: 24)

//             ● n = 4

//             expect(received).toEqual(expected) // deep equality

//             -
//             Expected - 1 +
//                 Received + 1

//             Array[-3, +2, ]

//             10 |
//                 11 | test('n=4', () => { >
//                     12 | expect(solve([4])).toEqual([3]); |
//                     ^
//                     13 |
//                 });
//             14 |
//                 15 | test('n=5', () => {

//                         at Object.toEqual(tests - algorithm / tests - prompt1 / 17 _prompt1.test.js: 12: 24)

//                         ● n = 5

//                         expect(received).toEqual(expected) // deep equality

//                         -
//                         Expected - 1 +
//                             Received + 1

//                         Array[-3, +2, ]

//                         14 |
//                             15 | test('n=5', () => { >
//                                 16 | expect(solve([5])).toEqual([3]); |
//                                 ^
//                                 17 |
//                             });
//                         18 |
//                             19 | test('n=6', () => {

//                                     at Object.toEqual(tests - algorithm / tests - prompt1 / 17 _prompt1.test.js: 16: 24)

//                                     ● n = 6

//                                     expect(received).toEqual(expected) // deep equality

//                                     -
//                                     Expected - 1 +
//                                         Received + 1

//                                     Array[-4, +2, ]

//                                     18 |
//                                         19 | test('n=6', () => { >
//                                             20 | expect(solve([6])).toEqual([4]); |
//                                             ^
//                                             21 |
//                                         });
//                                     22 |
//                                         23 | test('n=7', () => {

//                                                 at Object.toEqual(tests - algorithm / tests - prompt1 / 17 _prompt1.test.js: 20: 24)

//                                                 ● n = 7

//                                                 expect(received).toEqual(expected) // deep equality

//                                                 -
//                                                 Expected - 1 +
//                                                     Received + 1

//                                                 Array[-4, +2, ]

//                                                 22 |
//                                                     23 | test('n=7', () => { >
//                                                         24 | expect(solve([7])).toEqual([4]); |
//                                                         ^
//                                                         25 |
//                                                     });
//                                                 26 |
//                                                     27 | test('n=8', () => {

//                                                             at Object.toEqual(tests - algorithm / tests - prompt1 / 17 _prompt1.test.js: 24: 24)

//                                                             ● n = 8

//                                                             expect(received).toEqual(expected) // deep equality

//                                                             -
//                                                             Expected - 1 +
//                                                                 Received + 1

//                                                             Array[-5, +2, ]

//                                                             26 |
//                                                                 27 | test('n=8', () => { >
//                                                                     28 | expect(solve([8])).toEqual([5]); |
//                                                                     ^
//                                                                     29 |
//                                                                 });
//                                                             30 |
//                                                                 31 | test('n=10', () => {

//                                                                         at Object.toEqual(tests - algorithm / tests - prompt1 / 17 _prompt1.test.js: 28: 24)

//                                                                         ● n = 10

//                                                                         expect(received).toEqual(expected) // deep equality

//                                                                         -
//                                                                         Expected - 1 +
//                                                                             Received + 1

//                                                                         Array[-6, +2, ]

//                                                                         30 |
//                                                                             31 | test('n=10', () => { >
//                                                                                 32 | expect(solve([10])).toEqual([6]); |
//                                                                                 ^
//                                                                                 33 |
//                                                                             });
//                                                                         34 |
//                                                                             35 | test('n=12', () => {

//                                                                                     at Object.toEqual(tests - algorithm / tests - prompt1 / 17 _prompt1.test.js: 32: 25)

//                                                                                     ● n = 12

//                                                                                     expect(received).toEqual(expected) // deep equality

//                                                                                     -
//                                                                                     Expected - 1 +
//                                                                                         Received + 1

//                                                                                     Array[-7, +2, ]

//                                                                                     34 |
//                                                                                         35 | test('n=12', () => { >
//                                                                                             36 | expect(solve([12])).toEqual([7]); |
//                                                                                             ^
//                                                                                             37 |
//                                                                                         });
//                                                                                     38 |
//                                                                                         39 | test('n=15', () => {

//                                                                                                 at Object.toEqual(tests - algorithm / tests - prompt1 / 17 _prompt1.test.js: 36: 25)

//                                                                                                 ● n = 15

//                                                                                                 expect(received).toEqual(expected) // deep equality

//                                                                                                 -
//                                                                                                 Expected - 1 +
//                                                                                                     Received + 1

//                                                                                                 Array[-8, +2, ]

//                                                                                                 38 |
//                                                                                                     39 | test('n=15', () => { >
//                                                                                                         40 | expect(solve([15])).toEqual([8]); |
//                                                                                                         ^
//                                                                                                         41 |
//                                                                                                     });
//                                                                                                 42 |
//                                                                                                     43 | test('n=20', () => {

//                                                                                                             at Object.toEqual(tests - algorithm / tests - prompt1 / 17 _prompt1.test.js: 40: 25)

//                                                                                                             ● n = 20

//                                                                                                             expect(received).toEqual(expected) // deep equality

//                                                                                                             -
//                                                                                                             Expected - 1 +
//                                                                                                                 Received + 1

//                                                                                                             Array[-11, +2, ]

//                                                                                                             42 |
//                                                                                                                 43 | test('n=20', () => { >
//                                                                                                                     44 | expect(solve([20])).toEqual([11]); |
//                                                                                                                     ^
//                                                                                                                     45 |
//                                                                                                                 });
//                                                                                                             46 |
//                                                                                                                 47 | test('n=25', () => {

//                                                                                                                         at Object.toEqual(tests - algorithm / tests - prompt1 / 17 _prompt1.test.js: 44: 25)

//                                                                                                                         ● n = 25

//                                                                                                                         expect(received).toEqual(expected) // deep equality

//                                                                                                                         -
//                                                                                                                         Expected - 1 +
//                                                                                                                             Received + 1

//                                                                                                                         Array[-13, +2, ]

//                                                                                                                         46 |
//                                                                                                                             47 | test('n=25', () => { >
//                                                                                                                                 48 | expect(solve([25])).toEqual([13]); |
//                                                                                                                                 ^
//                                                                                                                                 49 |
//                                                                                                                             });
//                                                                                                                         50 |
//                                                                                                                             51 | test('n=30', () => {

//                                                                                                                                     at Object.toEqual(tests - algorithm / tests - prompt1 / 17 _prompt1.test.js: 48: 25)

//                                                                                                                                     ● n = 30

//                                                                                                                                     expect(received).toEqual(expected) // deep equality

//                                                                                                                                     -
//                                                                                                                                     Expected - 1 +
//                                                                                                                                         Received + 1

//                                                                                                                                     Array[-16, +2, ]

//                                                                                                                                     50 |
//                                                                                                                                         51 | test('n=30', () => { >
//                                                                                                                                             52 | expect(solve([30])).toEqual([16]); |
//                                                                                                                                             ^
//                                                                                                                                             53 |
//                                                                                                                                         });
//                                                                                                                                     54 |
//                                                                                                                                         55 | test('n=50', () => {

//                                                                                                                                                 at Object.toEqual(tests - algorithm / tests - prompt1 / 17 _prompt1.test.js: 52: 25)

//                                                                                                                                                 ● n = 50

//                                                                                                                                                 expect(received).toEqual(expected) // deep equality

//                                                                                                                                                 -
//                                                                                                                                                 Expected - 1 +
//                                                                                                                                                     Received + 1

//                                                                                                                                                 Array[-26, +2, ]

//                                                                                                                                                 54 |
//                                                                                                                                                     55 | test('n=50', () => { >
//                                                                                                                                                         56 | expect(solve([50])).toEqual([26]); |
//                                                                                                                                                         ^
//                                                                                                                                                         57 |
//                                                                                                                                                     });
//                                                                                                                                                 58 |
//                                                                                                                                                     59 | test('n=100', () => {

//                                                                                                                                                             at Object.toEqual(tests - algorithm / tests - prompt1 / 17 _prompt1.test.js: 56: 25)

//                                                                                                                                                             ● n = 100

//                                                                                                                                                             expect(received).toEqual(expected) // deep equality

//                                                                                                                                                             -
//                                                                                                                                                             Expected - 1 +
//                                                                                                                                                                 Received + 1

//                                                                                                                                                             Array[-51, +2, ]

//                                                                                                                                                             58 |
//                                                                                                                                                                 59 | test('n=100', () => { >
//                                                                                                                                                                     60 | expect(solve([100])).toEqual([51]); |
//                                                                                                                                                                     ^
//                                                                                                                                                                     61 |
//                                                                                                                                                                 });
