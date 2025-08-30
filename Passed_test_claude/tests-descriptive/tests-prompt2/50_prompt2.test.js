import { solve } from '../../../solutions-descriptive/50.js';

describe('solve function tests', () => {
    test('basic array with powers of 2', () => {
        expect(solve([1, 2, 4, 8, 16])).toBe(0);
    });

    test('array with common factors', () => {
        expect(solve([3, 2, 10, 20, 60, 1])).toBe(4);
    });

    test('array with large prime numbers', () => {
        expect(solve([2, 3, 4, 6, 12, 100003, 1200036])).toBe(4);
    });

    test('array with repeated numbers', () => {
        expect(solve([2, 42, 7, 3, 6, 7, 7, 1, 6])).toBe(5);
    });

    test('array with large scattered numbers', () => {
        expect(solve([4, 99, 57, 179, 10203, 2, 11, 40812])).toBe(8);
    });

    test('single element array', () => {
        expect(solve([1])).toBe(0);
    });

    test('array with very large numbers causing LCM overflow', () => {
        expect(solve([999999999, 999999998, 999999997])).toBe(3);
    });

    
});
