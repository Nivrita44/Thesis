// @ts-nocheck
import { solve } from '../../../solutions-algorithm/37.js';

describe('solve function tests', () => {
    test('typical case with n=3', () => {
        expect(solve(3)).toEqual([1, 3, 5]);
    });

    test('larger sequence with n=6', () => {
        expect(solve(6)).toEqual([1, 3, 5, 7, 9, 11]);
    });

    test('minimum valid case with n=1', () => {
        expect(solve(1)).toEqual([1]);
    });

    test('edge case with n=0', () => {
        expect(solve(0)).toEqual([]);
    });

    test('medium size case with n=5', () => {
        expect(solve(5)).toEqual([1, 3, 5, 7, 9]);
    });

    test('larger size case with n=10', () => {
        expect(solve(10)).toEqual([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
    });

    test('invalid input with negative number', () => {
        expect(solve(-1)).toEqual([]);
    });

    test('performance test with n=1000', () => {
        const result = solve(1000);
        expect(result.length).toBe(1000);
        expect(result[0]).toBe(1);
        expect(result[999]).toBe(1999);
    });
});
