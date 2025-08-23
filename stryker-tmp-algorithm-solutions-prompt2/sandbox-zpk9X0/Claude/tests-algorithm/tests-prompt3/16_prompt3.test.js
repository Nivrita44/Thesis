// @ts-nocheck
import { solve } from '../../../solutions-algorithm/16.js';

describe('Bachgold Problem', () => {
    test('n = 5 should return 2 parts: [3, 2]', () => {
        const result = solve(5);
        expect(result.count).toBe(2);
        expect(result.parts).toEqual([3, 2]);
    });

    test('n = 6 should return 3 parts: [2, 2, 2]', () => {
        const result = solve(6);
        expect(result.count).toBe(3);
        expect(result.parts).toEqual([2, 2, 2]);
    });

    test('n = 7 should return 3 parts: [3, 2, 2]', () => {
        const result = solve(7);
        expect(result.count).toBe(3);
        expect(result.parts).toEqual([3, 2, 2]);
    });

    test('minimum input n = 2 should return 1 part: [2]', () => {
        const result = solve(2);
        expect(result.count).toBe(1);
        expect(result.parts).toEqual([2]);
    });

    test('n = 3 should return 1 part: [3]', () => {
        const result = solve(3);
        expect(result.count).toBe(1);
        expect(result.parts).toEqual([3]);
    });

    test('n = 15 should return 7 parts with sum equal to 15', () => {
        const result = solve(15);
        expect(result.count).toBe(7);
        const sum = result.parts.reduce((a, b) => a + b, 0);
        expect(sum).toBe(15);
    });

    test('n = 100 should have correct count and sum', () => {
        const result = solve(100);
        expect(result.count).toBe(50);
        const sum = result.parts.reduce((a, b) => a + b, 0);
        expect(sum).toBe(100);
    });

    test('large odd number n = 99999 should have correct properties', () => {
        const result = solve(99999);
        expect(result.count).toBe(49999);
        const sum = result.parts.reduce((a, b) => a + b, 0);
        expect(sum).toBe(99999);
        expect(result.parts[0]).toBe(3);
    });
});
