import { solve } from '../../../solutions-descriptive/25.js';

describe('solve function test cases', () => {
    test('basic case with n=3, k=3', () => {
        const result = solve(3, 3);
        expect(result).toEqual(['1 2 3', '2 3 1', '3 1 2']);
    });

    test('n=4, k=2 should return two permutations', () => {
        const result = solve(4, 2);
        expect(result).toEqual(['1 2 3 4', '4 3 2 1']);
    });

    test('n=1, k=1 single element case', () => {
        const result = solve(1, 1);
        expect(result).toEqual([['1']]);
    });

    test('n=2, k=2 two element case', () => {
        const result = solve(2, 2);
        expect(result).toEqual(['1 2', '2 1']);
    });

    test('invalid case: n=5, k=1', () => {
        const result = solve(5, 1);
        expect(result).toBeNull();
    });

    test('invalid case: even n with odd k', () => {
        const result = solve(4, 3);
        expect(result).toBeNull();
    });

    test('boundary case: n=8, k=factorial-1', () => {
        const result = solve(8, 40319);
        expect(result).toBeNull();
    });

    test('edge case: n=3, k=6', () => {
        const result = solve(3, 6);
        expect(result).toHaveLength(6);
        expect(new Set(result).size).toBe(6);
    });
});
