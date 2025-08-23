// @ts-nocheck
import { solve } from '../../solutions-descriptive/14.js';

test('Single scarecrow at 0, k=3, l=5', () => {
    expect(solve(1, 3, 5, [0])).toBe(4);
});

test('Multiple scarecrows, k=2, l=5, a=[2,5,5]', () => {
    expect(solve(3, 2, 5, [2, 5, 5])).toBe(5);
});

test('Single scarecrow at the end, k=l=10', () => {
    expect(solve(1, 10, 10, [10])).toBe(20);
});

test('One scarecrow at every integer in range, k=1, l=10', () => {
    expect(solve(10, 1, 10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(0);
});

test('Two scarecrows both at 0, k=1, l=2', () => {
    expect(solve(2, 1, 2, [0, 0])).toBe(2);
});

test('Two scarecrows at 0 and 2, k=1, l=2', () => {
    expect(solve(2, 1, 2, [0, 2])).toBe(1);
});

test('k=1, l=1, single scarecrow at 0', () => {
    expect(solve(1, 1, 1, [0])).toBe(0);
});

test('k=l=1, single scarecrow at 1', () => {
    expect(solve(1, 1, 1, [1])).toBe(2);
});

test('Edge: scarecrow at 0, l=2, k=2', () => {
    expect(solve(1, 2, 2, [0])).toBe(2);
});

test('Edge: all scarecrows at 0, l=100000000, k=99999999', () => {
    expect(solve(2, 99999999, 100000000, [0, 0])).toBe(2);
});

test('l=1e8, k=1, scarecrows at 0 and l', () => {
    expect(solve(2, 1, 100000000, [0, 100000000])).toBe(199999998);
});

test('Scarecrows closely packed at 0,1,2, k=2, l=6', () => {
    expect(solve(3, 2, 6, [0, 1, 2])).toBe(5);
});

test('Scarecrows at even positions, k=3, l=12', () => {
    expect(solve(4, 3, 12, [0, 2, 4, 6])).toBe(6);
});

test('All scarecrows at furthest positions, k=5, l=12', () => {
    expect(solve(2, 5, 12, [0, 12])).toBe(10);
});

test('n=200000, k=1, l=10^8, all scarecrows at 0', () => {
    const n = 200000;
    const a = Array(n).fill(0);
    expect(solve(n, 1, 100000000, a)).toBe(199999998);
});

test('Edge: k=1, l=1, scarecrow at 0', () => {
    expect(solve(1, 1, 1, [0])).toBe(0);
});

test('Edge: k=1, l=1, scarecrow at 1', () => {
    expect(solve(1, 1, 1, [1])).toBe(2);
});

// FAIL tests - descriptive / tests - prompt3 / 14 _prompt3.test.js√ Single scarecrow at 0, k = 3, l = 5(2 ms)√ Multiple scarecrows, k = 2, l = 5, a = [2, 5, 5](1 ms)√ Single scarecrow at the end, k = l = 10(1 ms)√ One scarecrow at every integer in range, k = 1, l = 10√ Two scarecrows both at 0, k = 1, l = 2√ Two scarecrows at 0 and 2, k = 1, l = 2√ k = 1, l = 1, single scarecrow at 0(1 ms)√ k = l = 1, single scarecrow at 1× Edge: scarecrow at 0, l = 2, k = 2(2 ms)√ Edge: all scarecrows at 0, l = 100000000, k = 99999999× l = 1e8, k = 1, scarecrows at 0 and l(1 ms)× Scarecrows closely packed at 0, 1, 2, k = 2, l = 6(1 ms)√ Scarecrows at even positions, k = 3, l = 12× All scarecrows at furthest positions, k = 5, l = 12(1 ms)√ n = 200000, k = 1, l = 10 ^ 8, all scarecrows at 0(113 ms)√ Edge: k = 1, l = 1, scarecrow at 0(1 ms)√ Edge: k = 1, l = 1, scarecrow at 1(1 ms)

// ● Edge: scarecrow at 0, l = 2, k = 2

// expect(received).toBe(expected) // Object.is equality

// Expected: 2
// Received: 0

// 34 |
//     35 | test('Edge: scarecrow at 0, l=2, k=2', () => { >
//         36 | expect(solve(1, 2, 2, [0])).toBe(2); |
//         ^
//         37 |
//     });
// 38 |
//     39 | test('Edge: all scarecrows at 0, l=100000000, k=99999999', () => {

//             at Object.toBe(tests - descriptive / tests - prompt3 / 14 _prompt3.test.js: 36: 31)

//             ● l = 1e8, k = 1, scarecrows at 0 and l

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 199999998
//             Received: 199999996

//             42 |
//                 43 | test('l=1e8, k=1, scarecrows at 0 and l', () => { >
//                     44 | expect(solve(2, 1, 100000000, [0, 100000000])).toBe(199999998); |
//                     ^
//                     45 |
//                 });
//             46 |
//                 47 | test('Scarecrows closely packed at 0,1,2, k=2, l=6', () => {

//                         at Object.toBe(tests - descriptive / tests - prompt3 / 14 _prompt3.test.js: 44: 50)

//                         ● Scarecrows closely packed at 0, 1, 2, k = 2, l = 6

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: 5
//                         Received: 4

//                         46 |
//                             47 | test('Scarecrows closely packed at 0,1,2, k=2, l=6', () => { >
//                                 48 | expect(solve(3, 2, 6, [0, 1, 2])).toBe(5); |
//                                 ^
//                                 49 |
//                             });
//                         50 |
//                             51 | test('Scarecrows at even positions, k=3, l=12', () => {

//                                     at Object.toBe(tests - descriptive / tests - prompt3 / 14 _prompt3.test.js: 48: 37)

//                                     ● All scarecrows at furthest positions, k = 5, l = 12

//                                     expect(received).toBe(expected) // Object.is equality

//                                     Expected: 10
//                                     Received: 7

//                                     54 |
//                                         55 | test('All scarecrows at furthest positions, k=5, l=12', () => { >
//                                             56 | expect(solve(2, 5, 12, [0, 12])).toBe(10); |
//                                             ^
//                                             57 |
//                                         });
//                                     58 |
//                                         59 | test('n=200000, k=1, l=10^8, all scarecrows at 0', () => {

//                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 14 _prompt3.test.js: 56: 36)
