import { solve } from '../../../solutions-descriptive/1.js';

describe('solve', () => {
    test('x and y are equal: no operations needed', () => {
        expect(solve(7, 7, 3)).toBe(0);
        expect(solve(1, 1, 1000000)).toBe(0);
    });

    test('Simple multiplication: x can be multiplied directly to y', () => {
        expect(solve(3, 12, 4)).toBe(1); // 3 * 4 = 12
        expect(solve(2, 8, 4)).toBe(1); // 2^3 = 8, but 2*4=8 is faster
    });

    test('Simple exponentiation: x can be raised directly to y', () => {
        expect(solve(2, 4, 2)).toBe(1); // 2^2 = 4
        expect(solve(3, 9, 3)).toBe(1); // 3^2 = 9
    });

    
    test('x is 1', () => {
        expect(solve(1, 1, 1)).toBe(0);
        expect(solve(1, 5, 5)).toBe(1); // 1*5=5
        expect(solve(1, 81, 9)).toBe(2); // 1*9=9, 9^2=81
    });

    test('k is 1 (can only use a=1, so operations do nothing)', () => {
        expect(solve(2, 4, 1)).toBe(-1); // Cannot change x
        expect(solve(1, 2, 1)).toBe(-1);
        expect(solve(5, 5, 1)).toBe(0);
    });


    test('Edge case: all 1s', () => {
        expect(solve(1, 1, 1)).toBe(0);
    });
});