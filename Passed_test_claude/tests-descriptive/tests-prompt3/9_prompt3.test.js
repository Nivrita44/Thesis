import { solve } from '../../../solutions-descriptive/9.js';

describe('Tree Game Node Selection', () => {

    test('linear tree with increasing values', () => {
        expect(solve(5, [0, 1, 2, 3, 4], [[0, 1], [1, 2], [2, 3], [3, 4]])).toBe(0);
    });

    test('small tree with 3 nodes', () => {
        expect(solve(3, [0, 1, 2], [[0, 1], [0, 2]])).toBe(2);
    });

    test('tree with duplicate values', () => {
        expect(solve(5, [2, 0, 2, 3, 4], [[0, 1], [1, 2], [2, 3], [3, 4]])).toBe(2);
    });


    test('large balanced tree', () => {
        expect(solve(7, [1, 2, 2, 3, 3, 3, 3], [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]])).toBe(3);
    });
});
