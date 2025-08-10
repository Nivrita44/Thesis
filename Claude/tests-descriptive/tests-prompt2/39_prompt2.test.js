import { solve } from '../../../solutions-descriptive/39.js';

describe('solve function', () => {
    test('typical case with sequential numbers including zero', () => {
        expect(solve(5, [4, 3, 2, 1, 0])).toBe(5);
    });

    test('array with duplicate numbers', () => {
        expect(solve(6, [4, 3, 3, 2, 1, 0])).toBe(5);
    });

    test('array with multiple zeros', () => {
        expect(solve(4, [0, 1, 0, 1])).toBe(3);
    });

    test('single element array without zero', () => {
        expect(solve(1, [777])).toBe(1);
    });

    test('array with large numbers', () => {
        expect(solve(4, [1000000000, 1, 7, 9])).toBe(4);
    });

    test('minimal array with zero and one', () => {
        expect(solve(2, [0, 1])).toBe(2);
    });

    test('array with no zeros', () => {
        expect(solve(2, [1, 2])).toBe(2);
    });

    test('array with non-sequential numbers and zero', () => {
        expect(solve(4, [2, 0, 1, 2])).toBe(3);
    });
});
