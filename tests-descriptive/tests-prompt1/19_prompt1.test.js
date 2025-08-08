import { solve } from '../../solutions-descriptive/19.js';

test('n=2, a=1, b=1', () => {
    expect(solve(2, 1, 1)).toBe(6);
});

test('n=2, a=2, b=2', () => {
    expect(solve(2, 2, 2)).toBe(8);
});

test('n=3, a=2, b=3', () => {
    expect(solve(3, 2, 3)).toBe(14);
});

test('n=3, a=1, b=2', () => {
    expect(solve(3, 1, 2)).toBe(12);
});

test('n=4, a=3, b=2', () => {
    expect(solve(4, 3, 2)).toBe(22);
});

test('n=5, a=2, b=3', () => {
    expect(solve(5, 2, 3)).toBe(38);
});

test('n=10, a=5, b=2', () => {
    expect(solve(10, 5, 2)).toBe(160);
});

test('n=2, a=1000000, b=1000000', () => {
    expect(solve(2, 1000000, 1000000)).toBe(8);
});

test('n=3, a=1000000, b=1', () => {
    expect(solve(3, 1000000, 1)).toBe(12);
});

test('n=1000000, a=1, b=1', () => {
    expect(solve(1000000, 1, 1)).toBe(2000000);
});
// FAIL tests - descriptive / tests - prompt1 / 19 _prompt1.test.js× n = 2, a = 1, b = 1(4 ms)× n = 2, a = 2, b = 2× n = 3, a = 2, b = 3(1 ms)× n = 3, a = 1, b = 2(1 ms)× n = 4, a = 3, b = 2(1 ms)× n = 5, a = 2, b = 3(1 ms)× n = 10, a = 5, b = 2(1 ms)× n = 2, a = 1000000, b = 1000000(1 ms)× n = 3, a = 1000000, b = 1(1 ms)× n = 1000000, a = 1, b = 1

// ● n = 2, a = 1, b = 1

// expect(received).toBe(expected) // Object.is equality

// Expected: 6
// Received: 1

// 2 |
//     3 | test('n=2, a=1, b=1', () => { >
//         4 | expect(solve(2, 1, 1)).toBe(6); |
//         ^
//         5 |
//     });
// 6 |
//     7 | test('n=2, a=2, b=2', () => {

//             at Object.toBe(tests - descriptive / tests - prompt1 / 19 _prompt1.test.js: 4: 26)

//             ● n = 2, a = 2, b = 2

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 8
//             Received: 2

//             6 |
//                 7 | test('n=2, a=2, b=2', () => { >
//                     8 | expect(solve(2, 2, 2)).toBe(8); |
//                     ^
//                     9 |
//                 });
//             10 |
//                 11 | test('n=3, a=2, b=3', () => {

//                         at Object.toBe(tests - descriptive / tests - prompt1 / 19 _prompt1.test.js: 8: 26)

//                         ● n = 3, a = 2, b = 3

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: 14
//                         Received: 1

//                         10 |
//                             11 | test('n=3, a=2, b=3', () => { >
//                                 12 | expect(solve(3, 2, 3)).toBe(14); |
//                                 ^
//                                 13 |
//                             });
//                         14 |
//                             15 | test('n=3, a=1, b=2', () => {

//                                     at Object.toBe(tests - descriptive / tests - prompt1 / 19 _prompt1.test.js: 12: 26)

//                                     ● n = 3, a = 1, b = 2

//                                     expect(received).toBe(expected) // Object.is equality

//                                     Expected: 12
//                                     Received: 1

//                                     14 |
//                                         15 | test('n=3, a=1, b=2', () => { >
//                                             16 | expect(solve(3, 1, 2)).toBe(12); |
//                                             ^
//                                             17 |
//                                         });
//                                     18 |
//                                         19 | test('n=4, a=3, b=2', () => {

//                                                 at Object.toBe(tests - descriptive / tests - prompt1 / 19 _prompt1.test.js: 16: 26)

//                                                 ● n = 4, a = 3, b = 2

//                                                 expect(received).toBe(expected) // Object.is equality

//                                                 Expected: 22
//                                                 Received: 1

//                                                 18 |
//                                                     19 | test('n=4, a=3, b=2', () => { >
//                                                         20 | expect(solve(4, 3, 2)).toBe(22); |
//                                                         ^
//                                                         21 |
//                                                     });
//                                                 22 |
//                                                     23 | test('n=5, a=2, b=3', () => {

//                                                             at Object.toBe(tests - descriptive / tests - prompt1 / 19 _prompt1.test.js: 20: 26)

//                                                             ● n = 5, a = 2, b = 3

//                                                             expect(received).toBe(expected) // Object.is equality

//                                                             Expected: 38
//                                                             Received: 1

//                                                             22 |
//                                                                 23 | test('n=5, a=2, b=3', () => { >
//                                                                     24 | expect(solve(5, 2, 3)).toBe(38); |
//                                                                     ^
//                                                                     25 |
//                                                                 });
//                                                             26 |
//                                                                 27 | test('n=10, a=5, b=2', () => {

//                                                                         at Object.toBe(tests - descriptive / tests - prompt1 / 19 _prompt1.test.js: 24: 26)

//                                                                         ● n = 10, a = 5, b = 2

//                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                         Expected: 160
//                                                                         Received: 5

//                                                                         26 |
//                                                                             27 | test('n=10, a=5, b=2', () => { >
//                                                                                 28 | expect(solve(10, 5, 2)).toBe(160); |
//                                                                                 ^
//                                                                                 29 |
//                                                                             });
//                                                                         30 |
//                                                                             31 | test('n=2, a=1000000, b=1000000', () => {

//                                                                                     at Object.toBe(tests - descriptive / tests - prompt1 / 19 _prompt1.test.js: 28: 27)

//                                                                                     ● n = 2, a = 1000000, b = 1000000

//                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                     Expected: 8
//                                                                                     Received: 2

//                                                                                     30 |
//                                                                                         31 | test('n=2, a=1000000, b=1000000', () => { >
//                                                                                             32 | expect(solve(2, 1000000, 1000000)).toBe(8); |
//                                                                                             ^
//                                                                                             33 |
//                                                                                         });
//                                                                                     34 |
//                                                                                         35 | test('n=3, a=1000000, b=1', () => {

//                                                                                                 at Object.toBe(tests - descriptive / tests - prompt1 / 19 _prompt1.test.js: 32: 38)

//                                                                                                 ● n = 3, a = 1000000, b = 1

//                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                 Expected: 12
//                                                                                                 Received: 1

//                                                                                                 34 |
//                                                                                                     35 | test('n=3, a=1000000, b=1', () => { >
//                                                                                                         36 | expect(solve(3, 1000000, 1)).toBe(12); |
//                                                                                                         ^
//                                                                                                         37 |
//                                                                                                     });
//                                                                                                 38 |
//                                                                                                     39 | test('n=1000000, a=1, b=1', () => {

//                                                                                                             at Object.toBe(tests - descriptive / tests - prompt1 / 19 _prompt1.test.js: 36: 32)

//                                                                                                             ● n = 1000000, a = 1, b = 1

//                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                             Expected: 2000000
//                                                                                                             Received: 1

//                                                                                                             38 |
//                                                                                                                 39 | test('n=1000000, a=1, b=1', () => { >
//                                                                                                                     40 | expect(solve(1000000, 1, 1)).toBe(2000000); |
//                                                                                                                     ^
//                                                                                                                     41 |
//                                                                                                                 });

//                                                                                                             at Object.toBe(tests - descriptive / tests - prompt1 / 19 _prompt1.test.js: 40: 32)