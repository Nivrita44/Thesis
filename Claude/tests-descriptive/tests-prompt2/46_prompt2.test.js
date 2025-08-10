import { solve } from '../../../solutions-descriptive/46.js';

describe('solve', () => {
    test('basic bitmask case with k=2 and small numbers', () => {
        expect(solve(2, [4, 6])).toBe(7);
    });

    test('single element array', () => {
        expect(solve(1, [10])).toBe(10);
    });

    test('empty array returns 0', () => {
        expect(solve(5, [])).toBe(0);
    });

    test('k=0 returns 0', () => {
        expect(solve(0, [1,2,3])).toBe(0);
    });

    test('batch processing of multiple arrays', () => {
        const input = [[1, 4], [99, 7, 1, 13]];
        expect(solve(input)).toEqual([
            'YES\n2 1',
            'YES\n4 1\n2 1\n3 2'
        ]);
    });

    test('graph case with small array', () => {
        expect(solve([2, 3, 4, 5])).toBe('Yes\n1 2\n1 3\n1 4');
    });

    test('large numbers in array', () => {
        expect(solve(3, [1000000, 500000, 250000])).toBe(1048575);
    });

    test('invalid input returns No', () => {
        expect(solve('invalid')).toBe('No');
    });
});
