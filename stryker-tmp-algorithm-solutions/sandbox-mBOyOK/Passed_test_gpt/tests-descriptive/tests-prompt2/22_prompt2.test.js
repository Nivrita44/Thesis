// @ts-nocheck
import { solve } from '../../../solutions-descriptive/22.js';

test('all enemies with one hit', () => {
    expect(solve(
        3,
        10,
        3,
        [5, 8, 6],
        [0, 3, 5]
    )).toBe(1);
});

test('minimum required enemies - just enough', () => {
    expect(solve(
        4,
        3,
        4,
        [3, 6, 9, 3],
        [1, 2, 3, 4]
    )).toBe(3);
});

test('impossible to beat required enemies', () => {
    expect(solve(
        2,
        1,
        3,
        [10, 10],
        [0, 5]
    )).toBe(-1);
});

test('one enemy', () => {
    expect(solve(
        1,
        2,
        1,
        [5],
        [4]
    )).toBe(3);
});

test('enemy health all zeros (should need 0 hits, so minimum time is 1)', () => {
    expect(solve(
        2,
        3,
        2,
        [0, 0],
        [1, 2]
    )).toBe(1);
});

test('range off bounds, but still enough enemies', () => {
    expect(solve(
        2,
        1,
        1,
        [1, 1],
        [0, 100]
    )).toBe(1);
});

test('large maxHits but required more than available enemies', () => {
    expect(solve(
        2,
        1000,
        4,
        [1, 1],
        [0, 1]
    )).toBe(-1);
});

test('enemies at overlapping positions', () => {
    expect(solve(
        3,
        2,
        2,
        [4, 4, 4],
        [1, 1, 1]
    )).toBe(2);
});