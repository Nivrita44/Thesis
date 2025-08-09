import { solve } from '../../solutions-descriptive/31.js';

const MOD = BigInt(998244353);

describe('solve', () => {
    test('small input n=2, m=2', () => {
        const dp = [1n, 1n, 0n];
        const n = 1n;
        const result = solve(dp, n);
        expect(result).toEqual([1n, 1n, 0n]);
    });

    test('medium input n=3, m=4', () => {
        const dp = [1n, 2n, 1n, 0n, 0n];
        const n = 2n;
        const result = solve(dp, n);
        expect(result[0]).toBe(1n);
        expect(result[1]).toBe(4n);
    });

    test('edge case n=1, m=2', () => {
        const dp = [1n, 1n, 0n];
        const n = 0n;
        const result = solve(dp, n);
        expect(result[0]).toBe(1n);
    });

    test('large input n=100, m=100', () => {
        const dp = Array(101).fill(0n);
        dp[0] = 1n;
        const n = 99n;
        const result = solve(dp, n);
        expect(result.length).toBe(101);
    });

    test('boundary input max n=500, m=500', () => {
        const dp = Array(501).fill(0n);
        dp[0] = 1n;
        const n = 499n;
        const result = solve(dp, n);
        expect(result.length).toBe(501);
    });

    test('zero power k=0', () => {
        const dp = [1n, 2n, 3n];
        const n = 0n;
        const result = solve(dp, n);
        expect(result).toEqual([1n, 0n, 0n]);
    });

    test('odd power k=3', () => {
        const dp = [1n, 1n, 0n];
        const n = 3n;
        const result = solve(dp, n);
        expect(result[0]).toBe(1n);
        expect(result[1]).toBe(3n);
    });

    test('even power k=4', () => {
        const dp = [1n, 1n, 0n];
        const n = 4n;
        const result = solve(dp, n);
        expect(result[0]).toBe(1n);
        expect(result[1]).toBe(4n);
    });
});