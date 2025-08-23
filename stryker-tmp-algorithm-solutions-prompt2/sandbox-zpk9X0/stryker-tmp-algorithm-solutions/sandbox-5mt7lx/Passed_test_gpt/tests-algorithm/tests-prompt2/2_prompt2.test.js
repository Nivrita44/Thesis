// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/2.js';

test('returns YES when pile is exact combination of sorted name1 and name2', () => {
    expect(solve('SANTACLAUS', 'DEDMOROZ', 'SANTAMOROZDEDCLAUS')).toBe('YES');
});

test('returns NO when pile is not an exact combination (missing or extra letters)', () => {
    expect(solve('PAPAINOEL', 'JOULUPUKKI', 'JOULNAPAOILELUPUKKI')).toBe('NO');
    expect(solve('BABBONATALE', 'FATHERCHRISTMAS', 'BABCHRISTMASBONATALLEFATHER')).toBe('NO');
});

test('returns YES for minimal valid single character inputs', () => {
    expect(solve('A', 'B', 'BA')).toBe('YES');
    expect(solve('A', 'B', 'AB')).toBe('YES');
});

test('returns NO for incorrect letter or order with length 2 inputs', () => {
    expect(solve('A', 'B', 'AA')).toBe('NO');
    expect(solve('A', 'B', 'BB')).toBe('NO');
    expect(solve('A', 'B', 'CC')).toBe('NO');
});

test('returns YES for empty strings', () => {
    expect(solve('', '', '')).toBe('YES');
});

test('returns NO if only one input is empty and others are not', () => {
    expect(solve('A', '', 'B')).toBe('NO');
    expect(solve('', 'A', 'B')).toBe('NO');
    expect(solve('', 'A', 'A')).toBe('YES');
});

test('returns NO when pile has missing letters compared to combined names', () => {
    expect(solve('AB', 'CD', 'ABC')).toBe('NO');
});

test('returns NO when pile has extra letters compared to combined names', () => {
    expect(solve('AB', 'CD', 'ABCDE')).toBe('NO');
});

test('returns YES for anagrams of the combined names', () => {
    expect(solve('AB', 'CD', 'DCAB')).toBe('YES');
    expect(solve('SANTA', 'CLAUS', 'ALCASSTNAU')).toBe('YES');
});

test('returns NO for repeated letters mismatch', () => {
    expect(solve('AAB', 'BC', 'BAAB')).toBe('NO');
    expect(solve('AAB', 'BC', 'ABAAB')).toBe('NO');
    expect(solve('AAB', 'BC', 'BAABC')).toBe('YES');
});
