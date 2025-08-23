// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/20.js';

describe('solve', () => {
    test('normal case with equal percentages', () => {
        expect(solve(3, [50, 50, 100])).toBeCloseTo(66.67, 2);
    });

    test('normal case with increasing percentages', () => {
        expect(solve(4, [0, 25, 50, 75])).toBeCloseTo(37.5, 2);
    });

    test('small numbers', () => {
        expect(solve(3, [0, 1, 8])).toBeCloseTo(3, 2);
    });

    test('single value case', () => {
        expect(solve(1, [100])).toBeCloseTo(100, 2);
    });

    test('all zeros case', () => {
        expect(solve(5, [0, 0, 0, 0, 0])).toBe(0);
    });

    test('decimal percentages', () => {
        expect(solve(3, [33.33, 33.33, 33.34])).toBeCloseTo(33.33, 2);
    });

    test('large numbers', () => {
        expect(solve(2, [999.99, 999.99])).toBeCloseTo(999.99, 2);
    });

    test('mismatched array length', () => {
        expect(solve(2, [50, 50, 50])).toBeCloseTo(75, 2);
    });
});
