import { solve } from '../../solutions-algorithm/29.js';

test('pin code 1234', () => {
    expect(solve(['1234'])).toEqual([8]);
});

test('pin code 5555', () => {
    expect(solve(['5555'])).toEqual([8]);
});

test('pin code 9876', () => {
    expect(solve(['9876'])).toEqual([16]);
});

test('pin code 0000', () => {
    expect(solve(['0000'])).toEqual([16]);
});

test('pin code 1900', () => {
    expect(solve(['1900'])).toEqual([14]);
});

test('pin code 2468', () => {
    expect(solve(['2468'])).toEqual([12]);
});

test('pin code 1357', () => {
    expect(solve(['1357'])).toEqual([12]);
});

test('pin code 1098', () => {
    expect(solve(['1098'])).toEqual([18]);
});

test('pin code 4321', () => {
    expect(solve(['4321'])).toEqual([14]);
});

test('pin code 5678', () => {
    expect(solve(['5678'])).toEqual([10]);
});


// FAIL tests - algorithm / tests - prompt1 / 29 _prompt1.test.js× pin code 1234(6 ms)√ pin code 5555× pin code 9876(1 ms)× pin code 0000(1 ms)× pin code 1900(2 ms)× pin code 2468(1 ms)× pin code 1357(1 ms)× pin code 1098(1 ms)× pin code 4321(1 ms)× pin code 5678(1 ms)

// ● pin code 1234

// expect(received).toEqual(expected) // deep equality

// -
// Expected - 1 +
//     Received + 1

// Array[-8, +7, ]

// 2 |
//     3 | test('pin code 1234', () => { >
//         4 | expect(solve(['1234'])).toEqual([8]); |
//         ^
//         5 |
//     });
// 6 |
//     7 | test('pin code 5555', () => {

//             at Object.toEqual(tests - algorithm / tests - prompt1 / 29 _prompt1.test.js: 4: 29)

//             ● pin code 9876

//             expect(received).toEqual(expected) // deep equality

//             -
//             Expected - 1 +
//                 Received + 1

//             Array[-16, +15, ]

//             10 |
//                 11 | test('pin code 9876', () => { >
//                     12 | expect(solve(['9876'])).toEqual([16]); |
//                     ^
//                     13 |
//                 });
//             14 |
//                 15 | test('pin code 0000', () => {

//                         at Object.toEqual(tests - algorithm / tests - prompt1 / 29 _prompt1.test.js: 12: 29)

//                         ● pin code 0000

//                         expect(received).toEqual(expected) // deep equality

//                         -
//                         Expected - 1 +
//                             Received + 1

//                         Array[-16, +13, ]

//                         14 |
//                             15 | test('pin code 0000', () => { >
//                                 16 | expect(solve(['0000'])).toEqual([16]); |
//                                 ^
//                                 17 |
//                             });
//                         18 |
//                             19 | test('pin code 1900', () => {

//                                     at Object.toEqual(tests - algorithm / tests - prompt1 / 29 _prompt1.test.js: 16: 29)

//                                     ● pin code 1900

//                                     expect(received).toEqual(expected) // deep equality

//                                     -
//                                     Expected - 1 +
//                                         Received + 1

//                                     Array[-14, +13, ]

//                                     18 |
//                                         19 | test('pin code 1900', () => { >
//                                             20 | expect(solve(['1900'])).toEqual([14]); |
//                                             ^
//                                             21 |
//                                         });
//                                     22 |
//                                         23 | test('pin code 2468', () => {

//                                                 at Object.toEqual(tests - algorithm / tests - prompt1 / 29 _prompt1.test.js: 20: 29)

//                                                 ● pin code 2468

//                                                 expect(received).toEqual(expected) // deep equality

//                                                 -
//                                                 Expected - 1 +
//                                                     Received + 1

//                                                 Array[-12, +11, ]

//                                                 22 |
//                                                     23 | test('pin code 2468', () => { >
//                                                         24 | expect(solve(['2468'])).toEqual([12]); |
//                                                         ^
//                                                         25 |
//                                                     });
//                                                 26 |
//                                                     27 | test('pin code 1357', () => {

//                                                             at Object.toEqual(tests - algorithm / tests - prompt1 / 29 _prompt1.test.js: 24: 29)

//                                                             ● pin code 1357

//                                                             expect(received).toEqual(expected) // deep equality

//                                                             -
//                                                             Expected - 1 +
//                                                                 Received + 1

//                                                             Array[-12, +10, ]

//                                                             26 |
//                                                                 27 | test('pin code 1357', () => { >
//                                                                     28 | expect(solve(['1357'])).toEqual([12]); |
//                                                                     ^
//                                                                     29 |
//                                                                 });
//                                                             30 |
//                                                                 31 | test('pin code 1098', () => {

//                                                                         at Object.toEqual(tests - algorithm / tests - prompt1 / 29 _prompt1.test.js: 28: 29)

//                                                                         ● pin code 1098

//                                                                         expect(received).toEqual(expected) // deep equality

//                                                                         -
//                                                                         Expected - 1 +
//                                                                             Received + 1

//                                                                         Array[-18, +15, ]

//                                                                         30 |
//                                                                             31 | test('pin code 1098', () => { >
//                                                                                 32 | expect(solve(['1098'])).toEqual([18]); |
//                                                                                 ^
//                                                                                 33 |
//                                                                             });
//                                                                         34 |
//                                                                             35 | test('pin code 4321', () => {

//                                                                                     at Object.toEqual(tests - algorithm / tests - prompt1 / 29 _prompt1.test.js: 32: 29)

//                                                                                     ● pin code 4321

//                                                                                     expect(received).toEqual(expected) // deep equality

//                                                                                     -
//                                                                                     Expected - 1 +
//                                                                                         Received + 1

//                                                                                     Array[-14, +10, ]

//                                                                                     34 |
//                                                                                         35 | test('pin code 4321', () => { >
//                                                                                             36 | expect(solve(['4321'])).toEqual([14]); |
//                                                                                             ^
//                                                                                             37 |
//                                                                                         });
//                                                                                     38 |
//                                                                                         39 | test('pin code 5678', () => {

//                                                                                                 at Object.toEqual(tests - algorithm / tests - prompt1 / 29 _prompt1.test.js: 36: 29)

//                                                                                                 ● pin code 5678

//                                                                                                 expect(received).toEqual(expected) // deep equality

//                                                                                                 -
//                                                                                                 Expected - 1 +
//                                                                                                     Received + 1

//                                                                                                 Array[-10, +11, ]

//                                                                                                 38 |
//                                                                                                     39 | test('pin code 5678', () => { >
//                                                                                                         40 | expect(solve(['5678'])).toEqual([10]); |
//                                                                                                         ^
//                                                                                                         41 |
//                                                                                                     });

//                                                                                                 at Object.toEqual(tests - algorithm / tests - prompt1 / 29 _prompt1.test.js: 40: 29)