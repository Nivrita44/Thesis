// @ts-nocheck
import { solve } from '../../solutions-descriptive/20.js';

test('Single element zero', () => {
    expect(solve([0])).toBe(0);
});

test('Single positive element', () => {
    expect(solve([5])).toBe(0);
});

test('Single negative element', () => {
    expect(solve([-5])).toBe(0);
});

test('Two zeros', () => {
    expect(solve([0, 0])).toBe(0);
});

test('Positive numbers', () => {
    expect(solve([1, 2, 3])).toBe(2);
});

test('All same number', () => {
    expect(solve([4, 4, 4, 4])).toBe(8);
});

test('Increasing sequence', () => {
    expect(solve([1, 2, 4, 8])).toBe(4);
});

test('Decreasing sequence', () => {
    expect(solve([8, 4, 2, 1])).toBe(8);
});

test('Mixed positive and negative', () => {
    expect(solve([2, -1, 3])).toBe(1);
});

test('Negative numbers', () => {
    expect(solve([-3, -2, -1])).toBe(0);
});

test('Upper bound element', () => {
    expect(solve([1000000000, 1000000000, 1000000000])).toBe(999999998);
});

test('Lower bound element', () => {
    expect(solve([-1000000000, -1000000000, -1000000000])).toBe(0);
});

test('Impossible case', () => {
    expect(solve([1000000000, -1000000000, 1000000000, -1000000000, 1000000000, -1000000000])).toBe(-1);
});

test('Edge case: maximum values', () => {
    expect(solve(new Array(100).fill(1000000000))).toBe(999999900);
});

test('Edge case: minimum values', () => {
    expect(solve(new Array(100).fill(-1000000000))).toBe(0);
});

test('Alternating high and low', () => {
    expect(solve([1000, -1000, 1000, -1000])).toBe(0);
});

test('Empty array', () => {
    expect(solve([])).toBe(0);
});

test('All ones', () => {
    expect(solve([1, 1, 1, 1, 1])).toBe(3);
});

test('All minus ones', () => {
    expect(solve([-1, -1, -1, -1, -1])).toBe(0);
});
// FAIL tests - descriptive / tests - prompt2 / 20 _prompt2.test.js√ Single element zero(3 ms)√ Single positive element(1 ms)× Single negative element(2 ms)√ Two zeros(1 ms)× Positive numbers(1 ms)× All same number(1 ms)× Increasing sequence(1 ms)× Decreasing sequence(1 ms)× Mixed positive and negative(1 ms)× Negative numbers(1 ms)× Upper bound element(1 ms)× Lower bound element(1 ms)√ Impossible
// case (1 ms)× Edge
// case :maximum values(2 ms)× Edge
// case :minimum values(1 ms)× Alternating high and low(1 ms)√ Empty array× All ones× All minus ones

// ● Single negative element

// expect(received).toBe(expected) // Object.is equality

// Expected:
//     0
//     Received: -1

//     10 |
//         11 | test('Single negative element', () => { >
//             12 | expect(solve([-5])).toBe(0); |
//             ^
//             13 |
//         });
//     14 |
//         15 | test('Two zeros', () => {

//                 at Object.toBe(tests - descriptive / tests - prompt2 / 20 _prompt2.test.js: 12: 23)

//                 ● Positive numbers

//                 expect(received).toBe(expected) // Object.is equality

//                 Expected: 2
//                 Received: -1

//                 18 |
//                     19 | test('Positive numbers', () => { >
//                         20 | expect(solve([1, 2, 3])).toBe(2); |
//                         ^
//                         21 |
//                     });
//                 22 |
//                     23 | test('All same number', () => {

//                             at Object.toBe(tests - descriptive / tests - prompt2 / 20 _prompt2.test.js: 20: 28)

//                             ● All same number

//                             expect(received).toBe(expected) // Object.is equality

//                             Expected: 8
//                             Received: 0

//                             22 |
//                                 23 | test('All same number', () => { >
//                                     24 | expect(solve([4, 4, 4, 4])).toBe(8); |
//                                     ^
//                                     25 |
//                                 });
//                             26 |
//                                 27 | test('Increasing sequence', () => {

//                                         at Object.toBe(tests - descriptive / tests - prompt2 / 20 _prompt2.test.js: 24: 31)

//                                         ● Increasing sequence

//                                         expect(received).toBe(expected) // Object.is equality

//                                         Expected: 4
//                                         Received: -1

//                                         26 |
//                                             27 | test('Increasing sequence', () => { >
//                                                 28 | expect(solve([1, 2, 4, 8])).toBe(4); |
//                                                 ^
//                                                 29 |
//                                             });
//                                         30 |
//                                             31 | test('Decreasing sequence', () => {

//                                                     at Object.toBe(tests - descriptive / tests - prompt2 / 20 _prompt2.test.js: 28: 31)

//                                                     ● Decreasing sequence

//                                                     expect(received).toBe(expected) // Object.is equality

//                                                     Expected: 8
//                                                     Received: -1

//                                                     30 |
//                                                         31 | test('Decreasing sequence', () => { >
//                                                             32 | expect(solve([8, 4, 2, 1])).toBe(8); |
//                                                             ^
//                                                             33 |
//                                                         });
//                                                     34 |
//                                                         35 | test('Mixed positive and negative', () => {

//                                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 20 _prompt2.test.js: 32: 31)

//                                                                 ● Mixed positive and negative

//                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                 Expected: 1
//                                                                 Received: -1

//                                                                 34 |
//                                                                     35 | test('Mixed positive and negative', () => { >
//                                                                         36 | expect(solve([2, -1, 3])).toBe(1); |
//                                                                         ^
//                                                                         37 |
//                                                                     });
//                                                                 38 |
//                                                                     39 | test('Negative numbers', () => {

//                                                                             at Object.toBe(tests - descriptive / tests - prompt2 / 20 _prompt2.test.js: 36: 29)

//                                                                             ● Negative numbers

//                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                             Expected: 0
//                                                                             Received: -1

//                                                                             38 |
//                                                                                 39 | test('Negative numbers', () => { >
//                                                                                     40 | expect(solve([-3, -2, -1])).toBe(0); |
//                                                                                     ^
//                                                                                     41 |
//                                                                                 });
//                                                                             42 |
//                                                                                 43 | test('Upper bound element', () => {

//                                                                                         at Object.toBe(tests - descriptive / tests - prompt2 / 20 _prompt2.test.js: 40: 31)

//                                                                                         ● Upper bound element

//                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                         Expected: 999999998
//                                                                                         Received: 0

//                                                                                         42 |
//                                                                                             43 | test('Upper bound element', () => { >
//                                                                                                 44 | expect(solve([1000000000, 1000000000, 1000000000])).toBe(999999998); |
//                                                                                                 ^
//                                                                                                 45 |
//                                                                                             });
//                                                                                         46 |
//                                                                                             47 | test('Lower bound element', () => {

//                                                                                                     at Object.toBe(tests - descriptive / tests - prompt2 / 20 _prompt2.test.js: 44: 55)

//                                                                                                     ● Lower bound element

//                                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                                     Expected: 0
//                                                                                                     Received: -1

//                                                                                                     46 |
//                                                                                                         47 | test('Lower bound element', () => { >
//                                                                                                             48 | expect(solve([-1000000000, -1000000000, -1000000000])).toBe(0); |
//                                                                                                             ^
//                                                                                                             49 |
//                                                                                                         });
//                                                                                                     50 |
//                                                                                                         51 | test('Impossible case', () => {

//                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 20 _prompt2.test.js: 48: 58)

//                                                                                                                 ● Edge
//                                                                                                                 case :maximum values

//                                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                                 Expected:
//                                                                                                                     999999900
//                                                                                                                     Received: 0

//                                                                                                                     54 |
//                                                                                                                         55 | test('Edge case: maximum values', () => { >
//                                                                                                                             56 | expect(solve(new Array(100).fill(1000000000))).toBe(999999900); |
//                                                                                                                             ^
//                                                                                                                             57 |
//                                                                                                                         });
//                                                                                                                     58 |
//                                                                                                                         59 | test('Edge case: minimum values', () => {

//                                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 20 _prompt2.test.js: 56: 50)

//                                                                                                                                 ● Edge
//                                                                                                                                 case :minimum values

//                                                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                                                 Expected:
//                                                                                                                                     0
//                                                                                                                                     Received: -1

//                                                                                                                                     58 |
//                                                                                                                                         59 | test('Edge case: minimum values', () => { >
//                                                                                                                                             60 | expect(solve(new Array(100).fill(-1000000000))).toBe(0); |
//                                                                                                                                             ^
//                                                                                                                                             61 |
//                                                                                                                                         });
//                                                                                                                                     62 |
//                                                                                                                                         63 | test('Alternating high and low', () => {

//                                                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 20 _prompt2.test.js: 60: 51)

//                                                                                                                                                 ● Alternating high and low

//                                                                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                 Expected: 0
//                                                                                                                                                 Received: -1

//                                                                                                                                                 62 |
//                                                                                                                                                     63 | test('Alternating high and low', () => { >
//                                                                                                                                                         64 | expect(solve([1000, -1000, 1000, -1000])).toBe(0); |
//                                                                                                                                                         ^
//                                                                                                                                                         65 |
//                                                                                                                                                     });
//                                                                                                                                                 66 |
//                                                                                                                                                     67 | test('Empty array', () => {

//                                                                                                                                                             at Object.toBe(tests - descriptive / tests - prompt2 / 20 _prompt2.test.js: 64: 45)

//                                                                                                                                                             ● All ones

//                                                                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                             Expected: 3
//                                                                                                                                                             Received: 0

//                                                                                                                                                             70 |
//                                                                                                                                                                 71 | test('All ones', () => { >
//                                                                                                                                                                     72 | expect(solve([1, 1, 1, 1, 1])).toBe(3); |
//                                                                                                                                                                     ^
//                                                                                                                                                                     73 |
//                                                                                                                                                                 });
//                                                                                                                                                             74 |
//                                                                                                                                                                 75 | test('All minus ones', () => {

//                                                                                                                                                                         at Object.toBe(tests - descriptive / tests - prompt2 / 20 _prompt2.test.js: 72: 34)

//                                                                                                                                                                         ● All minus ones

//                                                                                                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                                                                                                         Expected: 0
//                                                                                                                                                                         Received: -1

//                                                                                                                                                                         74 |
//                                                                                                                                                                             75 | test('All minus ones', () => { >
//                                                                                                                                                                                 76 | expect(solve([-1, -1, -1, -1, -1])).toBe(0); |
//                                                                                                                                                                                 ^
//                                                                                                                                                                                 77 |
//                                                                                                                                                                             });

//                                                                                                                                                                         at Object.toBe(tests - descriptive / tests - prompt2 / 20 _prompt2.test.js: 76: 39)