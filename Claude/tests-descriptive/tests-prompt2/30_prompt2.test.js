import { solve } from '../../solutions-descriptive/30.js';

describe('solve', () => {
    test('basic permutation with 2 elements', () => {
        expect(solve(2, [2, 1])).toBe(1);
    });

    test('circular permutation with 5 elements', () => {
        expect(solve(5, [2, 3, 4, 5, 1])).toBe(1);
    });

    test('multiple cycles permutation', () => {
        expect(solve(5, [2, 1, 4, 3, 5])).toBe(3);
    });

    test('self-loops permutation', () => {
        expect(solve(4, [1, 2, 3, 4])).toBe(4);
    });

    test('large permutation with multiple cycles', () => {
        expect(solve(8, [2, 3, 1, 5, 6, 7, 8, 4])).toBe(2);
    });

    test('all elements pointing to first element', () => {
        expect(solve(5, [1, 1, 1, 1, 1])).toBe(5);
    });

    test('single element permutation', () => {
        expect(solve(1, [1])).toBe(1);
    });

    test('complex permutation with mixed cycles', () => {
        expect(solve(10, [2, 3, 4, 5, 6, 7, 8, 9, 10, 1])).toBe(1);
    });
});