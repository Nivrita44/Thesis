// @ts-nocheck
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
