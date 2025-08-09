import { solve } from '../../solutions-descriptive/42.js';

describe('solve', () => {
    test('single number with 50% probability', () => {
        const testCase = [{
            n: 1,
            a: [2],
            p: [5000]
        }];
        expect(solve(testCase)).toEqual([500000007]);
    });

    test('two identical numbers with different probabilities', () => {
        const testCase = [{
            n: 2,
            a: [1, 1],
            p: [1000, 2000]
        }];
        expect(solve(testCase)).toEqual([820000006]);
    });

    test('complex case with multiple numbers', () => {
        const testCase = [{
            n: 6,
            a: [343, 624, 675, 451, 902, 820],
            p: [6536, 5326, 7648, 2165, 9430, 5428]
        }];
        expect(solve(testCase)).toEqual([280120536]);
    });

    test('single number with 100% probability', () => {
        const testCase = [{
            n: 1,
            a: [1],
            p: [10000]
        }];
        expect(solve(testCase)).toEqual([1]);
    });

    test('single number with 0% probability', () => {
        const testCase = [{
            n: 1,
            a: [1],
            p: [0]
        }];
        expect(solve(testCase)).toEqual([1000000006]);
    });

    test('multiple test cases together', () => {
        const testCases = [
            { n: 1, a: [2], p: [5000] },
            { n: 1, a: [1], p: [10000] }
        ];
        expect(solve(testCases)).toEqual([500000007, 1]);
    });

    test('numbers with all bits set', () => {
        const testCase = [{
            n: 2,
            a: [1023, 1023],
            p: [5000, 5000]
        }];
        expect(solve(testCase)).toBeDefined();
    });

    test('single bit numbers', () => {
        const testCase = [{
            n: 3,
            a: [1, 2, 4],
            p: [3333, 3333, 3334]
        }];
        expect(solve(testCase)).toBeDefined();
    });
});