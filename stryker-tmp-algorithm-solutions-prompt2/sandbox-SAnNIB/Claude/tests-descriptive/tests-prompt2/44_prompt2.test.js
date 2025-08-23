// @ts-nocheck
import { solve } from '../../../solutions-descriptive/44.js';

describe('Game Theory Solver Tests', () => {
    test('basic small array', () => {
        expect(solve([3, 2, 9])).toBe('Bob');
    });

    test('array with repeated numbers', () => {
        expect(solve([3, 3, 6, 1])).toBe('Alice');
    });

    test('sequential numbers', () => {
        expect(solve([1, 2, 3, 4, 5])).toBe('Bob');
    });

    test('single number array', () => {
        expect(solve([7])).toBe('Alice');
    });

    test('array with all even numbers', () => {
        expect(solve([2, 4, 6, 8])).toBe('Bob');
    });

    test('array with all odd numbers', () => {
        expect(solve([1, 3, 5, 7, 9])).toBe('Alice');
    });

    test('large prime numbers', () => {
        expect(solve([9973, 9967, 9949])).toBe('Alice');
    });

    test('empty array', () => {
        expect(solve([])).toBe('Bob');
    });

    test('array with large composite numbers', () => {
        expect(solve([999991, 999989, 999983])).toBe('Alice');
    });
});
