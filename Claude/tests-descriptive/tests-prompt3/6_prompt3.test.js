import { solve } from '../../solutions-descriptive/6.js';

describe('solve', () => {
    test('example test case with small array [1,7,9]', () => {
        expect(solve(3, [1, 7, 9])).toBe(3);
    });

    test('array with repeated elements [179,1,1,179]', () => {
        expect(solve(4, [179, 1, 1, 179])).toBe(9);
    });

    test('array with mirrored pattern [1,2,3,3,2]', () => {
        expect(solve(5, [1, 2, 3, 3, 2])).toBe(39);
    });

    test('larger array with mixed elements', () => {
        expect(solve(12, [8, 2, 5, 3, 9, 1, 8, 12, 9, 9, 9, 4])).toBe(123);
    });

    test('single element array with max value', () => {
        expect(solve(1, [1000000000])).toBe(3);
    });

    test('array with all same elements [5,5,5]', () => {
        expect(solve(3, [5, 5, 5])).toBe(27);
    });

    test('array with consecutive integers [1,2,3,4,5]', () => {
        expect(solve(5, [1, 2, 3, 4, 5])).toBe(15);
    });

    test('array with power of 2 elements [2,4,8,16]', () => {
        expect(solve(4, [2, 4, 8, 16])).toBe(21);
    });
});