// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/2.js';

describe('Name Combination Checker', () => {
    test('valid combination with perfect match', () => {
        expect(solve('SANTACLAUS', 'DEDMOROZ', 'SANTAMOROZDEDCLAUS')).toBe('YES');
    });

    test('invalid combination with extra characters', () => {
        expect(solve('PAPAINOEL', 'JOULUPUKKI', 'JOULNAPAOILELUPUKKI')).toBe('NO');
    });

    test('invalid combination with missing characters', () => {
        expect(solve('BABBONATALE', 'FATHERCHRISTMAS', 'BABCHRISTMASBONATALLEFATHER')).toBe('NO');
    });

    test('empty strings for all parameters', () => {
        expect(solve('', '', '')).toBe('YES');
    });

    test('single character names', () => {
        expect(solve('A', 'B', 'AB')).toBe('YES');
    });

    test('same characters in different order', () => {
        expect(solve('ABC', 'DEF', 'FEDCBA')).toBe('YES');
    });

    test('case sensitive comparison', () => {
        expect(solve('Santa', 'Claus', 'santaclaus')).toBe('NO');
    });

    test('long names with repeated characters', () => {
        expect(solve('AAAAAA', 'BBBBBB', 'AAAAAABBBBBB')).toBe('YES');
    });
});
