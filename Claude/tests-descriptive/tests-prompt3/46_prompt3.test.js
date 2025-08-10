import { solve } from '../../../solutions-descriptive/46.js';

describe('solve', () => {
    test('simple pair test', () => {
        expect(solve(2, [1, 4])).toBe('Yes\n2 1');
    });

    test('small array test', () => {
        expect(solve(4, [99, 7, 1, 13])).toBe('Yes\n4 1\n2 1\n3 2');
    });

    test('medium array test', () => {
        expect(solve(5, [10, 2, 31, 44, 73])).toBe('Yes\n5 1\n4 1\n3 1\n2 1');
    });

    test('array with similar numbers', () => {
        expect(solve(5, [87, 6, 81, 44, 32])).toBe('Yes\n4 1\n3 1\n2 1\n5 4');
    });

    test('batch processing test', () => {
        const input = [[1, 4], [99, 7, 1, 13]];
        expect(solve(input)).toEqual([
            'YES\n2 1',
            'YES\n4 1\n2 1\n3 2'
        ]);
    });

    test('single element array', () => {
        expect(solve(1, [42])).toBe('No');
    });

    test('array with all same values', () => {
        expect(solve(3, [5, 5, 5])).toBe('No');
    });

    test('large array test', () => {
        const input = [33, 40, 3, 11, 31, 43, 37, 8, 50, 5, 12, 22];
        expect(solve(12, input)).toBe('Yes\n9 1\n12 9\n11 1\n10 1\n6 1\n7 6\n2 1\n8 2\n5 2\n3 1\n4 1');
    });
});
