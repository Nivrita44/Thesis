// @ts-nocheck
import { solve } from '../../solutions-descriptive/43.js';

test('single node', () => {
    expect(solve(1, 10, [5], [])).toBe(5);
});

test('two nodes, no cost penalty', () => {
    expect(solve(2, 0, [5, 7], [
        [1, 2]
    ])).toBe(12);
});

test('two nodes, high cost penalty', () => {
    expect(solve(2, 10, [5, 7], [
        [1, 2]
    ])).toBe(7);
});

test('three node line, zero cost', () => {
    expect(solve(3, 0, [3, 2, 1], [
        [1, 2],
        [2, 3]
    ])).toBe(6);
});

test('three node line, some cost', () => {
    expect(solve(3, 2, [3, 2, 1], [
        [1, 2],
        [2, 3]
    ])).toBe(5);
});

test('three node star, central penalty', () => {
    expect(solve(3, 1, [10, 2, 2], [
        [1, 2],
        [1, 3]
    ])).toBe(12);
});

test('three node star, higher cost', () => {
    expect(solve(3, 5, [10, 2, 2], [
        [1, 2],
        [1, 3]
    ])).toBe(10);
});

test('all negative values', () => {
    expect(solve(3, 2, [-1, -2, -3], [
        [1, 2],
        [2, 3]
    ])).toBe(0);
});

test('mix of negative and positive', () => {
    expect(solve(4, 1, [7, -2, 5, -3], [
        [1, 2],
        [2, 3],
        [3, 4]
    ])).toBe(10);
});

test('big linear tree', () => {
    expect(solve(5, 1, [1, 2, 3, 4, 5], [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5]
    ])).toBe(11);
});

test('small binary tree', () => {
    expect(solve(3, 2, [4, 5, 6], [
        [1, 2],
        [1, 3]
    ])).toBe(10);
});

test('selecting none yields higher (all negatives)', () => {
    expect(solve(4, 3, [-1, -2, -3, -4], [
        [1, 2],
        [2, 3],
        [3, 4]
    ])).toBe(0);
});

test('complex tree', () => {
    expect(solve(
        7, 2, [9, 7, 5, 3, 10, 12, 8], [
            [1, 2],
            [1, 3],
            [2, 4],
            [2, 5],
            [3, 6],
            [3, 7]
        ]
    )).toBe(41);
});

test('zero cost, large balanced tree', () => {
    expect(solve(
        7, 0, [3, 2, 1, 5, 4, 6, 7], [
            [1, 2],
            [1, 3],
            [2, 4],
            [2, 5],
            [3, 6],
            [3, 7]
        ]
    )).toBe(28);
});


// FAIL tests - descriptive / tests - prompt2 / 43 _prompt2.test.js√ single node(2 ms)√ two nodes, no cost penalty√ two nodes, high cost penalty√ three node line, zero cost× three node line, some cost(2 ms)× three node star, central penalty(1 ms)√ three node star, higher cost√ all negative values× mix of negative and positive(1 ms)× big linear tree(1 ms)× small binary tree(1 ms)√ selecting none yields higher(all negatives)(1 ms)× complex tree√ zero cost, large balanced tree

// ● three node line, some cost

// expect(received).toBe(expected) // Object.is equality

// Expected: 5
// Received: 4

// 18 |
//     19 | test('three node line, some cost', () => { >
//         20 | expect(solve(3, 2, [3, 2, 1], [
//             [1, 2],
//             [2, 3]
//         ])).toBe(5); |
//         ^
//         21 |
//     });
// 22 |
//     23 | test('three node star, central penalty', () => {

//             at Object.toBe(tests - descriptive / tests - prompt2 / 43 _prompt2.test.js: 20: 49)

//             ● three node star, central penalty

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 12
//             Received: 10

//             22 |
//                 23 | test('three node star, central penalty', () => { >
//                     24 | expect(solve(3, 1, [10, 2, 2], [
//                         [1, 2],
//                         [1, 3]
//                     ])).toBe(12); |
//                     ^
//                     25 |
//                 });
//             26 |
//                 27 | test('three node star, higher cost', () => {

//                         at Object.toBe(tests - descriptive / tests - prompt2 / 43 _prompt2.test.js: 24: 50)

//                         ● mix of negative and positive

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: 10
//                         Received: 12

//                         34 |
//                             35 | test('mix of negative and positive', () => { >
//                                 36 | expect(solve(4, 1, [7, -2, 5, -3], [
//                                     [1, 2],
//                                     [2, 3],
//                                     [3, 4]
//                                 ])).toBe(10); |
//                                 ^
//                                 37 |
//                             });
//                         38 |
//                             39 | test('big linear tree', () => {

//                                     at Object.toBe(tests - descriptive / tests - prompt2 / 43 _prompt2.test.js: 36: 60)

//                                     ● big linear tree

//                                     expect(received).toBe(expected) // Object.is equality

//                                     Expected: 11
//                                     Received: 9

//                                     38 |
//                                         39 | test('big linear tree', () => { >
//                                             40 | expect(solve(5, 1, [1, 2, 3, 4, 5], [
//                                                 [1, 2],
//                                                 [2, 3],
//                                                 [3, 4],
//                                                 [4, 5]
//                                             ])).toBe(11); |
//                                             ^
//                                             41 |
//                                         });
//                                     42 |
//                                         43 | test('small binary tree', () => {

//                                             at Object.toBe(tests - descriptive / tests - prompt2 / 43 _prompt2.test.js: 40: 67)

//                                             ● small binary tree

//                                             expect(received).toBe(expected) // Object.is equality

//                                             Expected: 10
//                                             Received: 11

//                                             42 |
//                                                 43 | test('small binary tree', () => { >
//                                                     44 | expect(solve(3, 2, [4, 5, 6], [
//                                                         [1, 2],
//                                                         [1, 3]
//                                                     ])).toBe(10); |
//                                                     ^
//                                                     45 |
//                                                 });
//                                             46 |
//                                                 47 | test('selecting none yields higher (all negatives)', () => {

//                                                     at Object.toBe(tests - descriptive / tests - prompt2 / 43 _prompt2.test.js: 44: 49)

//                                                     ● complex tree

//                                                     expect(received).toBe(expected) // Object.is equality

//                                                     Expected: 41
//                                                     Received: 42

//                                                     54 | [9, 7, 5, 3, 10, 12, 8],
//                                                         55 | [
//                                                             [1, 2],
//                                                             [1, 3],
//                                                             [2, 4],
//                                                             [2, 5],
//                                                             [3, 6],
//                                                             [3, 7]
//                                                         ] >
//                                                         56 | )).toBe(41); |
//                                             ^
//                                             57 |
//                                         });
//                                     58 |
//                                         59 | test('zero cost, large balanced tree', () => {

//                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 43 _prompt2.test.js: 56: 6)