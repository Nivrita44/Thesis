import { solve } from '../../../solutions-algorithm/39.js';

describe('solve function tests', () => {
    test('returns NO for input 1', () => {
        expect(solve(1)).toBe('NO');
    });

    test('returns NO for input 2', () => {
        expect(solve(2)).toBe('NO');
    });

    test('returns YES for input 3', () => {
        expect(solve(3)).toBe('YES');
    });

    test('returns NO for input 4', () => {
        expect(solve(4)).toBe('NO');
    });

    test('returns YES for input 5', () => {
        expect(solve(5)).toBe('YES');
    });

    test('returns NO for large power of 2', () => {
        expect(solve(1099511627776)).toBe('NO');
    });

    test('returns YES for large odd number', () => {
        expect(solve(998244353)).toBe('YES');
    });

    test('returns NO for input 8', () => {
        expect(solve(8)).toBe('NO');
    });

    test('returns YES for input 15', () => {
        expect(solve(15)).toBe('YES');
    });
});
