import { solve } from '../../../solutions-descriptive/18.js';

describe('Matrix Transformation Tests', () => {
    test('1x1 matrix simple case', () => {
        expect(solve(1, 1, [[12]], [[13]])).toBe("Yes\n");
    });

    test('2x2 matrix with same values', () => {
        expect(solve(2, 2, [[10, 10], [42, 42]], [[21, 21], [21, 21]])).toBe("Yes\n");
    });

    test('2x2 matrix impossible transformation', () => {
        expect(solve(2, 2, [[74, 10], [42, 106]], [[21, 85], [85, 21]])).toBe("No\n");
    });

    test('2x4 matrix with mixed values', () => {
        expect(solve(2, 4, [[1, 2, 3, 4], [5, 6, 7, 8]], [[3, 2, 3, 4], [1, 0, 1, 0]])).toBe("Yes\n");
    });

    test('1x3 matrix edge case', () => {
        expect(solve(1, 3, [[0, 0, 0]], [[1, 1, 1]])).toBe("Yes\n");
    });

    test('3x1 matrix with large numbers', () => {
        expect(solve(3, 1, [[1000000000], [999999999], [999999998]], [[1000000000], [1000000000], [1000000000]])).toBe("Yes\n");
    });

    test('2x3 matrix with alternating patterns', () => {
        expect(solve(2, 3, [[15, 7, 15], [7, 15, 7]], [[15, 15, 15], [15, 15, 15]])).toBe("Yes\n");
    });

    test('3x3 matrix with impossible pattern', () => {
        expect(solve(3, 3, 
            [[1, 2, 3], [4, 5, 6], [7, 8, 9]], 
            [[9, 8, 7], [6, 5, 4], [3, 2, 1]]
        )).toBe("No\n");
    });
});
