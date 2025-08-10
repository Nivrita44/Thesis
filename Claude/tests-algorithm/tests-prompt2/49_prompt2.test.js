import { solve } from '../../../solutions-algorithm/49.js';

describe('solve function tests', () => {
    test('basic case where equation holds true', () => {
        expect(solve(1, 1, 0)).toBe('YES');
    });

    test('simple case where equation does not hold', () => {
        expect(solve(1, 5, 5)).toBe('NO');
    });

    test('2x2 grid with valid k value', () => {
        expect(solve(2, 2, 3)).toBe('YES');
    });

    test('2x2 grid with invalid k value', () => {
        expect(solve(2, 2, 4)).toBe('NO');
    });

    test('rectangular grid with valid k value', () => {
        expect(solve(1, 4, 3)).toBe('YES');
    });

    test('large grid dimensions', () => {
        expect(solve(100, 100, 9999)).toBe('YES');
    });

    test('maximum possible grid size', () => {
        expect(solve(1000, 1000, 999999)).toBe('YES');
    });

    test('zero dimensions case', () => {
        expect(solve(0, 0, 0)).toBe('NO');
    });

    test('negative input values', () => {
        expect(solve(-2, -3, -7)).toBe('NO');
    });
});
