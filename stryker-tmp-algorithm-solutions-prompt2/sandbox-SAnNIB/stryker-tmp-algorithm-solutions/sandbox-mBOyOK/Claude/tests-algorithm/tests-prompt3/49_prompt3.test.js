// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/49.js';

describe('Grid Path Cost', () => {
    test('1x1 grid with 0 cost', () => {
        expect(solve(1n, 1n, 0n)).toBe('YES');
    });

    test('1x5 grid with cost 5', () => {
        expect(solve(1n, 5n, 5n)).toBe('NO');
    });

    test('2x2 grid with cost 3', () => {
        expect(solve(2n, 2n, 3n)).toBe('YES');
    });

    test('2x2 grid with invalid cost 4', () => {
        expect(solve(2n, 2n, 4n)).toBe('NO');
    });

    test('1x4 grid with cost 3', () => {
        expect(solve(1n, 4n, 3n)).toBe('YES');
    });

    test('Maximum grid size 100x100', () => {
        expect(solve(100n, 100n, 9999n)).toBe('YES');
    });

    test('Maximum grid with invalid cost', () => {
        expect(solve(100n, 100n, 10000n)).toBe('NO');
    });

    test('Asymmetric grid 3x5', () => {
        expect(solve(3n, 5n, 14n)).toBe('YES');
    });

    test('Edge case 1xm grid', () => {
        expect(solve(1n, 50n, 49n)).toBe('YES');
    });

    test('Edge case nx1 grid', () => {
        expect(solve(50n, 1n, 49n)).toBe('YES');
    });
});
