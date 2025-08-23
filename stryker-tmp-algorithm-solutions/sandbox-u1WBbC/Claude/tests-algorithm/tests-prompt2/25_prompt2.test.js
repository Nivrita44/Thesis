// @ts-nocheck
import { solve } from '../../../solutions-algorithm/25.js';

describe('solve function tests', () => {
    test('basic case with even number of 2s', () => {
        const input = [{ n: 6, arr: [2, 2, 1, 2, 1, 2] }];
        expect(solve(input)).toEqual([2]);
    });

    test('no 2s in array', () => {
        const input = [{ n: 4, arr: [1, 1, 1, 1] }];
        expect(solve(input)).toEqual([-1]);
    });

    test('odd number of 2s', () => {
        const input = [{ n: 5, arr: [2, 1, 2, 2, 1] }];
        expect(solve(input)).toEqual([-1]);
    });

    test('multiple test cases in single input', () => {
        const input = [
            { n: 6, arr: [2, 2, 1, 2, 1, 2] },
            { n: 3, arr: [1, 2, 1] },
            { n: 4, arr: [1, 1, 1, 1] }
        ];
        expect(solve(input)).toEqual([2, -1, -1]);
    });

    test('all elements are 2s', () => {
        const input = [{ n: 4, arr: [2, 2, 2, 2] }];
        expect(solve(input)).toEqual([2]);
    });

    test('2s at array boundaries', () => {
        const input = [{ n: 4, arr: [2, 1, 1, 2] }];
        expect(solve(input)).toEqual([1]);
    });

    test('large array with even 2s', () => {
        const largeArr = new Array(1000).fill(1);
        largeArr[0] = 2;
        largeArr[999] = 2;
        const input = [{ n: 1000, arr: largeArr }];
        expect(solve(input)).toEqual([1]);
    });

    test('empty array case', () => {
        const input = [{ n: 0, arr: [] }];
        expect(solve(input)).toEqual([-1]);
    });
});
