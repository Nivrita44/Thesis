import { solve } from '../../solutions-algorithm/3.js';

describe('solve function tests', () => {
    test('array with consecutive numbers should return YES', () => {
        expect(solve(3, [1, 2, 2])).toBe('YES');
    });

    test('array with all same numbers should return YES', () => {
        expect(solve(4, [5, 5, 5, 5])).toBe('YES');
    });

    test('array with gap should return NO', () => {
        expect(solve(3, [1, 2, 4])).toBe('NO');
    });

    test('array with multiple gaps should return NO', () => {
        expect(solve(5, [1, 3, 5, 7, 9])).toBe('NO');
    });

    test('single element array should return YES', () => {
        expect(solve(1, [100])).toBe('YES');
    });

    test('large numbers with no gaps should return YES', () => {
        expect(solve(3, [1000000, 1000000, 1000001])).toBe('YES');
    });

    test('unsorted input array should still work correctly', () => {
        expect(solve(4, [4, 2, 1, 3])).toBe('YES');
    });

    test('array with negative numbers should work correctly', () => {
        expect(solve(4, [-2, -1, -1, 0])).toBe('YES');
    });
});