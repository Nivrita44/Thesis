import { solve } from '../../solutions-descriptive/38.js';

test('single 0, length 1', () => {
    expect(solve('0')).toBe(1);
});

test('single 1, length 1', () => {
    expect(solve('1')).toBe(1);
});

test('00 string', () => {
    expect(solve('00')).toBe(2);
});

test('01 string', () => {
    expect(solve('01')).toBe(1);
});

test('10 string', () => {
    expect(solve('10')).toBe(1);
});

test('11 string', () => {
    expect(solve('11')).toBe(1);
});

test('000 string', () => {
    expect(solve('000')).toBe(4);
});

test('111 string', () => {
    expect(solve('111')).toBe(1);
});

test('010 string', () => {
    expect(solve('010')).toBe(2);
});

test('101 string', () => {
    expect(solve('101')).toBe(1);
});

test('110 string', () => {
    expect(solve('110')).toBe(1);
});

test('011 string', () => {
    expect(solve('011')).toBe(1);
});

test('edge case: all zeros (length 5)', () => {
    expect(solve('00000')).toBe(9);
});

test('edge case: all ones (length 4)', () => {
    expect(solve('1111')).toBe(1);
});

test('mixed 0011', () => {
    expect(solve('0011')).toBe(2);
});

test('mixed 0101', () => {
    expect(solve('0101')).toBe(2);
});

test('alternating 010101', () => {
    expect(solve('010101')).toBe(3);
});

test('alternating 101010', () => {
    expect(solve('101010')).toBe(2);
});

test('complex 00100', () => {
    expect(solve('00100')).toBe(5);
});

test('complex 10001', () => {
    expect(solve('10001')).toBe(2);
});

test('longer random string', () => {
    expect(solve('1100101')).toBe(3);
});

test('edge case: empty string', () => {
    expect(solve('')).toBe(0);
});

test('all zeros, length 20', () => {
    expect(solve('0'.repeat(20))).toBe(110);
});

// FAIL tests - descriptive / tests - prompt3 / 38 _prompt3.test.js× single 0, length 1(4 ms)× single 1, length 1× 00 string(1 ms)√ 01 string× 10 string(2 ms)× 11 string(1 ms)× 000 string(1 ms)√ 111 string× 010 string× 101 string× 110 string× 011 string(1 ms)× edge
// case :all zeros(length 5)(1 ms)× edge
// case :all ones(length 4)(1 ms)× mixed 0011(1 ms)× mixed 0101(1 ms)× alternating 010101(1 ms)× alternating 101010× complex 00100× complex 10001× longer random string√ edge
// case :empty string(1 ms)× all zeros, length 20

// ● single 0, length 1

// expect(received).toBe(expected) // Object.is equality

// Expected:
//     1
//     Received: 0

//     2 |
//         3 | test('single 0, length 1', () => { >
//             4 | expect(solve('0')).toBe(1); |
//             ^
//             5 |
//         });
//     6 |
//         7 | test('single 1, length 1', () => {

//                 at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 4: 22)

//                 ● single 1, length 1

//                 expect(received).toBe(expected) // Object.is equality

//                 Expected: 1
//                 Received: 0

//                 6 |
//                     7 | test('single 1, length 1', () => { >
//                         8 | expect(solve('1')).toBe(1); |
//                         ^
//                         9 |
//                     });
//                 10 |
//                     11 | test('00 string', () => {

//                             at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 8: 22)

//                             ● 00 string

//                             expect(received).toBe(expected) // Object.is equality

//                             Expected: 2
//                             Received: 5

//                             10 |
//                                 11 | test('00 string', () => { >
//                                     12 | expect(solve('00')).toBe(2); |
//                                     ^
//                                     13 |
//                                 });
//                             14 |
//                                 15 | test('01 string', () => {

//                                         at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 12: 23)

//                                         ● 10 string

//                                         expect(received).toBe(expected) // Object.is equality

//                                         Expected: 1
//                                         Received: 0

//                                         18 |
//                                             19 | test('10 string', () => { >
//                                                 20 | expect(solve('10')).toBe(1); |
//                                                 ^
//                                                 21 |
//                                             });
//                                         22 |
//                                             23 | test('11 string', () => {

//                                                     at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 20: 23)

//                                                     ● 11 string

//                                                     expect(received).toBe(expected) // Object.is equality

//                                                     Expected: 1
//                                                     Received: 0

//                                                     22 |
//                                                         23 | test('11 string', () => { >
//                                                             24 | expect(solve('11')).toBe(1); |
//                                                             ^
//                                                             25 |
//                                                         });
//                                                     26 |
//                                                         27 | test('000 string', () => {

//                                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 24: 23)

//                                                                 ● 000 string

//                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                 Expected: 4
//                                                                 Received: 36

//                                                                 26 |
//                                                                     27 | test('000 string', () => { >
//                                                                         28 | expect(solve('000')).toBe(4); |
//                                                                         ^
//                                                                         29 |
//                                                                     });
//                                                                 30 |
//                                                                     31 | test('111 string', () => {

//                                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 28: 24)

//                                                                             ● 010 string

//                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                             Expected: 2
//                                                                             Received: 20

//                                                                             34 |
//                                                                                 35 | test('010 string', () => { >
//                                                                                     36 | expect(solve('010')).toBe(2); |
//                                                                                     ^
//                                                                                     37 |
//                                                                                 });
//                                                                             38 |
//                                                                                 39 | test('101 string', () => {

//                                                                                         at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 36: 24)

//                                                                                         ● 101 string

//                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                         Expected: 1
//                                                                                         Received: 7

//                                                                                         38 |
//                                                                                             39 | test('101 string', () => { >
//                                                                                                 40 | expect(solve('101')).toBe(1); |
//                                                                                                 ^
//                                                                                                 41 |
//                                                                                             });
//                                                                                         42 |
//                                                                                             43 | test('110 string', () => {

//                                                                                                     at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 40: 24)

//                                                                                                     ● 110 string

//                                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                                     Expected: 1
//                                                                                                     Received: 6

//                                                                                                     42 |
//                                                                                                         43 | test('110 string', () => { >
//                                                                                                             44 | expect(solve('110')).toBe(1); |
//                                                                                                             ^
//                                                                                                             45 |
//                                                                                                         });
//                                                                                                     46 |
//                                                                                                         47 | test('011 string', () => {

//                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 44: 24)

//                                                                                                                 ● 011 string

//                                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                                 Expected: 1
//                                                                                                                 Received: 24

//                                                                                                                 46 |
//                                                                                                                     47 | test('011 string', () => { >
//                                                                                                                         48 | expect(solve('011')).toBe(1); |
//                                                                                                                         ^
//                                                                                                                         49 |
//                                                                                                                     });
//                                                                                                                 50 |
//                                                                                                                     51 | test('edge case: all zeros (length 5)', () => {

//                                                                                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 48: 24)

//                                                                                                                             ● edge
//                                                                                                                             case :all zeros(length 5)

//                                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                                             Expected:
//                                                                                                                                 9
//                                                                                                                                 Received: 176

//                                                                                                                                 50 |
//                                                                                                                                     51 | test('edge case: all zeros (length 5)', () => { >
//                                                                                                                                         52 | expect(solve('00000')).toBe(9); |
//                                                                                                                                         ^
//                                                                                                                                         53 |
//                                                                                                                                     });
//                                                                                                                                 54 |
//                                                                                                                                     55 | test('edge case: all ones (length 4)', () => {

//                                                                                                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 52: 26)

//                                                                                                                                             ● edge
//                                                                                                                                             case :all ones(length 4)

//                                                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                                                             Expected:
//                                                                                                                                                 1
//                                                                                                                                                 Received: 8

//                                                                                                                                                 54 |
//                                                                                                                                                     55 | test('edge case: all ones (length 4)', () => { >
//                                                                                                                                                         56 | expect(solve('1111')).toBe(1); |
//                                                                                                                                                         ^
//                                                                                                                                                         57 |
//                                                                                                                                                     });
//                                                                                                                                                 58 |
//                                                                                                                                                     59 | test('mixed 0011', () => {

//                                                                                                                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 56: 25)

//                                                                                                                                                             ● mixed 0011

//                                                                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                             Expected: 2
//                                                                                                                                                             Received: 86

//                                                                                                                                                             58 |
//                                                                                                                                                                 59 | test('mixed 0011', () => { >
//                                                                                                                                                                     60 | expect(solve('0011')).toBe(2); |
//                                                                                                                                                                     ^
//                                                                                                                                                                     61 |
//                                                                                                                                                                 });
//                                                                                                                                                             62 |
//                                                                                                                                                                 63 | test('mixed 0101', () => {

//                                                                                                                                                                         at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 60: 25)

//                                                                                                                                                                         ● mixed 0101

//                                                                                                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                         Expected: 2
//                                                                                                                                                                         Received: 62

//                                                                                                                                                                         62 |
//                                                                                                                                                                             63 | test('mixed 0101', () => { >
//                                                                                                                                                                                 64 | expect(solve('0101')).toBe(2); |
//                                                                                                                                                                                 ^
//                                                                                                                                                                                 65 |
//                                                                                                                                                                             });
//                                                                                                                                                                         66 |
//                                                                                                                                                                             67 | test('alternating 010101', () => {

//                                                                                                                                                                                     at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 64: 25)

//                                                                                                                                                                                     ● alternating 010101

//                                                                                                                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                                     Expected: 3
//                                                                                                                                                                                     Received: 81

//                                                                                                                                                                                     66 |
//                                                                                                                                                                                         67 | test('alternating 010101', () => { >
//                                                                                                                                                                                             68 | expect(solve('010101')).toBe(3); |
//                                                                                                                                                                                             ^
//                                                                                                                                                                                             69 |
//                                                                                                                                                                                         });
//                                                                                                                                                                                     70 |
//                                                                                                                                                                                         71 | test('alternating 101010', () => {

//                                                                                                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 68: 27)

//                                                                                                                                                                                                 ● alternating 101010

//                                                                                                                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                                                 Expected: 2
//                                                                                                                                                                                                 Received: 44

//                                                                                                                                                                                                 70 |
//                                                                                                                                                                                                     71 | test('alternating 101010', () => { >
//                                                                                                                                                                                                         72 | expect(solve('101010')).toBe(2); |
//                                                                                                                                                                                                         ^
//                                                                                                                                                                                                         73 |
//                                                                                                                                                                                                     });
//                                                                                                                                                                                                 74 |
//                                                                                                                                                                                                     75 | test('complex 00100', () => {

//                                                                                                                                                                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 72: 27)

//                                                                                                                                                                                                             ● complex 00100

//                                                                                                                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                                                             Expected: 5
//                                                                                                                                                                                                             Received: 202

//                                                                                                                                                                                                             74 |
//                                                                                                                                                                                                                 75 | test('complex 00100', () => { >
//                                                                                                                                                                                                                     76 | expect(solve('00100')).toBe(5); |
//                                                                                                                                                                                                                     ^
//                                                                                                                                                                                                                     77 |
//                                                                                                                                                                                                                 });
//                                                                                                                                                                                                             78 |
//                                                                                                                                                                                                                 79 | test('complex 10001', () => {

//                                                                                                                                                                                                                         at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 76: 26)

//                                                                                                                                                                                                                         ● complex 10001

//                                                                                                                                                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                                                                         Expected: 2
//                                                                                                                                                                                                                         Received: 113

//                                                                                                                                                                                                                         78 |
//                                                                                                                                                                                                                             79 | test('complex 10001', () => { >
//                                                                                                                                                                                                                                 80 | expect(solve('10001')).toBe(2); |
//                                                                                                                                                                                                                                 ^
//                                                                                                                                                                                                                                 81 |
//                                                                                                                                                                                                                             });
//                                                                                                                                                                                                                         82 |
//                                                                                                                                                                                                                             83 | test('longer random string', () => {

//                                                                                                                                                                                                                                     at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 80: 26)

//                                                                                                                                                                                                                                     ● longer random string

//                                                                                                                                                                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                                                                                     Expected: 3
//                                                                                                                                                                                                                                     Received: 42

//                                                                                                                                                                                                                                     82 |
//                                                                                                                                                                                                                                         83 | test('longer random string', () => { >
//                                                                                                                                                                                                                                             84 | expect(solve('1100101')).toBe(3); |
//                                                                                                                                                                                                                                             ^
//                                                                                                                                                                                                                                             85 |
//                                                                                                                                                                                                                                         });
//                                                                                                                                                                                                                                     86 |
//                                                                                                                                                                                                                                         87 | test('edge case: empty string', () => {

//                                                                                                                                                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 84: 28)

//                                                                                                                                                                                                                                                 ● all zeros, length 20

//                                                                                                                                                                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                                                                                                 Expected: 110
//                                                                                                                                                                                                                                                 Received: 2028

//                                                                                                                                                                                                                                                 90 |
//                                                                                                                                                                                                                                                     91 | test('all zeros, length 20', () => { >
//                                                                                                                                                                                                                                                         92 | expect(solve('0'.repeat(20))).toBe(110); |
//                                                                                                                                                                                                                                                         ^
//                                                                                                                                                                                                                                                         93 |
//                                                                                                                                                                                                                                                     });

//                                                                                                                                                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 38 _prompt3.test.js: 92: 33)