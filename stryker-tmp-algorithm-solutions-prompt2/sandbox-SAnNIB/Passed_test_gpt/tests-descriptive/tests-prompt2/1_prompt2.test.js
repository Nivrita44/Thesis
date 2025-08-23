// @ts-nocheck
import { solve } from '../../../solutions-descriptive/1.js';

describe('solve', () => {

    it('should return 0 if x and y are equal', () => {
        expect(solve(10, 10, 2)).toBe(0);
        expect(solve(1, 1, 10)).toBe(0);
    });

    it('should handle prime numbers with maxFactorRatio high enough', () => {
        expect(solve(5, 7, 7)).toBe(2);
        expect(solve(13, 17, 17)).toBe(2);
    });

    it('should handle both numbers being 1', () => {
        expect(solve(1, 1, 1)).toBe(0);
    });

    // Edge cases
    it('should return -1 for unreachable cases due to maxFactorRatio', () => {
        expect(solve(8, 27, 2)).toBe(-1); 
        expect(solve(9, 81, 2)).toBe(-1); 
    });


    // Test when values are small (brute-forceable)
    it('should work for small numbers', () => {
        expect(solve(2, 3, 2)).toBe(-1);
        expect(solve(2, 4, 2)).toBe(1); 
        expect(solve(6, 9, 3)).toBe(2); 
        expect(solve(7, 14, 2)).toBe(1); 
    });

    // Large equal numbers
    it('should return 0 for large equal numbers', () => {
        expect(solve(1000000, 1000000, 100)).toBe(0);
    });

    // Cases with 1 as input
    it('should handle when one value is 1', () => {
        expect(solve(1, 10, 10)).toBe(1);
        expect(solve(10, 1, 10)).toBe(1);
        expect(solve(1, 81, 9)).toBe(2);
    });
});