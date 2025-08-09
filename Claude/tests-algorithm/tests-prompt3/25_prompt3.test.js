import { solve } from '../../solutions-algorithm/25.js';

describe('solve', () => {
    test('example case from description', () => {
        expect(solve([{ n: 6, arr: [2, 2, 1, 2, 1, 2] }])).toEqual([2]);
    });

    test('case where no solution exists (odd number of 2s)', () => {
        expect(solve([{ n: 3, arr: [1, 2, 1] }])).toEqual([-1]);
    });

    test('case with all 1s', () => {
        expect(solve([{ n: 4, arr: [1, 1, 1, 1] }])).toEqual([-1]);
    });

    test('minimum length case with solution', () => {
        expect(solve([{ n: 2, arr: [2, 2] }])).toEqual([1]);
    });

    test('maximum length case with balanced 2s', () => {
        const arr = Array(1000).fill(2);
        expect(solve([{ n: 1000, arr }])).toEqual([500]);
    });

    test('multiple test cases in single input', () => {
        expect(solve([
            { n: 4, arr: [2, 2, 2, 2] },
            { n: 3, arr: [2, 1, 2] },
            { n: 5, arr: [1, 1, 1, 1, 1] }
        ])).toEqual([2, -1, -1]);
    });

    test('edge case with 2s at boundaries', () => {
        expect(solve([{ n: 6, arr: [2, 1, 1, 1, 1, 2] }])).toEqual([1]);
    });

    test('tricky case with mixed 1s and 2s', () => {
        expect(solve([{ n: 8, arr: [2, 1, 2, 1, 1, 2, 2, 1] }])).toEqual([3]);
    });
});