// @ts-nocheck
import { solve } from '../../../solutions-descriptive/25.js';

describe('Reyhaneh k-Harmonic Set Tests', () => {
    test('n=2, k=2 - Example case', () => {
        expect(solve(2, 2)).toBe('NO');
    });

    test('n=3, k=2 - Generic case', () => {
        expect(solve(3, 2)).toBe('NO');
    });

    test('n=1, k=1 - Minimal case', () => {
        expect(solve(1, 1)).toBe('YES\n1');
    });

    test('n=4, k=3 - Valid case', () => {
        expect(solve(4, 3)).toBe('YES\n1 2 3 4\n2 3 4 1\n3 4 1 2');
    });

    test('Edge case=k=1', () => {
        expect(solve(1, 1)).toBe('YES\n1');
    });

    test('Large input=100, k=2', () => {
        expect(solve(100, 2)).toBe('NO');
    });

    test('n=3, k=3 - Valid cyclic case', () => {
        expect(solve(3, 3)).toBe('YES\n1 2 3\n2 3 1\n3 1 2');
    });

    test('n=5, k=2 - Generic invalid case', () => {
        expect(solve(5, 2)).toBe('NO');
    });
});