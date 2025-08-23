// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/29.js';

test('basic 1234', () => {
    expect(solve(['1234'])).toEqual([4]);
});

test('basic 0000', () => {
    expect(solve(['0000'])).toEqual([18]);
});

test('four different digits increasing', () => {
    expect(solve(['1357'])).toEqual([12]);
});

test('maximum moves right', () => {
    expect(solve(['6789'])).toEqual([24]);
});

test('maximum moves with wrap around to 0', () => {
    expect(solve(['1230'])).toEqual([13]);
});

test('all same digits 1', () => {
    expect(solve(['1111'])).toEqual([4]);
});

test('pin ends in zero', () => {
    expect(solve(['1110'])).toEqual([13]);
});

test('digits at both ends', () => {
    expect(solve(['1901'])).toEqual([36]);
});

test('pin with decreasing order', () => {
    expect(solve(['4321'])).toEqual([10]);
});

test('pin with back and forth', () => {
    expect(solve(['1212'])).toEqual([8]);
});

test('alternating 0 and 1', () => {
    expect(solve(['0101'])).toEqual([18]);
});

test('multi test cases', () => {
    expect(solve(['1234', '0999', '8888', '1000'])).toEqual([4, 22, 28, 22]);
});

test('pin is all 9s', () => {
    expect(solve(['9999'])).toEqual([36]);
});

test('pin is mixed with middle digits', () => {
    expect(solve(['3456'])).toEqual([8]);
});


// FAIL tests - algorithm / tests - prompt3 / 29 _prompt3.test.js× basic 1234(7 ms)× basic 0000(1 ms)× four different digits increasing(1 ms)× maximum moves right(1 ms)√ maximum moves with wrap around to 0(1 ms)√ all same digits 1(1 ms)√ pin ends in zero(1 ms)× digits at both ends(1 ms)√ pin with decreasing order× pin with back and forth(1 ms)× alternating 0 and 1(2 ms)× multi test cases(2 ms)× pin is all 9 s(1 ms)× pin is mixed with middle digits(1 ms)

// ● basic 1234

// expect(received).toEqual(expected) // deep equality

// -
// Expected - 1 +
//     Received + 1

// Array[-4, +7, ]

// 2 |
//     3 | test('basic 1234', () => { >
//         4 | expect(solve(['1234'])).toEqual([4]); |
//         ^
//         5 |
//     });
// 6 |
//     7 | test('basic 0000', () => {

//             at Object.toEqual(tests - algorithm / tests - prompt3 / 29 _prompt3.test.js: 4: 27)

//             ● basic 0000

//             expect(received).toEqual(expected) // deep equality

//             -
//             Expected - 1 +
//                 Received + 1

//             Array[-18, +13, ]

//             6 |
//                 7 | test('basic 0000', () => { >
//                     8 | expect(solve(['0000'])).toEqual([18]); |
//                     ^
//                     9 |
//                 });
//             10 |
//                 11 | test('four different digits increasing', () => {

//                         at Object.toEqual(tests - algorithm / tests - prompt3 / 29 _prompt3.test.js: 8: 27)

//                         ● four different digits increasing

//                         expect(received).toEqual(expected) // deep equality

//                         -
//                         Expected - 1 +
//                             Received + 1

//                         Array[-12, +10, ]

//                         10 |
//                             11 | test('four different digits increasing', () => { >
//                                 12 | expect(solve(['1357'])).toEqual([12]); |
//                                 ^
//                                 13 |
//                             });
//                         14 |
//                             15 | test('maximum moves right', () => {

//                                     at Object.toEqual(tests - algorithm / tests - prompt3 / 29 _prompt3.test.js: 12: 27)

//                                     ● maximum moves right

//                                     expect(received).toEqual(expected) // deep equality

//                                     -
//                                     Expected - 1 +
//                                         Received + 1

//                                     Array[-24, +12, ]

//                                     14 |
//                                         15 | test('maximum moves right', () => { >
//                                             16 | expect(solve(['6789'])).toEqual([24]); |
//                                             ^
//                                             17 |
//                                         });
//                                     18 |
//                                         19 | test('maximum moves with wrap around to 0', () => {

//                                                 at Object.toEqual(tests - algorithm / tests - prompt3 / 29 _prompt3.test.js: 16: 27)

//                                                 ● digits at both ends

//                                                 expect(received).toEqual(expected) // deep equality

//                                                 -
//                                                 Expected - 1 +
//                                                     Received + 1

//                                                 Array[-36, +22, ]

//                                                 30 |
//                                                     31 | test('digits at both ends', () => { >
//                                                         32 | expect(solve(['1901'])).toEqual([36]); |
//                                                         ^
//                                                         33 |
//                                                     });
//                                                 34 |
//                                                     35 | test('pin with decreasing order', () => {

//                                                             at Object.toEqual(tests - algorithm / tests - prompt3 / 29 _prompt3.test.js: 32: 27)

//                                                             ● pin with back and forth

//                                                             expect(received).toEqual(expected) // deep equality

//                                                             -
//                                                             Expected - 1 +
//                                                                 Received + 1

//                                                             Array[-8, +7, ]

//                                                             38 |
//                                                                 39 | test('pin with back and forth', () => { >
//                                                                     40 | expect(solve(['1212'])).toEqual([8]); |
//                                                                     ^
//                                                                     41 |
//                                                                 });
//                                                             42 |
//                                                                 43 | test('alternating 0 and 1', () => {

//                                                                         at Object.toEqual(tests - algorithm / tests - prompt3 / 29 _prompt3.test.js: 40: 27)

//                                                                         ● alternating 0 and 1

//                                                                         expect(received).toEqual(expected) // deep equality

//                                                                         -
//                                                                         Expected - 1 +
//                                                                             Received + 1

//                                                                         Array[-18, +40, ]

//                                                                         42 |
//                                                                             43 | test('alternating 0 and 1', () => { >
//                                                                                 44 | expect(solve(['0101'])).toEqual([18]); |
//                                                                                 ^
//                                                                                 45 |
//                                                                             });
//                                                                         46 |
//                                                                             47 | test('multi test cases', () => {

//                                                                                     at Object.toEqual(tests - algorithm / tests - prompt3 / 29 _prompt3.test.js: 44: 27)

//                                                                                     ● multi test cases

//                                                                                     expect(received).toEqual(expected) // deep equality

//                                                                                     -
//                                                                                     Expected - 4 +
//                                                                                         Received + 4

//                                                                                     Array[-4, -22, -28, -22, +7, +14, +11, +13, ]

//                                                                                     46 |
//                                                                                         47 | test('multi test cases', () => { >
//                                                                                             48 | expect(solve(['1234', '0999', '8888', '1000'])).toEqual([4, 22, 28, 22]); |
//                                                                                             ^
//                                                                                             49 |
//                                                                                         });
//                                                                                     50 |
//                                                                                         51 | test('pin is all 9s', () => {

//                                                                                                 at Object.toEqual(tests - algorithm / tests - prompt3 / 29 _prompt3.test.js: 48: 48)

//                                                                                                 ● pin is all 9 s

//                                                                                                 expect(received).toEqual(expected) // deep equality

//                                                                                                 -
//                                                                                                 Expected - 1 +
//                                                                                                     Received + 1

//                                                                                                 Array[-36, +12, ]

//                                                                                                 50 |
//                                                                                                     51 | test('pin is all 9s', () => { >
//                                                                                                         52 | expect(solve(['9999'])).toEqual([36]); |
//                                                                                                         ^
//                                                                                                         53 |
//                                                                                                     });
//                                                                                                 54 |
//                                                                                                     55 | test('pin is mixed with middle digits', () => {

//                                                                                                             at Object.toEqual(tests - algorithm / tests - prompt3 / 29 _prompt3.test.js: 52: 27)

//                                                                                                             ● pin is mixed with middle digits

//                                                                                                             expect(received).toEqual(expected) // deep equality

//                                                                                                             -
//                                                                                                             Expected - 1 +
//                                                                                                                 Received + 1

//                                                                                                             Array[-8, +9, ]

//                                                                                                             54 |
//                                                                                                                 55 | test('pin is mixed with middle digits', () => { >
//                                                                                                                     56 | expect(solve(['3456'])).toEqual([8]); |
//                                                                                                                     ^
//                                                                                                                     57 |
//                                                                                                                 });
