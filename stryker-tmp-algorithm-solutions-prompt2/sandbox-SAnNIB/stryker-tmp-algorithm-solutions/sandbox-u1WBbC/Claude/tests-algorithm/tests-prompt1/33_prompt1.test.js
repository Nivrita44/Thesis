// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/33.js';

describe('solve', () => {
    test('example case from description', () => {
        const input = [{ n: 3, a: [3, 2, 1] }];
        expect(solve(input)).toEqual([3]);
    });

    test('minimum input case', () => {
        const input = [{ n: 1, a: [1] }];
        expect(solve(input)).toEqual([1]);
    });

    test('case where operation can be performed once', () => {
        const input = [{ n: 4, a: [4, 3, 2, 1] }];
        expect(solve(input)).toEqual([6]);
    });

    test('case where multiple operations are possible', () => {
        const input = [{ n: 5, a: [5, 4, 3, 2, 1] }];
        expect(solve(input)).toEqual([10]);
    });

    test('case with non-sequential numbers', () => {
        const input = [{ n: 4, a: [2, 4, 1, 3] }];
        expect(solve(input)).toEqual([4]);
    });

    test('large input case', () => {
        const input = [{ n: 6, a: [6, 5, 4, 3, 2, 1] }];
        expect(solve(input)).toEqual([15]);
    });

    test('case with repeated numbers', () => {
        const input = [{ n: 4, a: [2, 2, 2, 2] }];
        expect(solve(input)).toEqual([4]);
    });

    test('edge case with maximum single value', () => {
        const input = [{ n: 2, a: [1000000000000, 1] }];
        expect(solve(input)).toEqual([2]);
    });

    test('case where all operations are possible', () => {
        const input = [{ n: 3, a: [1, 1, 1] }];
        expect(solve(input)).toEqual([3]);
    });

    test('multiple test cases together', () => {
        const input = [
            { n: 3, a: [3, 2, 1] },
            { n: 1, a: [1] },
            { n: 4, a: [2, 4, 1, 3] }
        ];
        expect(solve(input)).toEqual([3, 1, 4]);
    });
});