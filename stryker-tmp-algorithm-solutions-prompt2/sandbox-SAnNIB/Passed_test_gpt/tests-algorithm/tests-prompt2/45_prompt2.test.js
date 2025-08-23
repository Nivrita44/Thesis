// @ts-nocheck
import { solve } from '../../../solutions-algorithm/45.js';

test('solve returns 3 for [1,2,3]', () => {
    expect(solve([1, 2, 3])).toBe(3);
});

test('solve returns 1 for [1,3,2]', () => {
    expect(solve([1, 3, 2])).toBe(1);
});

test('solve returns 17 for [1,3,2,4,5]', () => {
    expect(solve([1, 3, 2, 4, 5])).toBe(17);
});

test('solve returns 379394847 for [1,2,3,4,5,6,7,8,9,10,11]', () => {
    expect(solve([1,2,3,4,5,6,7,8,9,10,11])).toBe(379394847);
});

test('solve handles a single element array', () => {
    expect(solve([42])).toBe(1);
});

test('solve handles two increasing elements', () => {
    expect(solve([1, 2])).toBe(1);
});


test('solve handles longer strictly increasing array', () => {
    expect(solve([1,2,3,4,5,6])).toBeGreaterThan(0);
});


test('solve handles empty array', () => {
    expect(solve([])).toBe(1);
});

