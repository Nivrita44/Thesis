import { solve } from '../../solutions-descriptive/34.js';

describe('Magic Number Finder', () => {
    test('basic case with valid magic number 2', () => {
        expect(solve([3, 5, 2, 7], [0, 1, 1, 1])).toBe("2");
    });

    test('case with multiple valid magic numbers', () => {
        const result = solve([3, 1, 5, 2, 4], [1, 2, 3, 4, 5]);
        expect(['31415926', '6'].includes(result)).toBe(true);
    });

    test('impossible case with no valid magic number', () => {
        expect(solve([2, 3, 4, 7, 8, 9], [1, 2, 3, 6, 7, 8])).toBe("-1");
    });

    test('case with magic number 4', () => {
        expect(solve([21, 22, 25, 28, 20], [0, 1, 2, 1, 0])).toBe("4");
    });

    test('edge case with equal sums but different arrangements', () => {
        expect(solve([1, 1, 2, 3, 5, 8], [0, 0, 1, 1, 0, 0])).toBe("-1");
    });

    test('case with single element arrays', () => {
        expect(solve([5], [2])).toBe("3");
    });

    test('case with large numbers', () => {
        expect(solve([1000000, 999999], [0, 999999])).toBe("1000000");
    });

    test('case with all zeros', () => {
        expect(solve([0, 0, 0], [0, 0, 0])).toBe("1");
    });
});