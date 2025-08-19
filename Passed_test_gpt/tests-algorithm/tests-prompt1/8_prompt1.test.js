import {
    solve
} from '../../solutions-algorithm/8.js';

test('Basic small test', () => {
    expect(solve(
        5, [1, 2, 1, 3, 2], [1, 2, 4]
    )).toEqual([3, 3, 2]);
});

test('All elements are the same', () => {
    expect(solve(
        4, [5, 5, 5, 5], [1, 2]
    )).toEqual([1, 1]);
});

test('All distinct elements', () => {
    expect(solve(
        6, [1, 2, 3, 4, 5, 6], [1, 3, 6]
    )).toEqual([6, 4, 1]);
});

test('li at last position', () => {
    expect(solve(
        7, [1, 2, 3, 4, 5, 6, 7], [7]
    )).toEqual([1]);
});

test('Repeat queries', () => {
    expect(solve(
        5, [2, 1, 1, 3, 2], [3, 3, 3, 3]
    )).toEqual([3, 3, 3, 3]);
});

test('Single element array', () => {
    expect(solve(
        1, [100], [1]
    )).toEqual([1]);
});

test('Two value alternation', () => {
    expect(solve(
        8, [1, 2, 1, 2, 1, 2, 1, 2], [1, 2, 3]
    )).toEqual([2, 2, 2]);
});



test('Edge: maximums differing', () => {
    expect(solve(
        4, [100000, 99999, 100000, 2], [1, 2]
    )).toEqual([3, 3]);
});



// ●
// Consecutive queries

// expect(received).toEqual(expected) // deep equality

// -
// Expected - 1 +
//     Received + 1

// Array[
//     3,
//     3, -2, +3,
//     2,
//     1,
// ]

// 48 | expect(solve(
//     49 | 5, [3, 1, 3, 2, 1], [1, 2, 3, 4, 5] >
//     50 | )).toEqual([3, 3, 2, 2, 1]); |
// ^
// 51 |
// });
// 52 |
//     53 | test('Edge: maximums differing', () => {

//             at Object.toEqual(tests - algorithm / tests - prompt1 / 8 _prompt1.test.js: 50: 8)
