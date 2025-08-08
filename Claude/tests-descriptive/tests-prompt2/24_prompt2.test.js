import { solve } from '../../solutions-descriptive/24.js';

describe('solve function tests', () => {
    test('basic small case with equal costs', () => {
        expect(solve(2, 3, 5, 5)).toBe(12);
    });

    test('medium case with high unit cost', () => {
        expect(solve(10, 20, 40, 5)).toBe(190);
    });

    test('large case with high overhead cost', () => {
        expect(solve(1, 60, 100, 10)).toBe(280);
    });

    test('large case with high unit cost', () => {
        expect(solve(60, 1, 100, 10)).toBe(160);
    });

    test('minimal work case', () => {
        expect(solve(1, 1, 1, 1)).toBe(2);
    });

    test('small work with large group size', () => {
        expect(solve(5, 5, 10, 20)).toBe(55);
    });

    test('equal unit and overhead costs', () => {
        expect(solve(50, 50, 30, 5)).toBe(300);
    });

    test('large values test', () => {
        expect(solve(100, 100, 1000, 50)).toBe(10000);
    });
});