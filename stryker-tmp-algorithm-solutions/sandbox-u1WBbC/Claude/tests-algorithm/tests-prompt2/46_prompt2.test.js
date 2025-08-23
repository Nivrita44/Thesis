// @ts-nocheck
import { solve } from '../../../solutions-algorithm/46.js';

describe('Organization Chart Max Depth', () => {
    test('simple tree with multiple levels', () => {
        expect(solve(5, [-1, 1, 2, 1, -1])).toBe(3);
    });

    test('linear chain organization', () => {
        expect(solve(4, [-1, 1, 2, 3])).toBe(4);
    });

    test('multiple root nodes', () => {
        expect(solve(3, [-1, -1, 1])).toBe(2);
    });

    test('large organization with multiple branches', () => {
        expect(solve(12, [-1, 1, 2, 3, -1, 5, 6, 7, -1, 9, 10, 11])).toBe(4);
    });

    test('organization with siblings at different levels', () => {
        expect(solve(6, [-1, 1, 1, 1, 2, 3])).toBe(3);
    });

    test('minimal organization with single employee', () => {
        expect(solve(1, [-1])).toBe(1);
    });

    test('flat organization with all reporting to root', () => {
        expect(solve(5, [-1, -1, -1, -1, -1])).toBe(1);
    });

    test('organization with alternating management chain', () => {
        expect(solve(7, [-1, 1, 2, 3, 4, 5, 6])).toBe(7);
    });
});
