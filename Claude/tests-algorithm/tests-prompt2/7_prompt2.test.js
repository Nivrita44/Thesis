import { solve } from '../../../solutions-algorithm/7.js';

describe('solve function tests', () => {
    test('basic case with zeros at end', () => {
        expect(solve(5, [3, 3, 3, 0, 0])).toBe(6);
    });

    test('zeros scattered throughout', () => {
        expect(solve(6, [0, 3, 3, 0, 0, 3])).toBe(6);
    });

    test('ascending sequence with zeros', () => {
        expect(solve(7, [1, 2, 3, 0, 4, 5, 0])).toBe(8);
    });

    test('mixed sequence with zeros', () => {
        expect(solve(7, [1, 2, 5, 0, 4, 3, 0])).toBe(9);
    });

    test('single zero case', () => {
        expect(solve(3, [1, 0, 2])).toBe(2);
    });

    test('no zeros case', () => {
        expect(solve(3, [1, 2, 3])).toBe(0);
    });

    test('all zeros case', () => {
        expect(solve(5, [0, 0, 0, 0, 0])).toBe(0);
    });

    test('large sequence case', () => {
        const largeArray = Array(1000).fill(1);
        largeArray.push(...Array(500).fill(0));
        expect(solve(1500, largeArray)).toBe(500);
    });
});
