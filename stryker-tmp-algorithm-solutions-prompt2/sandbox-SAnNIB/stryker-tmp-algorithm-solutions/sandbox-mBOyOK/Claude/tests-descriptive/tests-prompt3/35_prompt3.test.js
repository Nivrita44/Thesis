// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/35.js';

describe('Kaitenzushi buffet', () => {
    test('Example case 1', () => {
        expect(solve(5, 2, [3, 6, 4, 1, 2])).toBe(6);
    });

    test('Example case 2', () => {
        expect(solve(7, 1, [3, 1, 4, 1, 5, 9, 2])).toBe(16);
    });

    test('Example case 3', () => {
        expect(solve(4, 3, [4, 3, 2, 1])).toBe(4);
    });

    test('Maximum deliciousness values', () => {
        expect(solve(6, 1, [1000000000, 1, 1000000000, 1, 1000000000, 1])).toBe(3000000000);
    });

    test('All equal values', () => {
        expect(solve(5, 2, [5, 5, 5, 5, 5])).toBe(10);
    });

    test('Decreasing sequence', () => {
        expect(solve(6, 2, [10, 8, 6, 4, 2, 1])).toBe(18);
    });

    test('Minimum length case', () => {
        expect(solve(2, 1, [1, 2])).toBe(2);
    });

    test('Random valid input', () => {
        expect(solve(8, 3, [7, 2, 9, 3, 1, 8, 4, 5])).toBe(16);
    });
});
