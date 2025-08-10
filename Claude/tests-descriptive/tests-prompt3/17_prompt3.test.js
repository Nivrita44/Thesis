import { solve } from '../../../solutions-descriptive/17.js';

describe('solve', () => {
    test('basic example: 2 nodes, 2 edges', () => {
        const result = solve(2, 2);
        expect(result).toBe('YES\n1 1\n1 2\n2 1\n2 2');
    });

    test('another example: 3 nodes, 2 edges', () => {
        const result = solve(3, 2);
        expect(result).toBe('YES\n1 1\n1 2\n2 1\n2 2\n3 1\n3 2');
    });

    test('impossible case: more edges than 2*nodes', () => {
        const result = solve(2, 5);
        expect(result).toBe('NO');
    });

    test('minimum possible input: 1 node, 1 edge', () => {
        const result = solve(1, 1);
        expect(result).toBe('YES\n1\n1');
    });

    test('edge case: nodes=edges', () => {
        const result = solve(3, 3);
        expect(result).toBe('YES\n1 1 1\n1 2 2\n2 1 2\n2 2 3\n3 2 1\n3 3 2');
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
