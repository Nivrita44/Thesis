import { solve } from '../../../solutions-algorithm/35.js';

describe('solve function tests', () => {
    test('basic case with small numbers', () => {
        expect(solve([[5, 2]]))
            .toStrictEqual([2]);
    });

    test('when k is greater than num', () => {
        expect(solve([[3, 5]]))
            .toStrictEqual([3]);
    });

    test('power of k case', () => {
        expect(solve([[16, 4]]))
            .toStrictEqual([1]);
    });

    test('multiple test cases', () => {
        expect(solve([[5, 2], [3, 5], [16, 4]]))
            .toStrictEqual([2, 3, 1]);
    });

    test('when k is 1', () => {
        expect(solve([[10, 1]]))
            .toStrictEqual([10]);
    });

    test('larger numbers', () => {
        expect(solve([[100, 3]]))
            .toStrictEqual([4]);
    });

    test('very large number case', () => {
        expect(solve([[6492, 10]]))
            .toStrictEqual([21]);
    });

    test('empty array case', () => {
        expect(solve([]))
            .toStrictEqual([]);
    });
});
