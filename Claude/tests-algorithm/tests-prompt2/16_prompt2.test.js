import { solve } from '../../solutions-algorithm/16.js';

describe('solve function test cases', () => {
    test('basic case with n=5 should return 2 parts (3,2)', () => {
        expect(solve(5)).toEqual({
            count: 2,
            parts: [3, 2]
        });
    });

    test('even number n=6 should return all 2s', () => {
        expect(solve(6)).toEqual({
            count: 3,
            parts: [2, 2, 2]
        });
    });

    test('odd number n=7 should start with 3 followed by 2s', () => {
        expect(solve(7)).toEqual({
            count: 3,
            parts: [3, 2, 2]
        });
    });

    test('minimum valid input n=2 should return single 2', () => {
        expect(solve(2)).toEqual({
            count: 1,
            parts: [2]
        });
    });

    test('odd number n=9 should handle 3 plus three 2s', () => {
        expect(solve(9)).toEqual({
            count: 4,
            parts: [3, 2, 2, 2]
        });
    });

    test('larger even number n=10 should return five 2s', () => {
        expect(solve(10)).toEqual({
            count: 5,
            parts: [2, 2, 2, 2, 2]
        });
    });

    test('minimum odd number n=3 should return single 3', () => {
        expect(solve(3)).toEqual({
            count: 1,
            parts: [3]
        });
    });

    test('larger odd number n=15 should handle correctly', () => {
        expect(solve(15)).toEqual({
            count: 7,
            parts: [3, 2, 2, 2, 2, 2, 2]
        });
    });
});