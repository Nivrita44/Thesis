// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/1.js';

describe('solve', () => {
    test('basic example from description', () => {
        expect(solve(4, 6, 3)).toBe(2);
    });

    test('impossible conversion due to limited k', () => {
        expect(solve(4, 5, 3)).toBe(-1);
    });

    test('impossible with k=2', () => {
        expect(solve(4, 6, 2)).toBe(-1);
    });

    test('larger numbers requiring multiple steps', () => {
        expect(solve(10, 45, 3)).toBe(3);
    });

    test('conversion with larger k value', () => {
        expect(solve(780, 23, 42)).toBe(3);
    });

    test('conversion from small to large number', () => {
        expect(solve(1, 982800, 13)).toBe(6);
    });

    test('conversion from larger to smaller number', () => {
        expect(solve(11, 270, 23)).toBe(3);
    });

    test('edge case with x=y', () => {
        expect(solve(42, 42, 5)).toBe(0);
    });

    test('edge case with x=1, y=1', () => {
        expect(solve(1, 1, 1000)).toBe(0);
    });

    test('maximum allowed inputs', () => {
        expect(solve(1000000, 1000000, 1000000)).toBe(0);
    });
});
