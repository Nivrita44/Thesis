import { solve } from '../../../solutions-descriptive/9.js';

describe('Tree Game Node Selection', () => {
    test('basic tree with 4 nodes', () => {
        expect(solve(4, [1, 1, 3, 2], [[0, 1], [0, 2], [1, 3]])).toBe(2);
    });

    test('linear tree with increasing values', () => {
        expect(solve(5, [0, 1, 2, 3, 4], [[0, 1], [1, 2], [2, 3], [3, 4]])).toBe(0);
    });

    test('small tree with 3 nodes', () => {
        expect(solve(3, [0, 1, 2], [[0, 1], [0, 2]])).toBe(2);
    });

    test('tree with duplicate values', () => {
        expect(solve(5, [2, 0, 2, 3, 4], [[0, 1], [1, 2], [2, 3], [3, 4]])).toBe(2);
    });

    test('star-shaped tree', () => {
        expect(solve(4, [1, 2, 2, 2], [[0, 1], [0, 2], [0, 3]])).toBe(2);
    });

    test('complex tree with multiple paths', () => {
        expect(solve(6, [1, 2, 3, 2, 3, 3], [[0, 1], [1, 2], [2, 3], [0, 4], [4, 5]])).toBe(3);
    });

    test('large balanced tree', () => {
        expect(solve(7, [1, 2, 2, 3, 3, 3, 3], [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]])).toBe(3);
    });

    test('tree with single possible winning move', () => {
        expect(solve(5, [1, 2, 3, 1, 2], [[0, 1], [1, 2], [0, 3], [3, 4]])).toBe(3);
    });
});
