// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/8.js';

test('n and m are equal, simple arrays', () => {
    expect(solve(2, 2, [1, 3], [2, 4])).toBe('1\n2');
});

test('n and m are minimal, single elements', () => {
    expect(solve(1, 1, [5], [10])).toBe('0');
});

test('arrays with identical values', () => {
    expect(solve(4, 4, [5, 5, 5, 5], [5, 5, 5, 5])).toBe('2\n0 0');
});

test('all zeros', () => {
    expect(solve(6, 6, [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0])).toBe('4\n0 0 0 0');
});

test('n or m is zero', () => {
    expect(solve(0, 3, [], [1, 2, 3])).toBe('0');
    expect(solve(3, 0, [1, 2, 3], [])).toBe('0');
});
