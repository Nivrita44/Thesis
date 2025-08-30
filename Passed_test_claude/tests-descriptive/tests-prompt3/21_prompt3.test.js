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

});
