// @ts-nocheck
import { solve } from '../../../solutions-algorithm/6.js';

test('test with strictly increasing array', () => {
    expect(solve(5, [1, 2, 3, 4, 5])).toBe(6);
});

test('test with strictly decreasing array', () => {
    expect(solve(5, [5, 4, 3, 2, 1])).toBe(6);
});

test('test with all equal values', () => {
    expect(solve(6, [7, 7, 7, 7, 7, 7])).toBe(0);
});

test('test with mixed values', () => {
    expect(solve(6, [2, 5, 1, 8, 3, 6])).toBe(12);
});

test('test with minimum allowed n', () => {
    expect(solve(4, [1, 10, 2, 9])).toBe(16);
});

test('test with two maximum values at the ends', () => {
    expect(solve(5, [100, 1, 1, 1, 100])).toBe(198);
});

test('test with large values', () => {
    expect(solve(5, [1000000000, 1, 2, 3, 1000000000])).toBe(1999999998);
});

test('test with alternating high and low', () => {
    expect(solve(6, [1, 100, 1, 100, 1, 100])).toBe(198);
});

test('test with minimum and maximum next to each other', () => {
    expect(solve(5, [1, 100, 1, 100, 1])).toBe(99);
});


// FAIL tests - algorithm / tests - prompt1 / 6 _prompt1.test.js√ test with strictly increasing array(2 ms)√ test with strictly decreasing array√ test with all equal values(1 ms)× test with mixed values(4 ms)√ test with minimum allowed n√ test with two maximum values at the ends× test with large values√ test with alternating high and low× test with minimum and maximum next to each other(1 ms)

// ● test with mixed values

// expect(received).toBe(expected) // Object.is equality

// Expected: 12
// Received: 11

// 14 |
//     15 | test('test with mixed values', () => { >
//         16 | expect(solve(6, [2, 5, 1, 8, 3, 6])).toBe(12); |
//         ^
//         17 |
//     });
// 18 |
//     19 | test('test with minimum allowed n', () => {

//             at Object.toBe(tests - algorithm / tests - prompt1 / 6 _prompt1.test.js: 16: 40)

//             ● test with large values

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 1999999998
//             Received: 1999999997

//             26 |
//                 27 | test('test with large values', () => { >
//                     28 | expect(solve(5, [1000000000, 1, 2, 3, 1000000000])).toBe(1999999998); |
//                     ^
//                     29 |
//                 });
//             30 |
//                 31 | test('test with alternating high and low', () => {

//                         at Object.toBe(tests - algorithm / tests - prompt1 / 6 _prompt1.test.js: 28: 55)

//                         ● test with minimum and maximum next to each other

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: 99
//                         Received: 198

//                         34 |
//                             35 | test('test with minimum and maximum next to each other', () => { >
//                                 36 | expect(solve(5, [1, 100, 1, 100, 1])).toBe(99); |
//                                 ^
//                                 37 |
//                             });

//                         at Object.toBe(tests - algorithm / tests - prompt1 / 6 _prompt1.test.js: 36: 41)
