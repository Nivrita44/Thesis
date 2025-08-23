// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/35.js';

test('example 1', () => {
    expect(solve(5, 2, [1, 2, 3, 4, 5])).toBe(12);
});

test('example 2', () => {
    expect(solve(3, 2, [1, 2, 3])).toBe(5);
});

test('all plates same deliciousness', () => {
    expect(solve(4, 2, [7, 7, 7, 7])).toBe(14);
});

test('large k', () => {
    expect(solve(6, 5, [9, 10, 3, 8, 15, 1])).toBe(25);
});

test('minimum input values', () => {
    expect(solve(2, 1, [1, 1])).toBe(1);
});

test('taking every other plate', () => {
    expect(solve(6, 2, [10, 1, 9, 2, 8, 3])).toBe(27);
});

test('maximum deliciousness only later plates', () => {
    expect(solve(5, 2, [1, 1, 1, 10, 10])).toBe(20);
});

test('plate count just one less than minutes', () => {
    expect(solve(7, 6, [3, 5, 5, 13, 8, 10, 2])).toBe(13);
});

test('pick non-adjacent large values', () => {
    expect(solve(5, 3, [10, 2, 7, 8, 11])).toBe(18);
});

test('max constraints', () => {
    const n = 200000;
    const k = 100000;
    const d = Array.from({ length: n }, (_, i) => i + 1);
    const expected = (n - k + 1 + n) * k / 2; // pick the k largest, sum
    expect(solve(n, k, d)).toBe(expected);
});

// FAIL tests - descriptive / tests - prompt1 / 35 _prompt1.test.js× example 1(7 ms)× example 2(1 ms)× all plates same deliciousness× large k√ minimum input values(1 ms)× taking every other plate(1 ms)× maximum deliciousness only later plates× plate count just one less than minutes× pick non - adjacent large values× max constraints(16 ms)

// ● example 1

// expect(received).toBe(expected) // Object.is equality

// Expected: 12
// Received: 3

// 2 |
//     3 | test('example 1', () => { >
//         4 | expect(solve(5, 2, [1, 2, 3, 4, 5])).toBe(12); |
//         ^
//         5 |
//     });
// 6 |
//     7 | test('example 2', () => {

//             at Object.toBe(tests - descriptive / tests - prompt1 / 35 _prompt1.test.js: 4: 40)

//             ● example 2

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 5
//             Received: 1

//             6 |
//                 7 | test('example 2', () => { >
//                     8 | expect(solve(3, 2, [1, 2, 3])).toBe(5); |
//                     ^
//                     9 |
//                 });
//             10 |
//                 11 | test('all plates same deliciousness', () => {

//                         at Object.toBe(tests - descriptive / tests - prompt1 / 35 _prompt1.test.js: 8: 34)

//                         ● all plates same deliciousness

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: 14
//                         Received: 7

//                         10 |
//                             11 | test('all plates same deliciousness', () => { >
//                                 12 | expect(solve(4, 2, [7, 7, 7, 7])).toBe(14); |
//                                 ^
//                                 13 |
//                             });
//                         14 |
//                             15 | test('large k', () => {

//                                     at Object.toBe(tests - descriptive / tests - prompt1 / 35 _prompt1.test.js: 12: 37)

//                                     ● large k

//                                     expect(received).toBe(expected) // Object.is equality

//                                     Expected: 25
//                                     Received: 9

//                                     14 |
//                                         15 | test('large k', () => { >
//                                             16 | expect(solve(6, 5, [9, 10, 3, 8, 15, 1])).toBe(25); |
//                                             ^
//                                             17 |
//                                         });
//                                     18 |
//                                         19 | test('minimum input values', () => {

//                                                 at Object.toBe(tests - descriptive / tests - prompt1 / 35 _prompt1.test.js: 16: 45)

//                                                 ● taking every other plate

//                                                 expect(received).toBe(expected) // Object.is equality

//                                                 Expected: 27
//                                                 Received: 19

//                                                 22 |
//                                                     23 | test('taking every other plate', () => { >
//                                                         24 | expect(solve(6, 2, [10, 1, 9, 2, 8, 3])).toBe(27); |
//                                                         ^
//                                                         25 |
//                                                     });
//                                                 26 |
//                                                     27 | test('maximum deliciousness only later plates', () => {

//                                                             at Object.toBe(tests - descriptive / tests - prompt1 / 35 _prompt1.test.js: 24: 44)

//                                                             ● maximum deliciousness only later plates

//                                                             expect(received).toBe(expected) // Object.is equality

//                                                             Expected: 20
//                                                             Received: 1

//                                                             26 |
//                                                                 27 | test('maximum deliciousness only later plates', () => { >
//                                                                     28 | expect(solve(5, 2, [1, 1, 1, 10, 10])).toBe(20); |
//                                                                     ^
//                                                                     29 |
//                                                                 });
//                                                             30 |
//                                                                 31 | test('plate count just one less than minutes', () => {

//                                                                         at Object.toBe(tests - descriptive / tests - prompt1 / 35 _prompt1.test.js: 28: 42)

//                                                                         ● plate count just one less than minutes

//                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                         Expected: 13
//                                                                         Received: 3

//                                                                         30 |
//                                                                             31 | test('plate count just one less than minutes', () => { >
//                                                                                 32 | expect(solve(7, 6, [3, 5, 5, 13, 8, 10, 2])).toBe(13); |
//                                                                                 ^
//                                                                                 33 |
//                                                                             });
//                                                                         34 |
//                                                                             35 | test('pick non-adjacent large values', () => {

//                                                                                     at Object.toBe(tests - descriptive / tests - prompt1 / 35 _prompt1.test.js: 32: 48)

//                                                                                     ● pick non - adjacent large values

//                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                     Expected: 18
//                                                                                     Received: 10

//                                                                                     34 |
//                                                                                         35 | test('pick non-adjacent large values', () => { >
//                                                                                             36 | expect(solve(5, 3, [10, 2, 7, 8, 11])).toBe(18); |
//                                                                                             ^
//                                                                                             37 |
//                                                                                         });
//                                                                                     38 |
//                                                                                         39 | test('max constraints', () => {

//                                                                                             at Object.toBe(tests - descriptive / tests - prompt1 / 35 _prompt1.test.js: 36: 42)

//                                                                                             ● max constraints

//                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                             Expected: 15000050000
//                                                                                             Received: 100000

//                                                                                             42 |
//                                                                                                 const d = Array.from({ length: n }, (_, i) => i + 1);
//                                                                                             43 |
//                                                                                                 const expected = (n - k + 1 + n) * k / 2; // pick the k largest, sum
//                                                                                             >
//                                                                                             44 | expect(solve(n, k, d)).toBe(expected); |
//                                                                                             ^
//                                                                                             45 |
//                                                                                         });

//                                                                                     at Object.toBe(tests - descriptive / tests - prompt1 / 35 _prompt1.test.js: 44: 26)