import { solve } from '../../solutions-algorithm/11.js';

describe('solve function tests', () => {
    test('basic case with mixed two-digit numbers', () => {
        expect(solve([77, 21, 40])).toEqual([14, 3, 4]);
    });

    test('numbers with zero in ones place', () => {
        expect(solve([10, 20, 30, 40])).toEqual([1, 2, 3, 4]);
    });

    test('numbers with zero in tens place', () => {
        expect(solve([01, 02, 03])).toEqual([1, 2, 3]);
    });

    test('maximum two-digit numbers', () => {
        expect(solve([98, 99])).toEqual([17, 18]);
    });

    test('single element array', () => {
        expect(solve([45])).toEqual([9]);
    });

    test('empty array', () => {
        expect(solve([])).toEqual([]);
    });

    test('numbers with repeating digits', () => {
        expect(solve([11, 22, 33, 44])).toEqual([2, 4, 6, 8]);
    });

    test('large array performance test', () => {
        const largeInput = Array.from({ length: 1000 }, () => 55);
        const expectedOutput = Array(1000).fill(10);
        expect(solve(largeInput)).toEqual(expectedOutput);
    });
});