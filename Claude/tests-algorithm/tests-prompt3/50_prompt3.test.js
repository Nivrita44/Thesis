import { solve } from '../../solutions-algorithm/50.js';

describe('solve', () => {
    test('example case from description', () => {
        expect(solve('abacaba', [[1,3], [2,5], [1,7]])).toEqual([4, 7, 11]);
    });

    test('single character query', () => {
        expect(solve('xyz', [[1,1], [2,2], [3,3]])).toEqual([24, 25, 26]);
    });

    test('full string query', () => {
        expect(solve('abc', [[1,3]])).toEqual([6]);
    });

    test('overlapping queries', () => {
        expect(solve('abcdef', [[1,3], [2,4], [3,5]])).toEqual([6, 9, 12]);
    });

    test('repeated characters', () => {
        expect(solve('aaa', [[1,3]])).toEqual([3]);
    });

    test('long string with multiple queries', () => {
        expect(solve('sonoshikumiwo', [[1,5], [2,10], [7,7], [1,13], [4,8], [2,5], [3,9]]))
            .toEqual([82, 125, 9, 191, 62, 63, 97]);
    });

    test('edge case - max length string', () => {
        const longStr = 'z'.repeat(100000);
        expect(solve(longStr, [[1,1], [1,100000]])).toEqual([26, 2600000]);
    });

    test('edge case - single character repeated queries', () => {
        expect(solve('a', [[1,1], [1,1], [1,1]])).toEqual([1, 1, 1]);
    });
});