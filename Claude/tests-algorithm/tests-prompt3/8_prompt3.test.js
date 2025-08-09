import { solve } from '../../solutions-algorithm/8.js';

describe('solve', () => {
    test('example test case', () => {
        const n = 10;
        const arr = [1, 2, 3, 4, 1, 2, 3, 4, 100000, 99999];
        const queries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const expected = [6, 6, 6, 6, 6, 5, 4, 3, 2, 1];
        expect(solve(n, arr, queries)).toEqual(expected);
    });

    test('minimum size array', () => {
        const n = 1;
        const arr = [1];
        const queries = [1];
        expect(solve(n, arr, queries)).toEqual([1]);
    });

    test('array with all same elements', () => {
        const n = 5;
        const arr = [1, 1, 1, 1, 1];
        const queries = [1, 2, 3, 4, 5];
        expect(solve(n, arr, queries)).toEqual([1, 1, 1, 1, 1]);
    });

    test('array with all unique elements', () => {
        const n = 5;
        const arr = [1, 2, 3, 4, 5];
        const queries = [1, 3, 5];
        expect(solve(n, arr, queries)).toEqual([5, 3, 1]);
    });

    test('large array with repeating pattern', () => {
        const n = 8;
        const arr = [1, 2, 1, 2, 1, 2, 1, 2];
        const queries = [1, 4, 7];
        expect(solve(n, arr, queries)).toEqual([2, 2, 2]);
    });

    test('single query at start', () => {
        const n = 5;
        const arr = [5, 4, 3, 2, 1];
        const queries = [1];
        expect(solve(n, arr, queries)).toEqual([5]);
    });

    test('single query at end', () => {
        const n = 5;
        const arr = [5, 4, 3, 2, 1];
        const queries = [5];
        expect(solve(n, arr, queries)).toEqual([1]);
    });

    test('complex pattern with duplicates', () => {
        const n = 7;
        const arr = [1, 2, 2, 3, 1, 2, 3];
        const queries = [1, 3, 5, 7];
        expect(solve(n, arr, queries)).toEqual([3, 3, 2, 1]);
    });
});