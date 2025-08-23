// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/21.js';

describe('solve', () => {
    test('basic sum cases', () => {
        expect(solve([[1, 4, 3]])).toEqual(['NO']);
        expect(solve([[1, 2, 3]])).toEqual(['YES']);
        expect(solve([[5, 8, 3]])).toEqual(['YES']);
    });

    test('zero cases', () => {
        expect(solve([[0, 0, 0]])).toEqual(['YES']);
        expect(solve([[0, 1, 1]])).toEqual(['YES']);
    });

    test('maximum bound cases', () => {
        expect(solve([[20, 20, 20]])).toEqual(['NO']);
        expect(solve([[10, 20, 10]])).toEqual(['YES']);
    });

    test('multiple test cases at once', () => {
        expect(solve([
            [1, 4, 3],
            [2, 5, 8],
            [9, 11, 20]
        ])).toEqual(['NO', 'NO', 'YES']);
    });

    test('edge cases with repeated numbers', () => {
        expect(solve([[5, 5, 10]])).toEqual(['YES']);
        expect(solve([[7, 7, 7]])).toEqual(['NO']);
    });

    test('mixed positive cases', () => {
        expect(solve([
            [15, 7, 8],
            [4, 12, 3],
            [6, 2, 4]
        ])).toEqual(['YES', 'NO', 'YES']);
    });

    test('boundary value cases', () => {
        expect(solve([
            [0, 20, 20],
            [20, 0, 20],
            [20, 20, 0]
        ])).toEqual(['YES', 'YES', 'NO']);
    });
});
