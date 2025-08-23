// @ts-nocheck
import { solve } from '../../../solutions-descriptive/23.js';

describe('solve function', () => {
    test('basic case with small numbers', () => {
        expect(solve(1n, 3n, 1n, 0n)).toBe(2n);
    });

    test('medium range numbers with non-zero xorConstant', () => {
        expect(solve(2n, 28n, 3n, 7n)).toBe(2n);
    });

    test('larger range with simple bitIndex', () => {
        expect(solve(15n, 43n, 1n, 0n)).toBe(13n);
    });

    test('range starting with non-power of 2', () => {
        expect(solve(57n, 2007n, 1n, 0n)).toBe(0n);
    });

    test('large bitIndex with small range', () => {
        expect(solve(1010n, 1993n, 2n, 2n)).toBe(4n);
    });

    test('very large range with large bitIndex', () => {
        expect(solve(1n, 1000000000n, 30n, 1543n)).toBe(1000000519n);
    });

    test('edge case with equal left and right', () => {
        expect(solve(42n, 42n, 1n, 0n)).toBe(0n);
    });

    test('edge case with zero bitIndex', () => {
        expect(solve(1n, 5n, 0n, 1n)).toBe(4n);
    });

    test('large xorConstant with small range', () => {
        expect(solve(1n, 10n, 2n, 9999n)).toBe(8n);
    });
});
