// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/41.js';

describe('solve function tests', () => {
    test('basic test case with small array', () => {
        const result = solve(4, [1, 2, 5, 10], [[1, 1], [1, 2], [1, 3]]);
        expect(result).toEqual(['1', '4', '12']);
    });

    test('full triangle query', () => {
        const result = solve(3, [1, 2, 3], [[1, 6]]);
        expect(result).toEqual(['14']);
    });

    test('single element array', () => {
        const result = solve(1, [5], [[1, 1]]);
        expect(result).toEqual(['5']);
    });

    test('array with identical elements', () => {
        const result = solve(3, [2, 2, 2], [[1, 3], [2, 4]]);
        expect(result).toEqual(['12', '8']);
    });

    test('large position queries', () => {
        const result = solve(4, [1, 2, 3, 4], [[8, 10]]);
        expect(result).toEqual(['12']);
    });

    test('multiple overlapping queries', () => {
        const result = solve(4, [1, 2, 5, 10], [[1, 4], [2, 4], [3, 4]]);
        expect(result).toEqual(['30', '29', '27']);
    });

    test('edge case with zero values', () => {
        const result = solve(3, [0, 0, 0], [[1, 3], [1, 6]]);
        expect(result).toEqual(['0', '0']);
    });

    test('large numbers in array', () => {
        const result = solve(3, [1000, 2000, 3000], [[1, 3]]);
        expect(result).toEqual(['14000']);
    });
});
