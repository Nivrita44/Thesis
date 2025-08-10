import { solve } from '../../../solutions-algorithm/43.js';

describe('solve function tests', () => {
    test('basic case with some inversions', () => {
        expect(solve(5, [4, 0, 3, 1, 2])).toEqual([3, 2]);
    });

    test('case with all elements sorted except last', () => {
        expect(solve(5, [1, 2, 3, 4, 0])).toEqual([3, 4]);
    });

    test('mixed order with multiple optimal swaps', () => {
        expect(solve(5, [1, 3, 4, 0, 2])).toEqual([4, 5]);
    });

    test('already sorted array', () => {
        expect(solve(5, [0, 1, 2, 3, 4])).toEqual([0, 10]);
    });

    test('reverse sorted array', () => {
        expect(solve(5, [4, 3, 2, 1, 0])).toEqual([6, 1]);
    });

    test('array with duplicate values', () => {
        expect(solve(4, [2, 2, 1, 1])).toEqual([1, 4]);
    });

    test('minimum size array', () => {
        expect(solve(2, [1, 0])).toEqual([0, 1]);
    });

    test('larger array case', () => {
        const arr = Array.from({length: 20}, (_, i) => 19 - i);
        expect(solve(20, arr)[0]).toBeLessThan(190);
    });
});
