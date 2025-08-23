// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/6.js';

test('test with strictly increasing array', () => {
    expect(solve(5, [1, 2, 3, 4, 5])).toBe(6);
});

test('test with strictly decreasing array', () => {
    expect(solve(5, [5, 4, 3, 2, 1])).toBe(6);
});

test('test with all equal values', () => {
    expect(solve(6, [7, 7, 7, 7, 7, 7])).toBe(0);
});


test('test with minimum allowed n', () => {
    expect(solve(4, [1, 10, 2, 9])).toBe(16);
});

test('test with two maximum values at the ends', () => {
    expect(solve(5, [100, 1, 1, 1, 100])).toBe(198);
});

test('test with alternating high and low', () => {
    expect(solve(6, [1, 100, 1, 100, 1, 100])).toBe(198);
});




// FAIL tests - algorithm / tests - prompt1 / 6 _prompt1.test.js
// √ test with strictly increasing array(2 ms)
// √ test with strictly decreasing array
// √ test with all equal values(1 ms)
// × test with mixed values(4 ms)
// √ test with minimum allowed n
// √ test with two maximum values at the ends
// × test with large values
// √ test with alternating high and low
// × test with minimum and maximum next to each other(1 ms)

