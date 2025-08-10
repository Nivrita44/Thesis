import { solve } from '../../../solutions-algorithm/2.js';

describe('solve', () => {
    test('example case 1', () => {
        expect(solve('SANTACLAUS', 'DEDMOROZ', 'SANTAMOROZDEDCLAUS')).toBe('YES');
    });

    test('example case 2', () => {
        expect(solve('PAPAINOEL', 'JOULUPUKKI', 'JOULNAPAOILELUPUKKI')).toBe('NO');
    });

    test('example case 3', () => {
        expect(solve('BABBONATALE', 'FATHERCHRISTMAS', 'BABCHRISTMASBONATALLEFATHER')).toBe('NO');
    });

    test('single letter names', () => {
        expect(solve('A', 'B', 'AB')).toBe('YES');
    });

    test('same letter repeated', () => {
        expect(solve('AAA', 'BBB', 'AAABBB')).toBe('YES');
    });

    test('pile with extra letters', () => {
        expect(solve('ABC', 'DEF', 'ABCDEFG')).toBe('NO');
    });

    test('pile with missing letters', () => {
        expect(solve('ABC', 'DEF', 'ABCDE')).toBe('NO');
    });

    test('anagram but wrong letters', () => {
        expect(solve('ABC', 'DEF', 'XYZWVU')).toBe('NO');
    });

    test('maximum length case', () => {
        const name1 = 'A'.repeat(50);
        const name2 = 'B'.repeat(50);
        const pile = 'A'.repeat(50) + 'B'.repeat(50);
        expect(solve(name1, name2, pile)).toBe('YES');
    });
});
