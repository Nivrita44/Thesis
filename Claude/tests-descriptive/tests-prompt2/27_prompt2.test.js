import { solve } from '../../solutions-descriptive/27.js';

describe('Point Pattern Finder Tests', () => {
    test('basic case with 7 points', () => {
        const points = [
            [7, 26], [6, 27], [6, 28],
            [7, 27], [8, 26], [8, 27],
            [7, 28]
        ];
        expect(solve(7, points)).toEqual([7, 27]);
    });

    test('larger pattern with 11 points', () => {
        const points = [
            [70, 9], [69, 8], [69, 0],
            [73, 5], [70, -1], [70, 5],
            [71, 7], [70, 4], [73, 4],
            [71, 3], [72, 3]
        ];
        expect(solve(11, points)).toEqual([72, 7]);
    });

    test('minimum case with 3 points', () => {
        const points = [[1, 1], [1, 2], [2, 1]];
        expect(solve(3, points)).toEqual([2, 2]);
    });

    test('case with negative coordinates', () => {
        const points = [
            [-2, -2], [-2, -1],
            [-1, -2], [-1, -1],
            [-2, -3]
        ];
        expect(solve(5, points)).toEqual([-1, -3]);
    });

    test('case with zero coordinates', () => {
        const points = [
            [0, 0], [0, 1],
            [1, 0], [1, 1],
            [0, 2]
        ];
        expect(solve(5, points)).toEqual([1, 2]);
    });

    test('case with large coordinates', () => {
        const points = [
            [1000000, 1000000],
            [1000001, 1000000],
            [1000000, 1000001],
            [1000001, 1000001],
            [1000000, 1000002]
        ];
        expect(solve(5, points)).toEqual([1000001, 1000002]);
    });

    test('case with sparse pattern', () => {
        const points = [
            [1, 10], [1, 20],
            [2, 10], [2, 20],
            [1, 30]
        ];
        expect(solve(5, points)).toEqual([2, 30]);
    });
});