import { solve } from '../../../solutions-descriptive/22.js';

describe('solve', () => {
    test('basic example case', () => {
        expect(solve(3, 4, 2, [5, 4, 6], [1, 3, 4])).toBe(2);
    });

    test('impossible case returns -1', () => {
        expect(solve(2, 2, 2, [10, 10], [1, 5])).toBe(-1);
    });

    test('all enemies can be defeated in one hit', () => {
        expect(solve(3, 5, 3, [1, 2, 1], [1, 2, 3])).toBe(1);
    });

    test('minimum required enemies equal to total enemies', () => {
        expect(solve(4, 3, 4, [3, 3, 3, 3], [1, 2, 4, 5])).toBe(2);
    });

    test('single enemy case', () => {
        expect(solve(1, 5, 1, [10], [3])).toBe(2);
    });

    test('large health values', () => {
        expect(solve(2, 1000000000, 2, [1000000000, 1000000000], [1, 2])).toBe(1);
    });

    test('spread out enemy positions', () => {
        expect(solve(3, 5, 2, [10, 10, 10], [1, 100000, 999999])).toBe(-1);
    });

    test('enemies with varied health', () => {
        expect(solve(4, 6, 3, [20, 5, 15, 8], [1, 3, 4, 6])).toBe(4);
    });
});
