// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/50.js';

describe('Longest Special Subsequence', () => {
    test('Example case with powers of 2', () => {
        expect(solve([1, 2, 4, 8, 16])).toBe(0);
    });

    test('Example case with multiple factors', () => {
        expect(solve([3, 2, 10, 20, 60, 1])).toBe(4);
    });

    test('Case with large prime numbers', () => {
        expect(solve([2, 3, 4, 6, 12, 100003, 1200036])).toBe(4);
    });

    test('Case with repeated numbers', () => {
        expect(solve([2, 42, 7, 3, 6, 7, 7, 1, 6])).toBe(5);
    });

    test('Case with all distinct numbers', () => {
        expect(solve([4, 99, 57, 179, 10203, 2, 11, 40812])).toBe(8);
    });

    test('Single element array', () => {
        expect(solve([1])).toBe(0);
    });

    test('Array with coprime numbers', () => {
        expect(solve([2, 3, 5, 7, 11, 13])).toBe(6);
    });

    test('Array with all same numbers', () => {
        expect(solve([5, 5, 5, 5, 5])).toBe(0);
    });

    test('Array with sequential numbers', () => {
        expect(solve([1, 2, 3, 4, 5, 6])).toBe(3);
    });
});
