// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/40.js';

describe('solve', () => {
    test('basic case with 3 nodes', () => {
        expect(solve(3, [1, 1, -1])).toEqual([3, 2, 1]);
    });

    test('5 nodes with mixed labels', () => {
        expect(solve(5, [1, -1, 1, 2, 1])).toEqual([4, 3, 5, 1, 2]);
    });

    test('8 nodes with higher label values', () => {
        expect(solve(8, [3, 1, 2, 1, -1, 1, 1, 2])).toEqual([6, 7, 2, 4, 3, 8, 5, 1]);
    });

    test('7 nodes with symmetric pattern', () => {
        expect(solve(7, [1, 1, 1, -1, 1, 1, 1])).toEqual([6, 5, 2, 1, 3, 4, 7]);
    });

    test('5 nodes with descending sequence', () => {
        expect(solve(5, [1, 1, 1, 1, -1])).toEqual([5, 4, 3, 2, 1]);
    });

    test('5 nodes with ascending sequence', () => {
        expect(solve(5, [-1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    test('5 nodes with alternating labels', () => {
        expect(solve(5, [-1, 1, 2, 1, 2])).toEqual([4, 5, 2, 3, 1]);
    });

    test('single node edge case', () => {
        expect(solve(1, [-1])).toEqual([1]);
    });

    test('two nodes minimal case', () => {
        expect(solve(2, [1, -1])).toEqual([2, 1]);
    });
});
