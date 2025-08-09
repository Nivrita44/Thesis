import { solve } from '../../solutions-algorithm/27.js';

describe('solve', () => {
    test('basic example test', () => {
        expect(solve([1, 9, 10, 34])).toEqual([0, 1, 1, 3]);
    });

    test('large number test', () => {
        expect(solve([880055535])).toEqual([88005553]);
    });

    test('sequence with zeros', () => {
        expect(solve([0, 8, 19, 29])).toEqual([0, 0, 2, 3]);
    });

    test('all single digits', () => {
        expect(solve([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 1]);
    });

    test('numbers ending in 9', () => {
        expect(solve([19, 29, 39, 99])).toEqual([2, 3, 4, 10]);
    });

    test('consecutive numbers around tens', () => {
        expect(solve([98, 99, 100, 101])).toEqual([10, 10, 10, 10]);
    });

    test('edge case with max value', () => {
        expect(solve([999999999])).toEqual([100000000]);
    });

    test('mixed numbers test', () => {
        expect(solve([5, 15, 95, 195])).toEqual([0, 1, 10, 20]);
    });
});