// @ts-nocheck
import { solve } from '../../../solutions-algorithm/42.js';

test('example from description with [2,3,1]', () => {
    expect(solve(3, [2, 3, 1])).toBe(2);
});

test('minimal case with 2 elements in order', () => {
    expect(solve(2, [1, 2])).toBe(2);
});

test('minimal case with 2 elements out of order', () => {
    expect(solve(2, [2, 1])).toBe(1);
});

test('large case with 10 elements', () => {
    expect(solve(10, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(5);
});

test('already sorted sequence', () => {
    expect(solve(5, [1, 2, 3, 4, 5])).toBe(5);
});

test('alternating sequence', () => {
    expect(solve(6, [2, 1, 4, 3, 6, 5])).toBe(3);
});

test('middle heavy sequence', () => {
    expect(solve(5, [1, 5, 4, 3, 2])).toBe(2);
});

test('single swapeeded', () => {
    expect(solve(4, [1, 3, 2, 4])).toBe(3);
});