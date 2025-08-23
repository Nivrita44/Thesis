// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/21.js';

describe('solve', () => {
    test('basic test case with small numbers', () => {
        expect(solve([2, 6, 3, 4, 6])).toBe(5);
    });

    test('test case with larger numbers', () => {
        expect(solve([4, 196, 2662, 2197, 121])).toBe(2);
    });

    test('minimal length array with just two elements', () => {
        expect(solve([2, 3])).toBe(0);
    });

    test('array with prime numbers only', () => {
        expect(solve([2, 3, 5, 7, 11])).toBe(1);
    });

    test('array with perfect squares', () => {
        expect(solve([4, 9, 16, 25, 36])).toBe(8);
    });

    test('array with powers of 2', () => {
        expect(solve([2, 4, 8, 16, 32])).toBe(3);
    });

    test('array with large composite numbers', () => {
        expect(solve([999999, 888888, 777777, 666666])).toBe(623915009);
    });

    test('array with repeated numbers', () => {
        expect(solve([10, 10, 10, 10, 10])).toBe(4);
    });
});
