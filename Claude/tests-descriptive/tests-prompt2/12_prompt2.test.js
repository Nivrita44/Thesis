import { maxSubarrayLengths } from '../../../solutions-descriptive/12.js';

describe('maxSubarrayLengths', () => {
    test('basic test case with small array', () => {
        const input = [{
            size: 2,
            queries: 2,
            values: [1, 10],
            updates: [[1, 10], [2, 2]]
        }];
        expect(maxSubarrayLengths(input)).toEqual([[0, 0, 0]]);
    });

    test('array with sequential values', () => {
        const input = [{
            size: 5,
            queries: 3,
            values: [1, 2, 3, 4, 5],
            updates: [[3, 7], [1, 4], [5, 2]]
        }];
        expect(maxSubarrayLengths(input)).toEqual([[4, 4, 4, 3]]);
    });

    test('larger array with mixed values', () => {
        const input = [{
            size: 8,
            queries: 5,
            values: [7, 4, 2, 4, 8, 2, 1, 4],
            updates: [[5, 4], [1, 10], [3, 2], [8, 11], [7, 7]]
        }];
        expect(maxSubarrayLengths(input)).toEqual([[3, 3, 4, 4, 4, 4]]);
    });

    test('single element array', () => {
        const input = [{
            size: 1,
            queries: 1,
            values: [5],
            updates: [[1, 3]]
        }];
        expect(maxSubarrayLengths(input)).toEqual([[0, 0]]);
    });

    test('array with all same values', () => {
        const input = [{
            size: 4,
            queries: 2,
            values: [3, 3, 3, 3],
            updates: [[2, 3], [4, 3]]
        }];
        expect(maxSubarrayLengths(input)).toEqual([[3, 3, 3]]);
    });

    test('multiple test cases together', () => {
        const input = [
            {
                size: 2,
                queries: 1,
                values: [1, 2],
                updates: [[1, 3]]
            },
            {
                size: 3,
                queries: 1,
                values: [4, 5, 6],
                updates: [[2, 1]]
            }
        ];
        expect(maxSubarrayLengths(input)).toEqual([[1, 2], [2, 1]]);
    });

    test('array with extreme values', () => {
        const input = [{
            size: 6,
            queries: 3,
            values: [999999, 1, -999999, 0, 1000000, -1000000],
            updates: [[3, 500000], [4, -500000], [1, 0]]
        }];
        expect(maxSubarrayLengths(input)).toEqual([[2, 3, 3, 2]]);
    });
});
