// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/26.js';

describe('solve function', () => {
    test('basic test case with small numbers', () => {
        expect(solve([[5n, 3n]])).toEqual(['yes']);
    });

    test('multiple test cases with mixed results', () => {
        expect(solve([[5n, 3n], [6n, 1n], [7n, 4n], [8n, 8n]]))
            .toEqual(['yes', 'yes', 'no', 'yes']);
    });

    test('edge case with k=1', () => {
        expect(solve([[10n, 1n]])).toEqual(['yes']);
    });

    test('boundary case with small numbers', () => {
        expect(solve([[2n, 2n]])).toEqual(['yes']);
    });

    test('case with large n and small k', () => {
        expect(solve([[1000000000000000000n, 1n]])).toEqual(['yes']);
    });

    test('case where no solution exists', () => {
        expect(solve([[3n, 2n]])).toEqual(['no']);
    });

    test('multiple complex cases', () => {
        expect(solve([
            [10n, 2n],
            [15n, 3n],
            [20n, 4n]
        ])).toEqual(['yes', 'yes', 'yes']);
    });

    test('edge case with equal n and k', () => {
        expect(solve([[100n, 100n]])).toEqual(['yes']);
    });
});
