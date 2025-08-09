import { solve } from '../../solutions-algorithm/6.js';

describe('solve', () => {
    test('example case from description', () => {
        expect(solve(8, [1n, 2n, 2n, 3n, 1n, 5n, 6n, 1n])).toBe(9n);
    });

    test('small array with large numbers', () => {
        expect(solve(5, [1n, 2n, 3n, 100n, 200n])).toBe(297n);
    });

    test('array with all same numbers', () => {
        expect(solve(4, [3n, 3n, 3n, 3n])).toBe(0n);
    });

    test('array with repeated max values', () => {
        expect(solve(6, [7n, 8n, 3n, 1n, 1n, 8n])).toBe(14n);
    });

    test('minimum length array (n=4)', () => {
        expect(solve(4, [1n, 2n, 3n, 4n])).toBe(5n);
    });

    test('array with alternating values', () => {
        expect(solve(6, [1n, 10n, 1n, 10n, 1n, 10n])).toBe(18n);
    });

    test('array with maximum possible values', () => {
        expect(solve(5, [1000000000n, 999999999n, 999999998n, 1n, 2n])).toBe(1999999997n);
    });

    test('array with descending values', () => {
        expect(solve(7, [100n, 90n, 80n, 70n, 60n, 50n, 40n])).toBe(110n);
    });
});