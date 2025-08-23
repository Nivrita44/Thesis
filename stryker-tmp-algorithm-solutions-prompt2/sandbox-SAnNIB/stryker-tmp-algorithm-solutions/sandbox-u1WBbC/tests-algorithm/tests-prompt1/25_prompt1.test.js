// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/25.js';

test('Example 1: n=2 [1,1]', () => {
    expect(
        solve([{ n: 2, arr: [1, 1] }])
    ).toEqual([1]);
});

test('Example 2: n=2 [2,2]', () => {
    expect(
        solve([{ n: 2, arr: [2, 2] }])
    ).toEqual([1]);
});

test('Example 3: n=3 [1,2,2]', () => {
    expect(
        solve([{ n: 3, arr: [1, 2, 2] }])
    ).toEqual([-1]);
});

test('n=4, [2,2,2,2]', () => {
    expect(
        solve([{ n: 4, arr: [2, 2, 2, 2] }])
    ).toEqual([2]);
});

test('n=4, [1,2,1,2]', () => {
    expect(
        solve([{ n: 4, arr: [1, 2, 1, 2] }])
    ).toEqual([2]);
});

test('n=5, [1,1,2,2,2]', () => {
    expect(
        solve([{ n: 5, arr: [1, 1, 2, 2, 2] }])
    ).toEqual([-1]);
});

test('n=5, [2,1,1,2,2]', () => {
    expect(
        solve([{ n: 5, arr: [2, 1, 1, 2, 2] }])
    ).toEqual([-1]);
});

test('n=6, [2,2,2,1,1,2]', () => {
    expect(
        solve([{ n: 6, arr: [2, 2, 2, 1, 1, 2] }])
    ).toEqual([3]);
});

test('n=3, [2,1,2]', () => {
    expect(
        solve([{ n: 3, arr: [2, 1, 2] }])
    ).toEqual([1]);
});

test('n=3, [1,2,1]', () => {
    expect(
        solve([{ n: 3, arr: [1, 2, 1] }])
    ).toEqual([-1]);
});

test('All 1s: n=10, [1,...]', () => {
    expect(
        solve([{ n: 10, arr: Array(10).fill(1) }])
    ).toEqual([1]);
});

test('All 2s: n=6, [2,2,2,2,2,2]', () => {
    expect(
        solve([{ n: 6, arr: Array(6).fill(2) }])
    ).toEqual([3]);
});

test('Alternating 1 and 2', () => {
    expect(
        solve([{ n: 4, arr: [1, 2, 1, 2] }])
    ).toEqual([2]);
});

test('No valid k', () => {
    expect(
        solve([{ n: 4, arr: [1, 1, 1, 2] }])
    ).toEqual([-1]);
});

test('Largest case for all 1s n=1000', () => {
    expect(
        solve([{ n: 1000, arr: Array(1000).fill(1) }])
    ).toEqual([1]);
});

test('Largest case for all 2s n=1000', () => {
    expect(
        solve([{ n: 1000, arr: Array(1000).fill(2) }])
    ).toEqual([500]);
});

test('Edge n=2 [1,2]', () => {
    expect(
        solve([{ n: 2, arr: [1, 2] }])
    ).toEqual([-1]);
});


// FAIL tests - algorithm / tests - prompt1 / 25 _prompt1.test.js× Example 1: n = 2[1, 1](6 ms)√ Example 2: n = 2[2, 2]× Example 3: n = 3[1, 2, 2]√ n = 4, [2, 2, 2, 2](1 ms)√ n = 4, [1, 2, 1, 2]√ n = 5, [1, 1, 2, 2, 2]√ n = 5, [2, 1, 1, 2, 2]× n = 6, [2, 2, 2, 1, 1, 2](1 ms)√ n = 3, [2, 1, 2](1 ms)√ n = 3, [1, 2, 1]× All 1 s: n = 10, [1, ...]√ All 2 s: n = 6, [2, 2, 2, 2, 2, 2]√ Alternating 1 and 2√ No valid k× Largest
// case for all 1 s n = 1000(1 ms)√ Largest
// case for all 2 s n = 1000(1 ms)√ Edge n = 2[1, 2]

// ● Example 1:
//     n = 2[1, 1]

//     expect(received).toEqual(expected) // deep equality

//     -
//     Expected - 1 +
//         Received + 1

//     Array[-1, + -1, ]

//     4 | expect(
//         5 | solve([{ n: 2, arr: [1, 1] }]) >
//         6 | ).toEqual([1]); |
//     ^
//     7 |
// });
//     8 |
//         9 | test('Example 2: n=2 [2,2]', () => {

//             at Object.toEqual(tests - algorithm / tests - prompt1 / 25 _prompt1.test.js: 6: 7)

//             ● Example 3: n = 3[1, 2, 2]

//             expect(received).toEqual(expected) // deep equality

//             -
//             Expected - 1 +
//                 Received + 1

//             Array[- -1, +2, ]

//             16 | expect(
//                 17 | solve([{ n: 3, arr: [1, 2, 2] }]) >
//                 18 | ).toEqual([-1]); |
//             ^
//             19 |
//         });
//     20 |
//         21 | test('n=4, [2,2,2,2]', () => {

//             at Object.toEqual(tests - algorithm / tests - prompt1 / 25 _prompt1.test.js: 18: 7)

//             ● n = 6, [2, 2, 2, 1, 1, 2]

//             expect(received).toEqual(expected) // deep equality

//             -
//             Expected - 1 +
//                 Received + 1

//             Array[-3, +2, ]

//             46 | expect(
//                 47 | solve([{ n: 6, arr: [2, 2, 2, 1, 1, 2] }]) >
//                 48 | ).toEqual([3]); |
//             ^
//             49 |
//         });
//     50 |
//         51 | test('n=3, [2,1,2]', () => {

//             at Object.toEqual(tests - algorithm / tests - prompt1 / 25 _prompt1.test.js: 48: 7)

//             ● All 1 s: n = 10, [1, ...]

//             expect(received).toEqual(expected) // deep equality

//             -
//             Expected - 1 +
//                 Received + 1

//             Array[-1, + -1, ]

//             64 | expect(
//                 65 | solve([{ n: 10, arr: Array(10).fill(1) }]) >
//                 66 | ).toEqual([1]); |
//             ^
//             67 |
//         });
//     68 |
//         69 | test('All 2s: n=6, [2,2,2,2,2,2]', () => {

//             at Object.toEqual(tests - algorithm / tests - prompt1 / 25 _prompt1.test.js: 66: 7)

//             ● Largest
//             case for all 1 s n = 1000

//             expect(received).toEqual(expected) // deep equality

//             -
//             Expected - 1 +
//             Received + 1

//             Array[-1, + -1, ]

//             88 | expect(
//                 89 | solve([{ n: 1000, arr: Array(1000).fill(1) }]) >
//                 90 | ).toEqual([1]); |
//             ^
//             91 |
//         });
//     92 |
//         93 | test('Largest case for all 2s n=1000', () => {
