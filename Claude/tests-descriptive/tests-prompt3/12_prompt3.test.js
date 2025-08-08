import { maxSubarrayLengths } from '../../solutions-descriptive/12.js';

describe('maxSubarrayLengths', () => {
    test('basic test case with 2 sweaters', () => {
        const input = [{
            size: 2,
            queries: 2,
            values: [1, 10],
            updates: [[1, 10], [2, 2]]
        }];
        expect(maxSubarrayLengths(input)).toEqual([[7, 7, 6]]);
    });

    test('sequential values test case', () => {
        const input = [{
            size: 5,
            queries: 3,
            values: [1, 2, 3, 4, 5],
            updates: [[3, 7], [1, 4], [5, 2]]
        }];
        expect(maxSubarrayLengths(input)).toEqual([[0, 2, 1, 1]]);
    });

    test('random values test case', () => {
        const input = [{
            size: 8,
            queries: 5,
            values: [7, 4, 2, 4, 8, 2, 1, 4],
            updates: [[5, 4], [1, 10], [3, 2], [8, 11], [7, 7]]
        }];
        expect(maxSubarrayLengths(input)).toEqual([[3, 3, 5, 5, 6, 6]]);
    });

    test('single sweater test case', () => {
        const input = [{
            size: 1,
            queries: 1,
            values: [5],
            updates: [[1, 3]]
        }];
        expect(maxSubarrayLengths(input)).toEqual([[0, 0]]);
    });

    test('all same values test case', () => {
        const input = [{
            size: 4,
            queries: 2,
            values: [6, 6, 6, 6],
            updates: [[2, 8], [3, 4]]
        }];
        expect(maxSubarrayLengths(input)).toEqual([[0, 1, 1]]);
    });

    test('max size values test case', () => {
        const input = [{
            size: 200000,
            queries: 1,
            values: Array(200000).fill(1),
            updates: [[1, 1000000000]]
        }];
        expect(maxSubarrayLengths(input)[0][0]).toBe(0);
    });

    test('multiple test cases', () => {
        const input = [
            {
                size: 3,
                queries: 1,
                values: [4, 2, 6],
                updates: [[2, 5]]
            },
            {
                size: 2,
                queries: 1,
                values: [1, 2],
                updates: [[1, 3]]
            }
        ];
        expect(maxSubarrayLengths(input)).toEqual([[2, 1], [0, 1]]);
    });
});