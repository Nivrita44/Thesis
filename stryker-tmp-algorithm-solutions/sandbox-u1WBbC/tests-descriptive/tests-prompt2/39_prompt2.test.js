// @ts-nocheck
import { solve } from '../../solutions-descriptive/39.js';

test('all elements are non-zero and consecutive', () => {
    expect(solve(5, [1, 2, 3, 4, 5])).toBe(6);
});

test('array contains zeros interleaved', () => {
    expect(solve(6, [1, 0, 2, 3, 0, 4])).toBe(5);
});

test('array contains only zeros', () => {
    expect(solve(4, [0, 0, 0, 0])).toBe(1);
});

test('zero at start', () => {
    expect(solve(4, [0, 1, 2, 3])).toBe(4);
});

test('zero at end', () => {
    expect(solve(5, [3, 2, 1, 5, 0])).toBe(5);
});

test('array with negative numbers', () => {
    expect(solve(5, [-1, 0, 2, 3, -2])).toBe(5);
});

test('array with no zero', () => {
    expect(solve(3, [4, 5, 6])).toBe(4);
});

test('array with one element 0', () => {
    expect(solve(1, [0])).toBe(1);
});

test('array with one element non-zero', () => {
    expect(solve(1, [7])).toBe(2);
});

test('random array with multiple zeros', () => {
    expect(solve(5, [0, 2, 0, 3, 0])).toBe(3);
});

test('array with all the same non-zero number', () => {
    expect(solve(4, [2, 2, 2, 2])).toBe(5);
});

test('empty array', () => {
    expect(solve(0, [])).toBe(1);
});

test('array with sequential numbers starting from 0', () => {
    expect(solve(6, [0, 1, 2, 3, 4, 5])).toBe(6);
});

test('array with large numbers only', () => {
    expect(solve(3, [100, 200, 300])).toBe(4);
});

test('array with mixed zeros and negatives', () => {
    expect(solve(5, [-3, 0, -2, 0, -1])).toBe(3);
});

// FAIL tests - descriptive / tests - prompt2 / 39 _prompt2.test.js× all elements are non - zero and consecutive(4 ms)√ array contains zeros interleaved√ array contains only zeros(1 ms)√ zero at start√ zero at end× array with negative numbers(1 ms)× array with no zero(1 ms)√ array with one element 0(1 ms)× array with one element non - zero(1 ms)√ random array with multiple zeros× array with all the same non - zero number× empty array√ array with sequential numbers starting from 0× array with large numbers only√ array with mixed zeros and negatives

// ● all elements are non - zero and consecutive

// expect(received).toBe(expected) // Object.is equality

// Expected: 6
// Received: 5

// 2 |
//     3 | test('all elements are non-zero and consecutive', () => { >
//         4 | expect(solve(5, [1, 2, 3, 4, 5])).toBe(6); |
//         ^
//         5 |
//     });
// 6 |
//     7 | test('array contains zeros interleaved', () => {

//             at Object.toBe(tests - descriptive / tests - prompt2 / 39 _prompt2.test.js: 4: 37)

//             ● array with negative numbers

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 5
//             Received: 4

//             22 |
//                 23 | test('array with negative numbers', () => { >
//                     24 | expect(solve(5, [-1, 0, 2, 3, -2])).toBe(5); |
//                     ^
//                     25 |
//                 });
//             26 |
//                 27 | test('array with no zero', () => {

//                         at Object.toBe(tests - descriptive / tests - prompt2 / 39 _prompt2.test.js: 24: 39)

//                         ● array with no zero

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: 4
//                         Received: 3

//                         26 |
//                             27 | test('array with no zero', () => { >
//                                 28 | expect(solve(3, [4, 5, 6])).toBe(4); |
//                                 ^
//                                 29 |
//                             });
//                         30 |
//                             31 | test('array with one element 0', () => {

//                                     at Object.toBe(tests - descriptive / tests - prompt2 / 39 _prompt2.test.js: 28: 31)

//                                     ● array with one element non - zero

//                                     expect(received).toBe(expected) // Object.is equality

//                                     Expected: 2
//                                     Received: 1

//                                     34 |
//                                         35 | test('array with one element non-zero', () => { >
//                                             36 | expect(solve(1, [7])).toBe(2); |
//                                             ^
//                                             37 |
//                                         });
//                                     38 |
//                                         39 | test('random array with multiple zeros', () => {

//                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 39 _prompt2.test.js: 36: 25)

//                                                 ● array with all the same non - zero number

//                                                 expect(received).toBe(expected) // Object.is equality

//                                                 Expected: 5
//                                                 Received: 4

//                                                 42 |
//                                                     43 | test('array with all the same non-zero number', () => { >
//                                                         44 | expect(solve(4, [2, 2, 2, 2])).toBe(5); |
//                                                         ^
//                                                         45 |
//                                                     });
//                                                 46 |
//                                                     47 | test('empty array', () => {

//                                                             at Object.toBe(tests - descriptive / tests - prompt2 / 39 _prompt2.test.js: 44: 34)

//                                                             ● empty array

//                                                             expect(received).toBe(expected) // Object.is equality

//                                                             Expected: 1
//                                                             Received: 0

//                                                             46 |
//                                                                 47 | test('empty array', () => { >
//                                                                     48 | expect(solve(0, [])).toBe(1); |
//                                                                     ^
//                                                                     49 |
//                                                                 });
//                                                             50 |
//                                                                 51 | test('array with sequential numbers starting from 0', () => {

//                                                                         at Object.toBe(tests - descriptive / tests - prompt2 / 39 _prompt2.test.js: 48: 24)

//                                                                         ● array with large numbers only

//                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                         Expected: 4
//                                                                         Received: 3

//                                                                         54 |
//                                                                             55 | test('array with large numbers only', () => { >
//                                                                                 56 | expect(solve(3, [100, 200, 300])).toBe(4); |
//                                                                                 ^
//                                                                                 57 |
//                                                                             });
//                                                                         58 |
//                                                                             59 | test('array with mixed zeros and negatives', () => {

//                                                                                     at Object.toBe(tests - descriptive / tests - prompt2 / 39 _prompt2.test.js: 56: 37)