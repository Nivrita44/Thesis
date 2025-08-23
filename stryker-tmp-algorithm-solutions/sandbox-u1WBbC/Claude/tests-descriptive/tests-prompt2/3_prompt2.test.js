// @ts-nocheck
import { solve } from '../../../solutions-descriptive/3.js';

describe('solve function tests', () => {
    test('basic adjacent ranges', () => {
        expect(solve(0, 1, 1, 2)).toBe(1);
    });

    test('overlapping ranges', () => {
        expect(solve(0, 2, 0, 2)).toBe(1);
    });

    test('equal ranges', () => {
        expect(solve(1, 3, 1, 3)).toBe(4);
    });

    test('partially overlapping ranges', () => {
        expect(solve(0, 2, 1, 5)).toBe(5);
    });

    test('large non-overlapping ranges', () => {
        expect(solve(9, 98, 244, 353)).toBe(374);
    });

    test('small disjoint ranges', () => {
        expect(solve(1, 2, 4, 5)).toBe(1);
    });

    test('ranges at power of 2 boundary', () => {
        expect(solve(1023, 1025, 1023, 1025)).toBe(4);
    });

    test('maximum range test', () => {
        expect(solve(0, 1048575, 0, 1048575)).toBe(1048576);
    });

    test('zero-width range', () => {
        expect(solve(5, 5, 10, 11)).toBe(0);
    });
});
