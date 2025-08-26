import { solve } from '../../../solutions-algorithm/45.js';

describe('solve function test cases', () => {
    test('basic ascending sequence', () => {
        expect(solve([1, 2, 3])).toBe(3);
    });

    test('sequence with one inversion', () => {
        expect(solve([1, 3, 2])).toBe(1);
    });

    test('medium length sequence with inversions', () => {
        expect(solve([1, 3, 2, 4, 5])).toBe(17);
    });

    test('maximum length sequence', () => {
        expect(solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toBe(379394847);
    });
});