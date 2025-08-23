// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/7.js';

test('case: all input nonzero', () => {
    expect(solve(3, [1, 2, 3])).toBe(0);
});

test('case: all input zero', () => {
    expect(solve(4, [0, 0, 0, 0])).toBe(0);
});

test('case: from provided sample 1', () => {
    expect(solve(5, [3, 3, 3, 0, 0])).toBe(6);
});

test('case: from provided sample 2', () => {
    expect(solve(6, [0, 3, 3, 0, 0, 3])).toBe(6);
});

test('case: from provided sample 3', () => {
    expect(solve(7, [1, 2, 3, 0, 4, 5, 0])).toBe(8);
});

test('case: from provided sample 4', () => {
    expect(solve(7, [1, 2, 5, 0, 4, 3, 0])).toBe(9);
});

test('case: from provided sample 5', () => {
    expect(solve(5, [3, 1, 0, 0, 4])).toBe(4);
});

test('case: empty list', () => {
    expect(solve(0, [])).toBe(0);
});

test('case: one zero', () => {
    expect(solve(1, [0])).toBe(0);
});

test('case: one nonzero', () => {
    expect(solve(1, [7])).toBe(0);
});

test('case: one nonzero, one zero', () => {
    expect(solve(2, [7, 0])).toBe(7);
});

test('case: multiple consecutive zeros', () => {
    expect(solve(6, [3, 0, 0, 3, 0, 0])).toBe(6);
});

test('case: zeros before any nonzero', () => {
    expect(solve(5, [0, 0, 5, 0, 0])).toBe(5);
});

test('case: last element is zero', () => {
    expect(solve(3, [4, 7, 0])).toBe(7);
});

test('case: alternating zeros and nonzeros', () => {
    expect(solve(6, [1, 0, 2, 0, 3, 0])).toBe(6);
});

test('case: large numbers', () => {
    expect(solve(4, [10000, 0, 20000, 0])).toBe(30000);
});

test('case: zeros beyond array', () => {
    expect(solve(7, [1, 2, 0, 0, 0, 0, 0])).toBe(3);
});


// FAIL tests - algorithm / tests - prompt2 / 8 _prompt2.test.js√ typical
// case with duplicates(3 ms)√ simple all - unique array√ all elements the same(1 ms)√ queries at edges(1 ms)√ single element array× query in the middle(5 ms)√ mixed values and out - of - order queries(1 ms)√ zero queries√ array with large numbers√ minimum input

// ● query in the middle

// expect(received).toEqual(expected) // deep equality

// -
// Expected - 1 +
// Received + 1

// Array[-4, +5,
//     3,
// ]

// 38 | expect(
//     39 | solve(7, [1, 2, 1, 3, 2, 4, 5], [3, 5]) >
//     40 | ).toEqual([4, 3]); |
// ^
// 41 |
// });
// 42 |
// 43 | test('mixed values and out-of-order queries', () => {

//         at Object.toEqual(tests - algorithm / tests - prompt2 / 8 _prompt2.test.js: 40: 5)
