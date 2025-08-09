import { solve } from '../../solutions-algorithm/19.js';

describe('solve', () => {
    test('exact multiple of 5 returns minimal steps', () => {
        expect(solve(5)).toBe(1);
        expect(solve(10)).toBe(2);
        expect(solve(15)).toBe(3);
    });

    test('numbers needing one extra step', () => {
        expect(solve(6)).toBe(2);
        expect(solve(7)).toBe(2);
        expect(solve(8)).toBe(2);
        expect(solve(9)).toBe(2);
    });

    test('handles zero input', () => {
        expect(solve(0)).toBe(0);
    });

    test('handles small numbers under 5', () => {
        expect(solve(1)).toBe(1);
        expect(solve(2)).toBe(1);
        expect(solve(3)).toBe(1);
        expect(solve(4)).toBe(1);
    });

    test('works with large numbers', () => {
        expect(solve(100)).toBe(20);
        expect(solve(999)).toBe(200);
    });

    test('handles numbers just below multiples of 5', () => {
        expect(solve(14)).toBe(3);
        expect(solve(24)).toBe(5);
        expect(solve(49)).toBe(10);
    });

    test('handles non-integer inputs by truncating', () => {
        expect(solve(5.7)).toBe(1);
        expect(solve(10.2)).toBe(2);
    });
});