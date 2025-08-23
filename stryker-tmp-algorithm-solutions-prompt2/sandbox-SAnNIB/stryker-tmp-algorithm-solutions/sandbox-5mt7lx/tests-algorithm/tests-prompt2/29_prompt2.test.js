// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/29.js';

test('single pin, ascending digits', () => {
    expect(solve(['1234'])).toEqual([10]);
});

test('single pin, all zeros', () => {
    expect(solve(['0000'])).toEqual([37]);
});

test('single pin, all nines', () => {
    expect(solve(['9999'])).toEqual([40]);
});

test('single pin, all same digits other than 0 or 9', () => {
    expect(solve(['4444'])).toEqual([16]);
});

test('single pin, alternate digits', () => {
    expect(solve(['1010'])).toEqual([41]);
});

test('single pin, descending digits', () => {
    expect(solve(['4321'])).toEqual([14]);
});

test('multiple pins', () => {
    expect(solve(['1234', '0000', '9999', '1010'])).toEqual([10, 37, 40, 41]);
});

test('empty string pin', () => {
    expect(solve([''])).toEqual([4]);
});

test('multiple pins with mixed types', () => {
    expect(solve(['', '1', '0', '9'])).toEqual([4, 4, 13, 12]);
});

test('very long pin', () => {
    expect(solve(['1234567890'])).toEqual([49]);
});

test('single digit pin', () => {
    expect(solve(['5'])).toEqual([4]);
});

test('mixed digits', () => {
    expect(solve(['9081726354'])).toEqual([86]);
});



// FAIL tests - algorithm / tests - prompt2 / 29 _prompt2.test.js× single pin, ascending digits(17 ms)× single pin, all zeros(3 ms)× single pin, all nines(2 ms)× single pin, all same digits other than 0 or 9(3 ms)× single pin, alternate digits(2 ms)× single pin, descending digits(2 ms)× multiple pins(3 ms)√ empty string pin(1 ms)√ multiple pins with mixed types(2 ms)× very long pin(3 ms)× single digit pin(3 ms)× mixed digits(2 ms)

// ● single pin, ascending digits

// expect(received).toEqual(expected) // deep equality

// -
// Expected - 1 +
//     Received + 1

// Array[-10, +7, ]

// 2 |
//     3 | test('single pin, ascending digits', () => { >
//         4 | expect(solve(['1234'])).toEqual([10]); |
//         ^
//         5 |
//     });
// 6 |
//     7 | test('single pin, all zeros', () => {

//             at Object.toEqual(tests - algorithm / tests - prompt2 / 29 _prompt2.test.js: 4: 27)

//             ● single pin, all zeros

//             expect(received).toEqual(expected) // deep equality

//             -
//             Expected - 1 +
//                 Received + 1

//             Array[-37, +13, ]

//             6 |
//                 7 | test('single pin, all zeros', () => { >
//                     8 | expect(solve(['0000'])).toEqual([37]); |
//                     ^
//                     9 |
//                 });
//             10 |
//                 11 | test('single pin, all nines', () => {

//                         at Object.toEqual(tests - algorithm / tests - prompt2 / 29 _prompt2.test.js: 8: 27)

//                         ● single pin, all nines

//                         expect(received).toEqual(expected) // deep equality

//                         -
//                         Expected - 1 +
//                             Received + 1

//                         Array[-40, +12, ]

//                         10 |
//                             11 | test('single pin, all nines', () => { >
//                                 12 | expect(solve(['9999'])).toEqual([40]); |
//                                 ^
//                                 13 |
//                             });
//                         14 |
//                             15 | test('single pin, all same digits other than 0 or 9', () => {

//                                     at Object.toEqual(tests - algorithm / tests - prompt2 / 29 _prompt2.test.js: 12: 27)

//                                     ● single pin, all same digits other than 0 or 9

//                                     expect(received).toEqual(expected) // deep equality

//                                     -
//                                     Expected - 1 +
//                                         Received + 1

//                                     Array[-16, +7, ]

//                                     14 |
//                                         15 | test('single pin, all same digits other than 0 or 9', () => { >
//                                             16 | expect(solve(['4444'])).toEqual([16]); |
//                                             ^
//                                             17 |
//                                         });
//                                     18 |
//                                         19 | test('single pin, alternate digits', () => {

//                                                 at Object.toEqual(tests - algorithm / tests - prompt2 / 29 _prompt2.test.js: 16: 27)

//                                                 ● single pin, alternate digits

//                                                 expect(received).toEqual(expected) // deep equality

//                                                 -
//                                                 Expected - 1 +
//                                                     Received + 1

//                                                 Array[-41, +31, ]

//                                                 18 |
//                                                     19 | test('single pin, alternate digits', () => { >
//                                                         20 | expect(solve(['1010'])).toEqual([41]); |
//                                                         ^
//                                                         21 |
//                                                     });
//                                                 22 |
//                                                     23 | test('single pin, descending digits', () => {

//                                                             at Object.toEqual(tests - algorithm / tests - prompt2 / 29 _prompt2.test.js: 20: 27)

//                                                             ● single pin, descending digits

//                                                             expect(received).toEqual(expected) // deep equality

//                                                             -
//                                                             Expected - 1 +
//                                                                 Received + 1

//                                                             Array[-14, +10, ]

//                                                             22 |
//                                                                 23 | test('single pin, descending digits', () => { >
//                                                                     24 | expect(solve(['4321'])).toEqual([14]); |
//                                                                     ^
//                                                                     25 |
//                                                                 });
//                                                             26 |
//                                                                 27 | test('multiple pins', () => {

//                                                                         at Object.toEqual(tests - algorithm / tests - prompt2 / 29 _prompt2.test.js: 24: 27)

//                                                                         ● multiple pins

//                                                                         expect(received).toEqual(expected) // deep equality

//                                                                         -
//                                                                         Expected - 4 +
//                                                                             Received + 4

//                                                                         Array[-10, -37, -40, -41, +7, +13, +12, +31, ]

//                                                                         26 |
//                                                                             27 | test('multiple pins', () => { >
//                                                                                 28 | expect(solve(['1234', '0000', '9999', '1010'])).toEqual([10, 37, 40, 41]); |
//                                                                                 ^
//                                                                                 29 |
//                                                                             });
//                                                                         30 |
//                                                                             31 | test('empty string pin', () => {

//                                                                                     at Object.toEqual(tests - algorithm / tests - prompt2 / 29 _prompt2.test.js: 28: 51)

//                                                                                     ● very long pin

//                                                                                     expect(received).toEqual(expected) // deep equality

//                                                                                     -
//                                                                                     Expected - 1 +
//                                                                                         Received + 1

//                                                                                     Array[-49, +13, ]

//                                                                                     38 |
//                                                                                         39 | test('very long pin', () => { >
//                                                                                             40 | expect(solve(['1234567890'])).toEqual([49]); |
//                                                                                             ^
//                                                                                             41 |
//                                                                                         });
//                                                                                     42 |
//                                                                                         43 | test('single digit pin', () => {

//                                                                                                 at Object.toEqual(tests - algorithm / tests - prompt2 / 29 _prompt2.test.js: 40: 33)

//                                                                                                 ● single digit pin

//                                                                                                 expect(received).toEqual(expected) // deep equality

//                                                                                                 -
//                                                                                                 Expected - 1 +
//                                                                                                     Received + 1

//                                                                                                 Array[-4, +8, ]

//                                                                                                 42 |
//                                                                                                     43 | test('single digit pin', () => { >
//                                                                                                         44 | expect(solve(['5'])).toEqual([4]); |
//                                                                                                         ^
//                                                                                                         45 |
//                                                                                                     });
//                                                                                                 46 |
//                                                                                                     47 | test('mixed digits', () => {

//                                                                                                             at Object.toEqual(tests - algorithm / tests - prompt2 / 29 _prompt2.test.js: 44: 24)

//                                                                                                             ● mixed digits

//                                                                                                             expect(received).toEqual(expected) // deep equality
