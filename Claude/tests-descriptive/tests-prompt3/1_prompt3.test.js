import { solve } from '../../solutions-descriptive/1.js';

describe('solve', () => {
    test('example case: x=4, y=6, k=3 should return 2', () => {
        expect(solve(4, 6, 3)).toBe(2);
    });

    test('impossible case when numbers are coprime: x=4, y=5, k=3 should return -1', () => {
        expect(solve(4, 5, 3)).toBe(-1);
    });

    test('impossible case when k is too small: x=4, y=6, k=2 should return -1', () => {
        expect(solve(4, 6, 2)).toBe(-1);
    });

    test('larger numbers: x=10, y=45, k=3 should return 3', () => {
        expect(solve(10, 45, 3)).toBe(3);
    });

    test('one large and one small number: x=780, y=23, k=42 should return 3', () => {
        expect(solve(780, 23, 42)).toBe(3);
    });

    test('starting from 1: x=1, y=982800, k=13 should return 6', () => {
        expect(solve(1, 982800, 13)).toBe(6);
    });

    test('same numbers: x=5, y=5, k=3 should return 0', () => {
        expect(solve(5, 5, 3)).toBe(0);
    });

    test('edge case with k=1: x=2, y=2, k=1 should return 0', () => {
        expect(solve(2, 2, 1)).toBe(0);
    });

    test('large k value: x=12, y=36, k=1000000 should return 2', () => {
        expect(solve(12, 36, 1000000)).toBe(2);
    });
});