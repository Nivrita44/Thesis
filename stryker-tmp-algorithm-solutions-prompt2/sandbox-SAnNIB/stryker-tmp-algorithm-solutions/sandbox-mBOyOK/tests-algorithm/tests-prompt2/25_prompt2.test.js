// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/25.js';

test('typical cases', () => {
    expect(
        solve([
            { n: 6, arr: [2, 2, 1, 2, 1, 2] },
            { n: 3, arr: [1, 2, 1] },
            { n: 4, arr: [1, 1, 1, 1] }
        ])
    ).toEqual([2, -1, -1]);
});

test('all 2s, even count', () => {
    expect(
        solve([
            { n: 4, arr: [2, 2, 2, 2] }
        ])
    ).toEqual([2]);
});

test('all 2s, odd count', () => {
    expect(
        solve([
            { n: 5, arr: [2, 2, 2, 2, 2] }
        ])
    ).toEqual([-1]);
});

test('minimum possible valid split', () => {
    expect(
        solve([
            { n: 2, arr: [2, 2] }
        ])
    ).toEqual([1]);
});

test('0 twos', () => {
    expect(
        solve([
            { n: 5, arr: [1, 3, 4, 5, 6] }
        ])
    ).toEqual([-1]);
});

test('no 2s with other numbers', () => {
    expect(
        solve([
            { n: 6, arr: [1, 4, 3, 7, 5, 9] }
        ])
    ).toEqual([-1]);
});

test('2 occurs non-consecutively, even count', () => {
    expect(
        solve([
            { n: 7, arr: [3, 2, 1, 2, 5, 2, 2] }
        ])
    ).toEqual([5]);
});

test('split needed at the end', () => {
    expect(
        solve([
            { n: 6, arr: [1, 1, 2, 2, 2, 2] }
        ])
    ).toEqual([5]);
});

test('split needed early', () => {
    expect(
        solve([
            { n: 4, arr: [2, 2, 1, 1] }
        ])
    ).toEqual([2]);
});

test('single element array (2)', () => {
    expect(
        solve([
            { n: 1, arr: [2] }
        ])
    ).toEqual([-1]);
});

test('single element array (not 2)', () => {
    expect(
        solve([
            { n: 1, arr: [1] }
        ])
    ).toEqual([-1]);
});

test('mix of twos and other numbers, odd number of twos', () => {
    expect(
        solve([
            { n: 7, arr: [2, 1, 2, 1, 2, 4, 3] }
        ])
    ).toEqual([-1]);
});


// FAIL tests - algorithm / tests - prompt2 / 25 _prompt2.test.js√ typical cases(4 ms)√ all 2 s, even count(1 ms)√ all 2 s, odd count(1 ms)√ minimum possible valid split√ 0 twos√ no 2 s with other numbers× 2 occurs non - consecutively, even count(3 ms)× split needed at the end(1 ms)× split needed early(1 ms)√ single element array(2)(1 ms)√ single element array(not 2)(1 ms)√ mix of twos and other numbers, odd number of twos

// ● 2 occurs non - consecutively, even count

// expect(received).toEqual(expected) // deep equality

// -
// Expected - 1 +
//     Received + 1

// Array[-5, +4, ]

// 56 | { n: 7, arr: [3, 2, 1, 2, 5, 2, 2] }
// 57 | ]) >
// 58 | ).toEqual([5]); |
// ^
// 59 |
// });
// 60 |
//     61 | test('split needed at the end', () => {

//         at Object.toEqual(tests - algorithm / tests - prompt2 / 25 _prompt2.test.js: 58: 5)

//         ● split needed at the end

//         expect(received).toEqual(expected) // deep equality

//         -
//         Expected - 1 +
//             Received + 1

//         Array[-5, +4, ]

//         64 | { n: 6, arr: [1, 1, 2, 2, 2, 2] }
//         65 | ]) >
//     66 | ).toEqual([5]); |
// ^
// 67 |
// });
// 68 |
//     69 | test('split needed early', () => {

//         at Object.toEqual(tests - algorithm / tests - prompt2 / 25 _prompt2.test.js: 66: 5)

//         ● split needed early

//         expect(received).toEqual(expected) // deep equality

//         -
//         Expected - 1 +
//             Received + 1

//         Array[-2, +1, ]

//         72 | { n: 4, arr: [2, 2, 1, 1] }
//         73 | ]) >
//     74 | ).toEqual([2]); |
// ^
// 75 |
// });
// 76 |
//     77 | test('single element array (2)', () => {
