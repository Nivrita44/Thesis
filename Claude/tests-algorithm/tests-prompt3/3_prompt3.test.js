import { solve } from '../../../solutions-algorithm/3.js';

describe('solve', () => {
    test('example case with sequential numbers', () => {
        expect(solve(3, [1, 2, 2])).toBe('YES');
    });

    test('all same numbers should work', () => {
        expect(solve(4, [5, 5, 5, 5])).toBe('YES');
    });
    
    test('numbers with gap greater than 1 should fail', () => {
        expect(solve(3, [1, 2, 4])).toBe('NO');
    });

    test('multiple gaps should fail', () => {
        expect(solve(4, [1, 3, 4, 4])).toBe('NO');
    });

    test('single element array should work', () => {
        expect(solve(1, [100])).toBe('YES');
    });

    test('maximum length array with valid sequence', () => {
        const arr = Array(50).fill(1);
        expect(solve(50, arr)).toBe('YES');
    });

    test('maximum value with valid sequence', () => {
        expect(solve(3, [99, 99, 100])).toBe('YES');
    });

    test('complex valid sequence', () => {
        expect(solve(6, [4, 4, 5, 5, 5, 6])).toBe('YES');
    });

    test('complex invalid sequence', () => {
        expect(solve(5, [2, 2, 4, 7, 7])).toBe('NO');
    });
});
