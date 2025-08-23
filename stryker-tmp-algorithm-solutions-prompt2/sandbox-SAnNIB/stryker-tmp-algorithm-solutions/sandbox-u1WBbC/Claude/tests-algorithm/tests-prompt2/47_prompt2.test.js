// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/47.js';

describe('solve function tests', () => {
    test('all numbers in sequence', () => {
        expect(solve(3, 2, [1, 2, 3])).toBe(0);
    });

    test('scrambled numbers', () => {
        expect(solve(3, 1, [3, 1, 2])).toBe(1);
    });

    test('missing number in middle', () => {
        expect(solve(4, 2, [1, 3, 2, 4])).toBe(1);
    });

    test('multiple missing numbers', () => {
        expect(solve(4, 2, [2, 3, 1, 4])).toBe(2);
    });

    test('large sequence with k=1', () => {
        expect(solve(10, 1, [2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(1);
    });

    test('empty array', () => {
        expect(solve(5, 2, [])).toBe(3);
    });

    test('single element array', () => {
        expect(solve(5, 3, [2])).toBe(2);
    });

    test('large k value', () => {
        expect(solve(100, 50, [2, 3, 4, 5])).toBe(2);
    });
});
