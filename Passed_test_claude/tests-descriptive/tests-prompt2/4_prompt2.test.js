import { solve } from '../../../solutions-descriptive/4.js';

describe('solve function tests', () => {
    test('basic case with small array', () => {
        expect(solve([2, 1, 2, 1, 1, 1])).toBe(5);
    });

    test('array with increasing values', () => {
        expect(solve([1, 2, 1, 3, 1, 5])).toBe(30);
    });

    test('array with larger values', () => {
        expect(solve([9, 9, 8, 2, 4, 4, 3, 5, 3])).toBe(732);
    });

    test('array with mixed values', () => {
        expect(solve([9, 9, 3, 2, 4, 4, 8, 5, 3])).toBe(696);
    });

    test('minimum length array', () => {
        expect(solve([1, 1, 1])).toBe(1);
    });

    test('array with all same values', () => {
        expect(solve([5, 5, 5, 5, 5])).toBe(125);
    });

   
});
