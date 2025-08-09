import { solve } from '../../solutions-algorithm/9.js';

describe('Compilation Error Finder', () => {
    test('example case from description', () => {
        expect(solve([1, 5, 8, 123, 7], [123, 7, 5, 1], [5, 1, 7]))
            .toStrictEqual([8, 123]);
    });

    test('minimal length case (n=3)', () => {
        expect(solve([1, 2, 3], [2, 1], [1]))
            .toStrictEqual([3, 2]);
    });

    test('all numbers are same except removed ones', () => {
        expect(solve([1, 1, 1, 2, 3], [1, 1, 1, 2], [1, 1, 1]))
            .toStrictEqual([3, 2]);
    });

    test('large numbers case', () => {
        expect(solve([999999999, 888888888, 777777777], [999999999, 777777777], [999999999]))
            .toStrictEqual([888888888, 777777777]);
    });

    test('sequential numbers', () => {
        expect(solve([1, 2, 3, 4, 5], [1, 2, 3, 5], [1, 2, 3]))
            .toStrictEqual([4, 5]);
    });

    test('removed numbers are at boundaries', () => {
        expect(solve([1, 2, 3, 4, 5], [2, 3, 4, 5], [2, 3, 4]))
            .toStrictEqual([1, 5]);
    });

    test('non-sequential numbers with gaps', () => {
        expect(solve([2, 4, 6, 8, 10], [2, 4, 8, 10], [2, 4, 8]))
            .toStrictEqual([6, 10]);
    });

    test('numbers with varying digit lengths', () => {
        expect(solve([1, 10, 100, 1000, 10000], [1, 100, 1000, 10000], [1, 100, 1000]))
            .toStrictEqual([10, 10000]);
    });
});