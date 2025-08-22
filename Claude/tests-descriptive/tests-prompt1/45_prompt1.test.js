import { solve } from '../../../solutions-descriptive/45.js';

describe('solve function tests', () => {
    test('example case with 3 intersections', () => {
        expect(solve(3, 3, [
            [1, 2, 1, 3],
            [2, 3, 2, 4],
            [1, 3, 5, 7]
        ], 10, 3, 5)).toBe(2);
    });

    test('minimal case with 2 intersections', () => {
        expect(solve(2, 1, [
            [1, 2, 1, 2]
        ], 5, 1, 2)).toBe(3);
    });

    test('large time values case', () => {
        expect(solve(2, 1, [
            [1, 2, 100, 200]
        ], 1000000000, 500000000, 750000000)).toBe(999999900);
    });

    test('phone call immediately before destination', () => {
        expect(solve(3, 2, [
            [1, 2, 2, 4],
            [2, 3, 1, 2]
        ], 10, 7, 9)).toBe(4);
    });

    test('phone call right after start', () => {
        expect(solve(2, 1, [
            [1, 2, 2, 4]
        ], 10, 1, 3)).toBe(7);
    });

    test('impossible to reach on time case', () => {
        expect(solve(3, 2, [
            [1, 2, 3, 4],
            [2, 3, 2, 3]
        ], 5, 2, 4)).toBe(-1);
    });

    test('multiple possible paths case', () => {
        expect(solve(4, 4, [
            [1, 2, 2, 4],
            [2, 4, 3, 5],
            [1, 3, 3, 6],
            [3, 4, 2, 4]
        ], 15, 5, 8)).toBe(7);
    });

    test('exactly enough time case', () => {
        expect(solve(3, 3, [
            [1, 2, 1, 2],
            [2, 3, 1, 2],
            [1, 3, 3, 5]
        ], 8, 3, 5)).toBe(2);
    });
});