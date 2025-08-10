import { solve } from '../../../solutions-algorithm/47.js';

test('All numbers in order, no operations needed', () => {
    expect(solve(3, 2, [1, 2, 3])).toBe(0);
});

test('Numbers out of order, k = 1', () => {
    expect(solve(3, 1, [3, 1, 2])).toBe(1);
});

test('Numbers slightly out of order, k = 2', () => {
    expect(solve(4, 2, [1, 3, 2, 4])).toBe(1);
});

test('Numbers more shuffled, k = 2', () => {
    expect(solve(4, 2, [2, 3, 1, 4])).toBe(2);
});

test('All reversed order, k = 1', () => {
    expect(solve(5, 1, [5, 4, 3, 2, 1])).toBe(4);
});

test('Missing all but first in order, k = 2', () => {
    expect(solve(5, 2, [1, 7, 9, 11, 13])).toBe(2);
});

test('Single element array', () => {
    expect(solve(1, 1, [1])).toBe(0);
});

test('Already ordered with k greater than n', () => {
    expect(solve(3, 10, [1, 2, 3])).toBe(0);
});

test('k greater than n and unordered', () => {
    expect(solve(3, 10, [2, 1, 3])).toBe(1);
});

test('No correct numbers at all', () => {
    expect(solve(3, 2, [7, 8, 9])).toBe(2);
});

test('Edge case: k=0 should handle division by zero gracefully (Infinity)', () => {
    expect(solve(3, 0, [2, 1, 3])).toBe(Infinity);
});

test('Edge case: empty numbers array', () => {
    expect(solve(3, 2, [])).toBe(2);
});

test('Numbers already in correct order but with extra values', () => {
    expect(solve(3, 2, [1, 2, 3, 4, 5])).toBe(0);
});


// Numbers already in correct order but with extra values

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 0
//     Received: -1

//       50 |
//       51 | test('Numbers already in correct order but with extra values', () => {
//     > 52 |     expect(solve(3, 2, [1, 2, 3, 4, 5])).toBe(0);
//          |                                          ^
//       53 | });

//       at Object.toBe (tests-algorithm/tests-prompt2/47_prompt2.test.js:52:42)
