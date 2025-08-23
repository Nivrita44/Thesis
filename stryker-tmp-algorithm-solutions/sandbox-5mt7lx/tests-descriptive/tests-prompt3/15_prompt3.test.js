// @ts-nocheck
import { solve } from '../../solutions-descriptive/15.js';

test('basic example with middle untouched', () => {
    expect(
        solve(5, 3, 3, [1, 5, 2])
    ).toBe('3 3 3');
});

test('move joker itself as first operation', () => {
    expect(
        solve(5, 2, 3, [2, 3, 4])
    ).toBe('5 5 5');
});

test('move positions before and after joker', () => {
    expect(
        solve(7, 4, 4, [2, 6, 1, 7])
    ).toBe('4 4 4 5');
});

test('minimal size deck', () => {
    expect(
        solve(2, 1, 2, [2, 1])
    ).toBe('2 2');
});

test('move all different positions without hitting joker', () => {
    expect(
        solve(6, 3, 3, [1, 2, 6])
    ).toBe('3 3 3');
});

test('all operations pick the joker', () => {
    expect(
        solve(8, 5, 3, [5, 5, 5])
    ).toBe('8 8 8');
});

test('large n, move not touching joker', () => {
    expect(
        solve(1000000000, 100, 2, [1, 1000000000])
    ).toBe('1 1');
});

test('move ranges left then right of the joker', () => {
    expect(
        solve(10, 5, 6, [1, 2, 3, 7, 8, 10])
    ).toBe('5 5 5 5 5 6');
});

test('move covers joker range exactly', () => {
    expect(
        solve(5, 3, 3, [2, 3, 4])
    ).toBe('3 5 5');
});

test('move ascending then descending position', () => {
    expect(
        solve(6, 4, 4, [1, 2, 5, 4])
    ).toBe('4 4 4 6');
});

test('edge case: pick lowest and highest positions repeatedly', () => {
    expect(
        solve(5, 3, 4, [1, 5, 1, 5])
    ).toBe('3 3 3 4');
});

test('joker at bottom', () => {
    expect(
        solve(10, 10, 3, [2, 7, 10])
    ).toBe('1 1 10');
});

test('joker at top', () => {
    expect(
        solve(10, 1, 3, [8, 1, 2])
    ).toBe('1 10 10');
});

// FAIL tests - descriptive / tests - prompt3 / 15 _prompt3.test.js× basic example with middle untouched(5 ms)× move joker itself as first operation(1 ms)× move positions before and after joker√ minimal size deck× move all different positions without hitting joker(1 ms)× all operations pick the joker(1 ms)× large n, move not touching joker(1 ms)× move ranges left then right of the joker(1 ms)× move covers joker range exactly(1 ms)× move ascending then descending position(1 ms)× edge
// case :pick lowest and highest positions repeatedly(3 ms)× joker at bottom(1 ms)× joker at top(1 ms)

// ● basic example with middle untouched

// expect(received).toBe(expected) // Object.is equality

// Expected:
//     "3 3 3"
//     Received: "2 3 5"

//     4 | expect(
//         5 | solve(5, 3, 3, [1, 5, 2]) >
//         6 | ).toBe('3 3 3'); |
//     ^
//     7 |
// });
//     8 |
//         9 | test('move joker itself as first operation', () => {

//             at Object.toBe(tests - descriptive / tests - prompt3 / 15 _prompt3.test.js: 6: 5)

//             ● move joker itself as first operation

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "5 5 5"
//             Received: "2 4 5"

//             10 | expect(
//                 11 | solve(5, 2, 3, [2, 3, 4]) >
//                 12 | ).toBe('5 5 5'); |
//             ^
//             13 |
//         });
//     14 |
//         15 | test('move positions before and after joker', () => {

//             at Object.toBe(tests - descriptive / tests - prompt3 / 15 _prompt3.test.js: 12: 5)

//             ● move positions before and after joker

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "4 4 4 5"
//             Received: "2 3 4 5"

//             16 | expect(
//                 17 | solve(7, 4, 4, [2, 6, 1, 7]) >
//                 18 | ).toBe('4 4 4 5'); |
//             ^
//             19 |
//         });
//     20 |
//         21 | test('minimal size deck', () => {

//             at Object.toBe(tests - descriptive / tests - prompt3 / 15 _prompt3.test.js: 18: 5)

//             ● move all different positions without hitting joker

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "3 3 3"
//             Received: "2 4 5"

//             28 | expect(
//                 29 | solve(6, 3, 3, [1, 2, 6]) >
//                 30 | ).toBe('3 3 3'); |
//             ^
//             31 |
//         });
//     32 |
//         33 | test('all operations pick the joker', () => {

//             at Object.toBe(tests - descriptive / tests - prompt3 / 15 _prompt3.test.js: 30: 5)

//             ● all operations pick the joker

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "8 8 8"
//             Received: "2 4 6"

//             34 | expect(
//                 35 | solve(8, 5, 3, [5, 5, 5]) >
//                 36 | ).toBe('8 8 8'); |
//             ^
//             37 |
//         });
//     38 |
//         39 | test('large n, move not touching joker', () => {

//             at Object.toBe(tests - descriptive / tests - prompt3 / 15 _prompt3.test.js: 36: 5)

//             ● large n, move not touching joker

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "1 1"
//             Received: "2 3"

//             40 | expect(
//                 41 | solve(1000000000, 100, 2, [1, 1000000000]) >
//                 42 | ).toBe('1 1'); |
//             ^
//             43 |
//         });
//     44 |
//         45 | test('move ranges left then right of the joker', () => {

//             at Object.toBe(tests - descriptive / tests - prompt3 / 15 _prompt3.test.js: 42: 5)

//             ● move ranges left then right of the joker

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "5 5 5 5 5 6"
//             Received: "2 3 5 8 10 10"

//             46 | expect(
//                 47 | solve(10, 5, 6, [1, 2, 3, 7, 8, 10]) >
//                 48 | ).toBe('5 5 5 5 5 6'); |
//             ^
//             49 |
//         });
//     50 |
//         51 | test('move covers joker range exactly', () => {

//             at Object.toBe(tests - descriptive / tests - prompt3 / 15 _prompt3.test.js: 48: 5)

//             ● move covers joker range exactly

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "3 5 5"
//             Received: "2 4 5"

//             52 | expect(
//                 53 | solve(5, 3, 3, [2, 3, 4]) >
//                 54 | ).toBe('3 5 5'); |
//             ^
//             55 |
//         });
//     56 |
//         57 | test('move ascending then descending position', () => {

//             at Object.toBe(tests - descriptive / tests - prompt3 / 15 _prompt3.test.js: 54: 5)

//             ● move ascending then descending position

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "4 4 4 6"
//             Received: "2 3 4 6"

//             58 | expect(
//                 59 | solve(6, 4, 4, [1, 2, 5, 4]) >
//                 60 | ).toBe('4 4 4 6'); |
//             ^
//             61 |
//         });
//     62 |
//         63 | test('edge case: pick lowest and highest positions repeatedly', () => {

//             at Object.toBe(tests - descriptive / tests - prompt3 / 15 _prompt3.test.js: 60: 5)

//             ● edge
//             case :pick lowest and highest positions repeatedly

//             expect(received).toBe(expected) // Object.is equality

//             Expected:
//                 "3 3 3 4"
//                 Received: "2 3 4 5"

//                 64 | expect(
//                     65 | solve(5, 3, 4, [1, 5, 1, 5]) >
//                     66 | ).toBe('3 3 3 4'); |
//                 ^
//                 67 |
//         });
//     68 |
//         69 | test('joker at bottom', () => {

//             at Object.toBe(tests - descriptive / tests - prompt3 / 15 _prompt3.test.js: 66: 5)

//             ● joker at bottom

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "1 1 10"
//             Received: "2 3 4"

//             70 | expect(
//                 71 | solve(10, 10, 3, [2, 7, 10]) >
//                 72 | ).toBe('1 1 10'); |
//             ^
//             73 |
//         });
//     74 |
//         75 | test('joker at top', () => {

//             at Object.toBe(tests - descriptive / tests - prompt3 / 15 _prompt3.test.js: 72: 5)

//             ● joker at top

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "1 10 10"
//             Received: "2 3 4"

//             76 | expect(
//                 77 | solve(10, 1, 3, [8, 1, 2]) >
//                 78 | ).toBe('1 10 10'); |
//             ^
//             79 |
//         });

//     at Object.toBe(tests - descriptive / tests - prompt3 / 15 _prompt3.test.js: 78: 5)
