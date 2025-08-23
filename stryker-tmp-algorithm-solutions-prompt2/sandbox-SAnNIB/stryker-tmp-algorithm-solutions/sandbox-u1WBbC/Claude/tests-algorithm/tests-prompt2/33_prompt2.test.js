// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/33.js';

describe('solve', () => {
    test('basic test case with small array', () => {
        expect(solve([{n: 5, a: [2, 4, 6, 2, 5]}])).toEqual([10]);
    });

    test('array with duplicate values', () => {
        expect(solve([{n: 5, a: [5, 4, 4, 5, 1]}])).toEqual([11]); 
    });

    test('multiple test cases', () => {
        const input = [
            {n: 5, a: [2, 4, 6, 2, 5]},
            {n: 5, a: [5, 4, 4, 5, 1]},
            {n: 4, a: [6, 8, 2, 3]}
        ];
        expect(solve(input)).toEqual([10, 11, 10]);
    });

    test('single element array', () => {
        expect(solve([{n: 1, a: [1]}])).toEqual([1]);
    });

    test('array with zeros', () => {
        expect(solve([{n: 3, a: [0, 0, 0]}])).toEqual([3]);
    });

    test('large array test', () => {
        const n = 1000;
        const a = Array(n).fill(1);
        expect(solve([{n, a}])[0]).toBeGreaterThanOrEqual(n);
    });

    test('empty test cases array', () => {
        expect(solve([])).toEqual([]);
    });

    test('array with negative numbers', () => {
        expect(solve([{n: 4, a: [-1, -2, -3, -4]}])).toEqual([4]);
    });
});
