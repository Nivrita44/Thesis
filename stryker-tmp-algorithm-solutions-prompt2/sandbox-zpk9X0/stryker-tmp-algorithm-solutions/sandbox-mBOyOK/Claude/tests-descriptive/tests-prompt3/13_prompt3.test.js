// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/13.js';

describe('Good Subarrays Counter', () => {
    test('basic example with all equal elements', () => {
        expect(solve([[1, 1, 1, 1]])).toStrictEqual([10]);
    });

    test('example with mixed values', () => {
        expect(solve([[1, 10, 2, 3, 3]])).toStrictEqual([11]);
    });

    test('larger example with various numbers', () => {
        expect(solve([[6, 3, 2, 3, 5, 3, 4, 2, 3, 5]])).toStrictEqual([42]);
    });

    test('single element array', () => {
        expect(solve([[5]])).toStrictEqual([1]);
    });

    test('two element array', () => {
        expect(solve([[1, 1]])).toStrictEqual([3]);
    });

    test('multiple test cases at once', () => {
        expect(solve([[1, 1], [2, 2, 2], [3, 3, 3, 3]])).toStrictEqual([3, 6, 10]);
    });

    test('array with maximum allowed value', () => {
        expect(solve([[10, 10, 10]])).toStrictEqual([6]);
    });

    test('array with alternating values', () => {
        expect(solve([[1, 2, 1, 2, 1]])).toStrictEqual([9]);
    });

    test('edge case with all different values', () => {
        expect(solve([[1, 2, 3, 4, 5]])).toStrictEqual([9]);
    });
});
