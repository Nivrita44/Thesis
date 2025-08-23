// @ts-nocheck
import { solve } from '../../../solutions-descriptive/31.js';

describe('solve function tests', () => {
    test('basic convolution with small array', () => {
        const P = [1n, 2n, 3n];
        const k = 2n;
        expect(solve(P, k)).toEqual([1n, 4n, 10n]);
    });

    test('single element array', () => {
        const P = [5n];
        const k = 3n;
        expect(solve(P, k)).toEqual([1n]);
    });

    test('array with zero elements', () => {
        const P = [0n, 0n, 0n];
        const k = 2n;
        expect(solve(P, k)).toEqual([1n, 0n, 0n]);
    });

    test('power of zero', () => {
        const P = [1n, 2n, 3n];
        const k = 0n;
        expect(solve(P, k)).toEqual([1n, 0n, 0n]);
    });

    test('power of one', () => {
        const P = [1n, 2n, 3n];
        const k = 1n;
        expect(solve(P, k)).toEqual([1n, 2n, 3n]);
    });

    test('large power with small array', () => {
        const P = [1n, 1n];
        const k = 10n;
        expect(solve(P, k)).toEqual([1n, 1024n]);
    });

    test('array with large numbers', () => {
        const P = [999999999n, 888888888n];
        const k = 2n;
        const MOD = 998244353n;
        expect(solve(P, k)[0]).toBeLessThan(MOD);
        expect(solve(P, k)[1]).toBeLessThan(MOD);
    });

    test('modular arithmetic verification', () => {
        const P = [998244352n, 998244352n];
        const k = 2n;
        const result = solve(P, k);
        expect(result.every(x => x >= 0n && x < 998244353n)).toBe(true);
    });
});
