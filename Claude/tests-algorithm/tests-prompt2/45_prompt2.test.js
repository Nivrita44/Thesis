import { solve } from '../../solutions-algorithm/45.js';

describe('solve function test cases', () => {
    test('basic ascending sequence', () => {
        expect(solve([1, 2, 3])).toBe(3);
    });

    test('sequence with one inversion', () => {
        expect(solve([1, 3, 2])).toBe(1);
    });

    test('medium length ascending sequence', () => {
        expect(solve([1, 2, 3, 4, 5])).toBe(15);
    });

    test('medium length sequence with inversions', () => {
        expect(solve([1, 3, 2, 4, 5])).toBe(17);
    });

    test('longer sequence with inversions', () => {
        expect(solve([1, 3, 2, 5, 4, 6])).toBe(53);
    });

    test('maximum length sequence', () => {
        expect(solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toBe(379394847);
    });

    test('descending sequence', () => {
        expect(solve([3, 2, 1])).toBe(0);
    });

    test('sequence with repeated values', () => {
        expect(solve([1, 2, 2, 3])).toBe(5);
    });
});