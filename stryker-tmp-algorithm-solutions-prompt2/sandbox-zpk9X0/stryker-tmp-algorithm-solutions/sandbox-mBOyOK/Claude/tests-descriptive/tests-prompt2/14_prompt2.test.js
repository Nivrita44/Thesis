// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/14.js';

describe('solve function test cases', () => {
    test('basic case with single stop', () => {
        expect(solve(1, 3, 5, [0])).toBe(4);
    });

    test('multiple stops with varying positions', () => {
        expect(solve(3, 2, 5, [2, 5, 5])).toBe(5);
    });

    test('stop position equals total length', () => {
        expect(solve(1, 10, 10, [10])).toBe(20);
    });

    test('consecutive stops with small step size', () => {
        expect(solve(10, 1, 10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(0);
    });

    test('two stops at same position', () => {
        expect(solve(2, 1, 2, [0, 0])).toBe(2);
    });

    test('two stops with gap', () => {
        expect(solve(2, 1, 2, [0, 2])).toBe(1);
    });

    test('large values test', () => {
        expect(solve(3, 100, 1000, [50, 500, 900])).toBe(900);
    });

    test('edge case with zero step size', () => {
        expect(solve(1, 0, 5, [2])).toBe(2);
    });

    test('edge case with all zeros', () => {
        expect(solve(3, 0, 0, [0, 0, 0])).toBe(0);
    });
});
