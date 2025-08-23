// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/19.js';

describe('GCD function tests', () => {
    test('Basic GCD calculation of coprime numbers', () => {
        expect(solve(7, 13)).toBe(1);
    });

    test('GCD of equal numbers', () => {
        expect(solve(12, 12)).toBe(12);
    });

    test('GCD of consecutive numbers', () => {
        expect(solve(15, 16)).toBe(1);
    });

    test('GCD with one number being multiple of other', () => {
        expect(solve(24, 8)).toBe(8);
    });

    test('GCD of large numbers', () => {
        expect(solve(1000000, 500000)).toBe(500000);
    });

    test('GCD with zero as one parameter', () => {
        expect(solve(156, 0)).toBe(156);
    });

    test('GCD of negative numbers', () => {
        expect(solve(-48, 18)).toBe(6);
    });

    test('GCD of typical composite numbers', () => {
        expect(solve(210, 420)).toBe(210);
    });

    test('GCD of prime numbers', () => {
        expect(solve(17, 23)).toBe(1);
    });
});
