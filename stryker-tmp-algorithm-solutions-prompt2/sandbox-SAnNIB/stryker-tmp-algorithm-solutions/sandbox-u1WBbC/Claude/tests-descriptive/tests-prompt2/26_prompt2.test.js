// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/26.js';

describe('solve function tests', () => {
    test('all zeros string', () => {
        expect(solve(3, '000')).toBe(3);
    });

    test('single 1 in middle of zeros', () => {
        expect(solve(4, '0010')).toBe(9);
    });

    test('alternating pattern', () => {
        expect(solve(7, '1011001')).toBe(10);
    });

    test('single 1 at end', () => {
        expect(solve(4, '0001')).toBe(7);
    });

    test('all ones string', () => {
        expect(solve(3, '111')).toBe(1);
    });

    test('minimal length string with zero', () => {
        expect(solve(1, '0')).toBe(0);
    });

    test('minimal length string with one', () => {
        expect(solve(1, '1')).toBe(1);
    });

    test('longer alternating sequence', () => {
        expect(solve(8, '10101010')).toBe(16);
    });

    test('larger input size', () => {
        expect(solve(10, '1000000000')).toBe(45);
    });
});
