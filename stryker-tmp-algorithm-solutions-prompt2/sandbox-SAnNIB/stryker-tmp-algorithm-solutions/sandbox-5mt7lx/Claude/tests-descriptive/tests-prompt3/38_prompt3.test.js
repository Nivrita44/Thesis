// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/38.js';

describe('solve', () => {
    test('example case with string "0010010011"', () => {
        expect(solve("0010010011")).toBe(12n);
    });

    test('all zeros', () => {
        expect(solve("0000")).toBe(6n);
    });

    test('all ones', () => {
        expect(solve("1111")).toBe(0n);
    });

    test('alternating 01', () => {
        expect(solve("0101")).toBe(0n); 
    });

    test('minimal length string "0"', () => {
        expect(solve("0")).toBe(0n);
    });

    test('two character string "00"', () => {
        expect(solve("00")).toBe(1n);
    });

    test('complex pattern', () => {
        expect(solve("001100110")).toBe(10n);
    });

    test('long repeating pattern', () => {
        expect(solve("00110011001100")).toBe(28n);
    });

    test('edge case with many consecutive zeros', () => {
        expect(solve("000000111")).toBe(15n);
    });
});
