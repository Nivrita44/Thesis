// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/36.js';

describe('Black and White Floor Pattern Tests', () => {
    test('3x3 grid with 6 painted cells', () => {
        const n = 3n;
        const m = 3n;
        const k = 6;
        const queries = [
            [1, 1, 0],
            [1, 2, 1],
            [1, 3, 0],
            [3, 1, 1],
            [3, 2, 0],
            [3, 3, 1]
        ];
        expect(solve(n, m, k, queries)).toBe(4);
    });

    test('3x4 fully painted grid', () => {
        const n = 3n;
        const m = 4n;
        const k = 12;
        const queries = [
            [1, 1, 0], [1, 2, 1], [1, 3, 0], [1, 4, 1],
            [2, 1, 1], [2, 2, 0], [2, 3, 1], [2, 4, 0],
            [3, 1, 0], [3, 2, 1], [3, 3, 0], [3, 4, 1]
        ];
        expect(solve(n, m, k, queries)).toBe(0);
    });

    test('4x4 grid with corners painted', () => {
        const n = 4n;
        const m = 4n;
        const k = 4;
        const queries = [
            [1, 1, 0],
            [1, 4, 0],
            [4, 1, 0],
            [4, 4, 0]
        ];
        expect(solve(n, m, k, queries)).toBe(32768);
    });

    test('Large grid with few painted cells', () => {
        const n = 1000000000n;
        const m = 1000000000n;
        const k = 2;
        const queries = [
            [1, 1, 0],
            [1000000000, 1000000000, 1]
        ];
        expect(solve(n, m, k, queries)).toBe(500000003);
    });

    test('3x3 grid with single painted cell', () => {
        const n = 3n;
        const m = 3n;
        const k = 1;
        const queries = [[2, 2, 1]];
        expect(solve(n, m, k, queries)).toBe(128);
    });

    test('3x5 grid with border cells painted', () => {
        const n = 3n;
        const m = 5n;
        const k = 8;
        const queries = [
            [1, 1, 0], [1, 5, 0],
            [2, 1, 1], [2, 5, 1],
            [3, 1, 0], [3, 5, 0],
            [1, 3, 1], [3, 3, 1]
        ];
        expect(solve(n, m, k, queries)).toBe(128);
    });

    test('Minimum valid grid size', () => {
        const n = 3n;
        const m = 3n;
        const k = 2;
        const queries = [
            [1, 1, 0],
            [3, 3, 0]
        ];
        expect(solve(n, m, k, queries)).toBe(128);
    });
});
