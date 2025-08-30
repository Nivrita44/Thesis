import { solve } from '../../../solutions-descriptive/9.js';

describe('solve function tests', () => {
   

    test('linear path with increasing values', () => {
        const n = 5;
        const l = [1, 2, 3, 4, 5];
        const edges = [[0, 1], [1, 2], [2, 3], [3, 4]];
        expect(solve(n, l, edges)).toBe(0);
    });

    test('small star-shaped tree', () => {
        const n = 3;
        const l = [1, 2, 3];
        const edges = [[0, 1], [0, 2]];
        expect(solve(n, l, edges)).toBe(2);
    });

    test('tree with repeated values', () => {
        const n = 5;
        const l = [3, 1, 3, 4, 5];
        const edges = [[0, 1], [1, 2], [2, 3], [3, 4]];
        expect(solve(n, l, edges)).toBe(2);
    });


    test('single edge tree', () => {
        const n = 2;
        const l = [1, 1];
        const edges = [[0, 1]];
        expect(solve(n, l, edges)).toBe(0);
    });

    test('tree with all same values', () => {
        const n = 6;
        const l = [3, 3, 3, 3, 3, 3];
        const edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]];
        expect(solve(n, l, edges)).toBe(0);
    });

});
