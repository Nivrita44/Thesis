// @ts-nocheck
import { solve } from '../../../solutions-descriptive/39.js';

describe('Maximum Magical Subsequence', () => {
    test('Example case with sequential numbers', () => {
        expect(solve(5, [4, 3, 2, 1, 0])).toBe(5);
    });

    test('Case with duplicate numbers', () => {
        expect(solve(6, [4, 3, 3, 2, 1, 0])).toBe(5);
    });

    test('Case with non-sequential numbers and zeros', () => {
        expect(solve(4, [2, 0, 1, 2])).toBe(3);
    });

    test('Single element case', () => {
        expect(solve(1, [777])).toBe(1);
    });

    test('Case with large numbers', () => {
        expect(solve(4, [1000000000, 1, 7, 9])).toBe(4);
    });

    test('Simple two element case with zero', () => {
        expect(solve(2, [0, 1])).toBe(2);
    });

    test('Multiple zeros case', () => {
        expect(solve(4, [0, 1, 0, 1])).toBe(3);
    });

    test('Case with all zeros', () => {
        expect(solve(3, [0, 0, 0])).toBe(1);
    });

    test('Case with no zeros', () => {
        expect(solve(3, [1, 2, 3])).toBe(3);
    });
});
