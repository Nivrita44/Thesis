import { solve } from '../../solutions-descriptive/42.js';

describe('solve', () => {
    test('single element with 50% probability', () => {
        const input = [{n: 1, a: [2], p: [5000]}];
        expect(solve(input)).toEqual([500000007]);
    });

    test('two identical elements with different probabilities', () => {
        const input = [{n: 2, a: [1, 1], p: [1000, 2000]}];
        expect(solve(input)).toEqual([820000006]);
    });

    test('larger test case with mixed values', () => {
        const input = [{n: 6, a: [343, 624, 675, 451, 902, 820], p: [6536, 5326, 7648, 2165, 9430, 5428]}];
        expect(solve(input)).toEqual([280120536]);
    });

    test('single element with 100% probability', () => {
        const input = [{n: 1, a: [1], p: [10000]}];
        expect(solve(input)).toEqual([1]);
    });

    test('edge case with single minimum value', () => {
        const input = [{n: 1, a: [1], p: [1]}];
        expect(solve(input)).toEqual([9990009]);
    });

    test('edge case with maximum single value', () => {
        const input = [{n: 1, a: [1023], p: [10000]}];
        expect(solve(input)).toEqual([1046529]);
    });

    test('multiple test cases together', () => {
        const input = [
            {n: 1, a: [2], p: [5000]},
            {n: 2, a: [1, 1], p: [1000, 2000]},
            {n: 1, a: [1023], p: [1]}
        ];
        expect(solve(input)).toEqual([500000007, 820000006, 998956983]);
    });

    test('power of 2 values', () => {
        const input = [{n: 3, a: [1, 2, 4], p: [5000, 5000, 5000]}];
        expect(solve(input)).toEqual([583333346]);
    });
});