// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/14.js';

test('example 1', () => {
    expect(solve(1, 2, 10, [0])).toBe(20);
});

test('k equals to l', () => {
    expect(solve(2, 5, 5, [0, 2])).toBe(10);
});

test('scarecrows backward', () => {
    expect(solve(3, 3, 7, [0, 1, 2])).toBe(14);
});

test('scarecrow at l', () => {
    expect(solve(2, 2, 8, [0, 8])).toBe(16);
});

test('many scarecrows at start', () => {
    expect(solve(4, 1, 5, [0, 0, 0, 0])).toBe(10);
});

test('scarecrows at every second', () => {
    expect(solve(5, 2, 10, [0, 2, 4, 6, 8])).toBe(20);
});

test('single large step', () => {
    expect(solve(1, 100, 100, [0])).toBe(200);
});

test('scarecrow far behind', () => {
    expect(solve(1, 5, 20, [0])).toBe(40);
});

test('scarecrow just at the end', () => {
    expect(solve(2, 3, 10, [0, 10])).toBe(20);
});

test('sparse scarecrows', () => {
    expect(solve(3, 4, 15, [0, 5, 10])).toBe(30);
});

test('crow already at scarecrow', () => {
    expect(solve(1, 1, 1, [0])).toBe(2);
});

test('biggest constraint', () => {
    expect(solve(2, 100000000, 100000000, [0, 100000000])).toBe(200000000);
}); //All fail


// FAIL tests - descriptive / tests - prompt1 / 14 _prompt1.test.js× example 1(4 ms)× k equals to l× scarecrows backward(1 ms)× scarecrow at l(1 ms)× many scarecrows at start× scarecrows at every second× single large step(1 ms)× scarecrow far behind(2 ms)× scarecrow just at the end× sparse scarecrows× crow already at scarecrow× biggest constraint(1 ms)

// ● example 1

// expect(received).toBe(expected) // Object.is equality

// Expected: 20
// Received: 16

// 2 |
//     3 | test('example 1', () => { >
//         4 | expect(solve(1, 2, 10, [0])).toBe(20); |
//         ^
//         5 |
//     });
// 6 |
//     7 | test('k equals to l', () => {

//             at Object.toBe(tests - descriptive / tests - prompt1 / 14 _prompt1.test.js: 4: 32)

//             ● k equals to l

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 10
//             Received: 0

//             6 |
//                 7 | test('k equals to l', () => { >
//                     8 | expect(solve(2, 5, 5, [0, 2])).toBe(10); |
//                     ^
//                     9 |
//                 });
//             10 |
//                 11 | test('scarecrows backward', () => {

//                         at Object.toBe(tests - descriptive / tests - prompt1 / 14 _prompt1.test.js: 8: 34)

//                         ● scarecrows backward

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: 14
//                         Received: 4

//                         10 |
//                             11 | test('scarecrows backward', () => { >
//                                 12 | expect(solve(3, 3, 7, [0, 1, 2])).toBe(14); |
//                                 ^
//                                 13 |
//                             });
//                         14 |
//                             15 | test('scarecrow at l', () => {

//                                     at Object.toBe(tests - descriptive / tests - prompt1 / 14 _prompt1.test.js: 12: 37)

//                                     ● scarecrow at l

//                                     expect(received).toBe(expected) // Object.is equality

//                                     Expected: 16
//                                     Received: 8

//                                     14 |
//                                         15 | test('scarecrow at l', () => { >
//                                             16 | expect(solve(2, 2, 8, [0, 8])).toBe(16); |
//                                             ^
//                                             17 |
//                                         });
//                                     18 |
//                                         19 | test('many scarecrows at start', () => {

//                                                 at Object.toBe(tests - descriptive / tests - prompt1 / 14 _prompt1.test.js: 16: 34)

//                                                 ● many scarecrows at start

//                                                 expect(received).toBe(expected) // Object.is equality

//                                                 Expected: 10
//                                                 Received: 8

//                                                 18 |
//                                                     19 | test('many scarecrows at start', () => { >
//                                                         20 | expect(solve(4, 1, 5, [0, 0, 0, 0])).toBe(10); |
//                                                         ^
//                                                         21 |
//                                                     });
//                                                 22 |
//                                                     23 | test('scarecrows at every second', () => {

//                                                             at Object.toBe(tests - descriptive / tests - prompt1 / 14 _prompt1.test.js: 20: 40)

//                                                             ● scarecrows at every second

//                                                             expect(received).toBe(expected) // Object.is equality

//                                                             Expected: 20
//                                                             Received: 0

//                                                             22 |
//                                                                 23 | test('scarecrows at every second', () => { >
//                                                                     24 | expect(solve(5, 2, 10, [0, 2, 4, 6, 8])).toBe(20); |
//                                                                     ^
//                                                                     25 |
//                                                                 });
//                                                             26 |
//                                                                 27 | test('single large step', () => {

//                                                                         at Object.toBe(tests - descriptive / tests - prompt1 / 14 _prompt1.test.js: 24: 44)

//                                                                         ● single large step

//                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                         Expected: 200
//                                                                         Received: 0

//                                                                         26 |
//                                                                             27 | test('single large step', () => { >
//                                                                                 28 | expect(solve(1, 100, 100, [0])).toBe(200); |
//                                                                                 ^
//                                                                                 29 |
//                                                                             });
//                                                                         30 |
//                                                                             31 | test('scarecrow far behind', () => {

//                                                                                     at Object.toBe(tests - descriptive / tests - prompt1 / 14 _prompt1.test.js: 28: 35)

//                                                                                     ● scarecrow far behind

//                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                     Expected: 40
//                                                                                     Received: 30

//                                                                                     30 |
//                                                                                         31 | test('scarecrow far behind', () => { >
//                                                                                             32 | expect(solve(1, 5, 20, [0])).toBe(40); |
//                                                                                             ^
//                                                                                             33 |
//                                                                                         });
//                                                                                     34 |
//                                                                                         35 | test('scarecrow just at the end', () => {

//                                                                                                 at Object.toBe(tests - descriptive / tests - prompt1 / 14 _prompt1.test.js: 32: 32)

//                                                                                                 ● scarecrow just at the end

//                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                 Expected: 20
//                                                                                                 Received: 8

//                                                                                                 34 |
//                                                                                                     35 | test('scarecrow just at the end', () => { >
//                                                                                                         36 | expect(solve(2, 3, 10, [0, 10])).toBe(20); |
//                                                                                                         ^
//                                                                                                         37 |
//                                                                                                     });
//                                                                                                 38 |
//                                                                                                     39 | test('sparse scarecrows', () => {

//                                                                                                             at Object.toBe(tests - descriptive / tests - prompt1 / 14 _prompt1.test.js: 36: 36)

//                                                                                                             ● sparse scarecrows

//                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                             Expected: 30
//                                                                                                             Received: 6

//                                                                                                             38 |
//                                                                                                                 39 | test('sparse scarecrows', () => { >
//                                                                                                                     40 | expect(solve(3, 4, 15, [0, 5, 10])).toBe(30); |
//                                                                                                                     ^
//                                                                                                                     41 |
//                                                                                                                 });
//                                                                                                             42 |
//                                                                                                                 43 | test('crow already at scarecrow', () => {

//                                                                                                                         at Object.toBe(tests - descriptive / tests - prompt1 / 14 _prompt1.test.js: 40: 39)

//                                                                                                                         ● crow already at scarecrow

//                                                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                                                         Expected: 2
//                                                                                                                         Received: 0

//                                                                                                                         42 |
//                                                                                                                             43 | test('crow already at scarecrow', () => { >
//                                                                                                                                 44 | expect(solve(1, 1, 1, [0])).toBe(2); |
//                                                                                                                                 ^
//                                                                                                                                 45 |
//                                                                                                                             });
//                                                                                                                         46 |
//                                                                                                                             47 | test('biggest constraint', () => {

//                                                                                                                                     at Object.toBe(tests - descriptive / tests - prompt1 / 14 _prompt1.test.js: 44: 31)

//                                                                                                                                     ● biggest constraint

//                                                                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                                                                     Expected: 200000000
//                                                                                                                                     Received: 0

//                                                                                                                                     46 |
//                                                                                                                                         47 | test('biggest constraint', () => { >
//                                                                                                                                             48 | expect(solve(2, 100000000, 100000000, [0, 100000000])).toBe(200000000); |
//                                                                                                                                             ^
//                                                                                                                                             49 |
//                                                                                                                                         });

//                                                                                                                                     at Object.toBe(tests - descriptive / tests - prompt1 / 14 _prompt1.test.js: 48: 58)