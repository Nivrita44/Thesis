// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/23.js';

describe('XORificator Tests', () => {
    test('basic range with i=1, k=0', () => {
        expect(solve(1n, 3n, 1n, 0n)).toBe(2n);
    });

    test('medium range with i=3, k=7', () => {
        expect(solve(2n, 28n, 3n, 7n)).toBe(2n);
    });

    test('larger range with i=1, k=0', () => {
        expect(solve(15n, 43n, 1n, 0n)).toBe(13n);
    });

    test('much larger range with i=1, k=0', () => {
        expect(solve(57n, 2007n, 1n, 0n)).toBe(0n);
    });

    test('range with i=2, k=2', () => {
        expect(solve(1010n, 1993n, 2n, 2n)).toBe(4n);
    });

    test('very large range with high i and k', () => {
        expect(solve(1n, 1000000000n, 30n, 1543n)).toBe(1000000519n);
    });

    test('minimal range with minimal i and k', () => {
        expect(solve(1n, 1n, 0n, 0n)).toBe(1n);
    });

    test('power of 2 range with matching i', () => {
        expect(solve(1n, 16n, 4n, 0n)).toBe(0n);
    });

    test('range with maximum allowed i value', () => {
        expect(solve(100n, 200n, 30n, 0n)).toBe(164n);
    });
});
