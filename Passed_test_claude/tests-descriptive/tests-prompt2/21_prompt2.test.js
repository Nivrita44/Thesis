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

   
});
