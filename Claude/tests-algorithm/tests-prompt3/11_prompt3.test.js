import { solve } from '../../../solutions-algorithm/11.js';

describe('solve', () => {
    test('handles example case [77]', () => {
        expect(solve([77])).toEqual([14]);
    });

    test('handles multiple numbers', () => {
        expect(solve([21, 40, 34])).toEqual([3, 4, 7]);
    });

    test('handles minimum valid input [10]', () => {
        expect(solve([10])).toEqual([1]);
    });

    test('handles maximum valid input [99]', () => {
        expect(solve([99])).toEqual([18]);
    });

    test('handles numbers ending in zero', () => {
        expect(solve([20, 30, 40, 50])).toEqual([2, 3, 4, 5]);
    });

    test('handles numbers with same digits', () => {
        expect(solve([11, 22, 33, 44])).toEqual([2, 4, 6, 8]);
    });

    test('handles consecutive numbers', () => {
        expect(solve([45, 46, 47, 48])).toEqual([9, 10, 11, 12]);
    });

    test('handles complete test case', () => {
        expect(solve([77, 21, 40, 34, 19, 84, 10, 99]))
            .toEqual([14, 3, 4, 7, 10, 12, 1, 18]);
    });
});
