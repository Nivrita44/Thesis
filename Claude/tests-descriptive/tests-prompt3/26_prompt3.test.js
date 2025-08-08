import { solve } from '../../solutions-descriptive/26.js';

describe('solve', () => {
    test('all zeros string', () => {
        expect(solve(3, '000')).toBe(3);
    });

    test('alternating bits with zero start', () => {
        expect(solve(4, '0010')).toBe(9);
    });

    test('complex pattern', () => {
        expect(solve(7, '1011001')).toBe(10);
    });

    test('single trailing one', () => {
        expect(solve(4, '0001')).toBe(7);
    });

    test('all ones', () => {
        expect(solve(2, '11')).toBe(1);
    });

    test('single zero', () => {
        expect(solve(1, '0')).toBe(0);
    });

    test('longer alternating pattern', () => {
        expect(solve(8, '10101010')).toBe(16);
    });

    test('zeros with single one', () => {
        expect(solve(5, '00100')).toBe(10);
    });

    test('maximum length input', () => {
        const maxStr = '1'.repeat(200000);
        expect(solve(200000, maxStr)).toBe(1);
    });
});