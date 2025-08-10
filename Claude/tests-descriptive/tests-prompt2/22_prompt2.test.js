import { solve } from '../../../solutions-descriptive/22.js';

describe('Enemy Attack Range Calculator', () => {
    test('basic case with 3 enemies', () => {
        expect(solve(3, 3, 2, [10, 10, 10], [1, 3, 5])).toBe(5);
    });

    test('all enemies must be hit', () => {
        expect(solve(3, 4, 3, [20, 20, 20], [1, 5, 9])).toBe(10);
    });

    test('impossible case returns -1', () => {
        expect(solve(3, 2, 3, [100, 100, 100], [1, 10, 20])).toBe(-1);
    });

    test('single enemy case', () => {
        expect(solve(1, 5, 1, [10], [3])).toBe(2);
    });

    test('large enemy health values', () => {
        expect(solve(2, 10, 2, [1000, 1000], [1, 2])).toBe(100);
    });

    test('spread out enemies with minimal hits required', () => {
        expect(solve(4, 3, 2, [5, 5, 5, 5], [1, 4, 7, 10])).toBe(3);
    });

    test('enemies at same position', () => {
        expect(solve(3, 4, 2, [15, 15, 15], [5, 5, 5])).toBe(8);
    });

    test('maximum possible values', () => {
        expect(solve(5, 1000000, 3, [1e8, 1e8, 1e8, 1e8, 1e8], [1, 2, 3, 4, 5])).toBe(100000);
    });
});
