// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/39.js';

describe('solve', () => {
    test('returns NO for n=2 (power of 2)', () => {
        expect(solve(2)).toBe('NO');
    });

    test('returns YES for n=3 (odd prime)', () => {
        expect(solve(3)).toBe('YES');
    });

    test('returns NO for n=4 (power of 2)', () => {
        expect(solve(4)).toBe('NO');
    });

    test('returns YES for n=15 (product of odd numbers)', () => {
        expect(solve(15)).toBe('YES');
    });

    test('returns NO for n=1024 (power of 2)', () => {
        expect(solve(1024)).toBe('NO');
    });

    test('returns YES for n=999999999999 (large odd number)', () => {
        expect(solve(999999999999)).toBe('YES');
    });

    test('returns NO for n=1099511627776 (large power of 2)', () => {
        expect(solve(1099511627776)).toBe('NO');
    });

    test('returns YES for n=998244353 (large prime number)', () => {
        expect(solve(998244353)).toBe('YES');
    });

    test('returns NO for n=1 (edge case)', () => {
        expect(solve(1)).toBe('NO');
    });
});
