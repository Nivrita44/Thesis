// @ts-nocheck
import { solve } from '../../../solutions-algorithm/46.js';

describe('solve', () => {
    test('example case with 5 employees and 2 managers', () => {
        expect(solve(5, [-1, 1, 2, 1, -1])).toBe(3);
    });

    test('linear chain of management', () => {
        expect(solve(4, [-1, 1, 2, 3])).toBe(4);
    });

    test('two separate managers with one subordinate', () => {
        expect(solve(3, [-1, -1, 1])).toBe(2);
    });

    test('large case with multiple management chains', () => {
        expect(solve(12, [-1, 1, 2, 3, -1, 5, 6, 7, -1, 9, 10, 11])).toBe(4);
    });

    test('star formation with one main manager', () => {
        expect(solve(6, [-1, 1, 1, 1, 1, 1])).toBe(2);
    });

    test('balanced tree structure', () => {
        expect(solve(7, [-1, 1, 1, 2, 2, 3, 3])).toBe(3);
    });

    test('single employee case', () => {
        expect(solve(1, [-1])).toBe(1);
    });

    test('two employees with no hierarchy', () => {
        expect(solve(2, [-1, -1])).toBe(1);
    });

    test('complex hierarchical structure', () => {
        expect(solve(8, [-1, 1, 2, 1, 4, 5, 4, 7])).toBe(4);
    });
});
