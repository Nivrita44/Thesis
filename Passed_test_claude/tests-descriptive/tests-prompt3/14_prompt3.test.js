import { solve } from '../../../solutions-descriptive/14.js';

describe('Crow and Scarecrows', () => {
    test('example case: single scarecrow at start', () => {
        expect(solve(1, 3, 5, [0])).toBe(4);
    });

    test('example case: multiple scarecrows with gaps', () => {
        expect(solve(3, 2, 5, [2, 5, 5])).toBe(5);
    });

    test('edge case: scarecrow at target position', () => {
        expect(solve(1, 10, 10, [10])).toBe(20);
    });

    test('complex case: continuous line of scarecrows', () => {
        expect(solve(10, 1, 10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(0);
    });

    test('edge case: multiple scarecrows at same position', () => {
        expect(solve(2, 1, 2, [0, 0])).toBe(2);
    });

    test('minimum input values', () => {
        expect(solve(1, 1, 1, [0])).toBe(0);
    });

    test('scarecrow at start and target', () => {
        expect(solve(2, 1, 2, [0, 2])).toBe(1);
    });
});
