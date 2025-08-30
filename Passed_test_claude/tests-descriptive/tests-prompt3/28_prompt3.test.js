import { solve } from '../../../solutions-descriptive/28.js';

describe('solve', () => {
    test('basic example 1 - x=0, y=1', () => {
        expect(solve(0n, 1n)).toBe(2n);
    });

    test('basic example 2 - x=6, y=2', () => {
        expect(solve(6n, 2n)).toBe(6n);
    });

    test('equal numbers return 0 cost', () => {
        expect(solve(3n, 3n)).toBe(0n);
    });

    test('larger numbers from example - x=13, y=37', () => {
        expect(solve(13n, 37n)).toBe(26n);
    });

    test('very large numbers', () => {
        expect(solve(4238659325782394n, 12983091057341925n)).toBe(32764n);
    });


    test('large powers of 2', () => {
        expect(solve(1n << 50n, 1n << 51n)).toBe(2n);
    });
});
