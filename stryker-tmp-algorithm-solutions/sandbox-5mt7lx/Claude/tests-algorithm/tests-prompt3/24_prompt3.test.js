// @ts-nocheck
import { solve } from '../../../solutions-algorithm/24.js';

describe('solve', () => {
    test('example case [3]', () => {
        expect(solve([3])).toEqual([1]);
    });

    test('example case [5]', () => {
        expect(solve([5])).toEqual([2]); 
    });

    test('minimum input [2]', () => {
        expect(solve([2])).toEqual([1]);
    });

    test('large input [1000000]', () => {
        expect(solve([1000000])).toEqual([500000]);
    });

    test('multiple numbers', () => {
        expect(solve([4, 6, 8])).toEqual([2, 3, 4]);
    });

    test('odd numbers', () => {
        expect(solve([3, 5, 7, 9])).toEqual([1, 2, 3, 4]);
    });

    test('even numbers', () => {
        expect(solve([2, 4, 6, 8])).toEqual([1, 2, 3, 4]);
    });

    test('empty array', () => {
        expect(solve([])).toEqual([]);
    });

    test('single large number', () => {
        expect(solve([999999])).toEqual([499999]);
    });
});
