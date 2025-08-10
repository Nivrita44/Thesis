import { solve } from '../../../solutions-algorithm/10.js';

describe('solve', () => {
    test('single digit number', () => {
        const result = solve(7);
        expect(result.count).toBe(1);
        expect(result.parts).toEqual([7]);
    });

    test('two digit number with zero', () => {
        const result = solve(20);
        expect(result.count).toBe(1);
        expect(result.parts).toEqual([20]);
    });

    test('number with trailing zeros', () => {
        const result = solve(5009);
        expect(result.count).toBe(2);
        expect(result.parts).toEqual([9, 5000]);
    });

    test('all non-zero digits', () => {
        const result = solve(9876);
        expect(result.count).toBe(4);
        expect(result.parts).toEqual([6, 70, 800, 9000]);
    });

    test('power of ten', () => {
        const result = solve(10000);
        expect(result.count).toBe(1);
        expect(result.parts).toEqual([10000]);
    });

    test('number with multiple zeros', () => {
        const result = solve(1002003);
        expect(result.count).toBe(3);
        expect(result.parts).toEqual([3, 2000, 1000000]);
    });

    test('large number', () => {
        const result = solve(987654321);
        expect(result.count).toBe(9);
        expect(result.parts).toEqual([1, 20, 300, 4000, 50000, 600000, 7000000, 80000000, 900000000]);
    });

    test('zero as input', () => {
        const result = solve(0);
        expect(result.count).toBe(0);
        expect(result.parts).toEqual([]);
    });
});
