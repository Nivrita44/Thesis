import { solve } from '../../../solutions-algorithm/7.js';

describe('solve', () => {
    test('basic example with alternating bonus and hero cards', () => {
        expect(solve(5, [3, 3, 3, 0, 0])).toBe(6);
    });

    test('hero cards at beginning and middle', () => {
        expect(solve(6, [0, 3, 3, 0, 0, 3])).toBe(6);
    });

    test('ascending bonus values with two heroes', () => {
        expect(solve(7, [1, 2, 3, 0, 4, 5, 0])).toBe(8);
    });

    test('mixed bonus values with two heroes', () => {
        expect(solve(7, [1, 2, 5, 0, 4, 3, 0])).toBe(9);
    });



    test('all hero cards', () => {
        expect(solve(4, [0, 0, 0, 0])).toBe(0);
    });

    test('all bonus cards', () => {
        expect(solve(4, [1, 2, 3, 4])).toBe(0);
    });

    test('maximum bonus values', () => {
        expect(solve(5, [1000000000, 1000000000, 0, 1000000000, 0])).toBe(2000000000);
    });

    test('single card deck - hero', () => {
        expect(solve(1, [0])).toBe(0);
    });

    test('single card deck - bonus', () => {
        expect(solve(1, [5])).toBe(0);
    });
});