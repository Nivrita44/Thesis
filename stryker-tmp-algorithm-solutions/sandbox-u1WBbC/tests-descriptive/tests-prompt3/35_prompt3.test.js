// @ts-nocheck
import { solve } from '../../solutions-descriptive/35.js';

test('Basic test: n=5, k=2, simple increasing', () => {
    expect(solve(5, 2, [1, 2, 3, 4, 5])).toBe(9);
});

test('Single optimal, n=4, k=2, pick highest two', () => {
    expect(solve(4, 2, [10, 2, 3, 4])).toBe(14);
});

test('Descending values', () => {
    expect(solve(5, 2, [9, 8, 7, 6, 5])).toBe(24);
});

test('All equal values', () => {
    expect(solve(6, 2, [7, 7, 7, 7, 7, 7])).toBe(21);
});

test('Minimum plate size, n=2, k=1', () => {
    expect(solve(2, 1, [100, 200])).toBe(200);
});

test('All values 1', () => {
    expect(solve(5, 2, [1, 1, 1, 1, 1])).toBe(3);
});

test('n just above k', () => {
    expect(solve(5, 4, [1, 9, 2, 8, 3])).toBe(17);
});

test('High k (nearly n)', () => {
    expect(solve(10, 9, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29])).toBe(29);
});

test('Edge: n=3, k=2, non-trivial', () => {
    expect(solve(3, 2, [6, 8, 7])).toBe(8);
});

test('Edge: n=2, k=1, low', () => {
    expect(solve(2, 1, [1, 2])).toBe(2);
});

test('Larger n, k=1, only one plate can be chosen', () => {
    expect(solve(5, 1, [8, 7, 12, 6, 9])).toBe(12);
});

test('Second plate best skipped', () => {
    expect(solve(3, 2, [1, 100, 1])).toBe(100);
});

test('Large deliciousness values', () => {
    expect(solve(4, 2, [1000000000, 999999999, 1, 1])).toBe(1999999999);
});

test('Edge: max n (stress)', () => {
    const n = 2e5;
    const k = 2;
    let d = Array(n).fill(1e9);
    expect(solve(n, k, d)).toBe(((n + k) / (k + 1)) * 1e9);
});

test('Alternate big/small', () => {
    expect(solve(7, 3, [1, 100, 1, 100, 1, 100, 1])).toBe(201);
});


// FAIL tests - descriptive / tests - prompt3 / 35 _prompt3.test.js× Basic test: n = 5, k = 2, simple increasing(6 ms)× Single optimal, n = 4, k = 2, pick highest two(2 ms)× Descending values(2 ms)× All equal values(1 ms)× Minimum plate size, n = 2, k = 1(1 ms)× All values 1× n just above k(1 ms)× High k(nearly n)(1 ms)× Edge: n = 3, k = 2, non - trivial(1 ms)× Edge: n = 2, k = 1, low(1 ms)× Larger n, k = 1, only one plate can be chosen× Second plate best skipped(1 ms)× Large deliciousness values(1 ms)× Edge: max n(stress)(32 ms)× Alternate big / small(1 ms)

// ● Basic test: n = 5, k = 2, simple increasing

// expect(received).toBe(expected) // Object.is equality

// Expected: 9
// Received: 3

// 2 |
//     3 | test('Basic test: n=5, k=2, simple increasing', () => { >
//         4 | expect(solve(5, 2, [1, 2, 3, 4, 5])).toBe(9); |
//         ^
//         5 |
//     });
// 6 |
//     7 | test('Single optimal, n=4, k=2, pick highest two', () => {

//             at Object.toBe(tests - descriptive / tests - prompt3 / 35 _prompt3.test.js: 4: 40)

//             ● Single optimal, n = 4, k = 2, pick highest two

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 14
//             Received: 10

//             6 |
//                 7 | test('Single optimal, n=4, k=2, pick highest two', () => { >
//                     8 | expect(solve(4, 2, [10, 2, 3, 4])).toBe(14); |
//                     ^
//                     9 |
//                 });
//             10 |
//                 11 | test('Descending values', () => {

//                         at Object.toBe(tests - descriptive / tests - prompt3 / 35 _prompt3.test.js: 8: 38)

//                         ● Descending values

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: 24
//                         Received: 9

//                         10 |
//                             11 | test('Descending values', () => { >
//                                 12 | expect(solve(5, 2, [9, 8, 7, 6, 5])).toBe(24); |
//                                 ^
//                                 13 |
//                             });
//                         14 |
//                             15 | test('All equal values', () => {

//                                     at Object.toBe(tests - descriptive / tests - prompt3 / 35 _prompt3.test.js: 12: 40)

//                                     ● All equal values

//                                     expect(received).toBe(expected) // Object.is equality

//                                     Expected: 21
//                                     Received: 14

//                                     14 |
//                                         15 | test('All equal values', () => { >
//                                             16 | expect(solve(6, 2, [7, 7, 7, 7, 7, 7])).toBe(21); |
//                                             ^
//                                             17 |
//                                         });
//                                     18 |
//                                         19 | test('Minimum plate size, n=2, k=1', () => {

//                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 35 _prompt3.test.js: 16: 43)

//                                                 ● Minimum plate size, n = 2, k = 1

//                                                 expect(received).toBe(expected) // Object.is equality

//                                                 Expected: 200
//                                                 Received: 100

//                                                 18 |
//                                                     19 | test('Minimum plate size, n=2, k=1', () => { >
//                                                         20 | expect(solve(2, 1, [100, 200])).toBe(200); |
//                                                         ^
//                                                         21 |
//                                                     });
//                                                 22 |
//                                                     23 | test('All values 1', () => {

//                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 35 _prompt3.test.js: 20: 35)

//                                                             ● All values 1

//                                                             expect(received).toBe(expected) // Object.is equality

//                                                             Expected: 3
//                                                             Received: 1

//                                                             22 |
//                                                                 23 | test('All values 1', () => { >
//                                                                     24 | expect(solve(5, 2, [1, 1, 1, 1, 1])).toBe(3); |
//                                                                     ^
//                                                                     25 |
//                                                                 });
//                                                             26 |
//                                                                 27 | test('n just above k', () => {

//                                                                         at Object.toBe(tests - descriptive / tests - prompt3 / 35 _prompt3.test.js: 24: 40)

//                                                                         ● n just above k

//                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                         Expected: 17
//                                                                         Received: 1

//                                                                         26 |
//                                                                             27 | test('n just above k', () => { >
//                                                                                 28 | expect(solve(5, 4, [1, 9, 2, 8, 3])).toBe(17); |
//                                                                                 ^
//                                                                                 29 |
//                                                                             });
//                                                                         30 |
//                                                                             31 | test('High k (nearly n)', () => {

//                                                                                     at Object.toBe(tests - descriptive / tests - prompt3 / 35 _prompt3.test.js: 28: 40)

//                                                                                     ● High k(nearly n)

//                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                     Expected: 29
//                                                                                     Received: 2

//                                                                                     30 |
//                                                                                         31 | test('High k (nearly n)', () => { >
//                                                                                             32 | expect(solve(10, 9, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29])).toBe(29); |
//                                                                                             ^
//                                                                                             33 |
//                                                                                         });
//                                                                                     34 |
//                                                                                         35 | test('Edge: n=3, k=2, non-trivial', () => {

//                                                                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 35 _prompt3.test.js: 32: 62)

//                                                                                                 ● Edge: n = 3, k = 2, non - trivial

//                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                 Expected: 8
//                                                                                                 Received: 6

//                                                                                                 34 |
//                                                                                                     35 | test('Edge: n=3, k=2, non-trivial', () => { >
//                                                                                                         36 | expect(solve(3, 2, [6, 8, 7])).toBe(8); |
//                                                                                                         ^
//                                                                                                         37 |
//                                                                                                     });
//                                                                                                 38 |
//                                                                                                     39 | test('Edge: n=2, k=1, low', () => {

//                                                                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 35 _prompt3.test.js: 36: 34)

//                                                                                                             ● Edge: n = 2, k = 1, low

//                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                             Expected: 2
//                                                                                                             Received: 1

//                                                                                                             38 |
//                                                                                                                 39 | test('Edge: n=2, k=1, low', () => { >
//                                                                                                                     40 | expect(solve(2, 1, [1, 2])).toBe(2); |
//                                                                                                                     ^
//                                                                                                                     41 |
//                                                                                                                 });
//                                                                                                             42 |
//                                                                                                                 43 | test('Larger n, k=1, only one plate can be chosen', () => {

//                                                                                                                         at Object.toBe(tests - descriptive / tests - prompt3 / 35 _prompt3.test.js: 40: 31)

//                                                                                                                         ● Larger n, k = 1, only one plate can be chosen

//                                                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                                                         Expected: 12
//                                                                                                                         Received: 20

//                                                                                                                         42 |
//                                                                                                                             43 | test('Larger n, k=1, only one plate can be chosen', () => { >
//                                                                                                                                 44 | expect(solve(5, 1, [8, 7, 12, 6, 9])).toBe(12); |
//                                                                                                                                 ^
//                                                                                                                                 45 |
//                                                                                                                             });
//                                                                                                                         46 |
//                                                                                                                             47 | test('Second plate best skipped', () => {

//                                                                                                                                     at Object.toBe(tests - descriptive / tests - prompt3 / 35 _prompt3.test.js: 44: 41)

//                                                                                                                                     ● Second plate best skipped

//                                                                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                                                                     Expected: 100
//                                                                                                                                     Received: 1

//                                                                                                                                     46 |
//                                                                                                                                         47 | test('Second plate best skipped', () => { >
//                                                                                                                                             48 | expect(solve(3, 2, [1, 100, 1])).toBe(100); |
//                                                                                                                                             ^
//                                                                                                                                             49 |
//                                                                                                                                         });
//                                                                                                                                     50 |
//                                                                                                                                         51 | test('Large deliciousness values', () => {

//                                                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 35 _prompt3.test.js: 48: 36)

//                                                                                                                                                 ● Large deliciousness values

//                                                                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                 Expected: 1999999999
//                                                                                                                                                 Received: 1000000000

//                                                                                                                                                 50 |
//                                                                                                                                                     51 | test('Large deliciousness values', () => { >
//                                                                                                                                                         52 | expect(solve(4, 2, [1000000000, 999999999, 1, 1])).toBe(1999999999); |
//                                                                                                                                                         ^
//                                                                                                                                                         53 |
//                                                                                                                                                     });
//                                                                                                                                                 54 |
//                                                                                                                                                     55 | test('Edge: max n (stress)', () => {

//                                                                                                                                                         at Object.toBe(tests - descriptive / tests - prompt3 / 35 _prompt3.test.js: 52: 54)

//                                                                                                                                                         ● Edge: max n(stress)

//                                                                                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                         Expected: 66667333333333.33
//                                                                                                                                                         Received: 66666000000000

//                                                                                                                                                         57 |
//                                                                                                                                                             const k = 2;
//                                                                                                                                                         58 |
//                                                                                                                                                             let d = Array(n).fill(1e9); >
//                                                                                                                                                         59 | expect(solve(n, k, d)).toBe(((n + k) / (k + 1)) * 1e9); |
//                                                                                                                                                         ^
//                                                                                                                                                         60 |
//                                                                                                                                                     });
//                                                                                                                                                 61 |
//                                                                                                                                                     62 | test('Alternate big/small', () => {

//                                                                                                                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 35 _prompt3.test.js: 59: 26)

//                                                                                                                                                             ● Alternate big / small

//                                                                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                             Expected: 201
//                                                                                                                                                             Received: 100

//                                                                                                                                                             61 |
//                                                                                                                                                                 62 | test('Alternate big/small', () => { >
//                                                                                                                                                                     63 | expect(solve(7, 3, [1, 100, 1, 100, 1, 100, 1])).toBe(201); |
//                                                                                                                                                                     ^
//                                                                                                                                                                     64 |
//                                                                                                                                                                 });

//                                                                                                                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 35 _prompt3.test.js: 63: 52)
