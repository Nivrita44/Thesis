// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/44.js';

describe('solve', () => {
    test('Example case with n=3, k=3', () => {
        expect(solve(3, 3)).toEqual([2, 1, 3]);
    });

    test('Already sorted array needs 1 call', () => {
        expect(solve(4, 1)).toEqual([1, 2, 3, 4]); 
    });

    test('Invalid even k returns -1', () => {
        expect(solve(5, 6)).toBe(-1);
    });

    test('Maximum possible k = 2n-1', () => {
        const n = 5;
        const k = 2 * n - 1;
        const result = solve(n, k);
        expect(result.length).toBe(n);
        expect(new Set(result).size).toBe(n);
    });

    test('k > 2n-1 returns -1', () => {
        expect(solve(5, 11)).toBe(-1);
    });

    test('Minimum n=1 case', () => {
        expect(solve(1, 1)).toEqual([1]);
    });

    test('Medium sized valid input', () => {
        const n = 10;
        const k = 15;
        const result = solve(n, k);
        expect(result.length).toBe(n);
        expect(new Set(result).size).toBe(n);
        expect(Math.min(...result)).toBe(1);
        expect(Math.max(...result)).toBe(n);
    });

    test('Large valid input', () => {
        const n = 1000;
        const k = 1999;
        const result = solve(n, k);
        expect(result.length).toBe(n);
        expect(new Set(result).size).toBe(n);
        expect(Math.min(...result)).toBe(1);
        expect(Math.max(...result)).toBe(n);
    });
});
