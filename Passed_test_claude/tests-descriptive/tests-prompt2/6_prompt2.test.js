import { solve } from '../../../solutions-descriptive/6.js';

describe('solve function tests', () => {
    test('small array with distinct elements', () => {
        expect(solve(3, [1, 7, 9])).toBe(3);
    });

    test('symmetric array with repeated elements', () => {
        expect(solve(4, [179, 1, 1, 179])).toBe(9);
    });

    test('array with mirrored pattern', () => {
        expect(solve(5, [1, 2, 3, 3, 2])).toBe(39);
    });

    test('larger array with varied elements', () => {
        expect(solve(12, [8, 2, 5, 3, 9, 1, 8, 12, 9, 9, 9, 4])).toBe(123);
    });

    test('single element array with large value', () => {
        expect(solve(1, [1000000000])).toBe(3);
    });

    test('empty array edge case', () => {
        expect(solve(0, [])).toBe(1);
    });

    

    test('array with maximum possible elements', () => {
        const largeArray = Array(100000).fill(1);
        expect(typeof solve(100000, largeArray)).toBe('number');
    });

  
});
