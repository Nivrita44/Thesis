import { solve } from '../../solutions-algorithm/33.js';

describe('solve', () => {
    test('example case from problem description', () => {
        const input = [{ n: 5, a: [2, 4, 6, 2, 5] }];
        expect(solve(input)).toEqual([10]);
    });

    test('another example case', () => {
        const input = [{ n: 5, a: [5, 4, 4, 5, 1] }];
        expect(solve(input)).toEqual([11]);
    });

    test('minimum input size', () => {
        const input = [{ n: 1, a: [1] }];
        expect(solve(input)).toEqual([1]);
    });

    test('multiple test cases at once', () => {
        const input = [
            { n: 4, a: [6, 8, 2, 3] },
            { n: 1, a: [1] }
        ];
        expect(solve(input)).toEqual([10, 1]);
    });

    test('large numbers in array', () => {
        const input = [{ n: 3, a: [1000000000000, 2, 3] }];
        expect(solve(input)).toEqual([1000000000002]);
    });

    test('array with identical elements', () => {
        const input = [{ n: 4, a: [3, 3, 3, 3] }];
        expect(solve(input)).toEqual([7]);
    });

    test('complex case with multiple operations', () => {
        const input = [{ n: 6, a: [1, 2, 3, 4, 5, 6] }];
        expect(solve(input)).toEqual([15]);
    });

    test('edge case with maximum possible value', () => {
        const input = [{ n: 3, a: [999999999999, 999999999999, 999999999999] }];
        expect(solve(input)).toEqual([1000000000001]);
    });
});