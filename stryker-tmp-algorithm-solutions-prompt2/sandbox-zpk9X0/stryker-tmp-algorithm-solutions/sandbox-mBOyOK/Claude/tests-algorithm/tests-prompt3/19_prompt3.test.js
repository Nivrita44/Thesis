// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/19.js';

describe('solve', () => {
    test('simple step of 5', () => {
        expect(solve(5)).toBe(1);
    });

    test('example from description - 12 steps', () => {
        expect(solve(12)).toBe(3);
    });

    test('single step case', () => {
        expect(solve(1)).toBe(1);
    });

    test('exact multiple of 5', () => {
        expect(solve(25)).toBe(5);
    });

    test('needs one extra step', () => {
        expect(solve(6)).toBe(2);
    });

    test('large number', () => {
        expect(solve(1000000)).toBe(200000);
    });

    test('remainder of 4', () => {
        expect(solve(9)).toBe(2);
    });

    test('remainder of 3', () => {
        expect(solve(8)).toBe(2);
    });

    test('edge case - minimum input', () => {
        expect(solve(1)).toBe(1);
    });
});
