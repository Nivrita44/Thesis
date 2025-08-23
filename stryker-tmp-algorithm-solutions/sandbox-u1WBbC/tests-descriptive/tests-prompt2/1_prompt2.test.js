// @ts-nocheck
import { solve } from '../../solutions-descriptive/1.js';

describe('solve', () => {
    // Basic cases
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

    it('should handle numbers with gcd > 1', () => {
        expect(solve(6, 8, 2)).toBe(2); // reduce to 3 and 4, ratio allows
        expect(solve(12, 18, 3)).toBe(2); // reduce to 2 and 3
    }); //fail

    // Edge cases
    it('should return -1 for unreachable cases due to maxFactorRatio', () => {
        expect(solve(8, 27, 2)).toBe(-1); // Can't reach with ratio 2 (factors: 2,4,8; 3,9,27)
        expect(solve(9, 81, 2)).toBe(-1); // 9: 1,3,9; 81: 1,3,9,27,81, need ratio 3 or 9
    });

    it('should handle maxFactorRatio = 1', () => {
        expect(solve(3, 3, 1)).toBe(0); // already equal by reduction
        expect(solve(1, 2, 1)).toBe(1); // can only move to 2 from 1, allowed
        expect(solve(2, 4, 1)).toBe(-1); // can't reach 2 from 4 with only ratio 1
    }); //fail

    it('should return correct value when maxFactorRatio is large', () => {
        expect(solve(100, 400, 1000)).toBe(2); // easy division path
        expect(solve(1, 100, 100)).toBe(1); // direct jump allowed
    }); //fail

    // Test when values are small (brute-forceable)
    it('should work for small numbers', () => {
        expect(solve(2, 3, 2)).toBe(-1);
        expect(solve(2, 4, 2)).toBe(1); // 2,4/gcd=2: 1 and 2
        expect(solve(6, 9, 3)).toBe(2); // gcd=3, steps for 2 and 3: 1+1
        expect(solve(7, 14, 2)).toBe(1); // gcd=7: 1 and 2
    });

    // Large equal numbers
    it('should return 0 for large equal numbers', () => {
        expect(solve(1000000, 1000000, 100)).toBe(0);
    });

    // Large ratio, but numbers not aligned
    it('should work with large maxFactorRatio but distinct values', () => {
        expect(solve(10, 100, 1000)).toBe(1); // gcd=10: 1,10; 1 step for 10 (to 1), 0 for 1
        expect(solve(15, 100, 1000)).toBe(3); // gcd=5: 3 and 20; min steps for 3 and 20
    }); //fail

    // Cases with 1 as input
    it('should handle when one value is 1', () => {
        expect(solve(1, 10, 10)).toBe(1);
        expect(solve(10, 1, 10)).toBe(1);
        expect(solve(1, 81, 9)).toBe(2);
    });
});