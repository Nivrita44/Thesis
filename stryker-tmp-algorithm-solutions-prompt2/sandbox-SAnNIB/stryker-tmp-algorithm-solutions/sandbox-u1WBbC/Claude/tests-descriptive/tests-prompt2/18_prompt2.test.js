// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/18.js';

describe('Matrix Transformation Tests', () => {
    test('1x1 matrix with possible transformation', () => {
        const source = [[12]];
        const target = [[13]];
        expect(solve(1, 1, source, target)).toBe("Yes\n");
    });

    test('2x2 matrix with all same values', () => {
        const source = [[10, 10], [42, 42]];
        const target = [[21, 21], [21, 21]];
        expect(solve(2, 2, source, target)).toBe("Yes\n");
    });

    test('2x2 matrix with impossible transformation', () => {
        const source = [[74, 10], [42, 106]];
        const target = [[21, 85], [85, 21]];
        expect(solve(2, 2, source, target)).toBe("No\n");
    });

    test('2x4 rectangular matrix', () => {
        const source = [[1, 2, 3, 4], [5, 6, 7, 8]];
        const target = [[3, 2, 3, 4], [1, 0, 1, 0]];
        expect(solve(2, 4, source, target)).toBe("Yes\n");
    });

    test('3x3 matrix with zero values', () => {
        const source = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        const target = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        expect(solve(3, 3, source, target)).toBe("Yes\n");
    });

    test('large values in matrix', () => {
        const source = [[1000000, 999999], [999999, 1000000]];
        const target = [[1000000, 1000000], [1000000, 1000000]];
        expect(solve(2, 2, source, target)).toBe("Yes\n");
    });

    test('single row matrix', () => {
        const source = [[1, 2, 3, 4, 5]];
        const target = [[5, 4, 3, 2, 1]];
        expect(solve(1, 5, source, target)).toBe("Yes\n");
    });

    test('single column matrix', () => {
        const source = [[1], [2], [3], [4], [5]];
        const target = [[5], [4], [3], [2], [1]];
        expect(solve(5, 1, source, target)).toBe("Yes\n");
    });
});
