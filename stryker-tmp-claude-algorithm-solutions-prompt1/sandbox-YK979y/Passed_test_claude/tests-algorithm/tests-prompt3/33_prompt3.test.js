import { solve } from '../../../solutions-algorithm/33.js';

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

    test('array with identical elements', () => {
        const input = [{ n: 4, a: [3, 3, 3, 3] }];
        expect(solve(input)).toEqual([7]);
    });
});