import { solve } from '../../../solutions-descriptive/4.js';

describe('Polygon Score Game Tests', () => {
    test('example from description - small triangle', () => {
        expect(solve([1, 2, 3])).toBe(6);
    });

    test('square with identical values', () => {
        expect(solve([2, 2, 2, 2])).toBe(8);
    });

    test('pentagon with ascending values', () => {
        expect(solve([1, 2, 3, 4, 5])).toBe(60);
    });

    test('large values within bounds', () => {
        expect(solve([1000, 1000, 1000, 1000, 1000, 1000])).toBe(2000000000);
    });
});