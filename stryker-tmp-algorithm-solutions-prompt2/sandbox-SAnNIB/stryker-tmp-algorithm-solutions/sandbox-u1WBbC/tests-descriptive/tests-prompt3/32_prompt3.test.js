// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/32.js';

test('Single element array, minimal case', () => {
    global.readInt = jest.fn()
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(2);
    let output = null;
    global.writeInt = (x) => { output = x; };
    solve();
    expect([2, -1]).toContain(output);
});

test('All elements are the same small prime', () => {
    global.readInt = jest.fn()
        .mockReturnValueOnce(3)
        .mockReturnValueOnce(3)
        .mockReturnValueOnce(3)
        .mockReturnValueOnce(3);
    let output = null;
    global.writeInt = (x) => { output = x; };
    solve();
    expect(output).toBe(3);
});

test('Every element is a different composite, should return 2', () => {
    global.readInt = jest.fn()
        .mockReturnValueOnce(4)
        .mockReturnValueOnce(4)
        .mockReturnValueOnce(6)
        .mockReturnValueOnce(8)
        .mockReturnValueOnce(10);
    let output = null;
    global.writeInt = (x) => { output = x; };
    solve();
    expect(output).toBe(2);
});

test('Array contains two primes, should return -1', () => {
    global.readInt = jest.fn()
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(11)
        .mockReturnValueOnce(13);
    let output = null;
    global.writeInt = (x) => { output = x; };
    solve();
    expect(output).toBe(-1);
});

test('Array with one prime, one composite, valid generator', () => {
    global.readInt = jest.fn()
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(3)
        .mockReturnValueOnce(8);
    let output = null;
    global.writeInt = (x) => { output = x; };
    solve();
    expect(output).toBe(3);
});

test('Array with one prime, one even composite less than 2*p', () => {
    global.readInt = jest.fn()
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(7)
        .mockReturnValueOnce(10);
    let output = null;
    global.writeInt = (x) => { output = x; };
    solve();
    expect(output).toBe(-1);
});

test('Array with one prime, one odd composite, x - facts[x] < p*2', () => {
    global.readInt = jest.fn()
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(7)
        .mockReturnValueOnce(15);
    let output = null;
    global.writeInt = (x) => { output = x; };
    solve();
    expect(output).toBe(-1);
});

test('All composites, fairly large numbers', () => {
    global.readInt = jest.fn()
        .mockReturnValueOnce(5)
        .mockReturnValueOnce(30)
        .mockReturnValueOnce(36)
        .mockReturnValueOnce(48)
        .mockReturnValueOnce(120)
        .mockReturnValueOnce(200);
    let output = null;
    global.writeInt = (x) => { output = x; };
    solve();
    expect(output).toBe(2);
});

test('Array with a single large prime', () => {
    global.readInt = jest.fn()
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(399989);
    let output = null;
    global.writeInt = (x) => { output = x; };
    solve();
    expect(output).toBe(399989);
});

test('Edge case: composite just at lower bound', () => {
    global.readInt = jest.fn()
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(4);
    let output = null;
    global.writeInt = (x) => { output = x; };
    solve();
    expect([2, 4]).toContain(output);
});

test('Array with mix, prime and composite OK at boundary', () => {
    global.readInt = jest.fn()
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(13)
        .mockReturnValueOnce(36);
    let output = null;
    global.writeInt = (x) => { output = x; };
    solve();
    expect(output).toBe(13);
});

// FAIL tests - descriptive / tests - prompt3 / 32 _prompt3.test.js× Single element array, minimal
// case (2 ms)× All elements are the same small prime× Every element is a different composite, should
// return 2(1 ms)× Array contains two primes, should
// return -1× Array with one prime, one composite, valid generator(1 ms)× Array with one prime, one even composite less than 2 * p(2 ms)× Array with one prime, one odd composite, x - facts[x] < p * 2× All composites, fairly large numbers(1 ms)× Array with a single large prime× Edge
// case :composite just at lower bound× Array with mix, prime and composite OK at boundary

// ● Single element array, minimal
// case

// ReferenceError:
//     jest is not defined

//     2 |
//         3 | test('Single element array, minimal case', () => { >
//                 4 | global.readInt = jest.fn() |
//                     ^
//                     5 | .mockReturnValueOnce(1)
//                 6 | .mockReturnValueOnce(2);
//                 7 |
//                     let output = null;

//                 at Object.jest(tests - descriptive / tests - prompt3 / 32 _prompt3.test.js: 4: 20)

//                 ● All elements are the same small prime

//                 ReferenceError: jest is not defined

//                 12 |
//                     13 | test('All elements are the same small prime', () => { >
//                             14 | global.readInt = jest.fn() |
//                                 ^
//                                 15 | .mockReturnValueOnce(3)
//                             16 | .mockReturnValueOnce(3)
//                             17 | .mockReturnValueOnce(3)

//                             at Object.jest(tests - descriptive / tests - prompt3 / 32 _prompt3.test.js: 14: 20)

//                             ● Every element is a different composite, should
//                             return 2

//                             ReferenceError: jest is not defined

//                             24 |
//                                 25 | test('Every element is a different composite, should return 2', () => { >
//                                         26 | global.readInt = jest.fn() |
//                                             ^
//                                             27 | .mockReturnValueOnce(4)
//                                         28 | .mockReturnValueOnce(4)
//                                         29 | .mockReturnValueOnce(6)

//                                         at Object.jest(tests - descriptive / tests - prompt3 / 32 _prompt3.test.js: 26: 20)

//                                         ● Array contains two primes, should
//                                         return -1

//                                         ReferenceError: jest is not defined

//                                         37 |
//                                             38 | test('Array contains two primes, should return -1', () => { >
//                                                     39 | global.readInt = jest.fn() |
//                                                         ^
//                                                         40 | .mockReturnValueOnce(2)
//                                                     41 | .mockReturnValueOnce(11)
//                                                     42 | .mockReturnValueOnce(13);

//                                                     at Object.jest(tests - descriptive / tests - prompt3 / 32 _prompt3.test.js: 39: 20)

//                                                     ● Array with one prime, one composite, valid generator

//                                                     ReferenceError: jest is not defined

//                                                     48 |
//                                                         49 | test('Array with one prime, one composite, valid generator', () => { >
//                                                                 50 | global.readInt = jest.fn() |
//                                                                     ^
//                                                                     51 | .mockReturnValueOnce(2)
//                                                                 52 | .mockReturnValueOnce(3)
//                                                                 53 | .mockReturnValueOnce(8);

//                                                                 at Object.jest(tests - descriptive / tests - prompt3 / 32 _prompt3.test.js: 50: 20)

//                                                                 ● Array with one prime, one even composite less than 2 * p

//                                                                 ReferenceError: jest is not defined

//                                                                 59 |
//                                                                     60 | test('Array with one prime, one even composite less than 2*p', () => { >
//                                                                             61 | global.readInt = jest.fn() |
//                                                                                 ^
//                                                                                 62 | .mockReturnValueOnce(2)
//                                                                             63 | .mockReturnValueOnce(7)
//                                                                             64 | .mockReturnValueOnce(10);

//                                                                             at Object.jest(tests - descriptive / tests - prompt3 / 32 _prompt3.test.js: 61: 20)

//                                                                             ● Array with one prime, one odd composite, x - facts[x] < p * 2

//                                                                             ReferenceError: jest is not defined

//                                                                             70 |
//                                                                                 71 | test('Array with one prime, one odd composite, x - facts[x] < p*2', () => { >
//                                                                                         72 | global.readInt = jest.fn() |
//                                                                                             ^
//                                                                                             73 | .mockReturnValueOnce(2)
//                                                                                         74 | .mockReturnValueOnce(7)
//                                                                                         75 | .mockReturnValueOnce(15);

//                                                                                         at Object.jest(tests - descriptive / tests - prompt3 / 32 _prompt3.test.js: 72: 20)

//                                                                                         ● All composites, fairly large numbers

//                                                                                         ReferenceError: jest is not defined

//                                                                                         81 |
//                                                                                             82 | test('All composites, fairly large numbers', () => { >
//                                                                                                     83 | global.readInt = jest.fn() |
//                                                                                                         ^
//                                                                                                         84 | .mockReturnValueOnce(5)
//                                                                                                     85 | .mockReturnValueOnce(30)
//                                                                                                     86 | .mockReturnValueOnce(36)

//                                                                                                     at Object.jest(tests - descriptive / tests - prompt3 / 32 _prompt3.test.js: 83: 20)

//                                                                                                     ● Array with a single large prime

//                                                                                                     ReferenceError: jest is not defined

//                                                                                                     95 |
//                                                                                                         96 | test('Array with a single large prime', () => { >
//                                                                                                                 97 | global.readInt = jest.fn() |
//                                                                                                                     ^
//                                                                                                                     98 | .mockReturnValueOnce(1)
//                                                                                                                 99 | .mockReturnValueOnce(399989);
//                                                                                                                 100 |
//                                                                                                                     let output = null;

//                                                                                                                 at Object.jest(tests - descriptive / tests - prompt3 / 32 _prompt3.test.js: 97: 20)

//                                                                                                                 ● Edge
//                                                                                                                 case :composite just at lower bound

//                                                                                                                 ReferenceError:
//                                                                                                                     jest is not defined

//                                                                                                                     105 |
//                                                                                                                         106 | test('Edge case: composite just at lower bound', () => { >
//                                                                                                                                 107 | global.readInt = jest.fn() |
//                                                                                                                                     ^
//                                                                                                                                     108 | .mockReturnValueOnce(1)
//                                                                                                                                 109 | .mockReturnValueOnce(4);
//                                                                                                                                 110 |
//                                                                                                                                     let output = null;

//                                                                                                                                 at Object.jest(tests - descriptive / tests - prompt3 / 32 _prompt3.test.js: 107: 20)

//                                                                                                                                 ● Array with mix, prime and composite OK at boundary

//                                                                                                                                 ReferenceError: jest is not defined

//                                                                                                                                 115 |
//                                                                                                                                     116 | test('Array with mix, prime and composite OK at boundary', () => { >
//                                                                                                                                             117 | global.readInt = jest.fn() |
//                                                                                                                                                 ^
//                                                                                                                                                 118 | .mockReturnValueOnce(2)
//                                                                                                                                             119 | .mockReturnValueOnce(13)
//                                                                                                                                             120 | .mockReturnValueOnce(36);

//                                                                                                                                             at Object.jest(tests - descriptive / tests - prompt3 / 32 _prompt3.test.js: 117: 20)
