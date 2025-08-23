// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/29.js';

describe('solve function tests', () => {
    test('basic case with small numbers and achievable target', () => {
        expect(solve(3, 3, [2, 1, 4])).toBe('YES');
    });

    test('basic case with unachievable target', () => {
        expect(solve(3, 7, [2, 1, 4])).toBe('NO');
    });

    test('case with powers of 2', () => {
        expect(solve(2, 15, [2, 16])).toBe('YES');
    });

    test('large numbers with descending sequence', () => {
        expect(solve(3, 10, [256, 32, 1])).toBe('YES');
    });

    test('boundary case with very large numbers', () => {
        expect(solve(3, 289, [768, 96, 1])).toBe('YES');
    });

    test('just beyond maximum possible operations', () => {
        expect(solve(3, 290, [768, 96, 1])).toBe('NO');
    });

    test('longer sequence with mixed numbers', () => {
        expect(solve(5, 7, [5, 1, 6, 3, 10])).toBe('YES');
    });

    test('sequence with close consecutive numbers', () => {
        expect(solve(4, 6, [6, 8, 5, 10])).toBe('YES');
    });
});
