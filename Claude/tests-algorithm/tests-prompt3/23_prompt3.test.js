import { solve } from '../../solutions-algorithm/23.js';

describe('solve', () => {
    test('example case with multiple inputs', () => {
        const input = [
            [7, 5, 12345],
            [5, 0, 4], 
            [10, 5, 15]
        ];
        expect(solve(input)).toEqual([12339, 0, 15]);
    });

    test('large numbers', () => {
        const input = [[499999993, 9, 1000000000]];
        expect(solve(input)).toEqual([999999995]);
    });

    test('small numbers', () => {
        const input = [[2, 0, 10]];
        expect(solve(input)).toEqual([10]);
    });

    test('when n equals y', () => {
        const input = [[5, 3, 3]];
        expect(solve(input)).toEqual([3]);
    });

    test('consecutive modulos', () => {
        const input = [
            [3, 0, 10],
            [3, 1, 10],
            [3, 2, 10]
        ];
        expect(solve(input)).toEqual([9, 10, 8]);
    });

    test('edge case with maximum values', () => {
        const input = [[1000000000, 999999999, 1000000000]];
        expect(solve(input)).toEqual([999999999]);
    });

    test('multiple test cases with same x,y but different n', () => {
        const input = [
            [10, 5, 15],
            [10, 5, 25],
            [10, 5, 35]
        ];
        expect(solve(input)).toEqual([15, 25, 35]);
    });

    test('when x equals n', () => {
        const input = [[100, 50, 100]];
        expect(solve(input)).toEqual([50]);
    });
});