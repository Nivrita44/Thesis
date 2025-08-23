// @ts-nocheck
import { solve } from '../../../solutions-algorithm/1.js';

describe('solve', () => {
    test('example case: 3+2+1', () => {
        expect(solve('3+2+1')).toBe('1+2+3');
    });

    test('multiple same numbers: 1+1+3+1+3', () => {
        expect(solve('1+1+3+1+3')).toBe('1+1+1+3+3');
    });

    test('single number: 2', () => {
        expect(solve('2')).toBe('2');
    });

    test('all same numbers: 1+1+1', () => {
        expect(solve('1+1+1')).toBe('1+1+1');
    });

    test('already sorted: 1+2+3', () => {
        expect(solve('1+2+3')).toBe('1+2+3');
    });

    test('maximum length: 3+3+3+2+2+1+1+1', () => {
        expect(solve('3+3+3+2+2+1+1+1')).toBe('1+1+1+2+2+3+3+3');
    });

    test('reverse sorted: 3+3+2+2+1', () => {
        expect(solve('3+3+2+2+1')).toBe('1+2+2+3+3');
    });

    test('alternating numbers: 1+3+1+3+1', () => {
        expect(solve('1+3+1+3+1')).toBe('1+1+1+3+3');
    });
});
