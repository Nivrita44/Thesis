// @ts-nocheck
import { solve } from '../../solutions-descriptive/43.js';

test('single camp', () => {
    expect(
        solve(1, 100, [50], [])
    ).toBe(50);
});

test('simple chain 2 camps, high c', () => {
    expect(
        solve(2, 100, [10, 20], [
            [1, 2]
        ])
    ).toBe(20);
});

test('simple chain 2 camps, c = 1', () => {
    expect(
        solve(2, 1, [10, 20], [
            [1, 2]
        ])
    ).toBe(20);
});

test('small tree', () => {
    expect(
        solve(3, 5, [1, 10, 100], [
            [1, 2],
            [2, 3]
        ])
    ).toBe(105);
});

test('star with center rich', () => {
    expect(
        solve(5, 2, [5, 1, 1, 1, 1], [
            [1, 2],
            [1, 3],
            [1, 4],
            [1, 5]
        ])
    ).toBe(5);
});

test('star with leaves rich', () => {
    expect(
        solve(5, 2, [1, 5, 5, 5, 5], [
            [1, 2],
            [1, 3],
            [1, 4],
            [1, 5]
        ])
    ).toBe(20);
});

test('star with c exceeding neighbors', () => {
    expect(
        solve(3, 1000, [1, 100, 100], [
            [1, 2],
            [1, 3]
        ])
    ).toBe(200);
});

test('line of camps', () => {
    expect(
        solve(4, 5, [5, 10, 20, 15], [
            [1, 2],
            [2, 3],
            [3, 4]
        ])
    ).toBe(30);
});

test('negative initial gold', () => {
    expect(
        solve(3, 2, [-5, 0, 10], [
            [1, 2],
            [2, 3]
        ])
    ).toBe(10);
});

test('all negative gold', () => {
    expect(
        solve(3, 1, [-10, -5, -8], [
            [1, 2],
            [2, 3]
        ])
    ).toBe(-5);
});

test('two camps both negative', () => {
    expect(
        solve(2, 10, [-1, -4], [
            [1, 2]
        ])
    ).toBe(-1);
});

test('bush with multiple equal best', () => {
    expect(
        solve(4, 10, [40, 10, 10, 10], [
            [1, 2],
            [1, 3],
            [1, 4]
        ])
    ).toBe(40);
});

test('isolated positive outlier', () => {
    expect(
        solve(6, 5, [1, 1, 1, 1, 1, 100], [
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 5],
            [5, 6]
        ])
    ).toBe(100);
});

test('all zeros', () => {
    expect(
        solve(5, 2, [0, 0, 0, 0, 0], [
            [1, 2],
            [1, 3],
            [1, 4],
            [1, 5]
        ])
    ).toBe(0);
});


// FAIL tests - descriptive / tests - prompt1 / 43 _prompt1.test.js√ single camp(2 ms)√ simple chain 2 camps, high c(1 ms)× simple chain 2 camps, c = 1(2 ms)× small tree(1 ms)√ star with center rich(1 ms)√ star with leaves rich(1 ms)√ star with c exceeding neighbors(1 ms)√ line of camps√ negative initial gold(1 ms)× all negative gold(1 ms)× two camps both negative(1 ms)√ bush with multiple equal best× isolated positive outlier√ all zeros

// ● simple chain 2 camps, c = 1

// expect(received).toBe(expected) // Object.is equality

// Expected: 20
// Received: 28

// 16 | expect(
//     17 | solve(2, 1, [10, 20], [
//         [1, 2]
//     ]) >
//     18 | ).toBe(20); |
// ^
// 19 |
// });
// 20 |
//     21 | test('small tree', () => {

//         at Object.toBe(tests - descriptive / tests - prompt1 / 43 _prompt1.test.js: 18: 5)

//         ● small tree

//         expect(received).toBe(expected) // Object.is equality

//         Expected: 105
//         Received: 101

//         22 | expect(
//             23 | solve(3, 5, [1, 10, 100], [
//                 [1, 2],
//                 [2, 3]
//             ]) >
//             24 | ).toBe(105); |
//         ^
//         25 |
//     });
// 26 |
//     27 | test('star with center rich', () => {

//         at Object.toBe(tests - descriptive / tests - prompt1 / 43 _prompt1.test.js: 24: 5)

//         ● all negative gold

//         expect(received).toBe(expected) // Object.is equality

//         Expected: -5
//         Received: 0

//         58 | expect(
//             59 | solve(3, 1, [-10, -5, -8], [
//                 [1, 2],
//                 [2, 3]
//             ]) >
//             60 | ).toBe(-5); |
//         ^
//         61 |
//     });
// 62 |
//     63 | test('two camps both negative', () => {

//         at Object.toBe(tests - descriptive / tests - prompt1 / 43 _prompt1.test.js: 60: 5)

//         ● two camps both negative

//         expect(received).toBe(expected) // Object.is equality

//         Expected: -1
//         Received: 0

//         64 | expect(
//             65 | solve(2, 10, [-1, -4], [
//                 [1, 2]
//             ]) >
//             66 | ).toBe(-1); |
//         ^
//         67 |
//     });
// 68 |
//     69 | test('bush with multiple equal best', () => {

//         at Object.toBe(tests - descriptive / tests - prompt1 / 43 _prompt1.test.js: 66: 5)

//         ● isolated positive outlier

//         expect(received).toBe(expected) // Object.is equality

//         Expected: 100
//         Received: 102

//         76 | expect(
//             77 | solve(6, 5, [1, 1, 1, 1, 1, 100], [
//                 [1, 2],
//                 [2, 3],
//                 [3, 4],
//                 [4, 5],
//                 [5, 6]
//             ]) >
//             78 | ).toBe(100); |
//         ^
//         79 |
//     });
// 80 |
//     81 | test('all zeros', () => {

//             at Object.toBe(tests - descriptive / tests - prompt1 / 43 _prompt1.test.js: 78: 5)