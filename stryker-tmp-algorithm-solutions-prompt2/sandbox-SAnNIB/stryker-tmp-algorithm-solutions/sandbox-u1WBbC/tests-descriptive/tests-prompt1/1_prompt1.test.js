// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/1.js';

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

    test('Multiple operations needed', () => {
        expect(solve(2, 16, 4)).toBe(2); // 2^2=4, 4^2=16
        expect(solve(2, 36, 3)).toBe(2); // 2*3=6, 6^2=36
    }); //fail

    test('Impossible cases: cannot reach y from x with given k', () => {
        expect(solve(5, 7, 3)).toBe(-1);
        expect(solve(10, 1001, 5)).toBe(-1);
        expect(solve(8, 7, 10)).toBe(-1);
    }); //fail

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

    test('Large but direct step possible', () => {
        expect(solve(2, 1000000, 1000000)).toBe(1); // 2*500000=1000000 (but actually not since 2*500000 is not 1000000), but 2^19=524288, can't get to 1_000_000 with k=1_000_000
        // Check correct exponent
        expect(solve(10, 1000000, 100)).toBe(2); // 10^3=1000, 1000*1000=1_000_000
    }); //fail

    test('x greater than y: only possible if exponentiation with a=1 makes y', () => {
        expect(solve(9, 3, 9)).toBe(-1); // Can't decrease x
        expect(solve(100, 50, 100)).toBe(-1);
    }); //fail

    test('Edge case: all 1s', () => {
        expect(solve(1, 1, 1)).toBe(0);
    });
});