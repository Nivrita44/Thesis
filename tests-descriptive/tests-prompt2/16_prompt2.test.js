import { solve } from '../../solutions-descriptive/16.js';

test('returns count when need is exactly met', () => {
    expect(solve([1, 2, 3], 6)).toBe(3);
});

test('returns count when sum exceeds need', () => {
    expect(solve([5, 3, 1], 6)).toBe(2);
});

test('returns 1000000000 when not enough to meet need', () => {
    expect(solve([1, 2, 3], 7)).toBe(1000000000);
});

test('returns 1 when first element is already enough', () => {
    expect(solve([10, 2, 3], 5)).toBe(1);
});

test('returns 1000000000 when array is empty', () => {
    expect(solve([], 1)).toBe(1000000000);
});

test('returns 0 when need is 0, regardless of input', () => {
    expect(solve([1, 2, 3], 0)).toBe(0);
    expect(solve([], 0)).toBe(0);
});

test('handles single element equal to need', () => {
    expect(solve([5], 5)).toBe(1);
});

test('handles single element less than need', () => {
    expect(solve([3], 5)).toBe(1000000000);
});

test('handles all zeros', () => {
    expect(solve([0, 0, 0], 0)).toBe(0);
    expect(solve([0, 0, 0], 1)).toBe(1000000000);
});

test('handles negative numbers', () => {
    expect(solve([-1, -2, -3], -5)).toBe(1);
    expect(solve([-1, -2, -3], -10)).toBe(3);
    expect(solve([-4, 2], -2)).toBe(1);
    expect(solve([-3, 2, 10], 5)).toBe(3);
});

test('large need, large array', () => {
    expect(solve(Array(1000).fill(1), 1000)).toBe(1000);
    expect(solve(Array(1000).fill(1), 1001)).toBe(1000000000);
});

// FAIL tests - descriptive / tests - prompt2 / 16 _prompt2.test.js√ returns count when need is exactly met(3 ms)√ returns count when sum exceeds need√ returns 1000000000 when not enough to meet need√ returns 1 when first element is already enough√ returns 1000000000 when array is empty√ returns 0 when need is 0, regardless of input√ handles single element equal to need√ handles single element less than need√ handles all zeros(1 ms)× handles negative numbers(3 ms)√ large need, large array(2 ms)

// ● handles negative numbers

// expect(received).toBe(expected) // Object.is equality

// Expected: 1
// Received: 0

// 40 |
//     41 | test('handles negative numbers', () => { >
//             42 | expect(solve([-1, -2, -3], -5)).toBe(1); |
//             ^
//             43 | expect(solve([-1, -2, -3], -10)).toBe(3);
//             44 | expect(solve([-4, 2], -2)).toBe(1);
//             45 | expect(solve([-3, 2, 10], 5)).toBe(3);

//             at Object.toBe(tests - descriptive / tests - prompt2 / 16 _prompt2.test.js: 42: 35)