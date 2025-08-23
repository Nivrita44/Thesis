// @ts-nocheck
import { solve } from '../../../solutions-descriptive/4.js';

describe('solve', () => {
    test('basic example with 6 vertices', () => {
        expect(solve([2, 1, 2, 1, 1, 1])).toBe(5);
    });

    test('another example with 6 vertices', () => {
        expect(solve([1, 2, 1, 3, 1, 5])).toBe(30);
    });

    test('larger example with 9 vertices', () => {
        expect(solve([9, 9, 8, 2, 4, 4, 3, 5, 3])).toBe(732);
    });

    test('minimum valid input with 3 vertices', () => {
        expect(solve([1, 1, 1])).toBe(1);
    });

    test('maximum values', () => {
        expect(solve([1000, 1000, 1000, 1000])).toBe(1000000);
    });

    test('alternating values', () => {
        expect(solve([5, 1, 5, 1, 5, 1])).toBe(125);
    });

    test('descending values', () => {
        expect(solve([8, 7, 6, 5, 4, 3])).toBe(336);
    });

    test('same values except one', () => {
        expect(solve([2, 2, 2, 2, 10, 2])).toBe(40);
    });
});
