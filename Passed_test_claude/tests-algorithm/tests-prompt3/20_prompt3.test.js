import { solve } from '../../../solutions-algorithm/20.js';

describe('Orange Juice Cocktail Tests', () => {
    test('example case from description', () => {
        expect(solve(3, [50, 50, 100])).toBeCloseTo(66.666667, 4);
    });

    test('all drinks have same percentage', () => {
        expect(solve(4, [75, 75, 75, 75])).toBe(75);
    });

    test('mix of different percentages', () => {
        expect(solve(4, [0, 25, 50, 75])).toBeCloseTo(37.5, 4);
    });

    test('single drink', () => {
        expect(solve(1, [100])).toBe(100);
    });

    test('all drinks have 0 percent', () => {
        expect(solve(3, [0, 0, 0])).toBe(0);
    });

    test('very small percentages', () => {
        expect(solve(3, [0, 1, 8])).toBe(3);
    });

    test('maximum input size with varying percentages', () => {
        const percents = Array(100).fill(0).map((_, i) => i % 100);
        expect(solve(100, percents)).toBeCloseTo(49.5, 4);
    });

    test('maximum possible percentage values', () => {
        expect(solve(5, [100, 100, 100, 100, 100])).toBe(100);
    });
});
