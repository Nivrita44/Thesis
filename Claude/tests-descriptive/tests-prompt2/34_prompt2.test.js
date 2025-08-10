import { solve } from '../../../solutions-descriptive/34.js';

describe('solve', () => {
    test('basic case with valid modulo solution', () => {
        expect(solve([3, 5, 2, 7], [0, 1, 1, 1])).toBe("2");
    });

    test('case with equal arrays returns next largest value', () => {
        expect(solve([1, 2, 3], [1, 2, 3])).toBe("4"); 
    });

    test('case with impossible modulo solution', () => {
        expect(solve([2, 3, 4, 7, 8, 9], [1, 2, 3, 6, 7, 8])).toBe("-1");
    });

    test('case with multiple possible answers', () => {
        const result = solve([3, 1, 5, 2, 4], [1, 2, 3, 4, 5]);
        expect(['6', '31415926']).toContain(result);
    });

    test('case with larger numbers', () => {
        expect(solve([21, 22, 25, 28, 20], [0, 1, 2, 1, 0])).toBe("4");
    });

    test('case with unequal sums', () => {
        expect(solve([1, 2], [2, 2])).toBe("-1");
    });

    test('edge case with single element arrays', () => {
        expect(solve([5], [2])).toBe("3");
    });

    test('case with boundary value exceeding limit', () => {
        expect(solve([1000000001], [1])).toBe("-1");
    });
});
