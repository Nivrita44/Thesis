// @ts-nocheck
import { solve } from '../../solutions-descriptive/44.js';

test('single pile, 1 stone', () => {
    expect(solve(1, [1])).toBe('Alice');
});

test('single pile, 2 stones', () => {
    expect(solve(1, [2])).toBe('Bob');
});

test('two piles [1, 2]', () => {
    expect(solve(2, [1, 2])).toBe('Alice');
});

test('three piles [1, 1, 1]', () => {
    expect(solve(3, [1, 1, 1])).toBe('Alice');
});

test('three piles [2, 2, 2]', () => {
    expect(solve(3, [2, 2, 2])).toBe('Bob');
});

test('three piles, two with 1 stone and one with 2', () => {
    expect(solve(3, [1, 2, 1])).toBe('Alice');
});

test('pile with 3 stones', () => {
    expect(solve(1, [3])).toBe('Alice');
});

test('piles [2, 3]', () => {
    expect(solve(2, [2, 3])).toBe('Bob');
});

test('piles [1, 2, 3, 4]', () => {
    expect(solve(4, [1, 2, 3, 4])).toBe('Alice');
});

test('piles [7, 9, 11]', () => {
    expect(solve(3, [7, 9, 11])).toBe('Alice');
});

test('large pile even', () => {
    expect(solve(1, [10000000])).toBe('Bob');
});

test('large pile odd', () => {
    expect(solve(1, [9999999])).toBe('Alice');
});

test('alternating 1 and 2', () => {
    expect(solve(6, [1, 2, 1, 2, 1, 2])).toBe('Alice');
});

test('all piles even', () => {
    expect(solve(5, [2, 4, 6, 8, 10])).toBe('Bob');
});

test('all piles odd', () => {
    expect(solve(5, [1, 3, 5, 7, 9])).toBe('Alice');
});

// FAIL tests - descriptive / tests - prompt1 / 44 _prompt1.test.js× single pile, 1 stone(6 ms)√ single pile, 2 stones(1 ms)× two piles[1, 2](1 ms)× three piles[1, 1, 1]√ three piles[2, 2, 2](1 ms)× three piles, two with 1 stone and one with 2× pile with 3 stones(1 ms)√ piles[2, 3](1 ms)× piles[1, 2, 3, 4](1 ms)× piles[7, 9, 11]√ large pile even(1 ms)× large pile odd× alternating 1 and 2(1 ms)√ all piles even(1 ms)× all piles odd

// ● single pile, 1 stone

// expect(received).toBe(expected) // Object.is equality

// Expected: "Alice"
// Received: "Bob"

// 2 |
//     3 | test('single pile, 1 stone', () => { >
//         4 | expect(solve(1, [1])).toBe('Alice'); |
//         ^
//         5 |
//     });
// 6 |
//     7 | test('single pile, 2 stones', () => {

//             at Object.toBe(tests - descriptive / tests - prompt1 / 44 _prompt1.test.js: 4: 25)

//             ● two piles[1, 2]

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "Alice"
//             Received: "Bob"

//             10 |
//                 11 | test('two piles [1, 2]', () => { >
//                     12 | expect(solve(2, [1, 2])).toBe('Alice'); |
//                     ^
//                     13 |
//                 });
//             14 |
//                 15 | test('three piles [1, 1, 1]', () => {

//                         at Object.toBe(tests - descriptive / tests - prompt1 / 44 _prompt1.test.js: 12: 28)

//                         ● three piles[1, 1, 1]

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: "Alice"
//                         Received: "Bob"

//                         14 |
//                             15 | test('three piles [1, 1, 1]', () => { >
//                                 16 | expect(solve(3, [1, 1, 1])).toBe('Alice'); |
//                                 ^
//                                 17 |
//                             });
//                         18 |
//                             19 | test('three piles [2, 2, 2]', () => {

//                                     at Object.toBe(tests - descriptive / tests - prompt1 / 44 _prompt1.test.js: 16: 31)

//                                     ● three piles, two with 1 stone and one with 2

//                                     expect(received).toBe(expected) // Object.is equality

//                                     Expected: "Alice"
//                                     Received: "Bob"

//                                     22 |
//                                         23 | test('three piles, two with 1 stone and one with 2', () => { >
//                                             24 | expect(solve(3, [1, 2, 1])).toBe('Alice'); |
//                                             ^
//                                             25 |
//                                         });
//                                     26 |
//                                         27 | test('pile with 3 stones', () => {

//                                                 at Object.toBe(tests - descriptive / tests - prompt1 / 44 _prompt1.test.js: 24: 31)

//                                                 ● pile with 3 stones

//                                                 expect(received).toBe(expected) // Object.is equality

//                                                 Expected: "Alice"
//                                                 Received: "Bob"

//                                                 26 |
//                                                     27 | test('pile with 3 stones', () => { >
//                                                         28 | expect(solve(1, [3])).toBe('Alice'); |
//                                                         ^
//                                                         29 |
//                                                     });
//                                                 30 |
//                                                     31 | test('piles [2, 3]', () => {

//                                                             at Object.toBe(tests - descriptive / tests - prompt1 / 44 _prompt1.test.js: 28: 25)

//                                                             ● piles[1, 2, 3, 4]

//                                                             expect(received).toBe(expected) // Object.is equality

//                                                             Expected: "Alice"
//                                                             Received: "Bob"

//                                                             34 |
//                                                                 35 | test('piles [1, 2, 3, 4]', () => { >
//                                                                     36 | expect(solve(4, [1, 2, 3, 4])).toBe('Alice'); |
//                                                                     ^
//                                                                     37 |
//                                                                 });
//                                                             38 |
//                                                                 39 | test('piles [7, 9, 11]', () => {

//                                                                         at Object.toBe(tests - descriptive / tests - prompt1 / 44 _prompt1.test.js: 36: 34)

//                                                                         ● piles[7, 9, 11]

//                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                         Expected: "Alice"
//                                                                         Received: "Bob"

//                                                                         38 |
//                                                                             39 | test('piles [7, 9, 11]', () => { >
//                                                                                 40 | expect(solve(3, [7, 9, 11])).toBe('Alice'); |
//                                                                                 ^
//                                                                                 41 |
//                                                                             });
//                                                                         42 |
//                                                                             43 | test('large pile even', () => {

//                                                                                     at Object.toBe(tests - descriptive / tests - prompt1 / 44 _prompt1.test.js: 40: 32)

//                                                                                     ● large pile odd

//                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                     Expected: "Alice"
//                                                                                     Received: "Bob"

//                                                                                     46 |
//                                                                                         47 | test('large pile odd', () => { >
//                                                                                             48 | expect(solve(1, [9999999])).toBe('Alice'); |
//                                                                                             ^
//                                                                                             49 |
//                                                                                         });
//                                                                                     50 |
//                                                                                         51 | test('alternating 1 and 2', () => {

//                                                                                                 at Object.toBe(tests - descriptive / tests - prompt1 / 44 _prompt1.test.js: 48: 31)

//                                                                                                 ● alternating 1 and 2

//                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                 Expected: "Alice"
//                                                                                                 Received: "Bob"

//                                                                                                 50 |
//                                                                                                     51 | test('alternating 1 and 2', () => { >
//                                                                                                         52 | expect(solve(6, [1, 2, 1, 2, 1, 2])).toBe('Alice'); |
//                                                                                                         ^
//                                                                                                         53 |
//                                                                                                     });
//                                                                                                 54 |
//                                                                                                     55 | test('all piles even', () => {

//                                                                                                             at Object.toBe(tests - descriptive / tests - prompt1 / 44 _prompt1.test.js: 52: 35)

//                                                                                                             ● all piles odd

//                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                             Expected: "Alice"
//                                                                                                             Received: "Bob"

//                                                                                                             58 |
//                                                                                                                 59 | test('all piles odd', () => { >
//                                                                                                                     60 | expect(solve(5, [1, 3, 5, 7, 9])).toBe('Alice'); |
//                                                                                                                     ^
//                                                                                                                     61 |
//                                                                                                                 });

//                                                                                                             at Object.toBe(tests - descriptive / tests - prompt1 / 44 _prompt1.test.js: 60: 33)