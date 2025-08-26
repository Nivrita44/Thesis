import { solve } from '../../../solutions-algorithm/4.js';

describe('solve', () => {
    test('example test case 1', () => {
        expect(solve([4, 7, 3, 5])).toStrictEqual([-3, 2, -4, -2]);
    });

    test('minimum length array with 2 elements', () => {
        expect(solve([1, 2])).toStrictEqual([-1, 1]);
    });

    test('ascending sequence', () => {
        expect(solve([1, 2, 3, 4, 5])).toStrictEqual([-4, -3, -2, -1, 1]);
    });

    test('array with duplicate maximum', () => {
        expect(solve([4, 9, 4])).toStrictEqual([-5, 5, -5]);
    });

    test('array with all equal elements', () => {
        expect(solve([4, 4, 4, 4])).toStrictEqual([0, 0, 0, 0]);
    });

    test('array with maximum in middle', () => {
        expect(solve([3, 8, 2, 1])).toStrictEqual([-5, 5, -6, -7]);
    });

    test('array with large numbers', () => {
        expect(solve([1000000000, 999999999, 999999998])).toStrictEqual([1, -1, -2]);
    });

    test('array with minimum allowed values', () => {
        expect(solve([1, 1, 1, 1, 1])).toStrictEqual([0, 0, 0, 0, 0]);
    });
});
