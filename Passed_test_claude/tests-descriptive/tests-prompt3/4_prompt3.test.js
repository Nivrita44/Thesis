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

    test('alternating values', () => {
        expect(solve([5, 1, 5, 1, 5, 1])).toBe(125);
    });
});
