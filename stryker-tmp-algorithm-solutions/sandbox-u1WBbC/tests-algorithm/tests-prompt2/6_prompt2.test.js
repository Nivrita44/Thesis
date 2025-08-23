// @ts-nocheck
import { solve } from '../../../solutions-algorithm/6.js';

test('typical case with mixed values', () => {
    expect(solve(8, [1, 2, 2, 3, 1, 5, 6, 1])).toBe(9);
});

test('case with larger numbers', () => {
    expect(solve(5, [1, 2, 3, 100, 200])).toBe(297);
});

test('all equal values', () => {
    expect(solve(4, [3, 3, 3, 3])).toBe(0);
});

test('another typical case with duplicates', () => {
    expect(solve(6, [7, 8, 3, 1, 1, 8])).toBe(14);
});

test('minimum valid input length', () => {
    expect(solve(4, [1, 2, 3, 4])).toBe(4);
});

test('array with negative numbers', () => {
    expect(solve(5, [-10, -20, 0, 5, 15])).toBe(50);
});

test('mix of negative and positive small length', () => {
    expect(solve(4, [-3, -1, 6, 9])).toBe(17);
});

test('array with zeros and positives', () => {
    expect(solve(4, [0, 0, 5, 10])).toBe(15);
});

test('array with large duplicate numbers', () => {
    expect(solve(4, [1000, 1000, 1000, 1000])).toBe(0);
});

test('array with only four numbers in descending order', () => {
    expect(solve(4, [100, 10, 1, 50])).toBe(139);
});



// FAIL tests - algorithm / tests - prompt2 / 6 _prompt2.test.js√ typical
// case with mixed values(2 ms)√
// case with larger numbers√ all equal values√ another typical
// case with duplicates√ minimum valid input length√ array with negative numbers(1 ms)× mix of negative and positive small length(2 ms)√ array with zeros and positives(1 ms)√ array with large duplicate numbers√ array with only four numbers in descending order

// ● mix of negative and positive small length

// expect(received).toBe(expected) // Object.is equality

// Expected:
//     17
//     Received: 19

//     26 |
//         27 | test('mix of negative and positive small length', () => { >
//             28 | expect(solve(4, [-3, -1, 6, 9])).toBe(17); |
//             ^
//             29 |
//         });
//     30 |
//         31 | test('array with zeros and positives', () => {
