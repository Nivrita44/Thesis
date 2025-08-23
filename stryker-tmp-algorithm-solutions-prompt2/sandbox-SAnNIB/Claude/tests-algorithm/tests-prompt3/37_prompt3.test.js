// @ts-nocheck
import { solve } from '../../../solutions-algorithm/37.js';

describe('Increasing Sequence Tests', () => {
    test('Example case n=3', () => {
        expect(solve(3)).toEqual([1, 3, 5]);
    });

    test('Minimum valid input n=2', () => {
        expect(solve(2)).toEqual([1, 3]); 
    });

    test('Maximum valid input n=50', () => {
        const result = solve(50);
        expect(result.length).toBe(50);
        expect(result[0]).toBe(1);
        expect(result[49]).toBe(99);
    });

    test('Medium case n=6', () => {
        expect(solve(6)).toEqual([1, 3, 5, 7, 9, 11]);
    });

    test('Verify sequence is strictly increasing', () => {
        const result = solve(10);
        for(let i = 1; i < result.length; i++) {
            expect(result[i]).toBeGreaterThan(result[i-1]);
        }
    });

    test('Verify modulo condition for n=5', () => {
        const result = solve(5);
        for(let i = 0; i < result.length; i++) {
            for(let j = i + 1; j < result.length; j++) {
                expect(result[i] % (i+1)).not.toBe(result[j] % (j+1));
            }
        }
    });

    test('Verify all numbers are ≤ 100', () => {
        const result = solve(50);
        result.forEach(num => {
            expect(num).toBeLessThanOrEqual(100);
        });
    });
});
