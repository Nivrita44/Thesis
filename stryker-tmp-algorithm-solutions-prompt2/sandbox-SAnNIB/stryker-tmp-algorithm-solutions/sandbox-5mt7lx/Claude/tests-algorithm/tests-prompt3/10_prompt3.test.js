// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/10.js';

describe('Round Number Sum Tests', () => {
    test('single digit number returns itself', () => {
        expect(solve(7)).toEqual({
            count: 1,
            parts: [7]
        });
    });

    test('two digit round number returns itself', () => {
        expect(solve(90)).toEqual({
            count: 1,
            parts: [90]
        });
    });

    test('handles number with multiple round components', () => {
        expect(solve(5009)).toEqual({
            count: 2,
            parts: [9, 5000]
        });
    });

    test('handles maximum input 10000', () => {
        expect(solve(10000)).toEqual({
            count: 1,
            parts: [10000]
        });
    });

    test('handles number requiring all digits as components', () => {
        expect(solve(9876)).toEqual({
            count: 4,
            parts: [6, 70, 800, 9000]
        });
    });

    test('handles number with zeros in middle', () => {
        expect(solve(1001)).toEqual({
            count: 2,
            parts: [1, 1000]
        });
    });

    test('handles consecutive non-zero digits', () => {
        expect(solve(123)).toEqual({
            count: 3,
            parts: [3, 20, 100]
        });
    });

    test('handles number ending in zero', () => {
        expect(solve(1200)).toEqual({
            count: 2,
            parts: [200, 1000]
        });
    });
});
