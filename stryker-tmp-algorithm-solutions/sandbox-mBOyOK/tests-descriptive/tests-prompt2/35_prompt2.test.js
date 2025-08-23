// @ts-nocheck
import { solve } from '../../solutions-descriptive/35.js';

test('n=1, k=0, single element', () => {
    expect(solve(1, 0, [42])).toBe(42);
});

test('n=2, k=0, increasing elements', () => {
    expect(solve(2, 0, [1, 2])).toBe(3);
});

test('n=2, k=1, elements are equal', () => {
    expect(solve(2, 1, [3, 3])).toBe(6);
});

test('n=5, k=1, mixed elements', () => {
    expect(solve(5, 1, [2, 4, 1, 5, 3])).toBe(15);
});

test('n=4, k=2, ordered elements', () => {
    expect(solve(4, 2, [1, 2, 3, 4])).toBe(10);
});

test('n=6, k=2, all elements are zero', () => {
    expect(solve(6, 2, [0, 0, 0, 0, 0, 0])).toBe(0);
});

test('n=3, k=1, sorted descending', () => {
    expect(solve(3, 1, [7, 4, 1])).toBe(12);
});

test('n=3, k=0, sorted descending', () => {
    expect(solve(3, 0, [7, 6, 5])).toBe(18);
});

test('n=5, k=2, all negative', () => {
    expect(solve(5, 2, [-1, -2, -3, -4, -5])).toBe(-15);
});

test('n=7, k=2, with duplicates', () => {
    expect(solve(7, 2, [2, 3, 3, 2, 1, 3, 2])).toBe(16);
});

test('n=1, k=1, single negative', () => {
    expect(solve(1, 1, [-8])).toBe(-8);
});

test('n=3, k=2, last element dominates heap', () => {
    expect(solve(3, 2, [1, 1, 100])).toBe(102);
});

test('n=10, k=3, sequence', () => {
    expect(solve(10, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
});


// FAIL tests - descriptive / tests - prompt2 / 35 _prompt2.test.js√ n = 1, k = 0, single element(3 ms)√ n = 2, k = 0, increasing elements× n = 2, k = 1, elements are equal(2 ms)× n = 5, k = 1, mixed elements(1 ms)× n = 4, k = 2, ordered elements√ n = 6, k = 2, all elements are zero× n = 3, k = 1, sorted descending√ n = 3, k = 0, sorted descending× n = 5, k = 2, all negative× n = 7, k = 2, with duplicates× n = 1, k = 1, single negative× n = 3, k = 2, last element dominates heap(1 ms)× n = 10, k = 3, sequence(1 ms)

// ● n = 2, k = 1, elements are equal

// expect(received).toBe(expected) // Object.is equality

// Expected: 6
// Received: 3

// 10 |
//     11 | test('n=2, k=1, elements are equal', () => { >
//         12 | expect(solve(2, 1, [3, 3])).toBe(6); |
//         ^
//         13 |
//     });
// 14 |
//     15 | test('n=5, k=1, mixed elements', () => {

//             at Object.toBe(tests - descriptive / tests - prompt2 / 35 _prompt2.test.js: 12: 31)

//             ● n = 5, k = 1, mixed elements

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 15
//             Received: 9

//             14 |
//                 15 | test('n=5, k=1, mixed elements', () => { >
//                     16 | expect(solve(5, 1, [2, 4, 1, 5, 3])).toBe(15); |
//                     ^
//                     17 |
//                 });
//             18 |
//                 19 | test('n=4, k=2, ordered elements', () => {

//                         at Object.toBe(tests - descriptive / tests - prompt2 / 35 _prompt2.test.js: 16: 40)

//                         ● n = 4, k = 2, ordered elements

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: 10
//                         Received: 2

//                         18 |
//                             19 | test('n=4, k=2, ordered elements', () => { >
//                                 20 | expect(solve(4, 2, [1, 2, 3, 4])).toBe(10); |
//                                 ^
//                                 21 |
//                             });
//                         22 |
//                             23 | test('n=6, k=2, all elements are zero', () => {

//                                     at Object.toBe(tests - descriptive / tests - prompt2 / 35 _prompt2.test.js: 20: 37)

//                                     ● n = 3, k = 1, sorted descending

//                                     expect(received).toBe(expected) // Object.is equality

//                                     Expected: 12
//                                     Received: 7

//                                     26 |
//                                         27 | test('n=3, k=1, sorted descending', () => { >
//                                             28 | expect(solve(3, 1, [7, 4, 1])).toBe(12); |
//                                             ^
//                                             29 |
//                                         });
//                                     30 |
//                                         31 | test('n=3, k=0, sorted descending', () => {

//                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 35 _prompt2.test.js: 28: 34)

//                                                 ● n = 5, k = 2, all negative

//                                                 expect(received).toBe(expected) // Object.is equality

//                                                 Expected: -15
//                                                 Received: -1

//                                                 34 |
//                                                     35 | test('n=5, k=2, all negative', () => { >
//                                                         36 | expect(solve(5, 2, [-1, -2, -3, -4, -5])).toBe(-15); |
//                                                         ^
//                                                         37 |
//                                                     });
//                                                 38 |
//                                                     39 | test('n=7, k=2, with duplicates', () => {

//                                                             at Object.toBe(tests - descriptive / tests - prompt2 / 35 _prompt2.test.js: 36: 45)

//                                                             ● n = 7, k = 2, with duplicates

//                                                             expect(received).toBe(expected) // Object.is equality

//                                                             Expected: 16
//                                                             Received: 6

//                                                             38 |
//                                                                 39 | test('n=7, k=2, with duplicates', () => { >
//                                                                     40 | expect(solve(7, 2, [2, 3, 3, 2, 1, 3, 2])).toBe(16); |
//                                                                     ^
//                                                                     41 |
//                                                                 });
//                                                             42 |
//                                                                 43 | test('n=1, k=1, single negative', () => {

//                                                                         at Object.toBe(tests - descriptive / tests - prompt2 / 35 _prompt2.test.js: 40: 46)

//                                                                         ● n = 1, k = 1, single negative

//                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                         Expected: -8
//                                                                         Received: 0

//                                                                         42 |
//                                                                             43 | test('n=1, k=1, single negative', () => { >
//                                                                                 44 | expect(solve(1, 1, [-8])).toBe(-8); |
//                                                                                 ^
//                                                                                 45 |
//                                                                             });
//                                                                         46 |
//                                                                             47 | test('n=3, k=2, last element dominates heap', () => {

//                                                                                     at Object.toBe(tests - descriptive / tests - prompt2 / 35 _prompt2.test.js: 44: 29)

//                                                                                     ● n = 3, k = 2, last element dominates heap

//                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                     Expected: 102
//                                                                                     Received: 1

//                                                                                     46 |
//                                                                                         47 | test('n=3, k=2, last element dominates heap', () => { >
//                                                                                             48 | expect(solve(3, 2, [1, 1, 100])).toBe(102); |
//                                                                                             ^
//                                                                                             49 |
//                                                                                         });
//                                                                                     50 |
//                                                                                         51 | test('n=10, k=3, sequence', () => {

//                                                                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 35 _prompt2.test.js: 48: 36)

//                                                                                                 ● n = 10, k = 3, sequence

//                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                 Expected: 55
//                                                                                                 Received: 10

//                                                                                                 50 |
//                                                                                                     51 | test('n=10, k=3, sequence', () => { >
//                                                                                                         52 | expect(solve(10, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55); |
//                                                                                                         ^
//                                                                                                         53 |
//                                                                                                     });

//                                                                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 35 _prompt2.test.js: 52: 48)