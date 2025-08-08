import { solve } from '../../solutions-descriptive/30.js';

describe('Spider Plushie Exchange', () => {
    test('basic cycle test case', () => {
        expect(solve(2, [2, 1])).toBe(1n);
    });

    test('larger single cycle', () => {
        expect(solve(5, [2, 3, 4, 5, 1])).toBe(1n);
    });

    test('multiple small cycles', () => {
        expect(solve(5, [2, 1, 4, 3, 5])).toBe(2n);
    });

    test('complex cycle structure', () => {
        expect(solve(5, [2, 1, 4, 2, 3])).toBe(2n);
    });

    test('maximum input size', () => {
        const n = 200000;
        const arr = Array(n).fill(0).map((_, i) => i === n-1 ? 1 : i+2);
        expect(solve(n, arr)).toBe(1n);
    });

    test('alternating pattern', () => {
        expect(solve(6, [2, 1, 4, 3, 6, 5])).toBe(3n);
    });

    test('multiple interlinked cycles', () => {
        expect(solve(10, [4, 3, 9, 1, 6, 7, 9, 10, 10, 3])).toBe(3n);
    });

    test('minimum input size', () => {
        expect(solve(2, [2, 1])).toBe(1n);
    });
});