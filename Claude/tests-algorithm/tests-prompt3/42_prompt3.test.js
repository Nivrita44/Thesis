import { solve } from '../../../solutions-algorithm/42.js';

describe('Independent Set in Bubble Sort Graph', () => {
    test('Example case 1', () => {
        expect(solve(3, [3, 1, 2])).toBe(2n);
    });

    test('Example case 2', () => {
        expect(solve(5, [4, 2, 1, 3, 5])).toBe(3n);
    });

    test('Minimal case - 2 elements', () => {
        expect(solve(2, [2, 1])).toBe(1n);
    });

    test('Already sorted array', () => {
        expect(solve(5, [1, 2, 3, 4, 5])).toBe(5n);
    });

    test('Reverse sorted array', () => {
        expect(solve(5, [5, 4, 3, 2, 1])).toBe(1n);
    });

    test('Large jumbled sequence', () => {
        expect(solve(10, [8, 2, 4, 1, 5, 3, 7, 6, 10, 9])).toBe(4n);
    });

    test('Alternating high-low pattern', () => {
        expect(solve(8, [1, 8, 2, 7, 3, 6, 4, 5])).toBe(4n);
    });

    test('Single element', () => {
        expect(solve(1, [1])).toBe(1n);
    });
});
