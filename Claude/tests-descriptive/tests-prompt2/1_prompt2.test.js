import { solve } from '../../solutions-descriptive/1.js';

describe('solve function tests', () => {
    test('simple numbers with valid factor ratio', () => {
        expect(solve(4, 6, 3)).toBe(2);
    });

    test('coprime numbers with insufficient factor ratio', () => {
        expect(solve(4, 5, 3)).toBe(-1);
    });

    test('numbers requiring multiple steps', () => {
        expect(solve(10, 45, 3)).toBe(3);
    });

    test('large number with small number', () => {
        expect(solve(780, 23, 42)).toBe(3);
    });

    test('very large number with 1', () => {
        expect(solve(1, 982800, 13)).toBe(6);
    });

    test('small numbers with insufficient factor ratio', () => {
        expect(solve(1, 6, 2)).toBe(-1);
    });

    test('equal numbers', () => {
        expect(solve(100, 100, 5)).toBe(0);
    });

    test('large numbers with sufficient factor ratio', () => {
        expect(solve(1000000, 2000000, 10)).toBe(2);
    });

    test('numbers with no common divisors except 1', () => {
        expect(solve(17, 23, 5)).toBe(-1);
    });
});