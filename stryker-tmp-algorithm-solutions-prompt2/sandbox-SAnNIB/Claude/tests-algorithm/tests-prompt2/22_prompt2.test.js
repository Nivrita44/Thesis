// @ts-nocheck
import { solve } from '../../../solutions-algorithm/22.js';

describe('solve function tests', () => {
    test('basic sequence with mixed numbers', () => {
        expect(solve([1, 3, 5, 6])).toEqual(['First', 'Second', 'First', 'Second']);
    });

    test('all numbers divisible by 3', () => {
        expect(solve([3, 6, 9, 12])).toEqual(['Second', 'Second', 'Second', 'Second']);
    });

    test('no numbers divisible by 3', () => {
        expect(solve([1, 2, 4, 5])).toEqual(['First', 'First', 'First', 'First']);
    });

    test('empty array input', () => {
        expect(solve([])).toEqual([]);
    });

    test('single element arrays', () => {
        expect(solve([3])).toEqual(['Second']);
        expect(solve([1])).toEqual(['First']);
    });

    test('large numbers', () => {
        expect(solve([999999999, 1000000000, 1000000001])).toEqual(['Second', 'First', 'First']);
    });

    test('negative numbers', () => {
        expect(solve([-3, -2, -1])).toEqual(['Second', 'First', 'First']);
    });

    test('zero value', () => {
        expect(solve([0])).toEqual(['Second']);
    });
});
