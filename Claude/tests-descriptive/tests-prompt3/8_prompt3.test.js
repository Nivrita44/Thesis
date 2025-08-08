import { solve } from '../../solutions-descriptive/8.js';

describe('solve', () => {
    test('basic example with 1 point on y=0 and 3 points on y=2', () => {
        expect(solve(1, 3, [0], [0, 1, -1])).toBe('1\n2');
    });

    test('2 points on y=0 and 4 points on y=2 with balanced differences', () => {
        expect(solve(2, 4, [0, 100], [-100, -50, 0, 50])).toBe('2\n150 200');
    });

    test('2 points on y=0 and 4 points on y=2 with large difference on y=0', () => {
        expect(solve(2, 4, [0, 1000], [-100, -50, 0, 50])).toBe('2\n1000 200');
    });

    test('equal number of points on both lines', () => {
        expect(solve(6, 6, [20, 1, 27, 100, 43, 42], [100, 84, 1, 24, 22, 77])).toBe('4\n99 198 260 283');
    });

    test('large numbers and unequal points', () => {
        expect(solve(8, 2, [564040265, -509489796, 469913620, 198872582, -400714529, 553177666, 131159391, -20796763], [-1000000000, 1000000000])).toBe('2\n2000000000 2027422256');
    });

    test('minimum points case', () => {
        expect(solve(1, 1, [0], [0])).toBe('0');
    });

    test('points that form collinear triangles', () => {
        expect(solve(3, 3, [0, 1, 2], [0, 1, 2])).toBe('2\n2 2');
    });

    test('large difference between points on same line', () => {
        expect(solve(3, 2, [-1000000000, 0, 1000000000], [-500000000, 500000000])).toBe('2\n2000000000 1000000000');
    });
});