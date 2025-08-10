import { solve } from '../../../solutions-algorithm/43.js';

describe('Insertion Sort Swaps', () => {
    test('example case 1', () => {
        const result = solve(5, [4, 0, 3, 1, 2]);
        expect(result).toEqual([3, 2]);
    });

    test('example case 2', () => {
        const result = solve(5, [1, 2, 3, 4, 0]);
        expect(result).toEqual([3, 4]);
    });

    test('example case 3', () => {
        const result = solve(5, [1, 3, 4, 0, 2]);
        expect(result).toEqual([4, 5]);
    });

    test('minimum size array', () => {
        const result = solve(2, [1, 0]);
        expect(result).toEqual([0, 1]);
    });

    test('nearly sorted array', () => {
        const result = solve(6, [0, 1, 3, 2, 4, 5]);
        expect(result).toEqual([0, 1]);
    });

    test('reverse sorted array', () => {
        const result = solve(4, [3, 2, 1, 0]);
        expect(result).toEqual([3, 2]);
    });

    test('random permutation', () => {
        const result = solve(7, [4, 1, 6, 2, 3, 0, 5]);
        expect(result[0]).toBeLessThan(21);
        expect(result[1]).toBeGreaterThan(0);
    });

    test('large input size', () => {
        const arr = Array.from({length: 10}, (_, i) => i);
        arr.reverse();
        const result = solve(10, arr);
        expect(result[0]).toBeGreaterThan(0);
        expect(result[1]).toBeGreaterThan(0);
    });
});
