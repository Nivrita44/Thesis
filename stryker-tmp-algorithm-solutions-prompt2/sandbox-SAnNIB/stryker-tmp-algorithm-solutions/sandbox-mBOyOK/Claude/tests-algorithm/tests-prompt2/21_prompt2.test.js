// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/21.js';

describe('solve function tests', () => {
    test('standard triplets with valid sums', () => {
        const input = [[1, 4, 5], [2, 3, 5], [7, 3, 4]];
        const expected = ["YES", "YES", "YES"];
        expect(solve(input)).toEqual(expected);
    });

    test('triplets with no valid sums', () => {
        const input = [[2, 5, 8], [4, 7, 12], [10, 15, 30]];
        const expected = ["NO", "NO", "NO"];
        expect(solve(input)).toEqual(expected);
    });

    test('triplets with zeros', () => {
        const input = [[0, 0, 0], [0, 1, 1], [1, 0, 1]];
        const expected = ["YES", "YES", "YES"];
        expect(solve(input)).toEqual(expected);
    });

    test('large numbers', () => {
        const input = [[1000, 2000, 3000], [9999, 1, 10000], [5000, 5000, 10000]];
        const expected = ["YES", "YES", "YES"];
        expect(solve(input)).toEqual(expected);
    });

    test('negative numbers', () => {
        const input = [[-1, 4, 3], [-2, -3, -5], [-7, 7, 0]];
        const expected = ["YES", "NO", "YES"];
        expect(solve(input)).toEqual(expected);
    });

    test('empty array', () => {
        const input = [];
        const expected = [];
        expect(solve(input)).toEqual(expected);
    });

    test('single triplet', () => {
        const input = [[5, 5, 10]];
        const expected = ["YES"];
        expect(solve(input)).toEqual(expected);
    });

    test('mixed valid and invalid cases', () => {
        const input = [[1, 2, 3], [4, 8, 16], [10, 20, 30], [7, 3, 4]];
        const expected = ["YES", "NO", "NO", "YES"];
        expect(solve(input)).toEqual(expected);
    });
});
