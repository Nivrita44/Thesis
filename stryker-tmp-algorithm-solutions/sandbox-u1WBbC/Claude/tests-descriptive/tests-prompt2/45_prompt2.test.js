// @ts-nocheck
import { solve } from '../../../solutions-descriptive/45.js';

describe('solve function tests', () => {
    test('typical case with multiple paths', () => {
        expect(solve(4, 4, [
            [1, 2, 30, 100],
            [2, 4, 30, 100],
            [1, 3, 20, 50],
            [3, 4, 20, 50]
        ], 100, 40, 60)).toBe(60);
    });

    test('simple path with two nodes', () => {
        expect(solve(2, 1, [
            [1, 2, 55, 110]
        ], 100, 50, 60)).toBe(-1);
    });

    test('complex network with five nodes', () => {
        expect(solve(5, 5, [
            [1, 5, 30, 100],
            [1, 2, 20, 50],
            [2, 3, 20, 50],
            [3, 4, 20, 50],
            [4, 5, 20, 50]
        ], 100, 20, 80)).toBe(0);
    });

    test('small values case', () => {
        expect(solve(2, 1, [
            [2, 1, 6, 10]
        ], 12, 9, 10)).toBe(3);
    });

    test('medium complexity network', () => {
        expect(solve(3, 3, [
            [1, 2, 1, 10],
            [2, 3, 10, 50],
            [1, 3, 20, 21]
        ], 100, 80, 90)).toBe(80);
    });

    test('threshold boundary case', () => {
        expect(solve(3, 2, [
            [2, 1, 1, 3],
            [2, 3, 3, 4]
        ], 58, 55, 57)).toBe(53);
    });

    test('dense network with five nodes', () => {
        expect(solve(5, 5, [
            [2, 1, 1, 8],
            [2, 3, 4, 8],
            [4, 2, 2, 4],
            [5, 3, 3, 4],
            [4, 5, 2, 6]
        ], 8, 5, 6)).toBe(2);
    });

    test('single node case', () => {
        expect(solve(1, 0, [], 100, 50, 60)).toBe(-1);
    });
});
