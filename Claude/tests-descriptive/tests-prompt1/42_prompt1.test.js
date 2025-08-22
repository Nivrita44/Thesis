import { solve } from '../../../solutions-descriptive/42.js';

describe('solve', () => {
    test('basic example case', () => {
        const testCase = [{
            n: 2,
            a: [1, 2],
            p: [5000, 5000]
        }];
        expect(solve(testCase)).toEqual([3]);
    });

    test('minimal case with single element', () => {
        const testCase = [{
            n: 1,
            a: [1],
            p: [10000]
        }];
        expect(solve(testCase)).toEqual([1]);
    });

    test('edge case with zero probabilities', () => {
        const testCase = [{
            n: 3,
            a: [1, 2, 3],
            p: [0, 0, 0]
        }];
        expect(solve(testCase)).toEqual([0]);
    });

    test('large input case', () => {
        const testCase = [{
            n: 3,
            a: [1023, 1023, 1023],
            p: [10000, 10000, 10000]
        }];
        expect(solve(testCase)).toEqual([1046529]);
    });

    test('mixed probabilities case', () => {
        const testCase = [{
            n: 3,
            a: [5, 7, 3],
            p: [2500, 5000, 7500]
        }];
        expect(solve(testCase)).toEqual([27]);
    });

    test('power of two values', () => {
        const testCase = [{
            n: 4,
            a: [2, 4, 8, 16],
            p: [5000, 5000, 5000, 5000]
        }];
        expect(solve(testCase)).toEqual([100]);
    });

    test('all same values different probabilities', () => {
        const testCase = [{
            n: 3,
            a: [10, 10, 10],
            p: [1000, 2000, 3000]
        }];
        expect(solve(testCase)).toEqual([100]);
    });

    test('maximum probability case', () => {
        const testCase = [{
            n: 4,
            a: [1, 2, 4, 8],
            p: [10000, 10000, 10000, 10000]
        }];
        expect(solve(testCase)).toEqual([225]);
    });

    test('sparse probability distribution', () => {
        const testCase = [{
            n: 5,
            a: [100, 200, 300, 400, 500],
            p: [100, 200, 300, 400, 500]
        }];
        expect(solve(testCase)).toEqual([124089]);
    });
});