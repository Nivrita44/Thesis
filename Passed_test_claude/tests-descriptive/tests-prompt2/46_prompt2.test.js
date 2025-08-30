import { solve } from '../../../solutions-descriptive/46.js';

describe('solve', () => {
    

    test('single element array', () => {
        expect(solve(1, [10])).toBe(10);
    });

   +

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

   

    test('invalid input returns No', () => {
        expect(solve('invalid')).toBe('No');
    });
});
