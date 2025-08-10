import { solve } from '../../../solutions-algorithm/6.js';

describe('solve function tests', () => {
    test('typical case with mixed numbers', () => {
        expect(solve(8, [1, 2, 2, 3, 1, 5, 6, 1])).toBe(9);
    });

    test('case with large number differences', () => {
        expect(solve(5, [1, 2, 3, 100, 200])).toBe(297);
    });

    test('all same numbers should return zero', () => {
        expect(solve(4, [3, 3, 3, 3])).toBe(0);
    });

    test('repeated numbers with max difference', () => {
        expect(solve(6, [7, 8, 3, 1, 1, 8])).toBe(14);
    });

    test('minimum array size of 4', () => {
        expect(solve(4, [1, 2, 3, 4])).toBe(4);
    });

    test('large array with repeated numbers', () => {
        const arr = Array(1000).fill(5);
        arr[0] = 1;
        arr[1] = 2;
        arr[998] = 9;
        arr[999] = 10;
        expect(solve(1000, arr)).toBe(16);
    });

    test('array with negative numbers', () => {
        expect(solve(6, [-5, -3, 0, 2, 4, 6])).toBe(14);
    });

    test('array with all negative numbers', () => {
        expect(solve(5, [-10, -8, -6, -4, -2])).toBe(12);
    });
});
