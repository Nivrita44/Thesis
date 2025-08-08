import { solve } from '../../solutions-descriptive/28.js';

describe('solve function tests', () => {
    test('simple case with small numbers', () => {
        expect(solve(0n, 1n)).toBe(2n);
    });

    test('numbers with common ancestor', () => {
        expect(solve(6n, 2n)).toBe(6n);
    });

    test('identical numbers', () => {
        expect(solve(3n, 3n)).toBe(0n);
    });

    test('medium size numbers', () => {
        expect(solve(13n, 37n)).toBe(26n);
    });

    test('large numbers', () => {
        expect(solve(4238659325782394n, 12983091057341925n)).toBe(32764n);
    });

    test('zero and power of two', () => {
        expect(solve(0n, 8n)).toBe(8n);
    });

    test('consecutive powers of two', () => {
        expect(solve(8n, 16n)).toBe(24n);
    });

    test('numbers requiring maximum steps', () => {
        expect(solve(1152921504606846975n, 2305843009213693951n)).toBe(2305843009213693951n);
    });
});