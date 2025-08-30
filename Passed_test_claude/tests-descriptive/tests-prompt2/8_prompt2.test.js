import { solve } from '../../../solutions-descriptive/8.js';

describe('solve function tests', () => {
    test('basic case with small arrays', () => {
        expect(solve(1, 3, [0], [0, 1, -1])).toBe('1\n2');
    });

    test('balanced arrays with medium values', () => {
        expect(solve(2, 4, [0, 100], [-100, -50, 0, 50])).toBe('2\n150 200');
    });

    test('arrays with large difference in values', () => {
        expect(solve(2, 4, [0, 1000], [-100, -50, 0, 50])).toBe('2\n1000 200');
    });

    test('equal length arrays with multiple values', () => {
        expect(solve(6, 6, [20, 1, 27, 100, 43, 42], [100, 84, 1, 24, 22, 77])).toBe('4\n99 198 260 283');
    });

    test('arrays with very large numbers', () => {
        expect(solve(8, 2, [564040265, -509489796, 469913620, 198872582, -400714529, 553177666, 131159391, -20796763], [-1000000000, 1000000000])).toBe('2\n2000000000 2027422256');
    });

    

    test('arrays with all same values', () => {
        expect(solve(3, 3, [5, 5, 5], [5, 5, 5])).toBe('2\n0 0');
    });
});
