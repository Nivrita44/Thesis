import { solve } from '../../../solutions-algorithm/26.js';

describe('solve', () => {
    test('basic example case', () => {
        expect(solve([[5, 3]])).toStrictEqual(['yes']);
        expect(solve([[6, 1]])).toStrictEqual(['yes']);
        expect(solve([[7, 4]])).toStrictEqual(['no']);
        expect(solve([[8, 8]])).toStrictEqual(['yes']);
    });

    test('edge case with k=1', () => {
        expect(solve([[10, 1]])).toStrictEqual(['yes']);
        expect(solve([[3, 1]])).toStrictEqual(['yes']);
    });

    test('large numbers', () => {
        expect(solve([[1000000000000000000n, 1n]])).toStrictEqual(['yes']);
    });

    test('k close to n', () => {
        expect(solve([[100, 99]])).toStrictEqual(['yes']);
        expect(solve([[101, 100]])).toStrictEqual(['no']);
    });

    test('small numbers', () => {
        expect(solve([[3, 3]])).toStrictEqual(['no']);
        expect(solve([[4, 3]])).toStrictEqual(['yes']);
    });

    test('multiple test cases together', () => {
        expect(solve([[5, 3], [6, 1], [7, 4]])).toStrictEqual(['yes', 'yes', 'no']);
    });

    test('odd numbers with even k', () => {
        expect(solve([[15, 4]])).toStrictEqual(['no']);
        expect(solve([[16, 4]])).toStrictEqual(['yes']);
    });
});
