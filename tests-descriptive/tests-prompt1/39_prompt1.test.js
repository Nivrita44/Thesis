import { solve } from '../../solutions-descriptive/39.js';

test('single element', () => {
    expect(solve(1, [3])).toBe(1);
});

test('all different consecutive numbers', () => {
    expect(solve(4, [0, 1, 2, 3])).toBe(4);
});

test('all zeroes', () => {
    expect(solve(4, [0, 0, 0, 0])).toBe(4);
});

test('strictly decreasing', () => {
    expect(solve(5, [10, 8, 6, 4, 2])).toBe(5);
});

test('works with missing numbers', () => {
    expect(solve(6, [0, 2, 3, 7, 5, 1])).toBe(6);
});

test('all same numbers', () => {
    expect(solve(5, [1, 1, 1, 1, 1])).toBe(5);
});

test('alternating numbers', () => {
    expect(solve(7, [1, 0, 1, 0, 1, 0, 1])).toBe(7);
});

test('large values', () => {
    expect(solve(3, [1000000000, 999999999, 500000000])).toBe(3);
});

test('only zero and one', () => {
    expect(solve(6, [1, 0, 1, 1, 0, 1])).toBe(6);
});

test('contains all from 0 to n-1 shuffled', () => {
    expect(solve(5, [3, 0, 4, 2, 1])).toBe(5);
});

test('cannot use all', () => {
    expect(solve(6, [2, 2, 2, 2, 0, 0])).toBe(6);
});

test('maximize with gaps', () => {
    expect(solve(8, [2, 3, 1, 5, 0, 6, 4, 7])).toBe(8);
});

// FAIL tests - descriptive / tests - prompt1 / 39 _prompt1.test.js√ single element(2 ms)√ all different consecutive numbers× all zeroes(4 ms)√ strictly decreasing√ works with missing numbers√ all same numbers× alternating numbers(2 ms)√ large values× only zero and one(1 ms)√ contains all from 0 to n - 1 shuffled× cannot use all√ maximize with gaps

// ● all zeroes

// expect(received).toBe(expected) // Object.is equality

// Expected: 4
// Received: 1

// 10 |
//     11 | test('all zeroes', () => { >
//         12 | expect(solve(4, [0, 0, 0, 0])).toBe(4); |
//         ^
//         13 |
//     });
// 14 |
//     15 | test('strictly decreasing', () => {

//             at Object.toBe(tests - descriptive / tests - prompt1 / 39 _prompt1.test.js: 12: 34)

//             ● alternating numbers

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 7
//             Received: 4

//             26 |
//                 27 | test('alternating numbers', () => { >
//                     28 | expect(solve(7, [1, 0, 1, 0, 1, 0, 1])).toBe(7); |
//                     ^
//                     29 |
//                 });
//             30 |
//                 31 | test('large values', () => {

//                         at Object.toBe(tests - descriptive / tests - prompt1 / 39 _prompt1.test.js: 28: 37)

//                         ● only zero and one

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: 6
//                         Received: 4

//                         34 |
//                             35 | test('only zero and one', () => { >
//                                 36 | expect(solve(6, [1, 0, 1, 1, 0, 1])).toBe(6); |
//                                 ^
//                                 37 |
//                             });
//                         38 |
//                             39 | test('contains all from 0 to n-1 shuffled', () => {

//                                     at Object.toBe(tests - descriptive / tests - prompt1 / 39 _prompt1.test.js: 36: 35)

//                                     ● cannot use all

//                                     expect(received).toBe(expected) // Object.is equality

//                                     Expected: 6
//                                     Received: 5

//                                     42 |
//                                         43 | test('cannot use all', () => { >
//                                             44 | expect(solve(6, [2, 2, 2, 2, 0, 0])).toBe(6); |
//                                             ^
//                                             45 |
//                                         });
//                                     46 |
//                                         47 | test('maximize with gaps', () => {

//                                                 at Object.toBe(tests - descriptive / tests - prompt1 / 39 _prompt1.test.js: 44: 35)