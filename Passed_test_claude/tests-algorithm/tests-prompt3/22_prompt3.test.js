import { solve } from '../../../solutions-algorithm/22.js';

describe('Game Winner Calculator Tests', () => {
    test('example test case from description', () => {
        expect(solve([1])).toStrictEqual(["First"]);
        expect(solve([3])).toStrictEqual(["Second"]);
    });

    test('sequential numbers test', () => {
        expect(solve([1, 2, 3, 4, 5])).toStrictEqual(["First", "First", "Second", "First", "First"]);
    });

    test('large valid numbers', () => {
        expect(solve([998, 999, 1000])).toStrictEqual(["First", "Second", "First"]);
    });

    test('multiples of 3', () => {
        expect(solve([3, 6, 9, 12, 15])).toStrictEqual(["Second", "Second", "Second", "Second", "Second"]);
    });

    test('numbers one away from multiples of 3', () => {
        expect(solve([2, 5, 8, 11])).toStrictEqual(["First", "First", "First", "First"]);
    });

    test('edge cases - bounds', () => {
        expect(solve([1, 1000])).toStrictEqual(["First", "First"]);
    });

    test('mixed numbers', () => {
        expect(solve([100, 297, 501, 753])).toStrictEqual(["First", "Second", "Second", "Second"]);
    });

    test('consecutive multiples of 3 and non-multiples', () => {
        expect(solve([298, 299, 300, 301, 302])).toStrictEqual(["First", "First", "Second", "First", "First"]);
    });
});
