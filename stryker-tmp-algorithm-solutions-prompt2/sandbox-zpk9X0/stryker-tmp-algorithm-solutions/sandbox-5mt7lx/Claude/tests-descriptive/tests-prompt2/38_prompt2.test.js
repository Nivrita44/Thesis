// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/38.js';

describe('solve function tests', () => {
    test('basic case with small string "0010"', () => {
        expect(solve('0010')).toBe(2);
    });

    test('sample case from original test "0010010011"', () => {
        expect(solve('0010010011')).toBe(12);
    });

    test('string with only zeros "0000"', () => {
        expect(solve('0000')).toBe(6);
    });

    test('string with only ones "1111"', () => {
        expect(solve('1111')).toBe(0);
    });

    test('alternating pattern "0101"', () => {
        expect(solve('0101')).toBe(1);
    });

    test('empty string', () => {
        expect(solve('')).toBe(0);
    });

    test('single character "0"', () => {
        expect(solve('0')).toBe(0);
    });

    test('single character "1"', () => {
        expect(solve('1')).toBe(0);
    });

    test('longer string with mixed pattern', () => {
        expect(solve('00110011001100')).toBe(35);
    });

    test('performance test with large string', () => {
        const largeString = '01'.repeat(10000);
        expect(typeof solve(largeString)).toBe('number');
    });
});
