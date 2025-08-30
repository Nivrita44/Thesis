import { solve } from '../../../solutions-descriptive/20.js';

describe('solve function tests', () => {
    test('simple array with valid solution', () => {
        expect(solve([2, 1, 2, 6])).toBe(3);
    });

    test('array with no valid solution', () => {
        expect(solve([1, 3, 2])).toBe(-1);
    });

    test('minimal array with equal elements', () => {
        expect(solve([1, 1])).toBe(0);
    });

    

    test('array with single element', () => {
        expect(solve([5])).toBe(0);
    });


    test('array near maximum size', () => {
        const largeArray = new Array(200000).fill(1);
        expect(solve(largeArray)).toBe(0);
    });

    test('array with zero values', () => {
        expect(solve([0, 0, 0, 0])).toBe(0);
    });
});
