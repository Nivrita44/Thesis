import { solve } from '../../../solutions-algorithm/47.js';

describe('solve', () => {
    test('already sorted permutation returns 0', () => {
        expect(solve(3, 2, [1, 2, 3])).toBe(0);
    });

    test('simple case with k=1', () => {
        expect(solve(3, 1, [3, 1, 2])).toBe(1);
    });

    test('case with k=2 requiring one operation', () => {
        expect(solve(4, 2, [1, 3, 2, 4])).toBe(1);
    });

    test('case with k=2 requiring multiple operations', () => {
        expect(solve(4, 2, [2, 3, 1, 4])).toBe(2);
    });

    test('large permutation with small k', () => {
        expect(solve(5, 1, [5, 4, 3, 2, 1])).toBe(4);
    });

    test('large k equal to n', () => {
        expect(solve(6, 6, [6, 5, 4, 3, 2, 1])).toBe(1);
    });

    test('permutation with only first element in position', () => {
        expect(solve(5, 2, [1, 5, 4, 3, 2])).toBe(2);
    });

    test('maximum size input', () => {
        const arr = Array.from({length: 100000}, (_, i) => 100000 - i);
        expect(solve(100000, 1, arr)).toBe(99999);
    });
});
