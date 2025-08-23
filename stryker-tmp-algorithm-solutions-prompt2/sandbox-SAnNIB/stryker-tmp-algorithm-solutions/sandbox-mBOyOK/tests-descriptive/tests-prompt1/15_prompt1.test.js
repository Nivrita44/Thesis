// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/15.js';

test('example 1', () => {
    const n = 5;
    const m = 3;
    const q = 3;
    const a = [2, 3, 5];
    expect(solve(n, m, q, a)).toEqual([3, 2, 2]);
});

test('joker at top, move top card', () => {
    const n = 4;
    const m = 1;
    const q = 2;
    const a = [1, 4];
    expect(solve(n, m, q, a)).toEqual([2, 2]);
});

test('joker at bottom, always move bottom', () => {
    const n = 6;
    const m = 6;
    const q = 4;
    const a = [6, 2, 6, 1];
    expect(solve(n, m, q, a)).toEqual([2, 2, 2, 2]);
});

test('joker in the middle, move middle card', () => {
    const n = 7;
    const m = 4;
    const q = 2;
    const a = [4, 4];
    expect(solve(n, m, q, a)).toEqual([3, 3]);
});

test('smallest case', () => {
    const n = 2;
    const m = 2;
    const q = 1;
    const a = [1];
    expect(solve(n, m, q, a)).toEqual([2]);
});

test('joker moves with each query', () => {
    const n = 3;
    const m = 2;
    const q = 3;
    const a = [1, 2, 3];
    expect(solve(n, m, q, a)).toEqual([2, 2, 2]);
});

test('single operation, large n', () => {
    const n = 1000000000;
    const m = 500000000;
    const q = 1;
    const a = [1];
    expect(solve(n, m, q, a)).toEqual([2]);
});

// FAIL tests - descriptive / tests - prompt1 / 15 _prompt1.test.js× example 1(7 ms)× joker at top, move top card(1 ms)× joker at bottom, always move bottom× joker in the middle, move middle card× smallest
// case (1 ms)× joker moves with each query(1 ms)× single operation, large n(1 ms)

// ● example 1

// expect(received).toEqual(expected) // deep equality

// Expected:
//     [3, 2, 2]
//     Received: "2 4 5"

//     6 |
//         const q = 3;
//     7 |
//         const a = [2, 3, 5]; >
//     8 | expect(solve(n, m, q, a)).toEqual([3, 2, 2]); |
//     ^
//     9 |
// });
//     10 |
//         11 | test('joker at top, move top card', () => {

//             at Object.toEqual(tests - descriptive / tests - prompt1 / 15 _prompt1.test.js: 8: 29)

//             ● joker at top, move top card

//             expect(received).toEqual(expected) // deep equality

//             Expected: [2, 2]
//             Received: "2 3"

//             14 |
//                 const q = 2;
//             15 |
//                 const a = [1, 4]; >
//             16 | expect(solve(n, m, q, a)).toEqual([2, 2]); |
//             ^
//             17 |
//         });
//     18 |
//         19 | test('joker at bottom, always move bottom', () => {

//             at Object.toEqual(tests - descriptive / tests - prompt1 / 15 _prompt1.test.js: 16: 29)

//             ● joker at bottom, always move bottom

//             expect(received).toEqual(expected) // deep equality

//             Expected: [2, 2, 2, 2]
//             Received: "2 4 5 6"

//             22 |
//                 const q = 4;
//             23 |
//                 const a = [6, 2, 6, 1]; >
//             24 | expect(solve(n, m, q, a)).toEqual([2, 2, 2, 2]); |
//             ^
//             25 |
//         });
//     26 |
//         27 | test('joker in the middle, move middle card', () => {

//             at Object.toEqual(tests - descriptive / tests - prompt1 / 15 _prompt1.test.js: 24: 29)

//             ● joker in the middle, move middle card

//             expect(received).toEqual(expected) // deep equality

//             Expected: [3, 3]
//             Received: "2 4"

//             30 |
//                 const q = 2;
//             31 |
//                 const a = [4, 4]; >
//             32 | expect(solve(n, m, q, a)).toEqual([3, 3]); |
//             ^
//             33 |
//         });
//     34 |
//         35 | test('smallest case', () => {

//             at Object.toEqual(tests - descriptive / tests - prompt1 / 15 _prompt1.test.js: 32: 29)

//             ● smallest
//             case

//             expect(received).toEqual(expected) // deep equality

//             Expected:
//                 [2]
//                 Received: "2"

//                 38 |
//                     const q = 1;
//                 39 |
//                     const a = [1]; >
//                 40 | expect(solve(n, m, q, a)).toEqual([2]); |
//                 ^
//                 41 |
//         });
//     42 |
//         43 | test('joker moves with each query', () => {

//             at Object.toEqual(tests - descriptive / tests - prompt1 / 15 _prompt1.test.js: 40: 29)

//             ● joker moves with each query

//             expect(received).toEqual(expected) // deep equality

//             Expected: [2, 2, 2]
//             Received: "2 3 3"

//             46 |
//                 const q = 3;
//             47 |
//                 const a = [1, 2, 3]; >
//             48 | expect(solve(n, m, q, a)).toEqual([2, 2, 2]); |
//             ^
//             49 |
//         });
//     50 |
//         51 | test('single operation, large n', () => {

//             at Object.toEqual(tests - descriptive / tests - prompt1 / 15 _prompt1.test.js: 48: 29)

//             ● single operation, large n

//             expect(received).toEqual(expected) // deep equality

//             Expected: [2]
//             Received: "2"

//             54 |
//                 const q = 1;
//             55 |
//                 const a = [1]; >
//             56 | expect(solve(n, m, q, a)).toEqual([2]); |
//             ^
//             57 |
//         });

//     at Object.toEqual(tests - descriptive / tests - prompt1 / 15 _prompt1.test.js: 56: 29)