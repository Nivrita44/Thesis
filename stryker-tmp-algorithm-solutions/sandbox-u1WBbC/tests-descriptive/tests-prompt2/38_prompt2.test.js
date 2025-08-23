// @ts-nocheck
import { solve } from '../../solutions-descriptive/38.js';

test('all zeros', () => {
    expect(solve('00000')).toBe(0);
});

test('all ones', () => {
    expect(solve('11111')).toBe(0);
});

test('alternating 01', () => {
    expect(solve('01010')).toBe(2);
});

test('alternating 10', () => {
    expect(solve('10101')).toBe(2);
});

test('single 0', () => {
    expect(solve('0')).toBe(0);
});

test('single 1', () => {
    expect(solve('1')).toBe(0);
});

test('empty string', () => {
    expect(solve('')).toBe(0);
});

test('two zeros', () => {
    expect(solve('00')).toBe(0);
});

test('two ones', () => {
    expect(solve('11')).toBe(0);
});

test('two 01', () => {
    expect(solve('01')).toBe(0);
});

test('11110000', () => {
    expect(solve('11110000')).toBe(0);
});

test('00001111', () => {
    expect(solve('00001111')).toBe(0);
});

test('0011', () => {
    expect(solve('0011')).toBe(0);
});

test('0100101', () => {
    expect(solve('0100101')).toBe(4);
});

test('long alternating pattern', () => {
    expect(solve('0101010101')).toBe(6);
});

test('mixed random', () => {
    expect(solve('0010100111100')).toBe(7);
});

test('three zeros', () => {
    expect(solve('000')).toBe(0);
});

test('one zero at the end', () => {
    expect(solve('11110')).toBe(0);
});

test('one one at the end', () => {
    expect(solve('00001')).toBe(0);
});

// FAIL tests - descriptive / tests - prompt2 / 38 _prompt2.test.js× all zeros(4 ms)√ all ones(1 ms)× alternating 01× alternating 10× single 0(1 ms)× single 1√ empty string(1 ms)× two zeros(1 ms)× two ones(2 ms)× two 01(1 ms)× 11110000(1 ms)× 00001111(1 ms)× 0011(1 ms)× 0100101× long alternating pattern× mixed random× three zeros× one zero at the end(1 ms)× one one at the end(1 ms)

// ● all zeros

// expect(received).toBe(expected) // Object.is equality

// Expected: 0
// Received: 10

// 2 |
//     3 | test('all zeros', () => { >
//         4 | expect(solve('00000')).toBe(0); |
//         ^
//         5 |
//     });
// 6 |
//     7 | test('all ones', () => {

//             at Object.toBe(tests - descriptive / tests - prompt2 / 38 _prompt2.test.js: 4: 26)

//             ● alternating 01

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 2
//             Received: 24

//             10 |
//                 11 | test('alternating 01', () => { >
//                     12 | expect(solve('01010')).toBe(2); |
//                     ^
//                     13 |
//                 });
//             14 |
//                 15 | test('alternating 10', () => {

//                         at Object.toBe(tests - descriptive / tests - prompt2 / 38 _prompt2.test.js: 12: 26)

//                         ● alternating 10

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: 2
//                         Received: 20

//                         14 |
//                             15 | test('alternating 10', () => { >
//                                 16 | expect(solve('10101')).toBe(2); |
//                                 ^
//                                 17 |
//                             });
//                         18 |
//                             19 | test('single 0', () => {

//                                     at Object.toBe(tests - descriptive / tests - prompt2 / 38 _prompt2.test.js: 16: 26)

//                                     ● single 0

//                                     expect(received).toBe(expected) // Object.is equality

//                                     Expected: 0
//                                     Received: 14

//                                     18 |
//                                         19 | test('single 0', () => { >
//                                             20 | expect(solve('0')).toBe(0); |
//                                             ^
//                                             21 |
//                                         });
//                                     22 |
//                                         23 | test('single 1', () => {

//                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 38 _prompt2.test.js: 20: 22)

//                                                 ● single 1

//                                                 expect(received).toBe(expected) // Object.is equality

//                                                 Expected: 0
//                                                 Received: 6

//                                                 22 |
//                                                     23 | test('single 1', () => { >
//                                                         24 | expect(solve('1')).toBe(0); |
//                                                         ^
//                                                         25 |
//                                                     });
//                                                 26 |
//                                                     27 | test('empty string', () => {

//                                                             at Object.toBe(tests - descriptive / tests - prompt2 / 38 _prompt2.test.js: 24: 22)

//                                                             ● two zeros

//                                                             expect(received).toBe(expected) // Object.is equality

//                                                             Expected: 0
//                                                             Received: 38

//                                                             30 |
//                                                                 31 | test('two zeros', () => { >
//                                                                     32 | expect(solve('00')).toBe(0); |
//                                                                     ^
//                                                                     33 |
//                                                                 });
//                                                             34 |
//                                                                 35 | test('two ones', () => {

//                                                                         at Object.toBe(tests - descriptive / tests - prompt2 / 38 _prompt2.test.js: 32: 23)

//                                                                         ● two ones

//                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                         Expected: 0
//                                                                         Received: 9

//                                                                         34 |
//                                                                             35 | test('two ones', () => { >
//                                                                                 36 | expect(solve('11')).toBe(0); |
//                                                                                 ^
//                                                                                 37 |
//                                                                             });
//                                                                         38 |
//                                                                             39 | test('two 01', () => {

//                                                                                     at Object.toBe(tests - descriptive / tests - prompt2 / 38 _prompt2.test.js: 36: 23)

//                                                                                     ● two 01

//                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                     Expected: 0
//                                                                                     Received: 26

//                                                                                     38 |
//                                                                                         39 | test('two 01', () => { >
//                                                                                             40 | expect(solve('01')).toBe(0); |
//                                                                                             ^
//                                                                                             41 |
//                                                                                         });
//                                                                                     42 |
//                                                                                         43 | test('11110000', () => {

//                                                                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 38 _prompt2.test.js: 40: 23)

//                                                                                                 ● 11110000

//                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                 Expected: 0
//                                                                                                 Received: 27

//                                                                                                 42 |
//                                                                                                     43 | test('11110000', () => { >
//                                                                                                         44 | expect(solve('11110000')).toBe(0); |
//                                                                                                         ^
//                                                                                                         45 |
//                                                                                                     });
//                                                                                                 46 |
//                                                                                                     47 | test('00001111', () => {

//                                                                                                             at Object.toBe(tests - descriptive / tests - prompt2 / 38 _prompt2.test.js: 44: 29)

//                                                                                                             ● 00001111

//                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                             Expected: 0
//                                                                                                             Received: 213

//                                                                                                             46 |
//                                                                                                                 47 | test('00001111', () => { >
//                                                                                                                     48 | expect(solve('00001111')).toBe(0); |
//                                                                                                                     ^
//                                                                                                                     49 |
//                                                                                                                 });
//                                                                                                             50 |
//                                                                                                                 51 | test('0011', () => {

//                                                                                                                         at Object.toBe(tests - descriptive / tests - prompt2 / 38 _prompt2.test.js: 48: 29)

//                                                                                                                         ● 0011

//                                                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                                                         Expected: 0
//                                                                                                                         Received: 110

//                                                                                                                         50 |
//                                                                                                                             51 | test('0011', () => { >
//                                                                                                                                 52 | expect(solve('0011')).toBe(0); |
//                                                                                                                                 ^
//                                                                                                                                 53 |
//                                                                                                                             });
//                                                                                                                         54 |
//                                                                                                                             55 | test('0100101', () => {

//                                                                                                                                     at Object.toBe(tests - descriptive / tests - prompt2 / 38 _prompt2.test.js: 52: 25)

//                                                                                                                                     ● 0100101

//                                                                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                                                                     Expected: 4
//                                                                                                                                     Received: 155

//                                                                                                                                     54 |
//                                                                                                                                         55 | test('0100101', () => { >
//                                                                                                                                             56 | expect(solve('0100101')).toBe(4); |
//                                                                                                                                             ^
//                                                                                                                                             57 |
//                                                                                                                                         });
//                                                                                                                                     58 |
//                                                                                                                                         59 | test('long alternating pattern', () => {

//                                                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 38 _prompt2.test.js: 56: 28)

//                                                                                                                                                 ● long alternating pattern

//                                                                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                 Expected: 6
//                                                                                                                                                 Received: 155

//                                                                                                                                                 58 |
//                                                                                                                                                     59 | test('long alternating pattern', () => { >
//                                                                                                                                                         60 | expect(solve('0101010101')).toBe(6); |
//                                                                                                                                                         ^
//                                                                                                                                                         61 |
//                                                                                                                                                     });
//                                                                                                                                                 62 |
//                                                                                                                                                     63 | test('mixed random', () => {

//                                                                                                                                                             at Object.toBe(tests - descriptive / tests - prompt2 / 38 _prompt2.test.js: 60: 31)

//                                                                                                                                                             ● mixed random

//                                                                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                             Expected: 7
//                                                                                                                                                             Received: 306

//                                                                                                                                                             62 |
//                                                                                                                                                                 63 | test('mixed random', () => { >
//                                                                                                                                                                     64 | expect(solve('0010100111100')).toBe(7); |
//                                                                                                                                                                     ^
//                                                                                                                                                                     65 |
//                                                                                                                                                                 });
//                                                                                                                                                             66 |
//                                                                                                                                                                 67 | test('three zeros', () => {

//                                                                                                                                                                         at Object.toBe(tests - descriptive / tests - prompt2 / 38 _prompt2.test.js: 64: 34)

//                                                                                                                                                                         ● three zeros

//                                                                                                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                         Expected: 0
//                                                                                                                                                                         Received: 215

//                                                                                                                                                                         66 |
//                                                                                                                                                                             67 | test('three zeros', () => { >
//                                                                                                                                                                                 68 | expect(solve('000')).toBe(0); |
//                                                                                                                                                                                 ^
//                                                                                                                                                                                 69 |
//                                                                                                                                                                             });
//                                                                                                                                                                         70 |
//                                                                                                                                                                             71 | test('one zero at the end', () => {

//                                                                                                                                                                                     at Object.toBe(tests - descriptive / tests - prompt2 / 38 _prompt2.test.js: 68: 24)

//                                                                                                                                                                                     ● one zero at the end

//                                                                                                                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                                     Expected: 0
//                                                                                                                                                                                     Received: 53

//                                                                                                                                                                                     70 |
//                                                                                                                                                                                         71 | test('one zero at the end', () => { >
//                                                                                                                                                                                             72 | expect(solve('11110')).toBe(0); |
//                                                                                                                                                                                             ^
//                                                                                                                                                                                             73 |
//                                                                                                                                                                                         });
//                                                                                                                                                                                     74 |
//                                                                                                                                                                                         75 | test('one one at the end', () => {

//                                                                                                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 38 _prompt2.test.js: 72: 26)

//                                                                                                                                                                                                 ● one one at the end

//                                                                                                                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                                                 Expected: 0
//                                                                                                                                                                                                 Received: 397

//                                                                                                                                                                                                 74 |
//                                                                                                                                                                                                     75 | test('one one at the end', () => { >
//                                                                                                                                                                                                         76 | expect(solve('00001')).toBe(0); |
//                                                                                                                                                                                                         ^
//                                                                                                                                                                                                         77 |
//                                                                                                                                                                                                     });

//                                                                                                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 38 _prompt2.test.js: 76: 26)