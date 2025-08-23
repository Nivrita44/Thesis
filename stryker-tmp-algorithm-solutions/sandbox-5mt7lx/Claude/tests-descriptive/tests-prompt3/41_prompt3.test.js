// @ts-nocheck
import { solve } from '../../../solutions-descriptive/41.js';

describe('solve', () => {
    test('example from problem description', () => {
        const n = 4;
        const arr = [1, 2, 5, 10];
        const queries = [[1, 10]];
        expect(solve(n, arr, queries)).toEqual(['86']);
    });

    test('single element array', () => {
        const n = 1;
        const arr = [5];
        const queries = [[1, 1]];
        expect(solve(n, arr, queries)).toEqual(['5']);
    });

    test('array with negative numbers', () => {
        const n = 3;
        const arr = [-1, -2, -3];
        const queries = [[1, 6]];
        expect(solve(n, arr, queries)).toEqual(['-14']);
    });

    test('array with zeros', () => {
        const n = 3;
        const arr = [0, 0, 0];
        const queries = [[1, 6]];
        expect(solve(n, arr, queries)).toEqual(['0']);
    });

    test('multiple queries', () => {
        const n = 4;
        const arr = [1, 2, 5, 10];
        const queries = [[1, 4], [2, 6], [3, 8]];
        expect(solve(n, arr, queries)).toEqual(['30', '34', '45']);
    });

    test('query spanning entire range', () => {
        const n = 5;
        const arr = [1, 1, 1, 1, 1];
        const queries = [[1, 15]];
        expect(solve(n, arr, queries)).toEqual(['35']);
    });

    test('query with same start and end', () => {
        const n = 3;
        const arr = [2, 4, 6];
        const queries = [[1, 1], [3, 3], [6, 6]];
        expect(solve(n, arr, queries)).toEqual(['2', '8', '6']);
    });

    test('maximum allowed array size', () => {
        const n = 3e5;
        const arr = Array(n).fill(1);
        const queries = [[1, 1]];
        expect(solve(n, arr, queries)).toEqual(['1']);
    });
});
