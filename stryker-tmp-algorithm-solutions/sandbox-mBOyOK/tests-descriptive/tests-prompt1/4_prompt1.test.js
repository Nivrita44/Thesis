// @ts-nocheck
import { solve } from '../../solutions-descriptive/4.js';
// all fail
test('n = 3, all values 1', () => {
    expect(solve(3, [1, 1, 1])).toBe(1);
});

test('n = 4, values [1, 2, 3, 4]', () => {
    expect(solve(4, [1, 2, 3, 4])).toBe(24);
});

test('n = 5, all values 1', () => {
    expect(solve(5, [1, 1, 1, 1, 1])).toBe(3);
});

test('n = 6, values [1, 2, 3, 4, 5, 6]', () => {
    expect(solve(6, [1, 2, 3, 4, 5, 6])).toBe(90);
});

test('n = 3, different values', () => {
    expect(solve(3, [2, 5, 3])).toBe(30);
});

test('n = 7, values [7, 6, 5, 4, 3, 2, 1]', () => {
    expect(solve(7, [7, 6, 5, 4, 3, 2, 1])).toBe(105 + 60 + 21 + 24 + 35);
});

test('n = 8, all values 1000', () => {
    expect(solve(8, [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000])).toBe(8000000000);
});

test('n = 4, values [10, 1, 1, 10]', () => {
    expect(solve(4, [10, 1, 1, 10])).toBe(100);
});

test('n = 9, increasing values', () => {
    expect(solve(9, [1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(504 + 405 + 288 + 189 + 108 + 45 + 36);
});

test('n = 3, largest values', () => {
    expect(solve(3, [1000, 1000, 1000])).toBe(1000000000);
});