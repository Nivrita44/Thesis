// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/1.js';

describe('solve function tests', () => {
    test('sorts three numbers in ascending order', () => {
        expect(solve('3+2+1')).toBe('1+2+3');
    });

    test('handles repeated numbers correctly', () => {
        expect(solve('1+1+3+1+3')).toBe('1+1+1+3+3');
    });

    test('handles single number input', () => {
        expect(solve('2')).toBe('2');
    });

    test('handles large numbers', () => {
        expect(solve('1000+1+999')).toBe('1+999+1000');
    });

    test('handles zero values', () => {
        expect(solve('0+5+0+2')).toBe('0+0+2+5');
    });

    test('handles negative numbers', () => {
        expect(solve('-1+5+-3+2')).toBe('-3+-1+2+5');
    });

    test('handles many numbers', () => {
        expect(solve('9+8+7+6+5+4+3+2+1')).toBe('1+2+3+4+5+6+7+8+9');
    });

    test('handles decimal numbers', () => {
        expect(solve('3.14+2.1+1.4')).toBe('1.4+2.1+3.14');
    });
});
