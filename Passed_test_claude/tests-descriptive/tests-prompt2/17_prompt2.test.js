import { solve } from '../../../solutions-descriptive/17.js';

describe('solve function test cases', () => {
   

    test('invalid case where edges >= 2 * nodes', () => {
        expect(solve(3, 6)).toBe('NO');
    });

    test('minimum valid case with 1 node and 1 edge', () => {
        expect(solve(1, 1)).toBe('YES\n1\n1');
    });



    test('larger valid case with 5 nodes and 8 edges', () => {
        const result = solve(5, 8);
        expect(result.startsWith('YES\n')).toBe(true);
        expect(result.split('\n').length).toBe(11);
    });

    test('edge case with 1 node and 2 edges', () => {
        expect(solve(1, 2)).toBe('NO');
    });

    test('performance test with larger valid input', () => {
        const result = solve(10, 15);
        expect(result.startsWith('YES\n')).toBe(true);
        expect(result.split('\n').length).toBe(21);
    });
});
