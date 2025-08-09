import { solve } from '../../solutions-algorithm/17.js';

describe('solve', () => {
    test('example case with [3, 15]', () => {
        expect(solve([3, 15])).toStrictEqual([3, 2]);
    });

    test('single input of 3', () => {
        expect(solve([3])).toStrictEqual([3]);
    });

    test('single input of 2', () => {
        expect(solve([2])).toStrictEqual([2]);
    });

    test('multiple inputs with mix of 3s and non-3s', () => {
        expect(solve([3, 4, 3, 5])).toStrictEqual([3, 2, 3, 2]);
    });

    test('array with all non-3 values', () => {
        expect(solve([4, 5, 6, 7])).toStrictEqual([2, 2, 2, 2]);
    });

    test('array with all 3s', () => {
        expect(solve([3, 3, 3])).toStrictEqual([3, 3, 3]);
    });

    test('edge case with upper bound input', () => {
        expect(solve([100])).toStrictEqual([2]);
    });

    test('mixed values including bounds', () => {
        expect(solve([2, 3, 100, 50, 3])).toStrictEqual([2, 3, 2, 2, 3]);
    });
});