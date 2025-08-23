// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/5.js';

describe('solve', () => {
    test('example from description - sequence with one duplicate', () => {
        expect(solve([3, 1, 4, 3])).toBe(1);
    });

    test('sequence with all same numbers', () => {
        expect(solve([1, 1, 1, 1, 1])).toBe(4);
    });

    test('single element sequence', () => {
        expect(solve([1])).toBe(0);
    });

    test('sequence with no duplicates', () => {
        expect(solve([6, 5, 4, 3, 2, 1])).toBe(0);
    });

    test('sequence with multiple duplicates', () => {
        expect(solve([1, 2, 1, 7, 1, 2, 1])).toBe(5);
    });

    test('sequence with duplicates at start', () => {
        expect(solve([1, 1, 2, 3, 4, 5])).toBe(1);
    });

    test('sequence with duplicates at end', () => {
        expect(solve([5, 4, 3, 2, 1, 1])).toBe(5);
    });

    test('long sequence with one duplicate', () => {
        const arr = Array.from({length: 100000}, (_, i) => i + 1);
        arr.push(1);
        expect(solve(arr)).toBe(100000);
    });
});
