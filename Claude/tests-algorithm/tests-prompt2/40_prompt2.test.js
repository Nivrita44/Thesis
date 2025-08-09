import { solve } from '../../solutions-algorithm/40.js';

describe('solve function', () => {
    test('handles coprime numbers', () => {
        expect(solve(2, 3)).toBe(6);
        expect(solve(3, 11)).toBe(33);
    });

    test('handles numbers with common factors', () => {
        expect(solve(4, 6)).toBe(12);
        expect(solve(5, 10)).toBe(20);
    });

    test('handles case when one number is multiple of another', () => {
        expect(solve(3, 9)).toBe(27);
        expect(solve(2, 8)).toBe(32);
    });

    test('handles small numbers where a=1', () => {
        expect(solve(1, 2)).toBe(4);
        expect(solve(1, 5)).toBe(25);
    });

    test('handles large numbers', () => {
        expect(solve(250000000, 500000000)).toBe(1000000000);
    });

    test('handles equal numbers', () => {
        expect(solve(4, 4)).toBe(16);
        expect(solve(100, 100)).toBe(10000);
    });

    test('handles when second number is smaller', () => {
        expect(solve(8, 4)).toBe(8);
        expect(solve(15, 5)).toBe(15);
    });
});