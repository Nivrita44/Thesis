import { solve } from '../../solutions-algorithm/34.js';

describe('solve', () => {
    test('returns array with each number decremented by 1', () => {
        expect(solve([10])).toEqual([9]);
    });

    test('handles example input from problem description', () => {
        expect(solve([10, 7, 21])).toEqual([9, 6, 20]);
    });

    test('handles minimum valid input', () => {
        expect(solve([2])).toEqual([1]);
    });

    test('handles maximum valid input', () => {
        expect(solve([1000])).toEqual([999]);
    });

    test('handles multiple numbers in array', () => {
        expect(solve([5, 4, 3, 2])).toEqual([4, 3, 2, 1]);
    });

    test('handles array with repeated numbers', () => {
        expect(solve([10, 10, 10])).toEqual([9, 9, 9]);
    });

    test('handles array with mixed values', () => {
        expect(solve([1000, 2, 500, 100])).toEqual([999, 1, 499, 99]);
    });

    test('handles single-element array', () => {
        expect(solve([42])).toEqual([41]);
    });
});