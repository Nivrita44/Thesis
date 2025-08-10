import { solve } from '../../../solutions-descriptive/21.js';

describe('Natlan Path Counter', () => {
    test('example test case 1', () => {
        expect(solve([2, 6, 3, 4, 6])).toBe(5);
    });

    test('example test case 2', () => {
        expect(solve([4, 196, 2662, 2197, 121])).toBe(2);
    });

    test('minimal case with no valid paths', () => {
        expect(solve([2, 3])).toBe(0);
    });

    test('all numbers coprime', () => {
        expect(solve([2, 3, 5, 7, 11])).toBe(0);
    });

    test('all numbers have common factors', () => {
        expect(solve([6, 12, 18, 24, 30])).toBe(16);
    });

    test('large numbers near upper bound', () => {
        expect(solve([999999, 999998, 999997])).toBe(1);
    });

    test('mixed prime and composite numbers', () => {
        expect(solve([10, 15, 21, 35, 55, 77])).toBe(8);
    });

    test('numbers with multiple prime factors', () => {
        expect(solve([100, 200, 300, 400])).toBe(7);
    });

    test('edge case with all equal numbers', () => {
        expect(solve([42, 42, 42, 42])).toBe(14);
    });
});
