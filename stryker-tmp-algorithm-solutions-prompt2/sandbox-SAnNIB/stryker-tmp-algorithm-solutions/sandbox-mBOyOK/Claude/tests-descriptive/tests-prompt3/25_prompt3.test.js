// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/25.js';

describe('k-harmonic permutations', () => {
    test('base case n=1, k=1', () => {
        expect(solve(1, 1)).toEqual([['1']]);
    });

    test('base case n=2, k=2', () => {
        expect(solve(2, 2)).toEqual([['1 2', '2 1']]);
    });

    test('invalid case n=1, k=2', () => {
        expect(solve(1, 2)).toBeNull();
    });

    test('example case n=3, k=3', () => {
        const result = solve(3, 3);
        expect(result).toHaveLength(3);
        expect(result.every(perm => perm.split(' ').length === 3)).toBe(true);
    });

    test('even n with odd k should not exist', () => {
        expect(solve(4, 3)).toBeNull();
    });

    test('larger valid case n=5, k=4', () => {
        const result = solve(5, 4);
        expect(result).toHaveLength(4);
        expect(result.every(perm => perm.split(' ').length === 5)).toBe(true);
    });

    test('single permutation not allowed', () => {
        expect(solve(4, 1)).toBeNull();
    });

    test('upper bound validation n=8, k=40320', () => {
        expect(solve(8, 40320)).toBeNull();
    });

    test('valid even case n=6, k=4', () => {
        const result = solve(6, 4);
        expect(result).toHaveLength(4);
        expect(result.every(perm => perm.split(' ').length === 6)).toBe(true);
    });
});
