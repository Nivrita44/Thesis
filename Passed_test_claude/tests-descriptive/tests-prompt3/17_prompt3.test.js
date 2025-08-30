import { solve } from '../../../solutions-descriptive/17.js';

describe('solve', () => {
   
    test('impossible case: more edges than 2*nodes', () => {
        const result = solve(2, 5);
        expect(result).toBe('NO');
    });

    test('minimum possible input: 1 node, 1 edge', () => {
        const result = solve(1, 1);
        expect(result).toBe('YES\n1\n1');
    });

    

    test('larger valid input', () => {
        const result = solve(5, 4);
        expect(result.startsWith('YES\n')).toBe(true);
        expect(result.split('\n').length).toBe(11);
    });

    test('maximum valid input', () => {
        const result = solve(1000, 1000);
        expect(result.startsWith('YES\n')).toBe(true);
        expect(result.split('\n').length).toBe(2001);
    });

    test('edge case right at limit', () => {
        const result = solve(3, 6);
        expect(result).toBe('NO');
    });
});
