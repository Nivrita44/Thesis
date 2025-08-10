import { solve } from '../../../solutions-algorithm/50.js';

describe('solve', () => {
    test('basic test with multiple queries', () => {
        expect(solve('abacaba', [[1, 3], [2, 5], [1, 7]])).toEqual([4, 7, 11]);
    });

    test('longer string with various queries', () => {
        expect(solve('sonoshikumiwo', [[1, 5], [2, 10], [7, 7], [1, 13], [4, 8], [2, 5], [3, 9]]))
            .toEqual([82, 125, 9, 191, 62, 63, 97]);
    });

    test('single character string with single query', () => {
        expect(solve('z', [[1, 1]])).toEqual([26]);
    });

    test('consecutive same characters', () => {
        expect(solve('aaa', [[1, 3], [2, 3], [1, 1]])).toEqual([3, 2, 1]);
    });

    test('query spanning entire string', () => {
        expect(solve('xyz', [[1, 3]])).toEqual([75]);
    });

    test('multiple single-character queries', () => {
        expect(solve('abcdef', [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6]]))
            .toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('adjacent positions in queries', () => {
        expect(solve('mnopq', [[1, 2], [2, 3], [3, 4], [4, 5]]))
            .toEqual([27, 29, 31, 33]);
    });

    test('long string with large values', () => {
        const longString = 'z'.repeat(1000);
        const query = [[1, 1000]];
        expect(solve(longString, query)).toEqual([26000]);
    });
});
