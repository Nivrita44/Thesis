// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/32.js';

describe('solve', () => {
    test('example case 1', () => {
        let result = solve([8, 9, 10]);
        expect(result).toBe(2n);
    });

    test('example case 2', () => {
        let result = solve([2, 3, 4, 5]); 
        expect(result).toBe(-1n);
    });

    test('example case 3', () => {
        let result = solve([147, 154]);
        expect(result).toBe(7n);
    });

    test('single prime number', () => {
        let result = solve([17]);
        expect(result).toBe(17n);
    });

    test('all composite numbers', () => {
        let result = solve([4, 6, 8, 10]);
        expect(result).toBe(2n);
    });

    test('large numbers', () => {
        let result = solve([399996, 399997, 399998, 399999]);
        expect(result).toBe(2n);
    });

    test('mixed prime and composite', () => {
        let result = solve([13, 26, 39, 52]);
        expect(result).toBe(13n);
    });

    test('numbers requiring multiple operations', () => {
        let result = solve([12, 15, 18, 21]);
        expect(result).toBe(3n);
    });
});
