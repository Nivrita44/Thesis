// @ts-nocheck
import { solve } from '../../solutions-descriptive/15.js';

test('Typical case with current in middle and varied selections', () => {
    expect(solve(10, 5, 4, [2, 8, 5, 9])).toBe('1 1 10 10');
});

test('All selections to the left', () => {
    expect(solve(6, 3, 3, [1, 2, 1])).toBe('1 1 6');
});

test('All selections to the right', () => {
    expect(solve(7, 4, 3, [6, 7, 6])).toBe('1 1 7');
});

test('Always select the current position', () => {
    expect(solve(5, 3, 3, [3, 3, 3])).toBe('5 5 5');
});

test('No selections at boundary', () => {
    expect(solve(5, 3, 2, [2, 4])).toBe('1 1');
});

test('Single element array', () => {
    expect(solve(1, 1, 1, [1])).toBe('1');
});

test('Large array, single selection, left edge', () => {
    expect(solve(1000, 500, 1, [1])).toBe('1');
});

test('Large array, single selection, right edge', () => {
    expect(solve(1000, 500, 1, [1000])).toBe('1');
});

test('Edge case: select both edges sequentially', () => {
    expect(solve(4, 2, 2, [1, 4])).toBe('1 1');
});

test('Select all points around initial point then to boundary', () => {
    expect(solve(5, 3, 5, [2, 4, 1, 5, 3])).toBe('1 1 5 5 5');
});

test('Minimum values', () => {
    expect(solve(1, 1, 1, [1])).toBe('1');
});

test('Maximum visible before skipping middle', () => {
    expect(solve(7, 4, 2, [2, 6])).toBe('1 1');
});

test('Middle is not selected until last', () => {
    expect(solve(3, 2, 3, [1, 3, 2])).toBe('1 1 3');
});

test('Selection oscillates but never on middle', () => {
    expect(solve(5, 3, 4, [2, 4, 2, 4])).toBe('1 1 1 1');
});

test('Long sequence, always on center', () => {
    expect(solve(10, 5, 7, [5, 5, 5, 5, 5, 5, 5])).toBe('10 10 10 10 10 10 10');
});

// FAIL tests - descriptive / tests - prompt2 / 15 _prompt2.test.js× Typical
// case with current in middle and varied selections(6 ms)× All selections to the left(1 ms)× All selections to the right(1 ms)× Always select the current position(1 ms)× No selections at boundary(1 ms)√ Single element array(1 ms)× Large array, single selection, left edge(1 ms)× Large array, single selection, right edge× Edge
// case :select both edges sequentially× Select all points around initial point then to boundary(1 ms)√ Minimum values× Maximum visible before skipping middle× Middle is not selected until last× Selection oscillates but never on middle(1 ms)× Long sequence, always on center

// ● Typical
// case with current in middle and varied selections

// expect(received).toBe(expected) // Object.is equality

// Expected:
//     "1 1 10 10"
//     Received: "2 3 5 8"

//     2 |
//         3 | test('Typical case with current in middle and varied selections', () => { >
//             4 | expect(solve(10, 5, 4, [2, 8, 5, 9])).toBe('1 1 10 10'); |
//             ^
//             5 |
//         });
//     6 |
//         7 | test('All selections to the left', () => {

//                 at Object.toBe(tests - descriptive / tests - prompt2 / 15 _prompt2.test.js: 4: 41)

//                 ● All selections to the left

//                 expect(received).toBe(expected) // Object.is equality

//                 Expected: "1 1 6"
//                 Received: "2 4 5"

//                 6 |
//                     7 | test('All selections to the left', () => { >
//                         8 | expect(solve(6, 3, 3, [1, 2, 1])).toBe('1 1 6'); |
//                         ^
//                         9 |
//                     });
//                 10 |
//                     11 | test('All selections to the right', () => {

//                             at Object.toBe(tests - descriptive / tests - prompt2 / 15 _prompt2.test.js: 8: 37)

//                             ● All selections to the right

//                             expect(received).toBe(expected) // Object.is equality

//                             Expected: "1 1 7"
//                             Received: "2 3 5"

//                             10 |
//                                 11 | test('All selections to the right', () => { >
//                                     12 | expect(solve(7, 4, 3, [6, 7, 6])).toBe('1 1 7'); |
//                                     ^
//                                     13 |
//                                 });
//                             14 |
//                                 15 | test('Always select the current position', () => {

//                                         at Object.toBe(tests - descriptive / tests - prompt2 / 15 _prompt2.test.js: 12: 37)

//                                         ● Always select the current position

//                                         expect(received).toBe(expected) // Object.is equality

//                                         Expected: "5 5 5"
//                                         Received: "2 4 5"

//                                         14 |
//                                             15 | test('Always select the current position', () => { >
//                                                 16 | expect(solve(5, 3, 3, [3, 3, 3])).toBe('5 5 5'); |
//                                                 ^
//                                                 17 |
//                                             });
//                                         18 |
//                                             19 | test('No selections at boundary', () => {

//                                                     at Object.toBe(tests - descriptive / tests - prompt2 / 15 _prompt2.test.js: 16: 37)

//                                                     ● No selections at boundary

//                                                     expect(received).toBe(expected) // Object.is equality

//                                                     Expected: "1 1"
//                                                     Received: "2 3"

//                                                     18 |
//                                                         19 | test('No selections at boundary', () => { >
//                                                             20 | expect(solve(5, 3, 2, [2, 4])).toBe('1 1'); |
//                                                             ^
//                                                             21 |
//                                                         });
//                                                     22 |
//                                                         23 | test('Single element array', () => {

//                                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 15 _prompt2.test.js: 20: 34)

//                                                                 ● Large array, single selection, left edge

//                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                 Expected: "1"
//                                                                 Received: "2"

//                                                                 26 |
//                                                                     27 | test('Large array, single selection, left edge', () => { >
//                                                                         28 | expect(solve(1000, 500, 1, [1])).toBe('1'); |
//                                                                         ^
//                                                                         29 |
//                                                                     });
//                                                                 30 |
//                                                                     31 | test('Large array, single selection, right edge', () => {

//                                                                             at Object.toBe(tests - descriptive / tests - prompt2 / 15 _prompt2.test.js: 28: 36)

//                                                                             ● Large array, single selection, right edge

//                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                             Expected: "1"
//                                                                             Received: "2"

//                                                                             30 |
//                                                                                 31 | test('Large array, single selection, right edge', () => { >
//                                                                                     32 | expect(solve(1000, 500, 1, [1000])).toBe('1'); |
//                                                                                     ^
//                                                                                     33 |
//                                                                                 });
//                                                                             34 |
//                                                                                 35 | test('Edge case: select both edges sequentially', () => {

//                                                                                         at Object.toBe(tests - descriptive / tests - prompt2 / 15 _prompt2.test.js: 32: 39)

//                                                                                         ● Edge
//                                                                                         case :select both edges sequentially

//                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                         Expected:
//                                                                                             "1 1"
//                                                                                             Received: "2 3"

//                                                                                             34 |
//                                                                                                 35 | test('Edge case: select both edges sequentially', () => { >
//                                                                                                     36 | expect(solve(4, 2, 2, [1, 4])).toBe('1 1'); |
//                                                                                                     ^
//                                                                                                     37 |
//                                                                                                 });
//                                                                                             38 |
//                                                                                                 39 | test('Select all points around initial point then to boundary', () => {

//                                                                                                         at Object.toBe(tests - descriptive / tests - prompt2 / 15 _prompt2.test.js: 36: 34)

//                                                                                                         ● Select all points around initial point then to boundary

//                                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                                         Expected: "1 1 5 5 5"
//                                                                                                         Received: "2 3 4 5 5"

//                                                                                                         38 |
//                                                                                                             39 | test('Select all points around initial point then to boundary', () => { >
//                                                                                                                 40 | expect(solve(5, 3, 5, [2, 4, 1, 5, 3])).toBe('1 1 5 5 5'); |
//                                                                                                                 ^
//                                                                                                                 41 |
//                                                                                                             });
//                                                                                                         42 |
//                                                                                                             43 | test('Minimum values', () => {

//                                                                                                                     at Object.toBe(tests - descriptive / tests - prompt2 / 15 _prompt2.test.js: 40: 43)

//                                                                                                                     ● Maximum visible before skipping middle

//                                                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                                                     Expected: "1 1"
//                                                                                                                     Received: "2 3"

//                                                                                                                     46 |
//                                                                                                                         47 | test('Maximum visible before skipping middle', () => { >
//                                                                                                                             48 | expect(solve(7, 4, 2, [2, 6])).toBe('1 1'); |
//                                                                                                                             ^
//                                                                                                                             49 |
//                                                                                                                         });
//                                                                                                                     50 |
//                                                                                                                         51 | test('Middle is not selected until last', () => {

//                                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 15 _prompt2.test.js: 48: 34)

//                                                                                                                                 ● Middle is not selected until last

//                                                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                                                 Expected: "1 1 3"
//                                                                                                                                 Received: "2 3 3"

//                                                                                                                                 50 |
//                                                                                                                                     51 | test('Middle is not selected until last', () => { >
//                                                                                                                                         52 | expect(solve(3, 2, 3, [1, 3, 2])).toBe('1 1 3'); |
//                                                                                                                                         ^
//                                                                                                                                         53 |
//                                                                                                                                     });
//                                                                                                                                 54 |
// 55 | test('Selection oscillates but never on middle', () => {

//             at Object.toBe(tests - descriptive / tests - prompt2 / 15 _prompt2.test.js: 52: 37)

//             ● Selection oscillates but never on middle

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "1 1 1 1"
//             Received: "2 3 5 5"

//             54 |
//                 55 | test('Selection oscillates but never on middle', () => { >
//                     56 | expect(solve(5, 3, 4, [2, 4, 2, 4])).toBe('1 1 1 1'); |
//                     ^
//                     57 |
//                 });
//             58 |
//                 59 | test('Long sequence, always on center', () => {

//                         at Object.toBe(tests - descriptive / tests - prompt2 / 15 _prompt2.test.js: 56: 40)

//                         ● Long sequence, always on center

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: "10 10 10 10 10 10 10"
//                         Received: "2 4 6 8 10 10 10"

//                         58 |
//                             59 | test('Long sequence, always on center', () => { >
//                                 60 | expect(solve(10, 5, 7, [5, 5, 5, 5, 5, 5, 5])).toBe('10 10 10 10 10 10 10'); |
//                                 ^
//                                 61 |
//                             });

//                         at Object.toBe(tests - descriptive / tests - prompt2 / 15 _prompt2.test.js: 60: 44)